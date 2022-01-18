import React, { Component } from "react";
import Burger from "./Burger/Burger";
import Control from "./Control/Control";

class BurgerBuilder extends Component {
  render() {
    return (
      <div className="container">
        <div className="row my-5">
          <div className="col-md-6 col-sm-12">
            <Burger />
          </div>
          <div className="col-md-6 col-sm-12">
            <Control />
          </div>
        </div>
      </div>
    );
  }
}

export default BurgerBuilder;
