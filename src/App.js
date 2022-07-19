import React from "react";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Product from "./Pages/Product";
import {BrowserRouter, Routes,Route,} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Product" element={<Product/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
  </>
  )
}

export default App;


