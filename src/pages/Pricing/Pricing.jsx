import React from "react";
import "./Pricing.scss";
import BottomBanner from "../../components/BottomBanner/BottomBanner";
import Hero from "../../components/Hero/Hero";

export default function Pricing() {
  return (
    <div className="pricing-section">
      <Hero
        background={"pricing"}
        title={"PRICING"}
        text={
          "Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
        }
      />
      <BottomBanner />
    </div>
  );
}
