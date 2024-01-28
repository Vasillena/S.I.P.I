import Image from "next/image";

import classes from "./AboutUs.module.css";

import image1 from "@/public/17.png";
import image2 from "@/public/18.png";
import image3 from "@/public/19.png";
import image4 from "@/public/20.png";
import image5 from "@/public/21.png";
import image6 from "@/public/22.png";

import trail1 from "@/public/trail.png";
import trail2 from "@/public/trail-2.png";

import initTranslations from "@/app/i18n";

export default async function AboutUs({ locale }) {
  const { t } = await initTranslations(locale, ["about-us"]);
  return (
    <div className={classes["about-us"]}>
      <h1>{t("title")}</h1>
      <div className={classes["paragraph-container"]}>
        <Image src={image1} alt="About us" />
        <p>{t("text-1")}</p>
      </div>
      <div className={classes.trail}>
        <Image src={trail1} alt="Trail" />
      </div>
      <div className={`${classes["paragraph-container"]} ${classes.even}`}>
        <Image src={image2} alt="About us" />
        <p>{t("text-2")}</p>
      </div>
      <div className={classes.trail}>
        <Image src={trail2} alt="Trail" />
      </div>
      <div className={classes["paragraph-container"]}>
        <Image src={image3} alt="About us" />
        <p>{t("text-3")}</p>
      </div>
      <div className={classes.trail}>
        <Image src={trail1} alt="Trail" />
      </div>
      <div className={`${classes["paragraph-container"]} ${classes.even}`}>
        <Image src={image4} alt="About us" />
        <p>{t("text-4")}</p>
      </div>
      <div className={classes.trail}>
        <Image src={trail2} alt="Trail" />
      </div>
      <div className={classes["paragraph-container"]}>
        <Image src={image5} alt="About us" />
        <p>{t("text-5")}</p>
      </div>
      <div className={classes.trail}>
        <Image src={trail1} alt="Trail" />
      </div>
      <div className={`${classes["paragraph-container"]} ${classes.even}`}>
        <Image src={image6} alt="About us" />
        <p>{t("text-6")}</p>
      </div>
      <div className={classes.trail}>
        <Image src={trail2} alt="Trail" />
      </div>
      <div className="go-green-bottom">
        <h2>{t("text-7")}</h2>
      </div>
    </div>
  );
}
