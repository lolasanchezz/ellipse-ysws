"use client";

import dynamic from "next/dynamic";
import styles from "./Examples.module.css";
import ExampleCard from "./ExampleCard";

const EXAMPLES = [
  {
    title: "blot-cats",
    language: "javascript",
    difficulty: "moderate",
    image: "/blot-cat.png",
    link: "https://lolasanchezz.github.io/blot-cats/",
    description:
      "a cat made of little dots! pseudo random. originally coded for the hack club blot.",
    align: "left" as const,
  },
  {
    title: "live-photo-mosaic",
    language: "python",
    difficulty: "difficult",
    image: "/oli.png",
    link: "https://github.com/lolasanchezz/live-photo-mosaic",
    description:
      "a live webcam feed rebuilt out of tiny tiled photos, through the power of data science and exporting my photos on my mac. a 300 line python script.",
    align: "center" as const,
  },
  {
    title: "logarithmic spiral",
    language: "javascript",
    difficulty: "easy",
    image: "/fractal-swirl.png",
    link: "https://github.com/lolasanchezz/spiralfractal",
    description:
      "a logarithmic spiral! made to picture dantes inferno in a fractal. super simple algorithim",
    align: "right" as const,
  },
];

export default function Examples() {
  return (
    <section className={styles.examples}>
      <h2 className={styles.heading}>examples</h2>
      <h3>
        ps: all these examples are mine! if you have any questions, reach out to
        @lola on slack.
      </h3>

      <div className={styles.grid}>
        {EXAMPLES.map((ex) => (
          <ExampleCard
            link={ex.link}
            key={ex.title}
            title={ex.title}
            language={ex.language}
            difficulty={ex.difficulty}
            image={ex.image}
            description={ex.description}
            align={ex.align}
          />
        ))}
      </div>
    </section>
  );
}
