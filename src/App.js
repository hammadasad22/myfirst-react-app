import React from 'react';
import './App.css';
import Dinner from './dinner';

function App() {
  return (
    <div className="App">
      {/* <Dinner></Dinner> */}
      <Dinner starter="fries" mainCourse="Chicken Steak" dessert="ice-cream"/>
      <hr/>
      <Dinner starter="salad" mainCourse="Beef Wellington" dessert="sundae" />
      <hr />
      <Dinner starter="soup" mainCourse="chicken biryani" dessert="gajar ka halwa" />
      <hr />
    </div>
  );
}

export default App;
