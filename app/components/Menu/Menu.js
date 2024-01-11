"use client";

import { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import classes from "./Menu.module.css";

import image1 from "@/public/menu-1.png";
import image2 from "@/public/menu-2.png";
import image3 from "@/public/menu-3.png";
import image4 from "@/public/menu-4.png";
import image5 from "@/public/menu-5.png";
import image6 from "@/public/menu-6.png";

export default function Menu() {
  return (
    <>
      <div className={classes["menu-container"]}>
        <h1>Menu</h1>
        <p className={classes["title-paragraph"]}>
          Your corporate and special event in the heart of Kapana, Plovdiv
        </p>
        <div className={classes.menu}>
          <div className={classes["menu-section"]}>
            <button className={classes["menu-icon"]}>
              <Image src={image1} alt="Coffee icon" />
            </button>
          </div>
          <div className={classes["menu-section"]}>
            <button className={classes["menu-icon"]}>
              <Image src={image2} alt="Soft drinks icon" />
            </button>
          </div>
          <div className={classes["menu-section"]}>
            <button className={classes["menu-icon"]}>
              <Image src={image3} alt="Cocktail icon" />
            </button>
          </div>
          <div className={classes["menu-section"]}>
            <button className={classes["menu-icon"]}>
              <Image src={image4} alt="Wine icon" />
            </button>
          </div>
          <div className={classes["menu-section"]}>
            <button className={classes["menu-icon"]}>
              <Image src={image5} alt="Alcohol icon" />
            </button>
          </div>
          <div className={classes["menu-section"]}>
            <button className={classes["menu-icon"]}>
              <Image src={image6} alt="Beer icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
