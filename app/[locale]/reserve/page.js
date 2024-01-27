import Contact from "../../components/Contact/Contact";
import GoogleMaps from "../../components/GoogleMaps/GoogleMaps";

import initTranslations from "@/app/i18n";
import TranslationsProvider from "../../components/TranslationsProvider";

export const metadata = {
  title: "Reserve",
  description: "Join the party. Make a reservation now. Contacts below.",
};

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
