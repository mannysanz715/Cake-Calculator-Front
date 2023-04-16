import { useState } from "react"



function NewRecipe () {
  const [checkList, setCheckList] = useState([])
  const [formData, setFormData] = useState({name: '', description : '', category: '', servings : '', customPrice : '', recipeDirections : '', allergens : checkList, storageInformation : '',})
const handleChange = evt => {
  if(evt.target.name === 'allergens'){
    if(evt.target.checked){
      setCheckList([...checkList, evt.target.value])
    } else{
      const filteredList = checkList.filter((item) => item !== evt.target.value);
      setCheckList(filteredList);
    }
  } else setFormData({ ...formData, [evt.target.name]: evt.target.value })
}
  return (
    <div>
      <h1>New Recipe</h1>
      <form>
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
          <label for='diary'>Dairy</label>
          
          <input value='Gluten' name='allergens' onChange={handleChange} id='Gluten' type='checkbox'/>
          <label for='Gluten'>Gluten(Wheat, Rye, Spelt, Oats, Kamut)</label>
          
          <input value='Eggs' name='allergens' onChange={handleChange} id='Eggs' type='checkbox'/>
          <label for='Eggs'>Eggs</label>
          
          <input value='Fish' name='allergens' onChange={handleChange} id='Fish' type='checkbox'/>
          <label for='Fish'>Fish</label>

          <input value='Shellfish' name='allergens' onChange={handleChange} id='Shellfish' type='checkbox'/>
          <label for='Shellfish'>Shellfish</label>

          <input value='Peanuts' name='allergens' onChange={handleChange} id='Peanuts' type='checkbox'/>
          <label for='Peanuts'>Peanuts</label>

          <input value='Sesame' name='allergens' onChange={handleChange} id='Sesame' type='checkbox'/>
          <label for='Sesame'>Sesame</label>

          <input value='Lupin' name='allergens' onChange={handleChange} id='Lupin' type='checkbox'/>
          <label for='Lupin'>Lupin</label>

          <input value='Nuts' name='allergens' onChange={handleChange} id='Nuts' type='checkbox'/>
          <label for='Nuts'>Nuts</label>

          <input value='Soy' name='allergens' onChange={handleChange} id='Soy' type='checkbox'/>
          <label for='Soy'>Soy</label>

          <input value='Milk' name='allergens' onChange={handleChange} id='Milk' type='checkbox'/>
          <label for='Milk'>Milk</label>
        </div>
        <textarea 
          name="storageInformation"
          type="text"
          autoComplete="off"
          onChange={handleChange}
        />
      </form>
    </div>
)
}

export default NewRecipe