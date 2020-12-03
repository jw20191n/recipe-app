import { Component, Output, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
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
