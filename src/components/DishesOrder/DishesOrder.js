import React, { useContext } from "react";
import Dish from "./Dish";
import "./DishesOrder.css";
import { CartContext } from "../../store/CartContext";

function DishesOrder() {
  const { dishesData } = useContext(CartContext);

  return (
    <div className="order-list">
      {dishesData.map((dish, index) => (
        <Dish
          name={dish.name}
          ingredients={dish.ingredients}
          price={dish.price}
          quantity={dish.quantity}
          key={dish.id}
          id={dish.id}
          index={index}
          // index={index}
        />
      ))}
    </div>
  );
}

export default DishesOrder;
