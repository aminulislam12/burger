import React from "react";
import { Route } from "react-router-dom";
import Header from "./Header.js/Header";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import Orders from "./Orders/Orders";
import Checkout from "./Orders/Checkout/Checkout";

const Main = () => {
  return (
    <div>
      <Header />
      <Route exact path="/" component={BurgerBuilder} />
      <Route exact path="/orders" component={Orders} />
      <Route exact path="/checkout" component={Checkout} />
    </div>
  );
};
export default Main;
