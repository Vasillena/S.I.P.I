"use client";

import { useTranslation } from "react-i18next";

export default function Error() {
  const { t } = useTranslation();
  return (
    <div
      style={{
        minHeight: "calc(100vh - 69px)",
        width: "100vw",
        marginTop: "50vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <h1>{t("error")}</h1>
    </div>
  );
}
