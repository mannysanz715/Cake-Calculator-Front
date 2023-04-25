import { useState } from "react"
import { useNavigate } from "react-router-dom"
import NewRecipeForm from "../../components/NewRecipeForm/NewRecipeForm"
import * as recipesService from '../../services/recipesService.js'
import './NewRecipe.css'

function NewRecipe ({ingredients}) {
  const navigate = useNavigate()
  const [allergensList, setAllergensList] = useState([])
  const [ingredientsList, setIngredientsState] = useState([])
  const [formData, setFormData] = useState({name: '', description : '', category: '', servings : '', customPrice : '', recipeDirections : '', allergens : '', storageInformation : '',})
  function handleChange  (evt) {
    if(evt.target.name === 'allergens'){
      if(evt.target.checked){
        setAllergensList([...allergensList, evt.target.value])
      } else{
        const filteredList = allergensList.filter((item) => item !== evt.target.value);
        setAllergensList(filteredList)
      }
    }
    else setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  async function handleSubmit(e){
    e.preventDefault()
    await recipesService.createNewRecipe(formData, ingredientsList, allergensList)
    navigate('/home')
  }

  function handleAddIngredient(ingredient){
    setIngredientsState([...ingredientsList,{ingredient}])  
  }

  return (
    <div className="new-recipe-container">
      <h1 className="new-recipe-page-title">New Recipe</h1>
      <NewRecipeForm ingredientsList={ingredientsList} handleSubmit={handleSubmit} handleAddIngredient={handleAddIngredient} ingredients={ingredients} handleChange={handleChange}/>
    </div>
)
}

export default NewRecipe