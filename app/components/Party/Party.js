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

import arrow from "@/public/arrow.gif";

export default function Party() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

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

  return (
    <>
      <div className={classes["party-container"]}>
        <div className={classes["title-container"]}>
          <h1>Make your own party</h1>
          <p>
            Your corporate and special event in the heart of Kapana, Plovdiv
          </p>
        </div>

        <div className={classes["spots-container"]}>
          <div className={classes.spots}>
            <Image className={classes["arrow-1"]} src={arrow} alt="Arrow" />
            <button
              className={classes["party-btn-1"]}
              onClick={() => showModal(0)}
            >
              <Image src={image1} alt="Bar icon" />
              <p>Inner Hall</p>
            </button>
          </div>
          <div className={classes.spots}>
            <button
              className={classes["party-btn-2"]}
              onClick={() => showModal(1)}
            >
              <Image src={image2} alt="Garden icon" />
              <p>Garden</p>
            </button>
          </div>
          <div className={classes.spots}>
            <button
              className={classes["party-btn-3"]}
              onClick={() => showModal(2)}
            >
              <Image src={image3} alt="Terrace icon" />
              <p>Terrace</p>
            </button>
            <Image className={classes["arrow-2"]} src={arrow} alt="Arrow" />
          </div>
        </div>
        <div className={classes["text-container"]}>
          <p>
            With its unique location in the heart of Kapana, SIPI has the
            perfect setting and organizational skills <br /> to make your event
            unforgettable!
          </p>
          <br />
          <Link href="/reserve">
            <h1>Contact us</h1>
          </Link>
        </div>
      </div>
      <div className={`${classes.modal} ${isModalOpen ? classes.show : ""}`}>
        {selectedImageIndex !== null && (
          <Image
            className={classes["modal-image"]}
            src={
              isLandscape()
                ? [image7, image8, image9][selectedImageIndex]
                : [image4, image5, image6][selectedImageIndex]
            }
            alt="Party-image"
          />
        )}
      </div>
    </>
  );
}
