const NewIngredientForm = ({handleChange, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
        <label>Ingredient Name</label>
        <input 
          name="ingredientName"
          type="text"
          autoComplete="off"
          onChange={handleChange}
        />

        <label>Purchase Size</label>
        <input
          name="purchaseSize"
          min='0'
          step='0.01'
          type="number"
          autoComplete="off"
          onChange={handleChange}
          />
          <label>Measurement</label>
          <select name='measurement' onChange={handleChange}>
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