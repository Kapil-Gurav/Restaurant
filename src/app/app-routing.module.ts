import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './recipe1/recipe.component';
import { CartComponent } from './cart/cart.component';
import { Recipe2Component } from './recipe2/recipe2.component';
import { Recipe4Component } from './recipe4/recipe4.component';
import { Recipe3Component } from './recipe3/recipe3.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:""
  },
  {
  component:RecipeComponent,
  path:'recipe1'
},
{
component:Recipe2Component,
path:'recipe2'
},
{
component:Recipe3Component,
path:'recipe3'
},
{
  component:Recipe4Component,
  path:'recipe4'
  },
{
  component:CartComponent,
  path:'cart'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
