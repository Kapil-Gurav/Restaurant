import { Component } from '@angular/core';
import { RecipedataService } from '../recipedata.service';

@Component({
  selector: 'app-recipe3',
  templateUrl: './recipe3.component.html',
  styleUrls: ['./recipe3.component.css']
})
export class Recipe3Component {
  constructor(public _task: RecipedataService) {

  }
  alert() {
    alert("added");
  }
}
