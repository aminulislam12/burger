import React from "react";
import { Route } from "react-router-dom";
import Header from "./Header.js/Header";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import Orders from "./Orders/Orders";
import Checkout from "./Orders/Checkout/Checkout";
import AuthForm from "./Auth/AuthForm";
import Checkout2 from "./Orders/Checkout/Checkout2";

const Main = () => {
  return (
    <div>
      <Header />
      <Route exact path="/" component={BurgerBuilder} />
      <Route exact path="/orders" component={Orders} />
      <Route exact path="/authform" component={AuthForm} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/checkout2" component={Checkout2} />
    </div>
  );
};
export default Main;
