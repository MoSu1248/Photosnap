import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar({clicked}) {
  const navLinks = [
    { label: "home", to: "/" },
    { label: "stories", to: "/stories" },
    { label: "features", to: "/features" },
    { label: "pricing", to: "/pricing" },
  ];
  return (
    <nav className="nav__bar">
      <ul className="nav__list">
        {navLinks.map((link) => (
          <li className={`nav__item link-${link.label}`} key={link.label}>
            <NavLink to={link.to} className={"nav__link"} onClick={()=>{clicked(false)}}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
