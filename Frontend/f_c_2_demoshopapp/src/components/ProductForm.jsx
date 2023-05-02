import React, { useState } from 'react'

const ProductForm = (props) => {
  // const[fullProductInput,setfullProductInput] = useState({
  //   title:'',
  //   date:''
  // });



  // function titleChangeHandler(event ,prevState){
  //   return {...prevState,title:event.target.value};
  // }

  const [newTitle, setTitle] = useState('');
  const [newDate, setDate] = useState('');

  function titleChangeHandler(event) {
    setTitle(event.target.value);
  }
  // function titleChangeHandler(event) {
  //   setTitle(event.target.value);
  //   console.log(event.target.value);
  // }
  function dateChangeHandler(event) {
    setDate(event.target.value);
    // console.log(event.target.value);
    // console.log("printing");
    // console.log(title);
    // console.log(date);
  }
  
  function submitHandler(event){
    event.preventDefault();
    const productData ={
      title:newTitle,
      date:newDate
    };
    // console.log(productData)
    props.onSaveProduct(productData);


    setTitle('');
    setDate(''); // abi ui me empty ni hua yeh ... 
  }


  return (
    <form onSubmit={submitHandler}>
      <div className='new-product_controls'>

        <label className='new-product_control_label'>Title</label>
        <input className='new-product_control_input' value={newTitle} onChange={titleChangeHandler} type="text" />
      

        <label>Date</label>
        <input className='new-product_control' value={newDate} onChange={dateChangeHandler} type="date" min="2023-01-01" max="2023-12-12" />

        <div className='new-product_button'>
          <button type="submit">Add Product</button>
        </div>
      </div>
    </form>
  )
}

export default ProductForm;
