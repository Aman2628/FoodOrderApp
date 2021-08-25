import { Fragment } from "react";
import "./Header.css";
import mealImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className="header">
        <h1>ReactMeals</h1>
        <HeaderCartButton onShow={props.onShow} />
      </header>
      <div className="main-image">
        <img src={mealImage} alt="food" />
      </div>
    </Fragment>
  );
};

export default Header;
