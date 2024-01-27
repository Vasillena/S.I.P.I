import classes from "./AboutUs.module.css";

import initTranslations from "@/app/i18n";

export default async function AboutUs({ locale }) {
  const { t } = await initTranslations(locale, ["about-us"]);
  return (
    <div className={classes["about-us"]}>
      <h1>{t("title")}</h1>
      <p>{t("text")}</p>
    </div>
  );
}
