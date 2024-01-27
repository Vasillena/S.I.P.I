// import initTranslations from "@/app/i18n";
// import TranslationsProvider from "../components/TranslationsProvider";

// export default async function NotFound({ params: { locale } }) {
//   const { resources } = await initTranslations(locale, ["home"]);
//   return (
//     <TranslationsProvider
//       resources={resources}
//       locale={locale}
//       namespaces={["home"]}
//     >
//       <div
//         style={{
//           minHeight: "calc(100vh - 69px)",
//           width: "100vw",
//           marginTop: "50vh",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <h1>404</h1>
//         <h1>{t("footer")}</h1>
//       </div>
//     </TranslationsProvider>
//   );
// }

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 69px)",
        width: "100vw",
        marginTop: "50vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "4vw",
        }}
      >
        404
      </h1>
      <h1
        style={{
          fontSize: "4vw",
        }}
      >
        NOT FOUND
      </h1>
    </div>
  );
}
