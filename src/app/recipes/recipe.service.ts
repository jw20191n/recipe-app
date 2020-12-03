import { Recipe } from './recipe.model';

export class RecipeService {
    //the place where we manage our recipes
    private recipes: Recipe[] = [
        new Recipe('pizza', 'this is a test', 'https://lh3.googleusercontent.com/-1Iil24qU-EM/VqnJ50T5vII/AAAAAAAFQzI/O2jXEMQXKt0/s800-Ic42/cheese-pizza-2.jpg'),
        new Recipe('pasta', 'this is a test', 'https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Spinach-Tomato-Pasta-bowl-500x375.jpg')
      ];

    getRecipes(){
        //create a new array which is a copy of the this.recipes file
        return this.recipes.slice();
    }  
}