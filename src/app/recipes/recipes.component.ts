import { Component, Output, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  @Output() currentRecipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }


  onRecipeReceived(recipe: Recipe){
    // console.log(recipe);
    this.currentRecipe = recipe;
  }
}
