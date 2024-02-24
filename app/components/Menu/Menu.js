"use client";

import { useState } from "react";
import Image from "next/image";
import classes from "./Menu.module.css";

import image1 from "@/public/menu-1.svg";
import image2 from "@/public/menu-2.svg";
import image3 from "@/public/menu-3.svg";
import image4 from "@/public/menu-4.svg";
import image5 from "@/public/menu-5.svg";
import image6 from "@/public/menu-6.svg";

import menuListEN from "../../menuList/menuList.json";
import menuListBG from "../../menuList/menuListBG.json";

import { useTranslation } from "react-i18next";

export default function Menu() {
  const [selectedTab, setSelectedTab] = useState("");
  const { t, i18n } = useTranslation();

  const locale = i18n.language;

  const menuList = locale === "bg" ? menuListBG : menuListEN;

  const renderMenu = () => {
    const selectedCategory = menuList.menu.filter(
      (item) => item.category === selectedTab
    );
    const categoryNameObj = menuList.menu.find(
      (item) => item.category === selectedTab
    );

    let categoryName = "";

    if (categoryNameObj) {
      categoryName = categoryNameObj.category;

      switch (categoryName) {
        case "Hot Drinks":
          if (locale == "bg") {
            categoryName = "Топли Напитки";
          }
          break;
        case "Soft Drinks":
          if (locale == "bg") {
            categoryName = "Безалкохолни Напитки";
          }
          break;
        case "Cocktails":
          if (locale == "bg") {
            categoryName = "Коктейли";
          }
          break;
        case "Wine":
          if (locale == "bg") {
            categoryName = "Вино";
          }
          break;
        case "Alcohol":
          if (locale == "bg") {
            categoryName = "Алкохол";
          }
          break;
        case "Beer":
          if (locale == "bg") {
            categoryName = "Бира";
          }
          break;
        default:
          break;
      }
    }

    if (selectedCategory && categoryNameObj && categoryName) {
      return (
        <div className={classes.card}>
          <h2>{categoryName}</h2>
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
        <h1>{t("title")}</h1>
        <div className={classes.menu}>
          <div className={classes["menu-section"]}>
            <button
              className={classes["menu-icon"]}
              onClick={() => setSelectedTab("Hot Drinks")}
            >
              <Image width={100} height={100} src={image1} alt="Coffee icon" />
            </button>
            <p className={classes["menu-titles"]}>{t("hot-drinks")}</p>
          </div>
          <div className={classes["menu-section"]}>
            <button
              className={classes["menu-icon"]}
              onClick={() => setSelectedTab("Soft Drinks")}
            >
              <Image
                width={100}
                height={100}
                src={image2}
                alt="Soft drinks icon"
              />
            </button>
            <p className={classes["menu-titles"]}>{t("soft-drinks")}</p>
          </div>
          <div className={classes["menu-section"]}>
            <button
              className={classes["menu-icon"]}
              onClick={() => setSelectedTab("Cocktails")}
            >
              <Image
                width={100}
                height={100}
                src={image3}
                alt="Cocktail icon"
              />
            </button>
            <p className={classes["menu-titles"]}>{t("cocktails")}</p>
          </div>
          <div className={classes["menu-section"]}>
            <button
              className={classes["menu-icon"]}
              onClick={() => setSelectedTab("Wine")}
            >
              <Image width={100} height={100} src={image4} alt="Wine icon" />
            </button>
            <p className={classes["menu-titles"]}>{t("wine")}</p>
          </div>
          <div className={classes["menu-section"]}>
            <button
              className={classes["menu-icon"]}
              onClick={() => setSelectedTab("Alcohol")}
            >
              <Image width={100} height={100} src={image5} alt="Alcohol icon" />
            </button>
            <p className={classes["menu-titles"]}>{t("alcohol")}</p>
          </div>
          <div className={classes["menu-section"]}>
            <button
              className={classes["menu-icon"]}
              onClick={() => setSelectedTab("Beer")}
            >
              <Image width={100} height={100} src={image6} alt="Beer icon" />
            </button>
            <p className={classes["menu-titles"]}>{t("beer")}</p>
          </div>
        </div>
        {renderMenu()}
      </div>
    </>
  );
}
