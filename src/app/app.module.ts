import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe1/recipe.component';
import { CartComponent } from './cart/cart.component';
import { Recipe2Component } from './recipe2/recipe2.component';
import { Recipe3Component } from './recipe3/recipe3.component';
import { Recipe4Component } from './recipe4/recipe4.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    CartComponent,
    Recipe2Component,
    Recipe3Component,
    Recipe4Component,
    HomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
