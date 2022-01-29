import React from "react";
import "./Checkout.css";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";

function Subtotal() {
  const cartItem = JSON.parse(window.localStorage.getItem("productDesc"));
  const totalItems = cartItem.length;

  const totalPrice = cartItem.reduce((total, item) => {
    return total + item.price;
  }, 0);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h2 id="subTotal">
              Subtotal ({totalItems} Items) : <strong>${totalPrice}</strong>
            </h2>
            <small className="subtotal__discount">
              <input type="checkbox" className="checkbox" />
              Add some more discount to your purchase
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType="text"
        thousandSeparator={true}
        prefix={"$"}
      />

      <button className="checkout__button">
        <Link to="/add-address">Proceed to Checkout </Link>
      </button>
    </div>
  );
}

export default Subtotal;
