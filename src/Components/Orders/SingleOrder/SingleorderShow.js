import React from "react";
import "./single.css";

const SingleOrderShow = (props) => {
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
        </div>
      </div>
    </>
  );
};

export default SingleOrderShow;
