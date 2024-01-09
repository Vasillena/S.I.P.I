"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import image5 from "@/public/5.png";
import image6 from "@/public/6.png";
import image7 from "@/public/7.png";
import image8 from "@/public/8.png";
import image9 from "@/public/9.png";
import image10 from "@/public/10.png";
import image11 from "@/public/11.png";
import image12 from "@/public/12.png";
import image13 from "@/public/13.png";
import image14 from "@/public/14.png";
import image15 from "@/public/15.png";
import image16 from "@/public/16.png";

import classes from "./Slideshow2.module.css";

const images = [
  { image: image5, alt: "image1" },
  { image: image6, alt: "image2" },
  { image: image7, alt: "image3" },
  { image: image8, alt: "image1" },
  { image: image9, alt: "image2" },
  { image: image10, alt: "image3" },
  { image: image11, alt: "image1" },
  { image: image12, alt: "image2" },
  { image: image13, alt: "image3" },
  { image: image14, alt: "image1" },
  { image: image15, alt: "image2" },
  { image: image16, alt: "image3" },
];

export default function ImageSlideshow2() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
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
