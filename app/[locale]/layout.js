import "./globals.css";
import { Gloria_Hallelujah, Shantell_Sans } from "next/font/google";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import Socials from "../components/Socials/Socials";
import BackToTop from "../components/BackToTop/BackToTop";

import initTranslations from "@/app/i18n";
import TranslationsProvider from "../components/TranslationsProvider";
import LanguageChanger from "../components/LanguageChanger/LanguageChanger";

const gloriaHallelujah = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: "400",
});

const shantellSans = Shantell_Sans({
  subsets: ["cyrillic"],
  weight: "400",
});

export async function generateMetadata(locale) {
  let title, description, keywords;

  if (locale.params.locale === "bg") {
    title = "Бар С.И.П.И. | sipi.bg";
    description =
      "Добре дошли в С.И.П.И. - мястото за бар ентусиасти! При нас ще се наслаждавате на авторски коктейли, парти обстановка и музикални изживявания. Бар С.И.П.И. е повече от място за напитки; това е преживяване, където парти хората се събират, за да споделят обичта си към музиката.";
    keywords = [
      "S.I.P.I.",
      "СИПИ",
      "бар СИПИ",
      "СИПИ Пловдив",
      "бар Пловдив",
      "бар Капана",
      "Пловдив",
      "Капана",
      "коктейл бар Пловдив",
      "коктейл бар Капана",
      "парти",
      "коктейли",
      "атмосфера",
      "нощен живот",
      "SIPI",
      "bar SIPI",
      "Sipi Plovdiv",
      "bar Plovdiv",
      "bar Kapana",
      "Plovdiv",
      "Kapana",
      "cocktail bar Plovdiv",
      "cocktail bar Kapana",
      "parties",
      "cocktails",
      "vibe",
      "nightlife",
    ];
  } else if (locale.params.locale === "en") {
    title = "Bar S.I.P.I. | sipi.bg";
    description =
      "Welcome to S.I.P.I. – a destination for bar enthusiasts! With us you will enjoy signature cocktails, party atmosphere and musical experiences. S.I.P.I. Bar is more than a place for drinks; it's an experience where party people come together to share their love of music";
    keywords = [
      "S.I.P.I.",
      "СИПИ",
      "бар СИПИ",
      "СИПИ Пловдив",
      "бар Пловдив",
      "бар Капана",
      "Пловдив",
      "Капана",
      "коктейл бар Пловдив",
      "коктейл бар Капана",
      "парти",
      "коктейли",
      "атмосфера",
      "нощен живот",
      "SIPI",
      "bar SIPI",
      "Sipi Plovdiv",
      "bar Plovdiv",
      "bar Kapana",
      "Plovdiv",
      "Kapana",
      "cocktail bar Plovdiv",
      "cocktail bar Kapana",
      "parties",
      "cocktails",
      "vibe",
      "nightlife",
    ];
  }

  const alternates = {
    canonical: "/",
    languages: {
      bg: "/",
      en: "/en",
    },
  };

  const metadataBase = new URL("https://sipi.bg");

  const openGraphImages = [
    {
      url: "../../public/opengraph-image.pn",
      width: 1200,
      height: 630,
      alt: "S.I.P.I. Logo",
    },
  ];

  return {
    title,
    description,
    keywords,
    alternates,
    metadataBase,
    openGraphImages,
  };
}

export default async function RootLayout({ children, params: { locale } }) {
  const { t, resources } = await initTranslations(locale, ["home"]);
  const font = locale === "bg" ? shantellSans : gloriaHallelujah;

  return (
    <>
      <html lang={locale}>
        <body className={font.className}>
          <TranslationsProvider
            resources={resources}
            locale={locale}
            namespaces={["home"]}
          >
            <Navigation />
            {children}
            <Socials />
            <BackToTop />
            <LanguageChanger />
            <Footer locale={locale} />
          </TranslationsProvider>
        </body>
      </html>
    </>
  );
}
