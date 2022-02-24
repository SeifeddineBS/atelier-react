import logo from "./logo.svg";
import "./App.css";
import Product from "./components/product";
import ProductDetails from "./components/productDetails";

import styled from "styled-components";
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NotFoundComponent from "./components/notFoundComponent";
import Navbar from "./components/navbar";
import Home from "./components/home";

function App() {
  var products = require("./products.json");

  // const AppFrame = styled.div`
  //   text-align: center;
  //   display: flex;
  // `;

  // const[{color,background},setColor]=useState({color:"red",background:"purple"});


  const AppFrame = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;



  return (

    <AppFrame className="App">
      {/* <input onChange={e=>setColor(current=>({...current,color:e.target.value}))}/>
      <input onChange={e=>setColor(current=>({...current,background:e.target.value}))}/>

      <h1>My favorite color is {color}</h1>

      <h1>My favorite background is {background}</h1> */}

    
    
    
    
      <BrowserRouter  basename="/">
      <Navbar>  
    </Navbar>
    <Routes>
    <Route exact path="/" element={<Home/>}>    </Route>

      <Route path="/product" element={<Product />}>    </Route>
      <Route exact path="/productDetails/:id" element={<ProductDetails />}></Route>
      <Route path='*' exact={true} element={<NotFoundComponent />} > </Route>


      
   
    </Routes>
  </BrowserRouter>


      {/* {products.map((p) => (
        <AppFrame>
          <Product product={p} />
        </AppFrame>
      ))} */}
    </AppFrame>
  );
}

export default App;
