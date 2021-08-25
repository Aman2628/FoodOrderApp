import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const cartShowHandler = () => {
    setIsCartShown(true);
  };

  const cartHideHandler = () => {
    setIsCartShown(false);
  };
  return (
    <CartProvider>
      {isCartShown && <Cart onHide={cartHideHandler} />}
      <Header onShow={cartShowHandler}></Header>
      <Meals></Meals>
    </CartProvider>
  );
}

export default App;
