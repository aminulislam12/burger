import React from "react";
import breadTop from "../../assets/images/top.png";
import bottom from "../../assets/images/bottom.png";
import Salad from "../../assets/images/salad.png";
import Cheese from "../../assets/images/cheese.png";
import Meat from "../../assets/images/meat.png";
import "./ingredients.css";

const Ingredient = (props) => {
  let Ingredient = null;
  switch (props.type) {
    case "breadTop":
      Ingredient = (
        <div>
          <img src={breadTop} alt="breadTop" />
        </div>
      );
      break;
    case "breadBottom":
      Ingredient = (
        <div>
          <img src={bottom} alt="bottom" />
        </div>
      );
      break;
    case "salad":
      Ingredient = (
        <div>
          <img src={Salad} alt="salad" />
        </div>
      );
      break;
    case "cheese":
      Ingredient = (
        <div>
          <img src={Cheese} alt="cheese" />
        </div>
      );
      break;
    case "meat":
      Ingredient = (
        <div>
          <img src={Meat} alt="meat" />
        </div>
      );
      break;
    default:
      break;
  }
  return (
    <>
      <div className="ingredient">{Ingredient}</div>
    </>
  );
};

export default Ingredient;
