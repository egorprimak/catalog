import {InjectionToken} from "@angular/core";

export const API_URL_TOKEN = new InjectionToken('Recipes api url token', {
  providedIn: 'root',
  factory: () => 'api/recipes'
})
