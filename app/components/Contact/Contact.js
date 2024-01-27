import Image from "next/image";

import classes from "./Contact.module.css";

import frog from "@/public/frog.png";

import initTranslations from "@/app/i18n";

export default async function Contact({ locale }) {
  const { t } = await initTranslations(locale, ["reserve"]);
  return (
    <div className={classes.contact}>
      <Image className={classes["contact-image"]} src={frog} alt="Frog" />
      <h1>{t("title")}</h1>
      <p>{t("address")}</p>
      <p>{t("phone")}</p>
      <p>{t("work-hours")}</p>
    </div>
  );
}
