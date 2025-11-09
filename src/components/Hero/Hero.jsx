import React from "react";
import "./Hero.scss";
import Button_2 from "../Buttons/Button_2";

export default function Hero({ background, title, text }) {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__gradient"></div>
        <h1 className="hero__header">{title}</h1>
        <p className="hero__text">{text}</p>
        <Button_2 text={"get an invite"} />
      </div>
      <div className={`hero__background ${background}-section`}></div>
    </section>
  );
}
