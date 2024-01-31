import AboutUs from "../../components/AboutUs/AboutUs";

import initTranslations from "@/app/i18n";
import TranslationsProvider from "../../components/TranslationsProvider";

export async function generateMetadata(locale) {
  let title, description, keywords;

  if (locale.params.locale === "bg") {
    title = "За нас | sipi.bg";
    description =
      "Открийте повече за нас: кой сме ние, какви са нашите стойности и цели.";
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
      "за нас",
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
      "about us",
    ];
  } else if (locale.params.locale === "en") {
    title = "About us | sipi.bg";
    description =
      "Find out more about us: who are we, what are our values and goals.";
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
      "за нас",
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
      "about us",
    ];
  }

  const alternates = {
    canonical: "/about-us",
    languages: {
      bg: "/about-us",
      en: "/en/about-us",
    },
  };

  const metadataBase = new URL("https://sipi.bg");

  return {
    title,
    description,
    keywords,
    alternates,
    metadataBase,
  };
}

export default async function AboutUsPage({ params: { locale } }) {
  const { resources } = await initTranslations(locale, ["about-us"]);
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={["about-us"]}
    >
      <div
        style={{
          minHeight: "calc(100vh - 69px)",
        }}
      >
        <AboutUs locale={locale} />
      </div>
    </TranslationsProvider>
  );
}
