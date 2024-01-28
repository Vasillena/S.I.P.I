import Image from "next/image";
import styles from "./page.module.css";
import ImageSlideshow from "../components/Slideshow/Slideshow";
import WhoAreWe from "../components/WhoAreWe/WhoAreWe";
import FixedImage from "../components/FixedImage/FixedImage";

import logoImg from "@/public/logo2.png";

import initTranslations from "@/app/i18n";
import TranslationsProvider from "../components/TranslationsProvider";
// import LanguageChanger from "../components/LanguageChanger/LanguageChanger";

export default async function App({ params: { locale } }) {
  const { resources } = await initTranslations(locale, ["home"]);
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={["home"]}
    >
      <main className={styles.main}>
        <ImageSlideshow />
        <WhoAreWe locale={locale} />
        <FixedImage locale={locale} />
        <Image src={logoImg} alt="Logo" width={250} />
        {/* <LanguageChanger /> */}
      </main>
    </TranslationsProvider>
  );
}
