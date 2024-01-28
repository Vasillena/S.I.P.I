"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import classes from "./LanguageChanger.module.css";

import flagBG from "@/public/flagBG.png";
import flagEN from "@/public/flagEN.png";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import CookieConsent from "react-cookie-consent";

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isUp, setisUp] = useState(false);

  const handleChange = (e) => {
    const newLocale = e.target.value;

    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "; expires=" + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  useEffect(() => {
    const consentCookie = document.cookie
      .split(";")
      .find((cookie) => cookie.trim().startsWith("CookieConsent="));
    if (consentCookie && consentCookie.split("=")[1] === "true") {
      setShowCookieConsent(false);
    } else {
      setShowCookieConsent(true);
    }
  }, []);

  const toggleLanguage = () => {
    if (!isUp) {
      setIsLanguageOpen(true);
      setisUp(true);
    } else {
      setIsLanguageOpen(!isLanguageOpen);
    }
  };

  return (
    <>
      {showCookieConsent && (
        <CookieConsent
          style={{ background: "#f170a9" }}
          buttonStyle={{
            fontFamily: "inherit",
            backgroundColor: "white",
            borderRadius: "5px",
          }}
        >
          Our site uses cookies.
        </CookieConsent>
      )}
      <button
        className={`${classes.language} ${
          isLanguageOpen ? classes["language-open"] : ""
        }`}
        onClick={toggleLanguage}
      >
        <label>
          <input
            type="radio"
            name="language"
            value="bg"
            onChange={handleChange}
            checked={currentLocale === "bg"}
            style={{ display: "none" }}
          />
          <Image src={flagBG} alt="BG flag" width={24} />
        </label>
        <label>
          <input
            type="radio"
            name="language"
            value="en"
            onChange={handleChange}
            checked={currentLocale === "en"}
            style={{ display: "none" }}
          />
          <Image src={flagEN} alt="EN flag" width={24} />
        </label>
      </button>
    </>
  );
}
