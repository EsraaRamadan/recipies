import {EventEmitter} from '@angular/core';
import {Recipe} from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(' Recipe2', 'This is just for test purpose2',
      'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d'),
    new Recipe('Recipe1', 'This is just for test purpose1',
      'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d'),
    new Recipe('Recipe3', 'This is just for test purpose3',
      'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d'),
  ];
  getRecipes() {
    return this.recipes.slice();
  }

}
