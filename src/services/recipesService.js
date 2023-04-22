import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/recipes`

async function getAllRecipes() {
  const res = await fetch(BASE_URL, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}
async function createNewRecipe(formData, ingredients, allergens) {
  formData.allergens = allergens
  const ingList = []
  console.log(ingredients)
  ingredients.forEach(ingredient =>{
      ingList.push(ingredient.ingredient)
  })
  console.log(ingList)
  formData.ingredients = ingList
  const res = await fetch(BASE_URL + '/add', {
    method: "POST",
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}`,
    "Content-Type": "application/json", },
    body: JSON.stringify(formData)
  })
  return  console.log(await res.json())
}



export { getAllRecipes, createNewRecipe }
