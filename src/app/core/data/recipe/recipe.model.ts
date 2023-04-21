import {Ingredient} from "../ingredient/ingredient.model";

export interface Recipe {
  id: number;
  name: string;
  description: string;
  img: string;
  ingredients: Ingredient[];
  kcal: number;
}
