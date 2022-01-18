import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";

const Header = () => {
  return (
    <div>
      <Navbar color="dark" expand="md" dark container>
        <NavbarBrand href="/">burgerBuilder</NavbarBrand>
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
        </Nav>
      </Navbar>
    </div>
  );
};
export default Header;
