import logo from "./logo.svg";
import "./App.css";
import Product from "./components/product";
import styled from "styled-components";

function App() {
  var products = require("./products.json");

  const AppFrame = styled.div`
    text-align: center;
    display: flex;
  `;

  return (
    <div className="App">

      {products.map((p) => (
        <AppFrame>
          <Product product={p} />
        </AppFrame>
      ))}
    </div>
  );
}

export default App;
