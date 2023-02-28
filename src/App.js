
import { Routes, Route, Link, BrowserRouter} from "react-router-dom";

import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import {About} from "./pages/About"
import { Register } from "./pages/Register";


import React from 'react'

const App = () => {
  return (
    <div className="App">
   
     <BrowserRouter>
     <Header/>
      <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/about" element = {<About/>}/>
      <Route path="/register" element = {<Register/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
