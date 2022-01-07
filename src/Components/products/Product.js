import React from "react";
import "./product.css";
import Rating from "@mui/material/Rating";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Tooltip from "@mui/material/Tooltip";

function Product({ title, image, price, rating }) {
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

      <img className="product__image" src={image} alt="" />
         <div className="icons">
            
      <IconButton aria-label="add to favorites">
        <Tooltip title="Add to Wishlist">
          <FavoriteIcon id="favIcon" />
        </Tooltip>
      </IconButton>
      <IconButton aria-label="add to favorites">
        <Tooltip title="Add to Cart">
          <ShoppingCartIcon id="cartIcon" />
        </Tooltip>
      </IconButton>
         </div>
    </div>
  );
}

export default Product;
