import React from "react";
import "./PricingComparisons.scss";
import Check from "../../assets/pricing/desktop/check.svg?react";
import { motion } from "motion/react";

export default function PricingComparisons() {
  const features = [
    {
      title: "UNLIMITED STORY POSTING",
      basic: true,
      pro: true,
      business: true,
    },
    { title: "UNLIMITED PHOTO UPLOAD", basic: true, pro: true, business: true },
    {
      title: "EMBEDDING CUSTOM CONTENT",
      basic: false,
      pro: true,
      business: true,
    },
    { title: "CUSTOMIZE METADATA", basic: false, pro: true, business: true },
    { title: "ADVANCED METRICS", basic: false, pro: false, business: true },
    { title: "PHOTO DOWNLOADS", basic: false, pro: false, business: true },
    {
      title: "SEARCH ENGINE INDEXING",
      basic: false,
      pro: false,
      business: true,
    },
    { title: "CUSTOM ANALYTICS", basic: false, pro: false, business: true },
  ];

  return (
    <section className="comparisons">
      <motion.h1
        className="comparisons__header"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{
          scale: 1,
          opacity: 1,
        }}
        transition={{ delay: 0.1, duration: 0.4 }}
        viewport={{ amount: 1, once: true }}
      >
        compare
      </motion.h1>
      <table className="comparisons__table">
        <thead>
          <tr>
            <th>THE FEATURES</th>
            <th>BASIC</th>
            <th>PRO</th>
            <th>BUSINESS</th>
          </tr>
        </thead>
        <tbody>
          {features.map((item, index) => (
            <motion.tr
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              viewport={{ amount: 0.8, once: true }}
            >
              <td>{item.title}</td>
              <td>{item.basic && <Check />}</td>
              <td>{item.pro && <Check />}</td>
              <td>{item.business && <Check />}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
