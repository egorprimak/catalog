import {Injectable} from '@angular/core';
import {RecipesDatasourceService} from "../../data-source/recipes/recipes.datasource.service";
import {delay, Observable} from "rxjs";
import {Recipe} from "./recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  constructor(private readonly dataSource: RecipesDatasourceService) {
  }

  // delay использован для имитации задержки при загрузке с сервера
  getAll(): Observable<Recipe[]> {
    return this.dataSource.getAll().pipe(
      delay(500),
    );
  }

  getById(id: number): Observable<Recipe> {
    return this.dataSource.getById(id).pipe(
      delay(500),
    );
  }

  addRecipe(recipe: Recipe): Observable<Recipe> {
    return this.dataSource.addRecipe(recipe);
  }

  deleteRecipe(id: number): Observable<Recipe> {
    return this.dataSource.deleteRecipe(id);
  }
}
