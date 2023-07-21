import React from "react";
import data from './data';

const App = () => {
  const {tours,setTours} = usestate(data);

  return (
   <div>
    <h2>Plan With Love</h2>
    <Tours></Tours>
   </div>
  );
};

export default App;
