import React from "react";
import "./CartModalItem.css";

export default function CartModalItem(props) {
  const handlerRemoveCart = (index) => {
    props.dispatchCart({
      type: "REMOVE_FROM_CART",
      item: props.cart.basket[index],
      index: index,
    });
  };

  const handlerIncreaseQuantity = (index) => {
    props.dispatchCart({
      type: "INCREASE_ITEM",
      item: props.cart.basket[index],
      index: index,
    });
  };
  return (
    <div className="modal__item" key={props.item.key}>
      <div className="modal__info">
        <h3 className="modal__infoName">{props.item.name}</h3>
        <div className="modal__info__lineTwo">
          <p className="modal__infoPrice">${props.item.price}</p>
          <p className="modal__infoQuantity">x {props.item.quantity}</p>
        </div>
      </div>
      <div className="modal__adjustQuantity">
        <button onClick={handlerRemoveCart.bind(null, props.index)}>-</button>
        <button onClick={handlerIncreaseQuantity.bind(null, props.index)}>
          +
        </button>
      </div>
    </div>
  );
}
