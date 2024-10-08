import Image from "next/image";
import classes from "./WhoAreWe.module.css";
import divider from "@/public/divider.svg";
import initTranslations from "@/app/i18n";

export default async function WhoAreWe({ locale }) {
  const { t } = await initTranslations(locale, ["home"]);
  return (
    <div className={classes["who-are-we"]}>
      <h1>{t("title")}</h1>
      <p>{t("text-1")}</p>
      <Image src={divider} alt="Divider" />
    </div>
  );
}
