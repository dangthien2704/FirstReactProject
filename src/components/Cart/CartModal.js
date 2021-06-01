import React, { useContext } from "react";
import "./CartModal.css";
import Card from "../UI/Card";
import { CartContext } from "../../store/CartContext";
import CartModalItem from "./CartModalItem";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onCloseModal} />;
};

const Modal = (props) => {
  const { cart, dispatchCart } = useContext(CartContext);

  const totalAmount = cart.basket
    .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    .toFixed(2);

  const handlerSubmitOrder = (e) => {
    e.preventDefault();
    props.onCloseModal();
    console.log(
      `The total amount of your order is $${totalAmount} and it is being prepared!`,
      cart.basket
    );
    cart.basket = [];
  };
  return (
    <Card className="modal">
      <div className="modal__header">
        <h2>Your Order</h2>
      </div>

      <div>
        {cart.basket.map((item, index) => {
          return (
            <CartModalItem
              item={item}
              index={index}
              cart={cart}
              key={index}
              dispatchCart={dispatchCart}
            />
          );
        })}
      </div>

      <div className="modal__total">
        <h3>Total Amount</h3>
        <h4>${totalAmount}</h4>
      </div>

      <footer className="actions">
        <button onClick={props.onCloseModal}>Close</button>
        {totalAmount > 0 && (
          <button onClick={handlerSubmitOrder} type="submit">
            Order
          </button>
        )}
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
