import React from "react";
import "./PageWrapper.scss";
import { motion } from "motion/react";

export default function PageWrapper({ children }) {
  const pageVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };
  const pageTransitions = {
    duration: 0.35,
    ease: "easeInOut",
  };

  return (
    <motion.div
      variants={pageVariants}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      transition={pageTransitions}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
}
