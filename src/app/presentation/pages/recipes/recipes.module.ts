import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RecipesRoutingModule} from './recipes-routing.module';
import {RecipesComponent} from "./recipes.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import {RecipeCardComponent} from "./components/recipe-card/recipe-card.component";


@NgModule({
  declarations: [RecipesComponent],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDialogModule,
    RecipeCardComponent
  ],
  exports: [RecipesComponent]
})
export class RecipesModule {
}
