import initTranslations from "@/app/i18n";
import TranslationsProvider from "../../components/TranslationsProvider";
import CookiePolicy from "@/app/components/CookiePolicy/CookiePolicy";

export const metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy",
};

export default async function CookiePolicyPage({ params: { locale } }) {
  const { resources } = await initTranslations(locale, ["cookie-policy"]);
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={["cookie-policy"]}
    >
      <div style={{ minHeight: "calc(100vh - 69px)" }}>
        <CookiePolicy locale={locale} />
      </div>
    </TranslationsProvider>
  );
}
