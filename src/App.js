import React from 'react';
import './App.css';
import Home from './Components/Home';
import { Routes, Route, Link ,BrowserRouter} from "react-router-dom";
import Medicines from './Components/Medicines';
import Diet from './Components/Diet';
import Exercise from './Components/Exercise';
import Login from './Components/Login';

function App() {
  return (
    <>
    
    <BrowserRouter>
     <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="Medicines" element={<Medicines/>} />
        <Route path="Diet" element={<Diet/>} />
        <Route path="Exercises" element={<Exercise/>} />
      </Routes>
      </BrowserRouter>
     
    
    </>
  );
}

export default App;
