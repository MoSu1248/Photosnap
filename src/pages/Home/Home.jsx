import React from "react";
import "./Home.scss";
import Hero from "../../components/Hero/Hero";
import HighlightSection from "./HighlightSection";
import Features from "../../components/Features/Features";

import Stories from "../../data/Stories";
import StoryCard from "../../components/Stories/StoriesCard";
import FeaturesData from "../../data/Features";

export default function Home() {
  const highlights = [
    {
      text: "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
      title: "BEAUTIFUL STORIES EVERY TIME",
      background: "highlight__1",
      btnText: "VIEW THE STORIES",
    },
    {
      text: "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. ",
      title: "DESIGNED FOR EVERYONE",
      background: "highlight__2",
      btnText: "VIEW THE STORIES",
    },
  ];

  return (
    <div className="home">
      <Hero
        background={"home"}
        title={"Create and share your photo stories."}
        text={
          "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
        }
      />
      {highlights.map((item, index) => (
        <HighlightSection
          key={index}
          text={item.text}
          title={item.title}
          buttontxt={item.btnText}
          background={item.background}
        />
      ))}
      <section className="cards cards-home">
        {Stories.slice(0, 4).map((item, index) => (
          <StoryCard
            img={item.img}
            date={item.date}
            title={item.title}
            author={item.author}
            key={index}
            index={index}
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
            index={index}
          />
        ))}
      </section>
    </div>
  );
}
