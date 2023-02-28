
import { Routes, Route} from "react-router-dom";

import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import {About} from "./pages/About"
import { Register } from "./pages/Register";
import { Products } from "./pages/Products";


import React from 'react'

const App = () => {
  return (
    <div className="App">
   
     <Header/>
      <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/about" element = {<About/>}/>
      <Route path= "/products" element = {<Products/>}/>
      <Route path="/register" element = {<Register/>}/>
      </Routes>
    
    </div>
  )
}

export default App
