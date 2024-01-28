import Party from "../../components/Party/Party";

import initTranslations from "@/app/i18n";
import TranslationsProvider from "../../components/TranslationsProvider";

export const metadata = {
  title: "Make a party",
  description:
    "Make your own party. Browse our options for creating the perfect party for you.",
};

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
