import React from 'react';
import Card from './Card';

function Tours({tours,removeTour}) {
  return (
    <div>
        <div className='container'>
            <h2 className='title'>Plan With <span><i className="fa-solid fa-heart fa-beat"></i></span> And Saksham</h2>
        </div>
        <div className='cards'>
             {
                tours.map( (tour)=>{
                 
                    return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                } )
             }
        </div>
    </div>
  );
}

export default Tours;
