"use client";

import { Gloria_Hallelujah } from "next/font/google";

import { useEffect, useState } from "react";
import Image from "next/image";

import classes from "./BackToTop.module.css";

import backToTop from "@/public/back-to-top.png";

const gloriaHallelujah = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: "400",
});

export default function BackToTop() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setIsScrolled(window.scrollY > 100);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const toTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`${classes["back-to-top"]} ${gloriaHallelujah.className} ${
        isScrolled ? classes.show : ""
      }`}
    >
      <button className={classes["back-to-top-button"]} onClick={toTop}>
        <Image
          className={classes["back-to-top-img"]}
          src={backToTop}
          alt="Arrow"
        />
      </button>
    </div>
  );
}
