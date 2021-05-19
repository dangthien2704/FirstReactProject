import React, { useContext } from "react";
import "./CartModal.css";
import Card from "../UI/Card";
import { CartContext } from "../../store/CartContext";

import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onCloseModal} />;
};

const Modal = (props) => {
  const { cart, setCart } = useContext(CartContext);

  const handlerDecreaseQuantity = (index) => {
    if (cart[index].quantity < 2) {
      setCart((prev) => prev.filter((item) => item.id !== cart[index].id));
    } else {
      cart[index].quantity -= 1;
      setCart([...cart]);
      console.log(cart);
    }
  };

  const handlerIncreaseQuantity = (index) => {
    cart[index].quantity += 1;
    setCart([...cart]);
  };

  const totalAmount = cart
    .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    .toFixed(2);

  const handlerSubmitOrder = (e) => {
    e.preventDefault();
    props.onCloseModal();
    console.log("Your order is being prepared!", cart);
    setCart([]);
  };
  return (
    <Card className="modal">
      <div className="modal__header">
        <h2>Your Order</h2>
      </div>
      {cart.map((dish, index) => (
        <div className="modal__item" key={dish.key}>
          <div className="modal__info">
            <h3 className="modal__infoName">{dish.name}</h3>
            <div className="modal__info__lineTwo">
              <p className="modal__infoPrice">${dish.price}</p>
              <p className="modal__infoQuantity">x {dish.quantity}</p>
            </div>
          </div>
          <div className="modal__adjustQuantity">
            <button onClick={handlerDecreaseQuantity.bind(null, index)}>
              -
            </button>
            <button onClick={handlerIncreaseQuantity.bind(null, index)}>
              +
            </button>
          </div>
        </div>
      ))}
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
