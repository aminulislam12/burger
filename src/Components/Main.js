import React from "react";
import { Route } from "react-router-dom";
import Header from "./Header.js/Header";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import Orders from "./Orders/Orders";

const Main = () => {
  return (
    <div>
      <Header />
      <Route exact path="/" component={BurgerBuilder} />
      <Route exact path="/orders" component={Orders} />
    </div>
  );
};
export default Main;
