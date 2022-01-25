import React from "react";
import Ingredient from "../Ingredients/Ingredient";
import "./Burger.css";

const Burger = (props) => {
  let IngamountArry = props.inGredient
    .map((item) => {
      let amountArry = [...Array(item.amount).keys()];
      return amountArry.map((_) => {
        return <Ingredient type={item.type} key={Math.random()} />;
      });
    })
    .reduce((sum, element) => {
      return sum.concat(element);
    }, []);
  if (IngamountArry.length === 0) {
    IngamountArry = (
      <p className="text-center fw-bold my-2">Plase Add Ingredient</p>
    );
  }
  return (
    <div className="burger">
      <Ingredient type="breadTop" />
      {IngamountArry}
      <Ingredient type="breadBottom" />
    </div>
  );
};

export default Burger;
