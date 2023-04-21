import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from "./recipes.component";

const routes: Routes = [
  {path: '', component: RecipesComponent},
  {
    path: 'recipe-info/:id',
    loadChildren: () => import('../recipe-info/recipe-info.module').then(m => m.RecipeInfoModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {
}
