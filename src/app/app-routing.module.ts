import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./presentation/pages/welcome/welcome.component').then(c => c.WelcomeComponent),
  },
  {
    path: 'recipes',
    loadChildren: () => import('./presentation/pages/recipes/recipes.module').then(m => m.RecipesModule)
  },
  {
    path: 'new-recipe',
    loadChildren: () => import('./presentation/pages/new-recipe/new-recipe.module').then(m => m.NewRecipeModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    loadComponent: () => import('./presentation/pages/not-found/not-found.component').then(c => c.NotFoundComponent)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
