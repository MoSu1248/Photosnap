import React from "react";
import "./Stories.scss";
import BottomBanner from "../../components/BottomBanner/BottomBanner";
import StoriesCard from "../../components/Stories/StoriesCard";
import Storiess from "../../data/Stories";
import StoriesHero from "./StoresHero";
export default function Stories() {
  return (
    <div className="stories-section">
      <StoriesHero />
      <section className="cards cards-home">
        {Storiess.map((item, index) => (
          <StoriesCard
            img={item.img}
            date={item.date}
            title={item.title}
            author={item.author}
            key={item.title}
            index={index}
          />
        ))}
      </section>
    </div>
  );
}
