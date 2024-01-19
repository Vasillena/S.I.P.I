"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import classes from "./BackToTop.module.css";

import backToTop from "@/public/back-to-top.png";

export default function BackToTop() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${classes["back-to-top"]} ${isScrolled ? classes.show : ""}`}
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
