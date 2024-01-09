"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/public/sipi_logo.ico";

import classes from "./Navigation.module.css";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <li className={classes["navbar-item"]}>
              <Link
                href="/merch"
                className={classes["navbar-link"]}
                onClick={closeMenu}
              >
                Merch
              </Link>
            </li>
            <li className={classes["navbar-item"]}>
              <Link
                href="/reserve"
                className={classes["navbar-link"]}
                onClick={closeMenu}
              >
                Reserve
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
