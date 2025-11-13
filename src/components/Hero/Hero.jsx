import React from "react";
import "./Hero.scss";
import Button_2 from "../Buttons/Button_2";
import { motion } from "motion/react";

export default function Hero({ background, title, text }) {
  const childVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="hero">
      <motion.div
        className="hero__content"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        <div className="hero__gradient"></div>
        <motion.h1 className="hero__header" variants={childVariant}>
          {title}
        </motion.h1>
        <motion.p className="hero__text" variants={childVariant}>
          {text}
        </motion.p>
        <Button_2 text={"get an invite"} variants={childVariant} />
      </motion.div>
      <motion.div
        className={`hero__background ${background}-section`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { delay: 0.5, duration: 0.5 },
        }}
      ></motion.div>
    </section>
  );
}
