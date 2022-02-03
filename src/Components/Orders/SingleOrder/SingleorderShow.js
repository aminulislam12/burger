import React from "react";
import "./single.css";

const SingleOrderShow = (props) => {
  const ingredients = props.order.ingredient.map((item) => {
    return (
      <span key={Math.random()} className="ingredients">
        {item.amount} x {item.type}
      </span>
    );
  });
  return (
    <>
      <div className="col-md-4">
        <div className="orderShow shadow-sm">
          <strong>
            <i className="bi bi-receipt mx-1"></i>
            {props.order.id}
          </strong>
          <h5>
            <i className="bi bi-person-fill mx-1"></i>
            {props.order.custometinfo.customerName}
          </h5>
          <h5>
            <i className="bi bi-geo-alt-fill mx-1"></i>
            {props.order.custometinfo.customerdeliveryAdd}
          </h5>
          <h5>
            <i className="bi bi-telephone mx-1"></i>
            {props.order.custometinfo.customerPhone}
          </h5>
          <div className="mt-3 mb-2">
            <i className="bi bi-basket-fill mx-1"></i>
            {ingredients}
          </div>
          <span className="badge bg-success price">
            BDT: {props.order.totalPrice} Tk
          </span>
        </div>
      </div>
    </>
  );
};

export default SingleOrderShow;
