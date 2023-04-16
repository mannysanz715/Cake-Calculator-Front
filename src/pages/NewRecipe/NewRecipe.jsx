import { useState } from "react"
import NewRecipeForm from "../../components/NewRecipeForm/NewRecipeForm"



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
      <NewRecipeForm handleChange={handleChange}/>
    </div>
)
}

export default NewRecipe