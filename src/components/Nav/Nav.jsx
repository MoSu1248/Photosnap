import React, { useState } from "react";
import "./Nav.scss";
import logo from "../../assets/shared/desktop/logo.svg";
import Navbar from "./Navbar";
import { motion } from "motion/react";
import menu from "../../assets/shared/mobile/menu.svg";
import closeMenu from "../../assets/shared/mobile/close.svg";
import MobileNav from "../MobileNav/MobileNav";
import { AnimatePresence } from "motion/react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  function MobileClickHandler() {
    setOpen(!open);
    document.querySelector("body").classList.toggle("disabled");
  }

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
        <Link to={"/"} className="nav__logo">
          <img src={logo} alt="Site Logo" />
        </Link>
        <Navbar />

        {!open && (
          <img
            src={menu}
            alt=""
            className="mobile__menu-icon"
            onClick={() => {
              MobileClickHandler();
            }}
          />
        )}
        {open && (
          <img
            src={closeMenu}
            alt=""
            className="mobile__menu-icon"
            onClick={() => {
              MobileClickHandler();
            }}
          />
        )}
        <button className="nav__btn">Get an Invite</button>
      </div>
      <AnimatePresence>
        {open && <MobileNav clicked={MobileClickHandler} />}{" "}
      </AnimatePresence>
    </motion.header>
  );
}
