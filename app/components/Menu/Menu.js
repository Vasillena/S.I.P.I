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

import menuList from "../../menuList/menuList.json";

export default function Menu() {
  const [selectedTab, setSelectedTab] = useState("");

  const renderCampaigns = () => {
    const selectedCategory = menuList.menu.filter(
      (item) => item.category === selectedTab
    );
    const categoryName = menuList.menu.find(
      (item) => item.category === selectedTab
    );
    console.log(categoryName);

    if (selectedCategory && categoryName) {
      return (
        <div className={classes.card}>
          <h2>{categoryName.category}</h2>
          {selectedCategory.map((item) => (
            <div key={item.id} className={classes["menu-card"]}>
              <p>{item.name}</p>
              <p>{`${item.price} / ${item.quantity}`}</p>
              {item.description && (
                <p className={classes.description}>{item.description}</p>
              )}
            </div>
          ))}
        </div>
      );
      // if (selectedTab === "HotDrinks") {
      //   return (
      //     <div
      //       className={classes.card}
      //     >
      //       <h2>Hot Drinks</h2>
      //       <div className={classes["menu-card"]}>
      //         <p>Coffee</p>
      //         <p>2.69 BGN / 50 ml</p>
      //       </div>
      //       <div className={classes["menu-card"]}>
      //         <p>Tea</p>
      //         <p>3.69 BGN / 250 ml</p>
      //       </div>
      //     </div>
      //   );
    } else {
      return <div className={classes.card}></div>;
    }
    // else if (selectedTab === "SoftDrinks") {
    //   return (
    //     <div
    //       className={classes.card}
    //     >
    //       <h2>Soft Drinks</h2>
    //       <div className={classes["menu-card"]}>
    //         <p>Mineral water</p>
    //         <p>2.50 BGN / 330 ml</p>
    //       </div>
    //       <div className={classes["menu-card"]}>
    //         <p>Sparkling water</p>
    //         <p>2.80 BGN / 330 ml</p>
    //       </div>
    //     </div>
    //   );
    // }
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
          </div>
          <div className={classes["menu-section"]}>
            <button
              className={classes["menu-icon"]}
              onClick={() => setSelectedTab("Soft Drinks")}
            >
              <Image src={image2} alt="Soft drinks icon" />
            </button>
          </div>
          <div className={classes["menu-section"]}>
            <button
              className={classes["menu-icon"]}
              onClick={() => setSelectedTab("Cocktails")}
            >
              <Image src={image3} alt="Cocktail icon" />
            </button>
          </div>
          <div className={classes["menu-section"]}>
            <button
              className={classes["menu-icon"]}
              onClick={() => setSelectedTab("Wine")}
            >
              <Image src={image4} alt="Wine icon" />
            </button>
          </div>
          <div className={classes["menu-section"]}>
            <button
              className={classes["menu-icon"]}
              onClick={() => setSelectedTab("Alcohol")}
            >
              <Image src={image5} alt="Alcohol icon" />
            </button>
          </div>
          <div className={classes["menu-section"]}>
            <button
              className={classes["menu-icon"]}
              onClick={() => setSelectedTab("Beer")}
            >
              <Image src={image6} alt="Beer icon" />
            </button>
          </div>
        </div>
        {renderCampaigns()}
      </div>
    </>
  );
}
