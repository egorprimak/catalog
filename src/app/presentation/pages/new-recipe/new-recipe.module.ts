import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NewRecipeRoutingModule} from './new-recipe-routing.module';
import {NewRecipeComponent} from './new-recipe.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {AddIngredientModalComponent} from "./components/add-ingredient-modal/add-ingredient-modal.component";


@NgModule({
  declarations: [
    NewRecipeComponent,
  ],
  imports: [
    CommonModule,
    NewRecipeRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    AddIngredientModalComponent,
  ]
})
export class NewRecipeModule {
}
