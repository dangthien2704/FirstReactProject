import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import CartModal from "./components/Cart/CartModal";
import { useState } from "react";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const handlerCartModal = () => {
    setCartIsShown(true);
  };

  const handlerCloseModal = () => {
    setCartIsShown(false);
  };

  return (
    <div>
      {cartIsShown && (
        <CartModal
          setCartIsShown={setCartIsShown}
          onCloseModal={handlerCloseModal}
        />
      )}
      <Header onOpenModal={handlerCartModal} />
      <Home />
    </div>
  );
}

export default App;
