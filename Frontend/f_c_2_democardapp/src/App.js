
import React from 'react';
import './App.css';

import Products from './components/Products';



function App() {
  const products =[
    {
      id:'p1',
      title:'nirma',
      amount:100,
      date:new Date(2021,7,10)
    },
    {
      id:'p2',
      title:'Sirf Excel',
      amount:150,
      date:new Date(2021,8,10)
    },
    {
      id:'p3',
      title:'TIde',
      amount:200,
      date:new Date(2021,9,10)
    },
    {
      id:'p4',
      title:'555',
      amount:250,
      date:new Date(2021,10,10)
    },
]
  return (
    <div >
      <Products items={products}/>
    </div>
  );
}

export default App;
