import React,{useState} from 'react';
import Card from './Card';
import ProductDate from './ProductDate';
import './ProductItem.css';

const ProductItem = (props) => {
 
  const [title,setTitle]=useState(props.title);

  function clickHandler(){
   setTitle("Popcorn");
  
    console.log("button clicked");
  }
  return (
  <Card className='product-item'>
    <ProductDate date={props.date}/>
    <div className='product-item__description'>
        <h2>{title}</h2>
    </div>
    <button onClick={clickHandler}>Add to cart</button> 
  </Card>
  );
}

export default ProductItem;
