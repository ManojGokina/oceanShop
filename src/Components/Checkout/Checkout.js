import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import Footer from "../Footer/Footer";
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
            <div className="cart_container">
              <div className="cart_item">
                <div className="cart_image">
                  <img
                    src="https://5.imimg.com/data5/VT/DS/MY-17368652/plain-round-neck-tshirt-500x500.jpg"
                    alt=""
                    id="cart_img"
                  />
                </div>

                <div className="cart_item_details">
                  <h4>H&M White casual all weather comfortable shirt </h4>
                  <div className="cart_price">
                    <div className="item_price">$100</div>
                    <div className="increment_decrement">
                      <button id="increment">-</button>
                      <input id="quantity" placeholder="1"/>
                      <button id="decrement">+</button>
                    </div>
                  </div>
                  <div className="remove_button">
                  <button id="remove_button">Remove</button>
                </div>
                </div>

                
              </div>
            </div>
          </div>
        </div>

        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>

      {/* Footer */}
      <div className="home__row">
        <Footer />
      </div>
    </div>
  );
}

export default Checkout;
