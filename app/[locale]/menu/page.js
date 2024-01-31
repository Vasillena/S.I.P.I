import Menu from "../../components/Menu/Menu";

import initTranslations from "@/app/i18n";
import TranslationsProvider from "../../components/TranslationsProvider";

export async function generateMetadata(locale) {
  let title, description, keywords;

  if (locale.params.locale === "bg") {
    title = "Меню | sipi.bg";
    description = "Разгледайте нашето меню.";
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
      "меню",
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
      "menu",
    ];
  } else if (locale.params.locale === "en") {
    title = "Menu | sipi.bg";
    description = "Browse our menu.";
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
      "меню",
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
      "menu",
    ];
  }

  const alternates = {
    canonical: "/menu",
    languages: {
      bg: "/menu",
      en: "/en/menu",
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

export default async function MenuPage({ params: { locale } }) {
  const { resources } = await initTranslations(locale, ["menu"]);
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={["menu"]}
    >
      <div
        style={{
          minHeight: "calc(100vh - 69px)",
        }}
      >
        <Menu />
      </div>
    </TranslationsProvider>
  );
}
