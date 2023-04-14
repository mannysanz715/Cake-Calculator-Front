import { Link } from "react-router-dom"

const RecipesLanding = () => {
  return (
      <div>
        <ul className="recipe-buttons-container">
          <Link to='/Recipes/Recipes'>
            <li>
              <h4> Recipe Book</h4>
              <p>Use the recipe book to add & manage your favorite recipes.</p>    
            </li>
          </Link>
          <li>
            <h4>Ingredients</h4>
            <p>Add or edit ingredients in your master list & use it to creat your recipes.</p>
          </li>
          <li>
            <h4>Supply List</h4>
            <p>Add supplies such as boards, boxes & ribbons & add them in your orders.</p>

          </li>
          <li>
            <h4>Master Ingredient List</h4>
            <p>Pick from a list of pre-converted ingredients and add them to your list.</p>
          </li>
          <li>
            <h4>My Bundles</h4>
            <p>Bundle recipes & supplies together to make adding them to your order easier.</p>
          </li>
        </ul>
      </div>
)
}

export default RecipesLanding