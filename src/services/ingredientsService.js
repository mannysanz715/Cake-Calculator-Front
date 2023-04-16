import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/ingredients`

async function getAllIngredients() {
  const res = await fetch(BASE_URL, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

async function addIngredient(formData){
  const res = await fetch(BASE_URL + '/new', {
    method: "POST",
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}`,
    "Content-Type": "application/json", },
    body: JSON.stringify(formData)
  })
  return await res.json()
}


export { getAllIngredients, addIngredient }
