import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { NavLink as RouterLink } from "react-router-dom";
import style from "./Header.module.css";

const Header = (props) => {
  const { navItems } = props;

  // imposto il toggle per visualizzare il menu responsive
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
    <header>
      <Navbar fixed="top" light expand="md" className={style.navBar}>
        <RouterLink to="/">
          <img src={props.logo} className={style.logo} alt="logo" />
        </RouterLink>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {navItemsList}
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
