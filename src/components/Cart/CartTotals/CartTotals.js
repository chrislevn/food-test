import React from "react";
import { NavLink } from "react-router-dom";
import Paypal from "./../Paypal/Paypal";
import classes from "./CartTotals.css";
const CartTotals = ({ value,history }) => {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <div className={classes.Container}>
      <h3>
        <strong>SUBTOTAL : </strong>{cartSubTotal}.000 VND
      </h3>
      <h3>
        <strong>Other fees : </strong>{cartTax}.000 VND
      </h3>
      <h3>
        <strong>TOTAL : </strong>{cartTotal}.000 VND
      </h3>

      <NavLink to="/shop">
        <button className={classes.Btn} onClick={() => clearCart()}>
          Clear Cart
        </button>
      </NavLink>
      {/* <Paypal 
      total={cartTotal}
      clearCart={clearCart}
      history={history}
      /> */}
    </div>
  );
};

export default CartTotals;
