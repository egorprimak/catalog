import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from "../../../../../core/data/recipe/recipe.model";
import {CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {RouterLink} from "@angular/router";
import {SizeLimiterPipe} from "../../../../../pipes/size-limiter.pipe";
import {MatButtonModule} from "@angular/material/button";
import {EmptyImgPipe} from "../../../../../pipes/empty-img.pipe";

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterLink, SizeLimiterPipe, MatButtonModule, EmptyImgPipe]
})
export class RecipeCardComponent {
  @Input() recipe!: Recipe;
  @Output() delete = new EventEmitter<number>();

  protected onDelete(): void {
    this.delete.emit(this.recipe.id);
  }
}
