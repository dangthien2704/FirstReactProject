// import React, { useState } from "react";
import React, { useReducer } from "react";
import { cartReducer, initialState } from "./cartReducer";

const dishesData = [
  {
    name: "SuShi",
    ingredients: "Finest fish and veggies",
    price: 22.99,
    quantity: 0,
    id: 1,
  },
  {
    name: "Schnitzel",
    ingredients: "German ingredients",
    price: 16.5,
    quantity: 0,
    id: 2,
  },
  {
    name: "Barbecue Burger",
    ingredients: "American meaty",
    price: 12.99,
    quantity: 0,
    id: 3,
  },
  {
    name: "Green Bowl",
    ingredients: "Healthy and green for you",
    price: 18.99,
    quantity: 0,
    id: 4,
  },
];
export const CartContext = React.createContext();

export const CartProvider = (props) => {
  const [cart, dispatchCart] = useReducer(cartReducer, initialState);

  const cartContext = {
    cart,
    dispatchCart,
    dishesData,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );

  // const [cart, setCart] = useState([]);

  // return (
  //   <CartContext.Provider
  //     value={{
  //       cart,
  //       setCart,
  //       dishesData: dishesData,
  //     }}
  //   >
  //     {props.children}
  //   </CartContext.Provider>
  // );
};
