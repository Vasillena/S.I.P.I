"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import classes from "./Slideshow.module.css";

import image1 from "@/public/1.jpg";
import image2 from "@/public/2.jpg";
import image3 from "@/public/3.jpg";

const images = [
  { image: image1, alt: "Bar image" },
  { image: image2, alt: "Bar image" },
  { image: image3, alt: "Bar image" },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 8000);

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
          fill={true}
          loading={index === 0 ? "eager" : "lazy"}
        />
      ))}
    </div>
  );
}
