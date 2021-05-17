import React, { useState, useContext } from "react";
import "./Cart.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { CartContext } from "../../store/CartContext";
import CartModal from "./CartModal";

function Cart(props) {
  const { cart } = useContext(CartContext);
  const cartTotal = cart.reduce(function (acc, curr) {
    return acc + curr.quantity;
  }, 0);

  const [cartPopup, setCartPopup] = useState(false);
  const handlerCartModal = () => {
    setCartPopup(true);
  };

  const handlerCloseModal = () => {
    setCartPopup(false);
  };
  console.log("re-reder");
  console.log(cartPopup);
  return (
    <div className="cart">
      <div onClick={handlerCartModal} className="cart__button" y>
        <ShoppingCartIcon className="cart__icon" />
        <span> Your Cart </span>
        <div className="cart__count">{cartTotal}</div>
      </div>
      <div>
        {cartPopup && (
          <CartModal
            setCartPopup={setCartPopup}
            onCloseModal={handlerCloseModal}
          />
        )}
      </div>
    </div>
  );
}

export default Cart;
