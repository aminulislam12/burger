import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavItem } from "reactstrap";
import { connect } from "react-redux";

const mapStatetoProps = (state) => {
  return {
    token: state.token,
  };
};
const Header = (props) => {
  console.log(props);
  let link = null;
  if (props.token === null) {
    link = (
      <Nav navbar className="mr-auto">
        <NavItem>
          <NavLink exact to="/authform" className="nav-link">
            Login
          </NavLink>
        </NavItem>
      </Nav>
    );
  } else {
    link = (
      <Nav navbar className="mr-auto">
        <NavItem>
          <NavLink exact to="/" className="nav-link">
            BurgerBuilder
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink exact to="/orders" className="nav-link">
            Orders
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink exact to="/logout" className="nav-link">
            Logout
          </NavLink>
        </NavItem>
      </Nav>
    );
  }
  return (
    <div>
      <Navbar color="dark" expand="md" dark container>
        <NavLink to="/" exact className="text-light fw-bold navbar-brand">
          myBurger
        </NavLink>
        {link}
      </Navbar>
    </div>
  );
};
export default connect(mapStatetoProps)(Header);
