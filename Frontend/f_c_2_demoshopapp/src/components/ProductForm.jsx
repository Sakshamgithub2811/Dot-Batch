import React from 'react'

const ProductForm = () => {
  return (
    <form>
      <div className='new-product_title'>
        <label >Title</label>
        <input type="text" />
      </div>
      <div className='new-product_date'>
        <label>Date</label>
        <input type="date" min="2023-01-01" max="2023-12-12"/>
      </div>
      <div className='new-product_button'>
        <button type="submit">Add Product</button>
      </div>
    </form>
  )
}

export default ProductForm
