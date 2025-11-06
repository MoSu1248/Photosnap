import React from "react";
import Button_2 from "../../components/Buttons/Button_2";
import "./StoriesCard.scss";

export default function StoriesCard({ img, title, author, date }) {
  return (
    <div className="card">
      <img src={img} alt="mountain-img" className="card__img" />
      <div className="card__overlay"></div>
      <div className="card__content">
        <div className="card__text">
          <p className="card__text-date">{date}</p>
          <h4 className="card__text-title">{title}</h4>
          <p className="card__text-name">{author}</p>
        </div>
        <Button_2 text={"read story"} />
      </div>
    </div>
  );
}
