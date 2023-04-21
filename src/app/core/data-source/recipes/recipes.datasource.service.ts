import {Inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Recipe} from "../../data/recipe/recipe.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {API_URL_TOKEN} from "../../../../db/tokens/api-url-token";
import {HTTP_OPTIONS_TOKEN} from "../../../../db/tokens/http-options";

@Injectable({
  providedIn: 'root'
})
export class RecipesDatasourceService {
  constructor(
    private readonly http: HttpClient,
    @Inject(API_URL_TOKEN) private readonly apiUrl: string,
    @Inject(HTTP_OPTIONS_TOKEN) private readonly httpOptions: { headers: HttpHeaders }
  ) {
  }

  getAll(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl)
  }

  getById(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/${id}`);
  }

  addRecipe(r: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.apiUrl, r, this.httpOptions);
  }

  deleteRecipe(id: number): Observable<Recipe> {
    return this.http.delete<Recipe>(`${this.apiUrl}/${id}`, this.httpOptions);
  }
}
