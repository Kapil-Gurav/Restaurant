import { Component } from '@angular/core';
import { RecipedataService } from '../recipedata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public _task: RecipedataService) {

  }
}
