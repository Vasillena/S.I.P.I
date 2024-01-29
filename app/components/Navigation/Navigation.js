"use client";

import { useTranslation } from "react-i18next";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import classes from "./Navigation.module.css";

import logoImg from "@/public/logo.png";
import logoImg2 from "@/public/logo2.png";
import menuBars from "@/public/menu-bars.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={classes.header}>
      <div className={classes["navbar-container"]}>
        <div className={classes["mobile-header"]}>
          <button className={classes["menu-button"]} onClick={toggleMenu}>
            <Image
              className={classes["menu-bars"]}
              src={menuBars}
              alt="Menu bars"
              priority
            />
          </button>
          <Image
            className={classes["mobile-logo"]}
            width={50}
            src={logoImg2}
            alt="Logo"
          />
        </div>
        <nav
          className={`${classes.nav} ${isMenuOpen ? classes["menu-open"] : ""}`}
        >
          <ul className={classes["navbar-list"]}>
            <li className={classes["navbar-item"]}>
              <Link
                href="/about-us"
                className={classes["navbar-link"]}
                onClick={closeMenu}
              >
                {t("about-us")}
              </Link>
            </li>
            <li className={classes["navbar-item"]}>
              <Link
                href="/make-a-party"
                className={classes["navbar-link"]}
                onClick={closeMenu}
              >
                {t("make-a-party")}
              </Link>
            </li>
            <li className={classes["navbar-item-home"]}>
              <Link href="/" className={classes["home-link"]}>
                <Image src={logoImg} alt="Logo" />
              </Link>
            </li>
            <li className={classes["navbar-item"]}>
              <Link
                href="/menu"
                className={classes["navbar-link"]}
                onClick={closeMenu}
              >
                {t("menu")}
              </Link>
            </li>
            {/* <li className={classes["navbar-item"]}>
                <Link
                  href="/merch"
                  className={classes["navbar-link"]}
                  onClick={closeMenu}
                >
                  Merch
                </Link>
              </li> */}
            <li className={classes["navbar-item"]}>
              <Link
                href="/reserve"
                className={classes["navbar-link"]}
                onClick={closeMenu}
              >
                {t("reserve")}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
