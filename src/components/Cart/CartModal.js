import React, { useContext, useState, useReducer } from "react";
import "./CartModal.css";
import Card from "../UI/Card";
import { CartContext } from "../../store/CartContext";

import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onCloseModal} />;
};

const Modal = (props) => {
  const { cart, setCart } = useContext(CartContext);
  const [newCart, setNewCart] = useState(cart);

  // const handlerDecreaseQuantity = (index) => {
  //   newCart[0].quantity -= 1;
  //   setNewCart(newCart);
  // };

  const handlerSubmitOrder = (e) => {
    e.preventDefault();
    props.setCartPopup(false);
    console.log("Your order is being prepared!", cart);
    setCart([]);
  };
  return (
    <Card className="modal">
      <div className="modal__header">
        <h2>Your Order</h2>
      </div>
      {newCart.map((dish, index) => (
        <div className="modal__item" key={dish.key}>
          <div className="modal__info">
            <h3 className="modal__infoName">{dish.name}</h3>
            <div className="modal__info__lineTwo">
              <p className="modal__infoPrice">${dish.price}</p>
              <p className="modal__infoQuantity">x {dish.quantity}</p>
            </div>
          </div>
          <div className="modal__adjustQuantity">
            <button>-</button>
            <button>+</button>
          </div>
        </div>
      ))}
      <div className="modal__total">
        <h3>Total Amount</h3>
        <h4>
          $
          {newCart
            .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
            .toFixed(2)}
        </h4>
      </div>
      <footer className="actions">
        <button onClick={props.onCloseModal}>Close</button>
        <button onClick={handlerSubmitOrder} type="submit">
          Order
        </button>
      </footer>
    </Card>
  );
};

const CartModal = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Modal
          onCloseModal={props.onCloseModal}
          setCartPopup={props.setCartPopup}
        />,
        document.getElementById("modal-root")
      )}
    </div>
  );
};

export default CartModal;
