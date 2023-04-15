import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import './RecipeBook.css'
import * as recipeService from "../../services/recipesService.js"

function RecipeBook({user, }) {
  const [recipes, setRecipes] = useState()
  
  //Get Recipes for user
  useEffect(() => {
    async function getRecipes (){
      const recipes = await recipeService.getAllRecipes()
      if(recipes.length > 0){
        setRecipes(recipes.reverse())
      }
    }
    getRecipes()
  },[])

  // async function handleShowRecipe(){
  // }


  return (
    <div className="recipe-book-container">
      <h1>Recipe Book</h1>
      <button className="new-recipe-button">
        <Link to='/Recipes/AddRecipe'>Add Recipe</Link> 
      </button>
      <div className="recipe-list-container">
        <table className="recipe-list-table">
          <tr>
            <th>Recipe</th>
            <th>Category</th>
            <th>Servings</th>
            <th>Custom Price</th>
            <th>Cost Price</th>
          </tr>
          {recipes ?
            recipes.map(recipe =>
              <tr>
                <td>{recipe.name}</td>
                <td>{recipe.category}</td>
                <td>{recipe.servings}</td>
                <td>{recipe.customPrice}</td>
                <td>{recipe.costPrice}</td>
              </tr>
              )
            :  
            <p>Add Recipes to your Recipe Book</p>
          }
        </table>
      </div>
    </div>

)
}

export default RecipeBook