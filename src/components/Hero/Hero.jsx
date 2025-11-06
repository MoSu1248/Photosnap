import React from "react";
import "./Hero.scss";
import Button_2 from "../Buttons/Button_2";

export default function Hero({ background }) {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__gradient"></div>
        <h1 className="hero__header">Create and share your photo stories.</h1>
        <p className="hero__text">
          Photosnap is a platform for photographers and visual storytellers. We
          make it easy to share photos, tell stories and connect with others.
        </p>
        <Button_2 text={"get an invite"} />
      </div>
      <div className={`hero__background ${background}-section`}></div>
    </section>
  );
}
