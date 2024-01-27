import AboutUs from "../../components/AboutUs/AboutUs";

import initTranslations from "@/app/i18n";
import TranslationsProvider from "../../components/TranslationsProvider";

export const metadata = {
  title: "About us",
  description:
    "Find out more about us: who are we, what are our values and goals.",
};

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
