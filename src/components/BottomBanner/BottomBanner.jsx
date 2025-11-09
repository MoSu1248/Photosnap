import React from "react";
import "./BottomBanner.scss";
import Button_2 from "../Buttons/Button_2";

export default function BottomBanner() {
  return (
    <div className="bottomBanner">
      <div className="bottomBanner__container">
        <h2 className="bottomBanner__title">
          We’re in beta. Get your invite today!
        </h2>
        <Button_2 text={`Get an invite`} />
      </div>
    </div>
  );
}
