import { useState } from "react"
import Ingredients from "./Ingredients"

const NewRecipeForm = ({handleChange,ingredientsList, handleSubmit, handleAddIngredient, ingredients}) => {

  return (
      <form onSubmit={handleSubmit}>
          <label>Name</label>
        <input
          name="name"
          type="text"
          autoComplete="off"
          onChange={handleChange}
          />
          <label>Description</label>
        <textarea
          name="description"
          type="text"
          autoComplete="off"
          onChange={handleChange}
          />
          <label>Category</label>
        <input
          name="category"
          type="text"
          autoComplete="off"
          onChange={handleChange}
          />
          <label>Servings</label>
        <input
          name="servings"
          type="number"
          autoComplete="off"
          onChange={handleChange}
          />
          <label>Custom Price</label>
        <input
          name="customPrice"
          type="number"
          autoComplete="off"
          onChange={handleChange}
          />
          <label>Recipe Directions</label>
        <input
          name="recipeDirections"
          type="text"
          autoComplete="off"
          onChange={handleChange}
          />

        <div className="checklist">
          <h4>Allergens</h4>
          <input value='Dairy' name='allergens' onChange={handleChange} id='diary' type='checkbox'/>
          <label>Dairy</label>
          
          <input value='Gluten' name='allergens' onChange={handleChange} id='Gluten' type='checkbox'/>
          <label>Gluten(Wheat, Rye, Spelt, Oats, Kamut)</label>
          
          <input value='Eggs' name='allergens' onChange={handleChange} id='Eggs' type='checkbox'/>
          <label>Eggs</label>
          
          <input value='Fish' name='allergens' onChange={handleChange} id='Fish' type='checkbox'/>
          <label>Fish</label>

          <input value='Shellfish' name='allergens' onChange={handleChange} id='Shellfish' type='checkbox'/>
          <label>Shellfish</label>

          <input value='Peanuts' name='allergens' onChange={handleChange} id='Peanuts' type='checkbox'/>
          <label>Peanuts</label>

          <input value='Sesame' name='allergens' onChange={handleChange} id='Sesame' type='checkbox'/>
          <label>Sesame</label>

          <input value='Lupin' name='allergens' onChange={handleChange} id='Lupin' type='checkbox'/>
          <label>Lupin</label>

          <input value='Nuts' name='allergens' onChange={handleChange} id='Nuts' type='checkbox'/>
          <label>Nuts</label>

          <input value='Soy' name='allergens' onChange={handleChange} id='Soy' type='checkbox'/>
          <label>Soy</label>

          <input value='Milk' name='allergens' onChange={handleChange} id='Milk' type='checkbox'/>
          <label>Milk</label>
        </div>

        <Ingredients handleAddIngredient={handleAddIngredient} ingredients={ingredients}/>
          {ingredientsList.map((ingredient, idx)=>
          <div key={idx}>
            <p>{ingredient[idx.name]}</p>
          </div>
            )}
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