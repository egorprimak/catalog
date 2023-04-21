import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {AddIngredientModalComponent} from "./components/add-ingredient-modal/add-ingredient-modal.component";
import {Ingredient} from "../../../core/data/ingredient/ingredient.model";
import {DestroyerService} from "../../../services/destroyer/destroyer.service";
import {BehaviorSubject, takeUntil} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {fileToBase64} from "../../../utils/file-to-base64";
import {Recipe} from "../../../core/data/recipe/recipe.model";
import {RecipesService} from "../../../core/data/recipe/recipes.service";
import {Router} from "@angular/router";
import {wireLoading} from "../../../utils/wire-loading";

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss']
})
export class NewRecipeComponent implements OnInit {
  protected readonly isLoading$ = new BehaviorSubject<boolean>(false);
  protected readonly columns = ['name', 'grams', 'actions'];

  protected formGroup!: FormGroup;
  protected imageFile: File | null = null;
  protected imageBase64String = '';
  protected ingredients = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly dialog: MatDialog,
    private readonly destroyer: DestroyerService,
    private readonly recipesService: RecipesService,
    private readonly router: Router
  ) {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      kcal: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.ingredients.paginator = this.paginator;
  }

  protected onSubmit(): void {
    const recipe: Recipe = {
      id: Date.now(),
      ingredients: this.ingredients.data,
      img: this.imageBase64String,
      ...this.formGroup.value
    };

    this.recipesService.addRecipe(recipe).pipe(
      wireLoading(this.isLoading$),
      takeUntil(this.destroyer)
    ).subscribe(() => {
      this.router.navigate(['recipes']).then();
    });
  }

  protected openNewIngredientDialog(): void {
    const dialogRef = this.dialog.open(AddIngredientModalComponent);
    dialogRef.afterClosed()
      .pipe(takeUntil(this.destroyer))
      .subscribe(item => {
        if (!item) {
          return;
        }

        const currentData = this.ingredients.data;
        this.ingredients.data = currentData.concat(item);
      })
  }

  protected deleteRow(element: Ingredient) {
    this.ingredients.data = this.ingredients.data.filter(i => i.id !== element.id);
  }

  protected imageLoad(e: Event) {
    const input = e.target as HTMLInputElement;
    const files = input.files;
    if (!files || !files.length) {
      return;
    }

    this.imageFile = files[0];

    fileToBase64(this.imageFile)
      .pipe(takeUntil(this.destroyer))
      .subscribe(v => {
        if (!v) {
          return;
        }
        this.imageBase64String = v;
      });
  }

  protected deleteImage(e: Event): void {
    e.preventDefault();
    e.stopPropagation();

    this.imageFile = null;
    this.imageBase64String = '';
  }
}
