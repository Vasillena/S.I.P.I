"use client";

import { useTranslation } from "react-i18next";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import classes from "./Navigation.module.css";

import logoImg from "@/public/logo.png";
import logoImg2 from "@/public/logo2.png";
import menuBars from "@/public/menu-bars.svg";

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
      <div>
        <div>
          <button className={classes["menu-button"]} onClick={toggleMenu}>
            <Image
              className={classes["menu-bars"]}
              src={menuBars}
              alt="Menu bars"
            />
          </button>
        </div>
        <nav
          className={`${classes.nav} ${isMenuOpen ? classes["menu-open"] : ""}`}
        >
          <ul className={classes["navbar-list"]}>
            <div className={classes["first-list"]}>
              <li className={classes["navbar-item"]}>
                <Link
                  href="/"
                  className={classes["home-link"]}
                  onClick={closeMenu}
                >
                  <Image src={logoImg} alt="Logo" />
                  <Image src={logoImg2} alt="Logo" />
                </Link>
              </li>
            </div>
            <div className={classes["second-list"]}>
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
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}
