import React,{useState} from 'react';
import Card from './Card';
import ProductDate from './ProductDate';

import './ProductItem.css';

const ProductItem = (props) => {

    const [title,setTitle] = useState(props.title);  
// why there is const 
//setTitle is sheduled function or instantly changes ?
    function clickHandler(){
      setTitle("popcorn");
      console.log("button clicked")
    }
    
    return (
        <Card className='product-item'>
          <ProductDate date={props.date}/>
            <div className='product-item__description'>
              <h2>{title}</h2>
            </div>
            <button onClick={clickHandler}>Add to cart</button>  
            {/* agar cliclHandler() ko aise likh dege to load karne per hi function call chale jayege wiout click kare ... */}
        </Card>
        );
      }
      
export default ProductItem;