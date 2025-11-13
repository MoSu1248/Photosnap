import React from "react";
import "./Button_2.scss";
import Arrow from "../../assets/shared/desktop/arrow.svg?react";
import { motion } from "motion/react";

export default function Button_2({ text, variants }) {
  return (
    <motion.button className="button_2" variants={variants}>
      <p>{text}</p> <Arrow />
    </motion.button>
  );
}
