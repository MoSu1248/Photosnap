import React from "react";
import "./BottomBanner.scss";
import Button_2 from "../Buttons/Button_2";
import { motion } from "motion/react";

export default function BottomBanner() {
  return (
    <motion.div
      className="bottomBanner"
      initial={{ x: "-95%" }}
      whileInView={{ x: 0 }}
      transition={{ delay: 0.3, duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="bottomBanner__container">
        <h2 className="bottomBanner__title">
          We’re in beta. Get your invite today!
        </h2>
        <Button_2 text={`Get an invite`} />
      </div>
    </motion.div>
  );
}
