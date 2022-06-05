import React from 'react';
import Exercise from './Exercise';
import Diet from './Diet';
import Medicines from './Medicines';
import "./Home.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Home = () => {
  return (
    <>
    <div className='container'>
<div className="buttons">
      <button><Link to = "Medicines" >  MEDICINES </Link></button>
      <button> <Link to = "Exercises" > EXERCISES </Link></button>
      <button> <Link to ="Diet">DIET</Link> </button>
 </div>
 </div>
 </>
 
  )
}

export default Home
