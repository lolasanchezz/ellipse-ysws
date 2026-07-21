export type GalleryEntry = {
  name: string
  github: string
  description: string
  playableUrl: string
  codeUrl: string
  image: string
}

export const GALLERY: GalleryEntry[] = [
  {
    name: "Arnav C.",
    github: "Arnav-On-Top",
    description:
      "all 6 trigonometric functions graphed in rainbow color, with adjustable graph speed.",
    playableUrl: "https://arnav-on-top.github.io/Trigonometric-Rainbow/",
    codeUrl: "https://github.com/Arnav-On-Top/Trigonometric-Rainbow",
    image: "/gallery/arnav.png",
  },
  {
    name: "Anishka M.",
    github: "syntax-error4O4",
    description:
      "an abstract geometric design with shifting blues in the background, red and yellow polygons at the centre, and scattered markup throughout.",
    playableUrl: "https://syntax-error4o4.github.io/ellipse/",
    codeUrl: "https://github.com/syntax-error4O4/ellipse",
    image: "/gallery/anishka.jpg",
  },
  {
    name: "Anna S.",
    github: "mzums",
    description:
      "a visual generator that creates a detailed, symmetric snowflake over a procedurally generated background. built with python and pygame.",
    playableUrl: "https://github.com/mzums/generative_art/releases/download/test/snowflake",
    codeUrl: "https://github.com/mzums/generative_art",
    image: "/gallery/anna.png",
  },
  {
    name: "Edwin J.",
    github: "aeratory678",
    description: "circles inside more circles, with mouse-driven movement.",
    playableUrl: "https://elipso.vercel.app/",
    codeUrl: "https://github.com/aeratory678/elipso",
    image: "/gallery/edwin.jpg",
  },
]
