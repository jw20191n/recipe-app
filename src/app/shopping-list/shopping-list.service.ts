import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService{

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('cheese', 5),
        new Ingredient('tomato', 4)
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    ingredientAdded(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        console.log('added '+ ingredient.amount+  " " + ingredient.name );
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    ingredientsAdded(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}