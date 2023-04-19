import { useState } from "react"

const Ingredients = ({ingredients, handleAddIngredient}) => {
  const [modal, setModal] = useState(false)
  const [value, setValue] = useState('')
  const [formState, setFormState] = useState(false)
  const [ingredientsState, setIngredientsState] = useState({type: '', amount: '', measurement: '', name:''})
  function toggleModal() {
    setModal(!modal)
  }
  function onChange(evt) {
    evt.preventDefault()
    setValue(evt.target.value)
  }
  function addType(ingredient, id){
      setIngredientsState({...ingredientsState, type : ingredient._id, name: ingredient.ingredientName}) 
      setFormState(!formState)
      setValue(ingredient.ingredientName)
  }
  function handleChange(evt){
    evt.preventDefault()
    if((evt.target.name === 'amount') ||(evt.target.name === 'measurement') ){
      setIngredientsState({...ingredientsState, [evt.target.name] : evt.target.value})
    }
  }
  function handleIngredientSubmit(evt){
    evt.preventDefault()
    handleAddIngredient(ingredientsState)
    setFormState(!formState)
    setModal(!modal)
    setValue('')
  }
  return (
    <div className="checklist">
          <h4>Ingredients</h4>
          <button onClick={toggleModal} type="button">Add Ingredients</button>
          { modal && 

          <div className="modal overlay">
            <div className="form-container"> 
            <input type='text' value={value} onChange={onChange}/>
              
              { ingredients ? 
                ingredients.filter(ingredient =>{
                  const searchTerm = value.toLowerCase()
                  const ingName = ingredient.ingredientName.toLowerCase()
                  return searchTerm && ingName.startsWith(searchTerm)
                }).map((ingredient, idx)=> 
                <div key={ingredient.ingredientName}>
                  <div>
                    <div  name='type' onClick={() => addType(ingredient, idx)}> {ingredient.ingredientName} 
                    </div>
                  </div>
                </div>
              ) : ''}
              { formState &&
              <div>
                <p>Amount</p>
                <input 
                  name="amount"
                  type="number"
                  step='0.1'
                  required
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
                <button type="button" onClick={handleIngredientSubmit}>Add</button>
              </div>
              }
            </div>
          </div>
        }
      </div>
)
}

export default Ingredients