import React, { useState } from "react";

import Tours from "./components/Tours";
import data from './data';


const App = () => {
  
  const[tours,setTours] = useState(data);
     
  function removeTour(id){
    const newTours = tours.filter(tour=>tour.id!==id);
    setTours(newTours);
  }

  if(tours.length === 0)
  {
    return (
      <div className='refresh'>
        <h2> No Tours Left</h2>
        <button className="btn-white" onClick={()=>setTours(data)}>
          Refresh
        </button>
      </div>
    )
  }

  return (
    <div>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
};

export default App;
