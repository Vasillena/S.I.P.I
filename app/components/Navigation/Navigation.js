"use client";

import Image from "next/image";
import Link from "next/link";
import classes from "./Navigation.module.css";
import logoImg from "@/public/logo.svg";
import logoImg2 from "@/public/logo2.svg";
import menuBars from "@/public/menu-bars.svg";
import { useState } from "react";
import { useTranslation } from "react-i18next";

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
          <Link href="/" className={classes["navbar-link"]} onClick={closeMenu}>
            <Image
              className={classes["mobile-logo"]}
              width={50}
              src={logoImg2}
              alt="Logo"
            />
          </Link>
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
              <Link
                href="/"
                className={classes["home-link"]}
                onClick={closeMenu}
              >
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
              <Link
                href="/policy"
                className={classes["navbar-link"]}
                onClick={closeMenu}
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
