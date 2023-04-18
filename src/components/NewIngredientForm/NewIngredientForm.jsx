import { useState } from "react"
import * as ingredientsService from '../../services/ingredientsService.js'
import './NewIngredientForm.css'
const NewIngredientForm = ({modalState}) => {
  const [formData, setFormData] = useState({ingredientName: '', supplier: '', purchaseSize: '', measurement: '', costPrice: ''})
  
  const handleChange = evt => {
    if(evt.target.name === 'measurement'){
      if(evt.target.value === 'undefined'){
        setFormData({ ...formData, [evt.target.name]: undefined })
      }
      else setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }
    else setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  async function handleSubmit(e) {
    // e.preventDefault()
    await ingredientsService.addIngredient(formData)
    modalState()
  }
  return (
    <form className="form-container" onSubmit={handleSubmit}>
        
        <label>Ingredient Name</label>
        <input 
          required
          name="ingredientName"
          type="text"
          autoComplete="off"
          onChange={handleChange}
        />

        <label>Purchase Size</label>
        <input
          required
          name="purchaseSize"
          min='0'
          step='0.01'
          type="number"
          autoComplete="off"
          onChange={handleChange}
          />
          <label>Measurement</label>
          <select required name='measurement' onChange={handleChange}>
            <option value='undefined'>Select One</option>
            <option value='kg'>kg</option>
            <option value='g'>g</option>
            <option value='mg'>mg</option>
            <option value='st'>st</option>
            <option value='lb'>lb</option>
            <option value='oz'>oz</option>
            <option value='gal'>gal</option>
            <option value='qt'>qt</option>
            <option value='pint'>pint</option>
            <option value='cup'>cup</option>
            <option value='fl-oz'>fl-oz</option>
            <option value='Tbl'>Tbl</option>
            <option value='tps'>tps</option>
            <option value='L'>L</option>
            <option value='ml'>ml</option>
            <option value='ea'>ea</option>
          </select>
          <label>Cost Price</label>
          <input
            required
            name="costPrice"
            min='0'
            step='0.01'
            type="number"
            autoComplete="off"
            onChange={handleChange}
            />
            <label>Supplier</label>
          <input 
            name="supplier"
            type="text"
            autoComplete="off"
            onChange={handleChange}
          />
          <button type="submit">Save</button>
      </form>
)
}

export default NewIngredientForm