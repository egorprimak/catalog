import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RecipeInfoRoutingModule} from './recipe-info-routing.module';
import {RecipeInfoComponent} from './recipe-info.component';
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {EmptyImgPipe} from "../../../pipes/empty-img.pipe";


@NgModule({
  declarations: [
    RecipeInfoComponent
  ],
  imports: [
    CommonModule,
    RecipeInfoRoutingModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    EmptyImgPipe,
    MatProgressSpinnerModule
  ]
})
export class RecipeInfoModule {
}
