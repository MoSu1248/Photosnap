import React from "react";
import "./MobileNav.scss";
import Navbar from "../Nav/Navbar";
import Button_1 from "../Buttons/Button_1";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";

export default function MobileNav({ clicked }) {
  return (
    <motion.div
      className="mobileNav"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="mobileNav__container"
        initial={{ y: "-100%", opacity: 0.5 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        exit={{ y: "-100%" }}
      >
        <Navbar clicked={clicked} />
        <Button_1 text={"GET AN INVITE"} />
      </motion.div>
    </motion.div>
  );
}
