import {Component} from '@angular/core';
import {Recipe} from "../../../core/data/recipe/recipe.model";
import {BehaviorSubject, map, Observable, of, switchMap} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {RecipesService} from "../../../core/data/recipe/recipes.service";
import {wireLoading} from "../../../utils/wire-loading";

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.scss']
})
export class RecipeInfoComponent {
  protected readonly isLoading$ = new BehaviorSubject<boolean>(false);
  protected readonly columns = ['name', 'grams'];
  protected recipe$: Observable<Recipe | null>;

  constructor(
    private readonly recipesService: RecipesService,
    private readonly route: ActivatedRoute,
    private readonly location: Location
  ) {
    const id$ = this.route.params.pipe(
      map(ps => ps['id'])
    );
    this.recipe$ = id$.pipe(
      switchMap(id => id
        ? this.recipesService.getById(Number(id))
          .pipe(wireLoading(this.isLoading$))
        : of(null)
      )
    );
  }

  protected goBack(): void {
    this.location.back();
  }
}
