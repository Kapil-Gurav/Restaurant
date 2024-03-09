import { Component } from '@angular/core';
import { RecipedataService } from '../recipedata.service';


@Component({
  selector: 'app-recipe2',
  templateUrl: './recipe2.component.html',
  styleUrls: ['./recipe2.component.css']
})
export class Recipe2Component {
  constructor(public _task: RecipedataService) {

  }
  alert() {
    alert("added");
  }
}
