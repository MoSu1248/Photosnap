import { motion } from "motion/react";
import React from "react";
import Button_2 from "../../components/Buttons/Button_2";
import "./StoriesHero.scss";

export default function StoresHero() {
  const childVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="hero stories__background">
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
        <motion.p variants={childVariant} className="hero__text">
          LAST MONTH’S FEATURED STORY
        </motion.p>
        <motion.h1 className="hero__header" variants={childVariant}>
          HAZY FULL MOON OF APPALACHIA
        </motion.h1>
        <motion.p className="card__text-date" variants={childVariant}>
          March 2nd 2020{" "}
          <span className="card__text-name">by John Appleseed</span>
        </motion.p>

        <motion.p className="hero__text" variants={childVariant}>
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called "mountains," especially in eastern
          Kentucky and West Virginia, and while the ridges are not high, the
          terrain is extremely rugged.
        </motion.p>
        <Button_2 text={"READ THE STORY"} variants={childVariant} />
      </motion.div>
      
    </section>
  );
}
