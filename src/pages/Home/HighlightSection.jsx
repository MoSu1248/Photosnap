import React from "react";
import Button_2 from "../../components/Buttons/Button_2";
import "./HighlightSection.scss";
import { motion } from "motion/react";

export default function HighlightSection({
  title,
  text,
  buttontxt,
  background,
}) {
  const childVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className={`highlights ${background}__content`}>
      <motion.div
        className={`highlights__content `}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.9, once: true }}
      >
        <motion.h1 className="highlights__header" variants={childVariant}>
          {title}
        </motion.h1>
        <motion.p className="highlights__text" variants={childVariant}>
          {text}
        </motion.p>
        <Button_2 text={buttontxt} variants={childVariant} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { delay: 0.8, duration: 0.5 },
        }}
        viewport={{ amount: 0.8, once: true }}
        className={`highlights__background ${background}-img`}
      ></motion.div>
    </section>
  );
}
