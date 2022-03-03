import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink as RouterLink } from "react-router-dom";
import style from "./Header.module.css";

const Header = (props) => {
  const { navItems } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const navItemsList = navItems.map((navItem, index) => {
    return (
      <NavItem className={style.navItem} key={index}>
        <RouterLink
          className={({ isActive }) =>
            `nav-link ${style.navLink} ${isActive ? style.active : null}`
          }
          to={navItem.url}
        >
          {navItem.text}
        </RouterLink>
      </NavItem>
    );
  });

  return (
    <div>
      <Navbar fixed="top" light expand="md" className={style.navBar}>
        <RouterLink to="/">
          <img src={props.logo} className={style.logo} />
        </RouterLink>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {navItemsList}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
