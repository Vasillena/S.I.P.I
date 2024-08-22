/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import classes from "./CookiePolicy.module.css";

import initTranslations from "@/app/i18n";

export default async function CookiePolicy({ locale }) {
  const { t } = await initTranslations(locale, ["cookie-policy"]);
  return (
    <div className={classes.policy}>
      <div>
        <div>
          <h1>{t("cookie-policy")}</h1>
        </div>
        <div>
          <br />
        </div>
        <div>{t("text-1")}</div>
        <div>
          <br />
        </div>
        <div>
          <br />
        </div>
        <div>
          <br />
        </div>
        <div>
          {t("text-2")}
          <Link href="https://sipi.bg" target="_blank">
            {" "}
            https://sipi.bg
          </Link>{" "}
          {t("text-3")}
        </div>
        <div>
          <br />
          <strong>{t("text-4")}</strong>
        </div>
        <div>
          <br />
          {t("text-5")}
        </div>
        <div>
          <br />
          {t("text-6")}
        </div>
        <div>
          <br />
          <strong>{t("text-7")}</strong>
        </div>
        <div>
          <br />
          {t("text-8")}
        </div>
        <div>
          <br />
          <strong>{t("text-9")}</strong>
        </div>
        <div>
          <br />
          {t("text-10")}
        </div>
        <div>
          <br />
          {t("text-11")}
        </div>
        <div>
          <br />
          <strong>{t("text-12")}</strong>
        </div>
        <div>
          <br />
          {t("text-13")}
        </div>
        <div>
          <br />
          <ul>
            <li>
              <Link href="https://support.google.com/chrome/answer/95647#zippy=%2Callow-or-block-cookies">
                {t("text-14")}
              </Link>
            </li>
            <li>
              <Link href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d">
                {t("text-15")}
              </Link>
            </li>
            <li>
              <Link href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US">
                {t("text-16")}
              </Link>
            </li>
            <li>
              <Link href="https://support.apple.com/en-ie/guide/safari/sfri11471/mac">
                {t("text-17")}
              </Link>
            </li>
            <li>
              <Link href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd">
                {t("text-18")}
              </Link>
            </li>
            <li>
              <Link href="https://help.opera.com/en/latest/web-preferences/">
                {t("text-19")}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <br />
          <strong>{t("text-20")}</strong>
        </div>
        <div>
          <br />
          {t("text-21")}
        </div>
        <div className={classes.table}>
          <br />
          <table className={classes.t} cellSpacing={0} cellPadding={0}>
            <thead>
              <tr className={classes.tr}>
                <th className={classes.th}>
                  <strong>{t("text-22")}</strong>
                </th>
                <th className={classes.th}>
                  <strong>{t("text-23")}</strong>
                </th>
                <th className={classes.th}>
                  <strong>{t("text-24")}</strong>
                </th>
                <th className={classes.th}>
                  <strong>{t("text-25")}</strong>
                </th>
                <th className={classes.th}>
                  <strong>{t("text-26")}</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={classes.tr}>
                <td className={classes.th}>
                  <p>CookieScriptConsent</p>
                </td>
                <td className={classes.th}>
                  <p>First Party</p>
                </td>
                <td className={classes.th}>
                  <p>{t("text-27")}</p>
                </td>
                <td className={classes.th}>
                  <p>sipi.bg</p>
                </td>
                <td className={classes.th}>
                  <p>{t("text-28")}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <br />
          {t("text-29")}
        </div>
        <div className={classes.table}>
          <br />
          <table className={classes.t} cellSpacing={0}>
            <thead>
              <tr className={classes.tr}>
                <th className={classes.th}>
                  <strong>{t("text-22")}</strong>
                </th>
                <th className={classes.th}>
                  <strong>{t("text-23")}</strong>
                </th>
                <th className={classes.th}>
                  <strong>{t("text-24")}</strong>
                </th>
                <th className={classes.th}>
                  <strong>{t("text-25")}</strong>
                </th>
                <th className={classes.th}>
                  <strong>{t("text-26")}</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={classes.tr}>
                <td className={classes.th}>
                  <p>_ga_CHK3JEVFYE</p>
                </td>
                <td className={classes.th}>
                  <p>First Party</p>
                </td>
                <td className={classes.th}>
                  <p>{t("text-30")}</p>
                </td>
                <td className={classes.th}>
                  <p>sipi.bg</p>
                </td>
                <td className={classes.th}>
                  <p>{t("text-31")}</p>
                </td>
              </tr>
              <tr className={classes.tr}>
                <td className={classes.th}>
                  <p>_ga</p>
                </td>
                <td className={classes.th}>
                  <p>First Party</p>
                </td>
                <td className={classes.th}>
                  <p>{t("text-30")}</p>
                </td>
                <td className={classes.th}>
                  <p>sipi.bg</p>
                </td>
                <td className={classes.th}>
                  <p>{t("text-32")}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <br />
          <strong>{t("text-33")}</strong>
        </div>
        <div>
          <br />
          {t("text-34")}
        </div>
        <div>
          <br />
          <strong>{t("text-35")}</strong>
        </div>
        <div>
          <br />
          {t("text-36")}
        </div>
        <div>
          <br />
          {t("text-37")}
        </div>
        <div>{t("text-38")}</div>
        <div>{t("text-39")}</div>
        <div>{t("text-40")}</div>
      </div>
    </div>
  );
}
