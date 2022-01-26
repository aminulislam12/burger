import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./Header.js/Header";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import Orders from "./Orders/Orders";
import Checkout from "./Orders/Checkout/Checkout";
import AuthForm from "./Auth/AuthForm";
import { connect } from "react-redux";
import { authCheck } from "./redux/Authactioncreaors";
import Logout from "./Auth/Logout";

const mapStatetoProps = (state) => {
  return {
    token: state.token,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    authchek: () => dispatch(authCheck()),
  };
};

class Main extends Component {
  componentDidMount() {
    this.props.authchek();
  }
  render() {
    let routes = null;
    if (this.props.token === null) {
      routes = (
        <Switch>
          <Route exact path="/authform" component={AuthForm} />
          <Redirect to="/authform" />
        </Switch>
      );
    } else {
      routes = (
        <Switch>
          <Route exact path="/" component={BurgerBuilder} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/logout" component={Logout} />
          <Redirect to="/" />
        </Switch>
      );
    }
    return (
      <div>
        <Header />
        {routes}
      </div>
    );
  }
}
export default connect(mapStatetoProps, mapDispatchToProps)(Main);
