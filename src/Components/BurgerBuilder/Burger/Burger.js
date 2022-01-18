import React from "react";
import Ingredient from "../Ingredients/Ingredient";
import "./Burger.css";

const Burger = (props) => {
  return (
    <div className="burger">
      <Ingredient type="breadTop" />
      <Ingredient type="salad" />
      <Ingredient type="cheese" />
      <Ingredient type="meat" />
      <Ingredient type="meat" />
      <Ingredient type="meat" />
      <Ingredient type="meat" />
      <Ingredient type="breadBottom" />
    </div>
  );
};

export default Burger;
