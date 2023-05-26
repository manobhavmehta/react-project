import React from 'react';
import './App.css';
import Divline from "./Component/Divline";
import Home from './Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Register from "./Component/Register";
import About from './Component/About';
import Login from "./Component/Login";
import Products from "./Component/Products"

function App() {
  return (

   <div className='App'>
    
<Router basename={process.env.PUBLIC_URL}> 
<Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/about" element={<About/>} />
    <Route exact path="/login" element={<Login/>} />
    <Route exact path="/register" element= {<Register />} />
    <Route exact path="/products" element={<Products />} />
   
</Routes>
</Router>

    
    </div>
  );
}

export default App;
