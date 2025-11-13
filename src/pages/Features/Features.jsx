import React from "react";
import "./Features.scss";
import FeaturesData from "../../data/Features";
import FeaturesSection from "../../components/Features/Features";
import Hero from "../../components/Hero/Hero";
import BottomBanner from "../../components/BottomBanner/BottomBanner";

export default function Features() {
  return (
    <div className="feature-section">
      <Hero
        background={"features"}
        text={
          "We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
        }
        title={"FEATURES"}
      />
      <section className="features">
        {FeaturesData.map((item, index) => (
          <FeaturesSection
            img={item.img}
            title={item.title}
            text={item.desc}
            key={index}
            item={index}
            index={index}
          />
        ))}
      </section>
      <BottomBanner />
    </div>
  );
}
