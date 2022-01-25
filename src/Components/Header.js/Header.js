import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavItem } from "reactstrap";

const Header = () => {
  return (
    <div>
      <Navbar color="dark" expand="md" dark container>
        <NavLink to="/" exact className="text-light fw-bold navbar-brand">
          myBurger
        </NavLink>
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
            <NavLink exact to="/authform" className="nav-link">
              Login
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};
export default Header;
