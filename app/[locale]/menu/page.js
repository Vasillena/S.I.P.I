import Menu from "../../components/Menu/Menu";

import initTranslations from "@/app/i18n";
import TranslationsProvider from "../../components/TranslationsProvider";

export const metadata = {
  title: "Menu",
  description: "Browse our menu.",
};

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
