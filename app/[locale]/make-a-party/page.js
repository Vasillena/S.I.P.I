import Party from "../../components/Party/Party";

import initTranslations from "@/app/i18n";
import TranslationsProvider from "../../components/TranslationsProvider";

export async function generateMetadata(locale) {
  let title, description, keywords;

  if (locale.params.locale === "bg") {
    title = "Направи парти | sipi.bg";
    description =
      "Направете свое собствено парти. Разгледайте нашите възможности за създаване на перфектната вечер за вас.";
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
      "направи си парти",
      "градина Пловдив",
      "тераса Пловдив",
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
      "make a party",
      "garden Plovdiv",
      "terrace Plovdiv",
    ];
  } else if (locale.params.locale === "en") {
    title = "Make a party | sipi.bg";
    description =
      "Make your own party. Browse our options for creating the perfect party for you.";
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
      "направи си парти",
      "градина Пловдив",
      "тераса Пловдив",
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
      "make a party",
      "garden Plovdiv",
      "terrace Plovdiv",
    ];
  }

  const alternates = {
    canonical: "/make-a-party",
    languages: {
      bg: "/make-a-party",
      en: "/en/make-a-party",
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

export default async function MakeAPartyPage({ params: { locale } }) {
  const { resources } = await initTranslations(locale, ["make-a-party"]);
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={["make-a-party"]}
    >
      <div
        style={{
          minHeight: "calc(100vh - 69px)",
        }}
      >
        <Party />
      </div>
    </TranslationsProvider>
  );
}
