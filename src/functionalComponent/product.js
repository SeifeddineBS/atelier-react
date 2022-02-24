import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Product() {
  var products = require("../products.json");

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

  const [likes, setLike] = useState(0);

  return (
    <div>
      {products.map((p) => (
        <AppFrame>
          <ProductFrame>
            <ProductImageWrapper>
              <ProductImage src={p.img}></ProductImage>
            </ProductImageWrapper>
            <ProductInfoWrapper>
              {p.name} <br />
              {p.price} Dt <br />
              likes :{p.likes}
              <button onClick={() => setLike(p.likes + 1)}>Like</button>
            </ProductInfoWrapper>
            {/* Likes: {this.state.likes}
            <button onClick={this.addLikes}>Like</button> */}
          </ProductFrame>
        </AppFrame>
      ))}
    </div>
  );
}
