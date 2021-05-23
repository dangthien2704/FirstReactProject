// import { CartProvider } from "./CartContext";

export const initialState = {
  basket: [],
};

export const cartReducer = (state, action) => {
  // console.log(action);
  const existingItem = state.basket.find((item) => item.id === action.item.id);
  const updatedBasket = [...state.basket];
  switch (action.type) {
    case "ADD_TO_CART":
      if (existingItem) {
        const updatedState = { ...state };
        const updatedItem = state.basket.find(
          (item) => item.id === existingItem.id
        );
        updatedItem.quantity += action.item.quantity;
        return { ...updatedState };
      } else {
        return { ...state, basket: [action.item, ...state.basket] };
      }
    case "INCREASE_ITEM":
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedBasket[action.index] = updatedItem;
      return {
        ...state,
        basket: updatedBasket,
      };
    case "REMOVE_FROM_CART":
      if (existingItem.quantity < 2) {
        return {
          ...state,
          basket: state.basket.filter((item) => item.id !== existingItem.id),
        };
      } else {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        };
        updatedBasket[action.index] = updatedItem;

        return {
          ...state,
          basket: updatedBasket,
        };
      }

    default:
      return state;
  }
};
