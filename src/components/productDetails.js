import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
var products = require("../products.json");

export default function ProductDetails() {
  let params = useParams();
  let navigate=useNavigate();


  const ProductsWrapper = styled.div`
    text-align: center;
    display: flex;
  `;
  const Container = styled.div`
    display: grid;
    height: 100vh;
    grid-template-rows: 0.5fr 0.5fr;
    grid-template-areas:
      "content content"
      "footer footer";
    text-align: left;
    grid-gap: 0.25rem;
    transition: all 0.25s ease-in-out;
    @media (max-width: 550px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1.2fr 1fr;
      grid-template-areas:
        "content"
        "footer";
    }
    color: black;
  `;
  const ContentBox = styled.div`
    display: flex;
    gap: 0.25rem;
    padding: 0.25rem;
    align-items: center;
    grid-area: content;
    justify-content: center;
    @media (max-width: 550px) {
      flex-direction: column;
    }
  `;
  const Content1 = styled.div`
    background: transparent !important;
    padding: 0.25rem;
    width: 40%;
    height: 100%;
  `;
  const Content2 = styled.div`
    background: transparent !important;
    padding: 0.25rem;
    width: 60%;
    height: 100%;
  `;
  const Footer = styled.footer`
    background: transparent;
    grid-area: footer;
    padding: 0.25rem;
    text-align: right !important;
  `;
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

  const H1 = styled.h1`
    font-size: 3.5em;
    font-weight: bold;
  `;

  const H3 = styled.h3`
    color: palevioletred;
    font-size: 1.25em;
    font-weight: bold;
  `;
  const Span = styled.span`
    color: grey;
    font-size: 1.25em;
  `;
  const ProductImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 25px;
  `;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    products.filter(function (data) {
      
      if (data.name == params.id) setProduct(data);
    });
  }, []);
  return (
    <Container>
      <ContentBox>
        <Content1>
          <img
            src={product?.image}
            width="600"
            height="600"
            alt={product?.name}
          />{" "}
        </Content1>
        <Content2>
          <H1>{product?.name}</H1>
          <H3>Description :</H3>
          <Span>
             {product?.description}
          </Span>
          <H3>Price :</H3>
          <Span>
             {product?.price } Dt 
          </Span>
          </Content2>

      </ContentBox>
      <Footer>
          <Button  onClick={() => {
                  navigate("/product")
                  }}>
                      Return
         
          </Button>
      </Footer>
    </Container>
  );
}
