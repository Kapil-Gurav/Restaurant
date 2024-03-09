import { Component } from '@angular/core';
import { RecipedataService } from '../recipedata.service';

@Component({
  selector: 'app-recipe4',
  templateUrl: './recipe4.component.html',
  styleUrls: ['./recipe4.component.css']
})
export class Recipe4Component {
  constructor(public _task: RecipedataService) {

  }
  alert() {
    alert("added");
  }
}
