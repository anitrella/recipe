import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Footer.module.css";
import unimib from "../../assets/images/unimib.png";
import disco from "../../assets/images/disco.png";

function Footer(props) {
  const { courseName, courseLink, navItems } = props;

  const itemList = navItems.map((item) => {
    return (
      <li key={item.url} className="nav-item">
        <NavLink
          end
          className={({ isActive }) => `${isActive ? style.active : null}`}
          to={item.url}
        >
          {item.text}
        </NavLink>
      </li>
    );
  });

  return (
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <nav className={style.footerNav}>
              <ul className="nav flex-column">{itemList}</ul>
            </nav>
          </div>

          <div className="col-md-auto">
            <div className={`d-flex ${style.copyright}`}>
              <div id={style.course}>
                <a href={courseLink} target="_blank">
                  {courseName}
                </a>
              </div>

              <div id={style.disco} className={style.logo}>
                <a href="http://www.disco.unimib.it/it" target="_blank">
                  <img src={disco} alt="disco" />
                </a>
              </div>

              <div id={style.unimib} className={style.logo}>
                <a href="http://www.unimib.it/it" target="_blank">
                  <img src={unimib} alt="unimib" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
