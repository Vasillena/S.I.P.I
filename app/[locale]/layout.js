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

export const metadata = {
  title: "S.I.P.I.",
  description:
    "Welcome to S.I.P.I. Enjoy the greatest parties, cocktails and vibe.",
};

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
