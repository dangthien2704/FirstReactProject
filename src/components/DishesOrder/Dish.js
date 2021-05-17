import React, { useState, useContext } from "react";
import "./Dish.css";
import { CartContext } from "../../store/CartContext";

function Dish(props) {
  // const ctx = useContext(DishContext);

  const [amount, setAmount] = useState(0);

  const { setCart } = useContext(CartContext);

  const handlerAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handlerAddCart = (newCart) => {
    setCart((prevCarts) => [newCart, ...prevCarts]);
    setAmount(0);
  };

  const handlerAddBtn = () => {
    const newDish = {
      name: props.name,
      ingredients: props.ingredients,
      price: props.price,
      quantity: +amount,
      key: Math.random(),
      id: props.id,
    };
    handlerAddCart(newDish);
  };

  return (
    <div className="dish">
      <div className="dish__info">
        <h3 className="dish__infoName">{props.name}</h3>
        <p className="dish__infoIngredients">{props.ingredients}</p>
        <p className="dish__infoPrice">${props.price}</p>
      </div>

      <div className="dish__quantity">
        <div className="dish__quantityLineOne">
          <h3>Amount</h3>
          <input
            className="dish__quantityInput"
            id="id_form-0-quantity"
            min="0"
            max="9"
            step="1"
            value={amount}
            onChange={handlerAmountChange}
            type="number"
          />
        </div>

        <div className="dish__quantityLineTwo">
          <button onClick={handlerAddBtn}>+ Add</button>
        </div>
      </div>
    </div>
  );
}

export default Dish;
