import React from "react";
import "./Button_2.scss";
import Arrow from "../../assets/shared/desktop/arrow.svg?react";

export default function Button_2({ text }) {
  return (
    <button className="button_2">
      <p>{text}</p> <Arrow />
    </button>
  );
}
