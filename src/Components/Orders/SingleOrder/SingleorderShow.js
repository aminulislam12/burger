import React from "react";
import "./single.css";

const SingleOrderShow = (props) => {
  return (
    <>
      <div className="col-md-4">
        <div className="orderShow shadow-sm">
          <strong>Order No: {props.order.id} </strong>
          <h5>Name: {props.order.custometinfo.customerName} </h5>
        </div>
      </div>
    </>
  );
};

export default SingleOrderShow;
