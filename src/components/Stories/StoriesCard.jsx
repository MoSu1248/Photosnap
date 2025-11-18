import React from "react";
import Button_2 from "../../components/Buttons/Button_2";
import "./StoriesCard.scss";
import { delay, motion } from "motion/react";
import useWindowDimensions from "../WindowDimensions/WindowDimensions"; // Assuming the hook is in a separate file

export default function StoriesCard({ img, title, author, date, index }) {
  const { width } = useWindowDimensions();
  const isMobile = width < 900;

  return (
    <motion.div
      className="card"
      initial={{ y: 40, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{ delay: 0.1 * index, duration: 0.2 }}
      viewport={{ amount: 0.5, once: true }}
    >
      {isMobile ? (
        <img src={img[1]} alt={`${title}-img`} className="card__img" />
      ) : (
        <img src={img[0]} alt={`${title}-img`} className="card__img" />
      )}
      <img src={img[0]} alt={`${title}-img`} className="card__img" />
      <div className="card__overlay"></div>
      <div className="card__content">
        <div className="card__text">
          <motion.p className="card__text-date">{date}</motion.p>
          <motion.h4 className="card__text-title">{title}</motion.h4>
          <motion.p className="card__text-name">{author}</motion.p>
        </div>
        <Button_2 text={"read story"} />
      </div>
    </motion.div>
  );
}
