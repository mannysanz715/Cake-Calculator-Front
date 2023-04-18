import { useState } from "react"
import * as ingredientsService from '../../services/ingredientsService.js'
import NewIngredientForm from "../../components/NewIngredientForm/NewIngredientForm"
import { useNavigate } from "react-router-dom"

const NewIngredient = () => {
  const navigate = useNavigate()
  
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
    e.preventDefault()
    await ingredientsService.addIngredient(formData)
  }

  return (
    <div>
      <h1>
        New Ingredient
      </h1>
        <NewIngredientForm handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
)
}

export default NewIngredient