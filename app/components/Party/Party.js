"use client";

import { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import logoImg from "@/public/logo.png";
import classes from "./Party.module.css";

import image1 from "@/public/party-1.png";
import image2 from "@/public/party-2.png";
import image3 from "@/public/party-3.png";

export default function Party() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

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
        <h1>Make your own party</h1>
        <p>Your corporate and special event in the heart of Kapana, Plovdiv</p>
        <div className={classes["spots-container"]}>
          <div className={classes.spots}>
            <button className={classes["party-1"]} onClick={() => showModal(0)}>
              <Image src={logoImg} alt="Logo" />
              <p>Inner Hall</p>
            </button>
          </div>
          <div className={classes.spots}>
            <button className={classes["party-2"]} onClick={() => showModal(1)}>
              <Image src={logoImg} alt="Logo" />
              <p>Garden</p>
            </button>
          </div>
          <div className={classes.spots}>
            <button className={classes["party-3"]} onClick={() => showModal(2)}>
              <Image src={logoImg} alt="Logo" />
              <p>Terrace</p>
            </button>
          </div>
        </div>
      </div>
      <div className={`${classes.modal} ${isModalOpen ? classes.show : ""}`}>
        {selectedImageIndex !== null && (
          <Image
            className={classes["modal-image"]}
            src={[image1, image2, image3][selectedImageIndex]}
            alt="Party-image"
          />
        )}
      </div>
    </>
  );
}
