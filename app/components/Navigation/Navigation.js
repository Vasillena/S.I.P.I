"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/public/sipi_logo.ico";

import classes from "./Navigation.module.css";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    // <header
    //   className={classes.header && isScrolled ? classes["blur-background"] : ""}
    // >
    <header
      className={`${classes.header} ${
        isScrolled ? classes["blur-background"] : ""
      }`}
    >
      <div>
        <div>
          {/* <button className="menu-button" onClick={toggleMenu}>
            <img src="../../../public/images/bars-solid.svg" alt="bars" />
          </button> */}
        </div>
        <nav className={isMenuOpen ? classes["menu-open"] : ""}>
          <ul className={classes["navbar-list"]}>
            <li className={classes["navbar-item"]}>
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
                href="/make-a-party"
                className={classes["navbar-link"]}
                onClick={closeMenu}
              >
                Make a party
              </Link>
            </li>
            <li className={classes["navbar-item"]}>
              <Link
                href="/menu"
                className={classes["navbar-link"]}
                onClick={closeMenu}
              >
                Menu
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
