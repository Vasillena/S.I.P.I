"use client";

import { useEffect, useState } from "react";

import { Gloria_Hallelujah } from "next/font/google";
import Image from "next/image";
import classes from "./LanguageChanger.module.css";
import flagBG from "@/public/flagBG.png";
import flagEN from "@/public/flagEN.png";
import i18nConfig from "@/i18nConfig";
import language from "@/public/language.svg";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

// import CookieConsent from "react-cookie-consent";

const gloriaHallelujah = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: "400",
});

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

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
    setIsLanguageOpen(false);
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
    setIsLanguageOpen((prev) => !prev);
  };

  return (
    <>
      {/* {showCookieConsent && (
        <CookieConsent
          style={{ background: "#f170a9", color: "black" }}
          buttonStyle={{
            fontFamily: "inherit",
            backgroundColor: "white",
            borderRadius: "5px",
          }}
        >
          Our site uses cookies.
        </CookieConsent>
      )} */}

      <div
        className={`${classes.language} ${gloriaHallelujah.className} ${
          isLanguageOpen ? classes["language-open"] : ""
        }`}
      >
        <button className={classes["open-close"]} onClick={toggleLanguage}>
          <Image src={language} alt="Globe" width={16} />
        </button>
        <label>
          <input
            type="radio"
            name="language"
            value="bg"
            onChange={handleChange}
            checked={currentLocale === "bg"}
            style={{ display: "none" }}
          />
          <Image src={flagBG} alt="BG flag" width={20} />
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
          <Image src={flagEN} alt="EN flag" width={20} />
        </label>
      </div>
    </>
  );
}
