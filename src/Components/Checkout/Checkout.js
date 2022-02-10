import React, { useState } from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import Footer from "../Footer/Footer";
import Header from "../../Components/Header/Header";


function Checkout() {
  const cartItem = JSON.parse(window.localStorage.getItem("productDesc"));
  console.log(cartItem);

  const [cartData, setCartData] = useState(cartItem);

  const removeCartItem = (id) => {
    const cartItem = JSON.parse(window.localStorage.getItem("productDesc"));
    const removeItem = cartItem.filter((filterItem) => filterItem.id !== id);
    window.localStorage.setItem("productDesc", JSON.stringify(removeItem));

    setCartData(removeItem);
  };

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
              <div className="cart_items">
                {cartData.length === 0 ? (
                  <>
                    <h1 className="cartItems__heading">
                      {" "}
                      Add items to your cart
                    </h1>
                  </>
                ) : (
                  <>
                    {cartData &&
                      cartData.map((item) => {
                        return (
                          <div className="cart_item" key={item.id}>
                            <div className="cart_image">
                              <img src={item.image} alt="" id="cart_img" />
                            </div>

                            <div className="cart_item_details">
                              <h4>{item.title}</h4>
                              <div className="cart_price">
                                <div className="item_price">${item.price}</div>
                              </div>
                              <div className="remove_button">
                                <button
                                  id="remove_button"
                                  onClick={() => removeCartItem(item.id)}
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </>
                )}
              </div>

              <div className="divLine"></div>
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
