import React, { useContext } from "react";
import Dish from "./Dish";
import "./DishesOrder.css";
import { CartContext } from "../../store/CartContext";

function DishesOrder() {
  const { dishesData } = useContext(CartContext);

  return (
    <div className="order-list">
      {dishesData.map((item, index) => (
        <Dish
          name={item.name}
          ingredients={item.ingredients}
          price={item.price}
          quantity={item.quantity}
          key={item.id}
          id={item.id}
          index={index}
          // index={index}
        />
      ))}
    </div>
  );
}

export default DishesOrder;
