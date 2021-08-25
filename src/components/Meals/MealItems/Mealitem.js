import { useContext } from "react";
import "./Mealitem.css";
import MealitemForm from "./MealitemForm";
import CartContext from "../../../store/cart-context";
const Mealitem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <MealitemForm onAddToCart={addToCartHandler}></MealitemForm>
      </div>
    </li>
  );
};

export default Mealitem;
