import {Component} from '@angular/core';
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {Ingredient} from "../../../../../core/data/ingredient/ingredient.model";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-add-ingredient-modal',
  templateUrl: './add-ingredient-modal.component.html',
  styleUrls: ['./add-ingredient-modal.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class AddIngredientModalComponent {
  protected formGroup!: FormGroup;

  constructor(
    private readonly matDialogRef: MatDialogRef<AddIngredientModalComponent>,
    private readonly formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      grams: ['', Validators.required],
    });
  }

  protected onClose(): void {
    this.matDialogRef.close();
  }

  protected addIngredient(): void {
    const ingredient: Ingredient = {
      id: Date.now(),
      ...this.formGroup.value
    };
    this.matDialogRef.close(ingredient);
  }
}
