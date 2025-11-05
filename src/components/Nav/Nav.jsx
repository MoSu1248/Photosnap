import React from "react";
import "./Nav.scss";
import logo from "../../assets/shared/desktop/logo.svg";
import Navbar from "./Navbar";

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav__container">
        <a href="/" className="nav__logo">
          <img src={logo} alt="Site Logo" />
        </a>
        <Navbar />
        <button className="nav__btn">Get an Invite</button>
      </div>
    </header>
  );
}
