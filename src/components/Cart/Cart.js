import React, { useContext } from "react";
import "./Cart.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { CartContext } from "../../store/CartContext";

function Cart(props) {
  const { cart } = useContext(CartContext);
  const cartTotal = cart.reduce(function (acc, curr) {
    return acc + curr.quantity;
  }, 0);

  return (
    <div className="cart">
      <div onClick={props.onOpenModal} className="cart__button">
        <ShoppingCartIcon className="cart__icon" />
        <span> Your Cart </span>
        <div className="cart__count">{cartTotal}</div>
      </div>
    </div>
  );
}

export default Cart;
