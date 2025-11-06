import React from "react";
import Button_2 from "../../components/Buttons/Button_2";
import "./HighlightSection.scss";
export default function HighlightSection({
  title,
  text,
  buttontxt,
  background,
}) {
  return (
    <section className={`highlights ${background}__content`}>
      <div className={`highlights__content `}>
        <h1 className="highlights__header">{title}</h1>
        <p className="highlights__text">{text}</p>
        <Button_2 text={buttontxt} />
      </div>
      <div className={`highlights__background ${background}-img`}></div>
    </section>
  );
}
