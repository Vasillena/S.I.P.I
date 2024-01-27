import Link from "next/link";

import classes from "./Footer.module.css";

import initTranslations from "@/app/i18n";

export default async function Footer({ locale }) {
  const { t } = await initTranslations(locale, ["home"]);
  return (
    <footer className={classes.footer}>
      <div className={classes["footer-text"]}>
        <p className="copyright">
          {t("footer")}
          <Link
            href="https://github.com/Vasillena"
            target="_blank"
            className={classes["github-link"]}
          >
            {" "}
            Vasillena
          </Link>
        </p>
      </div>
    </footer>
  );
}
