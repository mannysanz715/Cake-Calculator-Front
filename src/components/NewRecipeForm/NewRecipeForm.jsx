import { useState } from "react"
import Ingredients from "./Ingredients"
import './NewRecipeForm.css'
const NewRecipeForm = ({handleChange,ingredientsList, handleSubmit, handleAddIngredient, ingredients}) => {

  return (
      <form className='recipe-form' onSubmit={handleSubmit}>
        <div className="recipe-form-display">
          <div className="recipe-info">
            <h2 className="info-title">Recipe Information</h2>
            <div className="name-info info">
              <label>Name</label>
              <input
                className="info-input"
                name="name"
                type="text"
                autoComplete="off"
                onChange={handleChange}
                />
            </div>

            <div className="description-info info">
              <label>Description</label>
              <textarea
                resize='none'
                className="info-input"
                name="description"
                rows='8'
                type="text"
                autoComplete="off"
                onChange={handleChange}
                />
            </div>

            <div className="category-info info">
              <label>Category</label>
              <input
                className="info-input"
                name="category"
                type="text"
                autoComplete="off"
                onChange={handleChange}
                />
            </div>

            <div className="servings-info info">
              <label>Servings</label>
              <input
                className="info-input"
                name="servings"
                type="number"
                autoComplete="off"
                onChange={handleChange}
                />
            </div>

            <div className="custom-price-info info">
              <label>Custom Price</label>
              <input
                className="info-input"
                name="customPrice"
                type="number"
                autoComplete="off"
                onChange={handleChange}
                />
            </div>

            <div className="recipe-directions-info info">
              <label>Recipe Directions</label>
              <textarea
                resize='none'
                className="info-input"
                name="recipeDirections"
                type="text"
                rows='8'
                autoComplete="off"
                onChange={handleChange}
                />
            </div>

          </div>

          <div className="ingredients-section">
            <div className="checklist allergens-list">
              <h2>Allergens</h2>
              <input
                className="info-input" value='Dairy' name='allergens' onChange={handleChange} id='diary' type='checkbox'/>
              <label>Dairy</label>
              
              <input
                className="info-input" value='Gluten' name='allergens' onChange={handleChange} id='Gluten' type='checkbox'/>
              <label>Gluten(Wheat, Rye, Spelt, Oats, Kamut)</label>
              
              <input
                className="info-input" value='Eggs' name='allergens' onChange={handleChange} id='Eggs' type='checkbox'/>
              <label>Eggs</label>
              
              <input
                className="info-input" value='Fish' name='allergens' onChange={handleChange} id='Fish' type='checkbox'/>
              <label>Fish</label>

              <input
                className="info-input" value='Shellfish' name='allergens' onChange={handleChange} id='Shellfish' type='checkbox'/>
              <label>Shellfish</label>

              <input
                className="info-input" value='Peanuts' name='allergens' onChange={handleChange} id='Peanuts' type='checkbox'/>
              <label>Peanuts</label>

              <input
                className="info-input" value='Sesame' name='allergens' onChange={handleChange} id='Sesame' type='checkbox'/>
              <label>Sesame</label>

              <input
                className="info-input" value='Lupin' name='allergens' onChange={handleChange} id='Lupin' type='checkbox'/>
              <label>Lupin</label>

              <input
                className="info-input" value='Nuts' name='allergens' onChange={handleChange} id='Nuts' type='checkbox'/>
              <label>Nuts</label>

              <input
                className="info-input" value='Soy' name='allergens' onChange={handleChange} id='Soy' type='checkbox'/>
              <label>Soy</label>

              <input
                className="info-input" value='Milk' name='allergens' onChange={handleChange} id='Milk' type='checkbox'/>
              <label>Milk</label>
            </div>
          <div className='ingredients-list'>
            <Ingredients handleAddIngredient={handleAddIngredient} ingredients={ingredients}/>
            <ul >
              {ingredientsList.map((ingredient, idx)=>
                <li key={idx}>{ingredient.ingredient.name}: {ingredient.ingredient.amount} {ingredient.ingredient.measurement}</li>
                )}
            </ul >
          </div>
          </div>
        </div>
          <textarea
            name="storageInformation"
            type="text"
            autoComplete="off"
            onChange={handleChange}
          />
        <button type="submit">Save</button>
      </form>
)
}

export default NewRecipeForm