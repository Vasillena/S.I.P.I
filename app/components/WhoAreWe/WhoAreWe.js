import classes from "./WhoAreWe.module.css";

import initTranslations from "@/app/i18n";

export default async function WhoAreWe({ locale }) {
  const { t } = await initTranslations(locale, ["home"]);
  return (
    <div className={classes["who-are-we"]}>
      <h1>{t("title")}</h1>
      <p>{t("text-1")}</p>
    </div>
  );
}
