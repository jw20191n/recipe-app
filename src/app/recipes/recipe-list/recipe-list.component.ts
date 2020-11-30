import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  @Output() recipes: Recipe[] = [
    new Recipe('pizza', 'this is a test', 'https://lh3.googleusercontent.com/-1Iil24qU-EM/VqnJ50T5vII/AAAAAAAFQzI/O2jXEMQXKt0/s800-Ic42/cheese-pizza-2.jpg'),
    new Recipe('pasta', 'this is a test', 'https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Spinach-Tomato-Pasta-bowl-500x375.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(receivedRecipe: Recipe){
    // console.log(receivedRecipe);
    this.recipeSelected.emit(receivedRecipe);
  }
}
