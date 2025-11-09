import React from "react";
import "./Home.scss";
import Hero from "../../components/Hero/Hero";
import HighlightSection from "./HighlightSection";
import Features from "../../components/Features/Features";

import Stories from "../../data/Stories";
import StoryCard from "../../components/Stories/StoriesCard";
import FeaturesData from "../../data/Features";

export default function Home() {
  return (
    <div className="home">
      <Hero
        background={"home"}
        title={"Create and share your photo stories."}
        text={
          "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
        }
      />
      <HighlightSection
        text={
          "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
        }
        title={"BEAUTIFUL STORIES EVERY TIME"}
        buttontxt={"VIEW THE STORIES"}
        background={"highlight__1"}
      />
      <HighlightSection
        text={
          "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. "
        }
        title={"DESIGNED FOR EVERYONE"}
        buttontxt={"VIEW THE STORIES"}
        background={"highlight__2"}
      />

      <section className="cards cards-home">
        {Stories.slice(0, 4).map((item) => (
          <StoryCard
            img={item.img}
            date={item.date}
            title={item.title}
            author={item.author}
            key={item.title}
          />
        ))}
      </section>

      <section className="features">
        {FeaturesData.slice(0, 3).map((item, index) => (
          <Features
            img={item.img}
            title={item.title}
            text={item.desc}
            key={index}
            item={index}
          />
        ))}
      </section>
    </div>
  );
}
