import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./productDetails.css";
import Header from "../../Components/Header/Header";
import Footer from "../Footer/Footer";
import Rating from "@mui/material/Rating";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { productDetails } from "../../redux/actions/productDetailsAction";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

function ProductDetails() {
  const dispatch = useDispatch();
  const [showElement, setShowElement] = useState(false);
  const { productDescription } = useSelector(
    (store) => store.productDescription
  );
  const { image, title, price, description, rating } = productDescription;
  const { rate } = rating ? rating : {};
  const { id } = useParams();

  console.log(productDescription);

  const addToCart = () => {
    const addedItems = localStorage.getItem("productDesc")
      ? JSON.parse(localStorage.getItem("productDesc"))
      : null;
    let cartItemsList;
    if (addedItems === null) {
      cartItemsList = [];
    } else {
      cartItemsList = addedItems;
    }
    cartItemsList.push(productDescription);

    localStorage.setItem("productDesc", JSON.stringify(cartItemsList));
    setShowElement(true);
  };

  setTimeout(function () {
    setShowElement(false);
  }, 3000);

  useEffect(() => {
    dispatch(productDetails(id));
  }, [dispatch, id]);

  return (
    <div>
      <Header />
      <div className="desc-container">
        <div className="image-container">
          <img src={image} alt="" id="productDesc_Image" />
        </div>
        <div className="description">
          <h1 className="product_title">{title}</h1>
          <p className="product_price">${price}</p>
          <p>
            {rate && (
              <Rating name="half-rating" defaultValue={rate} precision={0.5} />
            )}
          </p>
          <p className="product_desc">{description}</p>
          <div className="btn-container">
            <button className="add_cart">
              <span id="btn_title" onClick={addToCart}>
                Add to Cart
              </span>
              <span>
                <ShoppingCartIcon id="cart_icon" />
              </span>
            </button>
            <button className="buy_now">
              <span id="btn_title"> Buy Now</span>
              <span>
                <FlashOnIcon id="flash_icon" />
              </span>
            </button>
          </div>
          <div className="alert">
            {showElement ? (
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert severity="success">
                  <AlertTitle>Success</AlertTitle>
                  Item added to cart — <strong>check it out!</strong>
                </Alert>
              </Stack>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <div className="home__row">
        <Footer />
      </div>
    </div>
  );
}

export default ProductDetails;
