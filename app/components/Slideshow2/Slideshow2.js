"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import classes from "./Slideshow2.module.css";

import image1 from "@/public/5.png";
import image2 from "@/public/6.png";
import image3 from "@/public/7.png";
import image4 from "@/public/8.png";
import image5 from "@/public/9.png";
import image6 from "@/public/10.png";
import image7 from "@/public/11.png";
import image8 from "@/public/12.png";
import image9 from "@/public/13.png";
import image10 from "@/public/14.png";
import image11 from "@/public/15.png";
import image12 from "@/public/16.png";

const images = [
  { image: image1, alt: "Party1" },
  { image: image2, alt: "Party2" },
  { image: image3, alt: "Party3" },
  { image: image4, alt: "Party4" },
  { image: image5, alt: "Party5" },
  { image: image6, alt: "Party6" },
  { image: image7, alt: "Party7" },
  { image: image8, alt: "Party8" },
  { image: image9, alt: "Party9" },
  { image: image10, alt: "Party10" },
  { image: image11, alt: "Party11" },
  { image: image12, alt: "Party12" },
];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const shuffledImages = shuffleArray(images);

export default function ImageSlideshow2() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < shuffledImages.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {shuffledImages.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ""}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
