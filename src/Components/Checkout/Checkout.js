import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
// import Footer from "../Footer/Footer";
import Header from "../../Components/Header/Header";

function Checkout() {
  return (
    <div>
      {/* Header */}
      <div className="checkout__header">
        <Header />
      </div>
      {/* checkOut Body */}
      <div className="checkOut">
        <div className="checkout__left">
          <img
            id="checkout__ad"
            src="https://s3.envato.com/files/173909488/banner_970x250.jpg"
            alt=""
          />
          <div>
            <h2 className="checkout__title">Your Selected Items</h2>
              <h5>No Items Selected</h5>
            {/* Cart Items */}
            {/* Cart Items */}
            {/* Cart Items */}
          </div>
        </div>

        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>

      {/* Footer */}
      {/* <div className="home__row">
           <Footer />
           </div> */}
    </div>
  );
}

export default Checkout;
