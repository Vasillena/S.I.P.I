import Contact from "../../components/Contact/Contact";
import GoogleMaps from "../../components/GoogleMaps/GoogleMaps";

import initTranslations from "@/app/i18n";
import TranslationsProvider from "../../components/TranslationsProvider";

export async function generateMetadata(locale) {
  let title, description, keywords;

  if (locale.params.locale === "bg") {
    title = "Резервация | sipi.bg";
    description =
      "Присъединете се към партито. Направете резервация сега. Контактите са по-долу.";
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
      "резервация",
      "контакти",
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
      "reservation",
      "contacts",
    ];
  } else if (locale.params.locale === "en") {
    title = "Reserve | sipi.bg";
    description = "Join the party. Make a reservation now. Contacts below.";
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
      "резервация",
      "контакти",
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
      "reservation",
      "contacts",
    ];
  }

  const alternates = {
    canonical: locale.params.locale === "en" ? "en/reserve" : "/reserve",
    languages: {
      bg: "/reserve",
      en: "/en/reserve",
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

export default async function ReservePage({ params: { locale } }) {
  const { resources } = await initTranslations(locale, ["reserve"]);
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={["reserve"]}
    >
      <div
        style={{
          minHeight: "calc(100vh - 69px)",
        }}
      >
        <Contact locale={locale} />
        <GoogleMaps />
      </div>
    </TranslationsProvider>
  );
}
