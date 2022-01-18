import React from "react";
import "../Control/Control.css";

const Summary = (props) => {
  const inGredients = props.inGredient.map((item) => {
    return (
      <li style={{ listStyle: "none" }} key={Math.random()}>
        <i className="fa fa-check-circle text-success icons"></i>{" "}
        <strong>{item.type} </strong> x<strong> {item.amount}</strong>
      </li>
    );
  });
  return (
    <div>
      <strong>Total Price {props.price} </strong>
      <ul>{inGredients}</ul>
    </div>
  );
};
export default Summary;
