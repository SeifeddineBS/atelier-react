import React from "react";
import styled from "styled-components";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = { likes: 0 };
    this.addLikes = this.addLikes.bind(this);
  }

  addLikes() {
    this.setState((state) => ({
      likes: state.likes + 1,
    }));
  }

  render() {
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

    return (
      <ProductFrame>
        <ProductImageWrapper>
          <ProductImage src={this.props.product.img}></ProductImage>
        </ProductImageWrapper>
        <ProductInfoWrapper>
          {this.props.product.name} <br />
          {this.props.product.price} Dt
        </ProductInfoWrapper>
        Likes: {this.state.likes}
        <button onClick={this.addLikes}>Like</button>
      </ProductFrame>
    );
  }
}

export default Product;
