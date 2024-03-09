import { Component } from '@angular/core';
import { RecipedataService } from '../recipedata.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {

  constructor(public _task: RecipedataService) {

  }
  alert() {
    alert("added");
  }
}


