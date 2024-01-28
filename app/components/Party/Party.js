"use client";

import { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import classes from "./Party.module.css";

import image1 from "@/public/party-icon-1.png";
import image2 from "@/public/party-icon-2.png";
import image3 from "@/public/party-icon-3.png";

import image4 from "@/public/party-1.png";
import image5 from "@/public/party-2.png";
import image6 from "@/public/party-3.png";

import image7 from "@/public/party-4.png";
import image8 from "@/public/party-5.png";
import image9 from "@/public/party-6.png";

import image10 from "@/public/party-7.png";
import image11 from "@/public/party-8.png";
import image12 from "@/public/party-9.png";

import image13 from "@/public/party-10.png";
import image14 from "@/public/party-11.png";
import image15 from "@/public/party-12.png";

import arrow from "@/public/arrow.gif";

import { useTranslation } from "react-i18next";

export default function Party() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const { t, i18n } = useTranslation();

  const isLandscape = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth > window.innerHeight;
    }
    return false;
  };

  const showModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (isModalOpen) {
      const closeModal = () => {
        setSelectedImageIndex(null);
        setIsModalOpen(false);
      };

      document.addEventListener("click", closeModal);

      return () => {
        document.removeEventListener("click", closeModal);
      };
    }
  }, [isModalOpen]);

  const renderImages = () => {
    if (i18n.language === "bg") {
      return isLandscape()
        ? [image13, image14, image15]
        : [image10, image11, image12];
    } else {
      return isLandscape()
        ? [image7, image8, image9]
        : [image4, image5, image6];
    }
  };

  return (
    <>
      <div className={classes["party-container"]}>
        <div className={classes["title-container"]}>
          <h1>{t("title")}</h1>
          <p>{t("subtitle")}</p>
        </div>

        <div className={classes["spots-container"]}>
          <div className={classes.spots}>
            <Image className={classes["arrow-1"]} src={arrow} alt="Arrow" />
            <button
              className={classes["party-btn-1"]}
              onClick={() => showModal(0)}
            >
              <Image src={image1} alt="Bar icon" />
              <p>{t("inner-hall")}</p>
            </button>
          </div>
          <div className={classes.spots}>
            <button
              className={classes["party-btn-2"]}
              onClick={() => showModal(1)}
            >
              <Image src={image2} alt="Garden icon" />
              <p>{t("garden")}</p>
            </button>
          </div>
          <div className={classes.spots}>
            <button
              className={classes["party-btn-3"]}
              onClick={() => showModal(2)}
            >
              <Image src={image3} alt="Terrace icon" />
              <p>{t("terrace")}</p>
            </button>
            <Image className={classes["arrow-2"]} src={arrow} alt="Arrow" />
          </div>
        </div>
        <div className={classes["text-container"]}>
          <p>
            {t("bottom-text-1")} <br /> {t("bottom-text-2")}
          </p>
          <br />
          <br />
          <br />
          <Link href="/reserve">
            <h2>{t("contact")}</h2>
          </Link>
        </div>
      </div>
      <div className={`${classes.modal} ${isModalOpen ? classes.show : ""}`}>
        {selectedImageIndex !== null && (
          <Image
            className={classes["modal-image"]}
            src={renderImages()[selectedImageIndex]}
            alt="Party-image"
          />
        )}
      </div>
    </>
  );
}
