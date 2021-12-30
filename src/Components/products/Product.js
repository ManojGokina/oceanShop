import React from "react";
import "./product.css";
import Rating from "@mui/material/Rating";

function Product({title, image, price, rating}) {
  return (
    <div className="product">
     
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <p className="product__rating">
          <Rating name="half-rating" defaultValue={rating} precision={0.5} />
          </p>
        </div>
        

        <img
          className="product__image"
          src={image}
          alt=""
        />

        <button id="add__cart">Add to Cart</button>
      
    </div>
  );
}

export default Product;
