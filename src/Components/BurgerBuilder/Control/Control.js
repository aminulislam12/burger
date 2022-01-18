import React from "react";
import { Button, Card, CardBody, CardFooter, CardHeader } from "reactstrap";
import "./Control.css";

const control = [
  { lable: "Salad", type: "Salad" },
  { lable: "Cheese", type: "Cheese" },
  { lable: "Meat", type: "Meat" },
];
const BuildBurger = (props) => {
  return (
    <div className="d-flex justify-content-between my-2">
      <div className="fw-bold items">{props.lable}</div>
      <div>
        <button className="btn btn-success mx-1" onClick={props.add}>
          <i className="fa fa-plus"></i>
        </button>
        <button className="btn btn-danger" onClick={props.remove}>
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
          {control.map((item) => {
            return (
              <BuildBurger
                lable={item.lable}
                type={item.type}
                key={Math.random()}
                add={() => props.addIngredient(item.type)}
                remove={() => props.removeIngredient(item.type)}
              />
            );
          })}
        </CardBody>
        <CardFooter className="bg-dark">
          <h5 className="text-center text-light">Price: {props.price} BDT</h5>
        </CardFooter>
        <Button
          className="btn btn-success d-block"
          onClick={props.toggleModal}
          disabled={!props.purchesable}
        >
          Order Now
        </Button>
      </Card>
    </div>
  );
};

export default Control;
