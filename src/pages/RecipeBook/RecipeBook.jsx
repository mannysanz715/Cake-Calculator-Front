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
        <Link to='/Recipes/AddRecipe'>
      <button className="new-recipe-button"> Add Recipe</button>
          </Link> 
      <div className="recipe-list-container">
      {recipes ?
      <>
        <table className="recipe-list-table">
          <tbody>
            <tr>
              <th>Recipe</th>
              <th>Category</th>
              <th>Servings</th>
              <th>Custom Price</th>
              <th>Cost Price</th>
            </tr>
              {recipes.map((recipe, idx) =>
                <tr key={idx}>
                  <td>{recipe.name}</td>
                  <td>{recipe.category}</td>
                  <td>{recipe.servings}</td>
                  <td>{recipe.customPrice}</td>
                  <td>{recipe.costPrice}</td>
                </tr>
                )
              }
              </tbody>
            </table>
        </>
        :  
        <p>Add Recipes to your Recipe Book</p>
      }
      </div>
    </div>

)
}

export default RecipeBook