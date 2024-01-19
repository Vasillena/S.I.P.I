"use client";

import { useState } from "react";
import Image from "next/image";
import classes from "./Menu.module.css";

import image1 from "@/public/menu-1.png";
import image2 from "@/public/menu-2.png";
import image3 from "@/public/menu-3.png";
import image4 from "@/public/menu-4.png";
import image5 from "@/public/menu-5.png";
import image6 from "@/public/menu-6.png";

import menuList from "../../menuList/menuList.json";

export default function Menu() {
  const [selectedTab, setSelectedTab] = useState("");

  const renderMenu = () => {
    const selectedCategory = menuList.menu.filter(
      (item) => item.category === selectedTab
    );
    const categoryName = menuList.menu.find(
      (item) => item.category === selectedTab
    );

    if (selectedCategory && categoryName) {
      return (
        <div className={classes.card}>
          <h2>{categoryName.category}</h2>
          {selectedCategory.map((item) => (
            <div key={item.id} className={classes["menu-card"]}>
              {item["semi-category"] && (
                <p className={classes["semi-category"]}>
                  {item["semi-category"]}
                </p>
              )}
              <div className={classes["name-price"]}>
                <p>{item.name}</p>
                <p>{`${item.price} / ${item.quantity}`}</p>
              </div>
              {item.description && (
                <p className={classes.description}>{item.description}</p>
              )}
            </div>
          ))}
        </div>
      );
    } else {
      return <div className={classes.card}></div>;
    }
  };

  return (
    <>
      <div className={classes["menu-container"]}>
        <h1>Menu</h1>
        <div className={classes.menu}>
          <div className={classes["menu-section"]}>
            <button
              className={classes["menu-icon"]}
              onClick={() => setSelectedTab("Hot Drinks")}
            >
              <Image src={image1} alt="Coffee icon" />
            </button>
            <p className={classes["menu-titles"]}>Hot Drinks</p>
          </div>
          <div className={classes["menu-section"]}>
            <button
              className={classes["menu-icon"]}
              onClick={() => setSelectedTab("Soft Drinks")}
            >
              <Image src={image2} alt="Soft drinks icon" />
            </button>
            <p className={classes["menu-titles"]}>Soft Drinks</p>
          </div>
          <div className={classes["menu-section"]}>
            <button
              className={classes["menu-icon"]}
              onClick={() => setSelectedTab("Cocktails")}
            >
              <Image src={image3} alt="Cocktail icon" />
            </button>
            <p className={classes["menu-titles"]}>Cocktails</p>
          </div>
          <div className={classes["menu-section"]}>
            <button
              className={classes["menu-icon"]}
              onClick={() => setSelectedTab("Wine")}
            >
              <Image src={image4} alt="Wine icon" />
            </button>
            <p className={classes["menu-titles"]}>Wine</p>
          </div>
          <div className={classes["menu-section"]}>
            <button
              className={classes["menu-icon"]}
              onClick={() => setSelectedTab("Alcohol")}
            >
              <Image src={image5} alt="Alcohol icon" />
            </button>
            <p className={classes["menu-titles"]}>Alcohol</p>
          </div>
          <div className={classes["menu-section"]}>
            <button
              className={classes["menu-icon"]}
              onClick={() => setSelectedTab("Beer")}
            >
              <Image src={image6} alt="Beer icon" />
            </button>
            <p className={classes["menu-titles"]}>Beer</p>
          </div>
        </div>
        {renderMenu()}
      </div>
    </>
  );
}
