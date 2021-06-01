import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import CartModal from "./components/Cart/CartModal";
import { useState } from "react";
import { CartProvider } from "./store/CartContext";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const handlerCartModal = () => {
    setCartIsShown(true);
  };

  const handlerCloseModal = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && (
        <CartModal
          setCartIsShown={setCartIsShown}
          onCloseModal={handlerCloseModal}
        />
      )}
      <Header onOpenModal={handlerCartModal} />
      <Home />
    </CartProvider>
  );
}

export default App;
