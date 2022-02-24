import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import { useNavigate, Routes, Route, Redirect } from "react-router-dom";
export default function Product() {
  const api = require("../api");

  //var products = require("../products.json");
  let navigate = useNavigate();
  const [likes, setLike] = useState(0);
  const [products, setProducts] = useState([]);

  const [id, setId] = useState(0);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await api.get("products");
        console.log(res);
        setProducts(res.data);
      } catch (err) {
        console.log(err.Message);
      }
    };
    getProducts();
  }, []);

  const AppFrame = styled.div`
    text-align: center;
    display: flex;
  `;

  const ProductFrame = styled.div`
    border-radius: 25px;
    min-height: 150px;
    min-width: 150px;
    background-color: rgb(110, 110, 110, 0.7);
    margin: 10px;
    display: flex;
    flex-direction: column;
  `;

  const ProductFrameBest = styled.div`
    border-radius: 25px;
    min-height: 150px;
    min-width: 150px;
    background-color: #db7093;
    margin: 10px;
    display: flex;
    flex-direction: column;
    animation: clignote 2s linear infinite;
    @keyframes clignote {
      50% {
        opacity: 0.5;
      }
    }
  `;
  const ProductImageWrapper = styled.div`
    margin: 5px;
    max-width: 150px;
  `;
  const ProductImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 25px;
  `;
  const ProductInfoWrapper = styled.div`
margin-top: auto;
margin-bottom: 5px;
display: flex;
flex-direction: column;
& > span {
  text-align: center`;

  const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${(props) => (props.primary ? "palevioletred" : "white")};
    color: ${(props) => (props.primary ? "white" : "palevioletred")};
    font-size: 1.5em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;

  return (
    <div>
      {products.map((p) => (
        <AppFrame>
          {p.likes < 5 ? (
            <ProductFrame>
              <ProductImageWrapper>
                <ProductImage src={p.image}></ProductImage>
              </ProductImageWrapper>
              <ProductInfoWrapper>
                <span>
                  <a href={"/productDetails/" + p.name}>{p.name}</a>
                </span>
                <br />
                {p.price} Dt <br />
                likes :{p.likes}
                <Button
                  onClick={() => setLike((p.likes = parseInt(p.likes) + 1))}
                >
                  Like
                </Button>
                <Button
                  onClick={() => {
                    navigate("/productDetails/" + p.name);
                  }}
                >
                  Details
                </Button>
              </ProductInfoWrapper>
            </ProductFrame>
          ) : (
            <ProductFrameBest>
              <ProductImageWrapper>
                <ProductImage src={p.image}></ProductImage>
              </ProductImageWrapper>
              <ProductInfoWrapper>
                <span>
                  <a href={"/productDetails/" + p.name}>{p.name}</a>
                </span>
                <br />
                {p.price} Dt <br />
                likes :{p.likes}
                <Button
                  onClick={() => setLike((p.likes = parseInt(p.likes) + 1))}
                >
                  Like
                </Button>
                <Button
                  onClick={() => {
                    navigate("/productDetails/" + p.name);
                  }}
                >
                  Details
                </Button>
              </ProductInfoWrapper>
            </ProductFrameBest>
          )}
        </AppFrame>
      ))}
    </div>
  );
}
