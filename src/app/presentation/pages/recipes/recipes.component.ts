import {Component} from '@angular/core';
import {Recipe} from "../../../core/data/recipe/recipe.model";
import {BehaviorSubject, Subject, takeUntil} from "rxjs";
import {RecipesService} from "../../../core/data/recipe/recipes.service";
import {DestroyerService} from "../../../services/destroyer/destroyer.service";
import {wireLoading} from "../../../utils/wire-loading";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent {
  protected readonly isLoading$ = new BehaviorSubject(false);
  protected readonly newLoad$ = new Subject<void>();
  protected recipes: Recipe[] | null = null;

  constructor(
    private readonly recipesService: RecipesService,
    private readonly destroyer: DestroyerService
  ) {
    this.loadData();
  }

  protected loadData(): void {
    this.newLoad$.next();
    this.recipesService.getAll().pipe(
      wireLoading(this.isLoading$),
      takeUntil(this.newLoad$),
      takeUntil(this.destroyer)
    ).subscribe(items => this.recipes = items);
  }

  protected deleteRecipe(id: number): void {
    this.recipesService.deleteRecipe(id).pipe(
      wireLoading(this.isLoading$),
      takeUntil(this.destroyer)
    ).subscribe(() => this.loadData());
  }
}
