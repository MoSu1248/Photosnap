import React from "react";
import "./Features.scss";
import { motion } from "motion/react";

export default function Features({ img, title, text, item, index }) {
  return (
    <motion.div
      className="features__container"
      initial={{ y: 40, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{ delay: 0.1 * index, duration: 0.4 }}
      viewport={{ amount: 0.8, once: true }}
    >
      <motion.img
        src={img}
        alt=""
        className={`features__img featured-${item}`}
      />
      <div className="features__content">
        <motion.h4 className="features__title">{title}</motion.h4>
        <motion.p className="features__text">{text}</motion.p>
      </div>
    </motion.div>
  );
}
