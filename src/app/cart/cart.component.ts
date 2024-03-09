import { Component } from '@angular/core';
import { RecipedataService } from '../recipedata.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(public _task: RecipedataService){

  }

  deleteFromCart(task:any){
    console.log(task);
    this._task.getTasks().splice(task,1);
  } 
  
}
