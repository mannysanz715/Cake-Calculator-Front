import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

let recipes = [
  {
    recipe : ' Carrot Batter',
    category : 'Cake',
    servings : 10,
    customPrice : 6,
    costPrice : 5.9,
},
  {
    recipe : ' Carrot Batter',
    category : 'Cake',
    servings : 10,
    customPrice : 6,
    costPrice : 5.9,
},
  {
    recipe : ' Carrot Batter',
    category : 'Cake',
    servings : 10,
    customPrice : 6,
    costPrice : 5.9,
},
  {
    recipe : ' Carrot Batter',
    category : 'Cake',
    servings : 10,
    customPrice : 6,
    costPrice : 5.9,
},
]

function RecipeBook({user, }) {
  // const [recipes, setRecipes] = useState()

  return (

    <div className="recipe-book-container">
      <h1>Recipe Book</h1>
      <button className="new-recipe-button">
        <Link to='/Recipes/AddRecipe'>Add Recipe</Link> 
      </button>
      <div className="recipe-list-container">
        <table>
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
                <td>{recipe.recipe}</td>
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