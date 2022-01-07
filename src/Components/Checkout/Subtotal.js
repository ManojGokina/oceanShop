import React from "react";
import "./Checkout.css";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h2 id="subTotal">
              Subtotal (0 Items) :<strong>0</strong>
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

      <button className="checkout__button">Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
