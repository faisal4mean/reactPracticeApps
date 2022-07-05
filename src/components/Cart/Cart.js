import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = () => {
  const cartItems = (
    <il className={classes["cart-items"]}>
      {[{ id: "c1", name: "Suchi", amount: 2, price: 22.2 }].map((meal) => (
        <li>{meal.name}</li>
      ))}
    </il>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
