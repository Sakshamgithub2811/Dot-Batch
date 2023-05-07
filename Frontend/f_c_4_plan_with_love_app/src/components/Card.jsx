import React, { useState } from 'react'

// function Card ({id,image,info,price,name,removeTour} ){
  // 

function Card (props){
 
   const id = props.id;
   const image = props.image;
   const info = props.info;  
   const price = props.price;
   const name = props.name;
   const removeTour = props.removeTour;
  const [readmore,setReadmore]=useState(false);  

 
  const description = readmore?info :`${info.substring(0,200)}...`;

  function readmoreHandler(){

    setReadmore(!readmore)
  }


  return (
    <div className="card">
        <img src={image} alt="card-image" className='image'/>
        <div className='tour-info'>
            <div className="tour-details">
                <h4 className='tour-price'>{price}</h4>
                <h4 className='tour-name'>{name}</h4>
            </div>
            <div className='description'>
                {description}
            <span className='read-more' onClick={readmoreHandler}>
                {readmore ?`show less`:`read more`}
            </span>
            </div>
        </div>
        
        <button className='btn-red' onClick={()=>removeTour(id)}>
        Not Interested
        </button>
    </div>
  )
}

export default Card
