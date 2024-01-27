import classes from "./FixedImageText.module.css";

import initTranslations from "@/app/i18n";

export default async function FixedImageText({ locale }) {
  const { t } = await initTranslations(locale, ["home"]);
  return (
    <div className={classes["fixed-image-text"]}>
      <p>{t("text-2")}</p>
    </div>
  );
}
