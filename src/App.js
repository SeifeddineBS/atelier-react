import logo from "./logo.svg";
import "./App.css";
import Product from "./classComponents/product";
import FProduct from "./functionalComponent/product";
import styled from "styled-components";
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  var products = require("./products.json");

  // const AppFrame = styled.div`
  //   text-align: center;
  //   display: flex;
  // `;

  // const[{color,background},setColor]=useState({color:"red",background:"purple"});






  return (

    <div className="App">
      {/* <input onChange={e=>setColor(current=>({...current,color:e.target.value}))}/>
      <input onChange={e=>setColor(current=>({...current,background:e.target.value}))}/>

      <h1>My favorite color is {color}</h1>

      <h1>My favorite background is {background}</h1> */}


      
      <BrowserRouter>
    <Routes>
      <Route path="/fproduct" element={<FProduct />}>
      
      </Route>
    </Routes>
  </BrowserRouter>,


      {/* {products.map((p) => (
        <AppFrame>
          <Product product={p} />
        </AppFrame>
      ))} */}
    </div>
  );
}

export default App;
