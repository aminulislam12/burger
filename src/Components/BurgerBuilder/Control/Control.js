import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "reactstrap";
import "./Control.css";

const BuildBurger = (props) => {
  return (
    <div className="d-flex justify-content-between">
      <div className="fw-bold">Salad</div>
      <div className="">
        <button className="btn btn-success mx-1">
          <i className="fa fa-plus"></i>
        </button>
        <button className="btn btn-danger">
          <i className="fa fa-minus"></i>
        </button>
      </div>
    </div>
  );
};

const Control = (props) => {
  return (
    <div>
      <Card className="my-5">
        <CardHeader className="tophead">
          <h5 className="text-center text-light fw-bold">Add Ingredient</h5>
        </CardHeader>
        <CardBody>
          <BuildBurger />
        </CardBody>
        <CardFooter className="bg-dark">
          <h5 className="text-center text-light">Price: BDT</h5>
        </CardFooter>
        <button className="btn btn-success d-block">Order Now</button>
      </Card>
    </div>
  );
};

export default Control;
