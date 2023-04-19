import { useState, useEffect } from "react"
import * as ingredientsService from '../../services/ingredientsService.js'
import { Link } from "react-router-dom"
import NewIngredientForm from "../../components/NewIngredientForm/NewIngredientForm.jsx"
const Ingredients = () => {
  const [ingredients, setIngredients] = useState()
  const [modal, setModal] = useState(false)

  function toggleModal(){
    setModal(!modal)
  }
  useEffect(()=>{
    async function getIngredients (){
      const ingredients = await ingredientsService.getAllIngredients()
      if(ingredients.length > 0){
        setIngredients(ingredients.reverse())
      }
    }
    getIngredients()
  },[])

  return (
    <div>
      <h1>Ingredients</h1>
      <button onClick={toggleModal}>Add new Ingredient</button>
      
      {modal &&
        <div className="modal">
        <div className="overlay modal-container">
        <button className="x-button" onClick={toggleModal}>X</button>
          <NewIngredientForm modalState={toggleModal}/>
        </div>
        </div>
      }

      <div className="ingredients-list-container">
          {ingredients ?
          <>
            <table className="ingredients-list-table">
              <tbody>
              <tr>
                <th>Ingredient</th>
                <th>Supplier</th>
                <th>Purchase Size</th>
                <th>Cost Price</th>
              </tr>
              {ingredients.map((ingredient, key) =>
                <tr key={key}>
                  <td>{ingredient.ingredientName}</td>
                  <td>{ingredient.supplier}</td>
                  <td>{ingredient.purchaseSize} {ingredient.measurement}</td>
                  <td>$ {ingredient.costPrice}</td>
                </tr>
                )
              }
              </tbody>
            </table>
          </>
              :  
            <h2>Add Ingredients to your Ingredients List</h2>
          }
      </div>
    </div>
)
}

export default Ingredients