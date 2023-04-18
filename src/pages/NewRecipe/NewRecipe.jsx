import { useState } from "react"
import { useNavigate } from "react-router-dom"
import NewRecipeForm from "../../components/NewRecipeForm/NewRecipeForm"
import * as recipesService from '../../services/recipesService.js'


function NewRecipe ({ingredients}) {
  const navigate = useNavigate()
  const [allergensList, setAllergensList] = useState([])
  const [ingredientsList, setIngredients] = useState([])
  const [formData, setFormData] = useState({name: '', ingredients : ingredientsList , description : '', category: '', servings : '', customPrice : '', recipeDirections : '', allergens : '', storageInformation : '',})
  async function handleChange  (evt) {
    if(evt.target.name === 'allergens'){
      if(evt.target.checked){
        setAllergensList([...allergensList, evt.target.value])
      } else{
        const filteredList = allergensList.filter((item) => item !== evt.target.value);
        setAllergensList(filteredList)
      }
    } else if (evt.target.name === 'ingredients'){
      if(evt.target.checked){
        setIngredients([...ingredientsList, evt.target.value])
      } else {
        const filteredList = ingredientsList.filter((item) => item !== evt.target.value);
        setIngredients(filteredList);
      }
    }
    else setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  async function handleSubmit(e){
    e.preventDefault()
    await recipesService.createNewRecipe(formData, ingredientsList, allergensList)
    navigate('/home')
  }
  return (
    <div>
      <h1>New Recipe</h1>
      <NewRecipeForm handleSubmit={handleSubmit} ingredients={ingredients} handleChange={handleChange}/>
    </div>
)
}

export default NewRecipe