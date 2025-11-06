import React from "react";
import "./Features.scss";
export default function Features({ img, title, text, item }) {
  return (
    <div className="features__container">
      <img src={img} alt="" className={`features__img featured-${item}`} />
      <div className="features__content">
        <h4 className="features__title">{title}</h4>
        <p className="features__text">{text}</p>
      </div>
    </div>
  );
}
