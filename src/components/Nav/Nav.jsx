import React from "react";
import "./Nav.scss";
import logo from "../../assets/shared/desktop/logo.svg";
import Navbar from "./Navbar";
import { motion } from "motion/react";
import menu from "../../assets/shared/mobile/menu.svg";

export default function Nav() {
  return (
    <motion.header
      className="nav"
      initial={{ y: "-80%" }}
      whileInView={{ y: 0 }}
      transition={{ delay: 0.1, duration: 0.4 }}
      viewport={{ amount: 0.1 }}
      exit={{ y: "-80%" }}
    >
      <div className="nav__container">
        <a href="/" className="nav__logo">
          <img src={logo} alt="Site Logo" />
        </a>
        <Navbar />
        <img src={menu} alt="" className="mobile__menu-icon"/>
        <button className="nav__btn">Get an Invite</button>
      </div>
    </motion.header>
  );
}
