import React from "react";
import "./Stories.scss";
import BottomBanner from "../../components/BottomBanner/BottomBanner";
import StoriesCard from "../../components/Stories/StoriesCard";
import Storiess from "../../data/Stories";

export default function Stories() {
  return (
    <div className="stories-section">
      <section className="cards cards-home">
        {Storiess.map((item) => (
          <StoriesCard
            img={item.img}
            date={item.date}
            title={item.title}
            author={item.author}
            key={item.title}
          />
        ))}
      </section>
    </div>
  );
}
