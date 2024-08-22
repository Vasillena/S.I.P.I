import FixedImage from "../components/FixedImage/FixedImage";
import Image from "next/image";
import ImageSlideshow from "../components/Slideshow/Slideshow";
import TranslationsProvider from "../components/TranslationsProvider";
import WhoAreWe from "../components/WhoAreWe/WhoAreWe";
import initTranslations from "@/app/i18n";
import logoImg from "@/public/logo2.svg";
import styles from "./page.module.css";

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
        <Image className={styles.logo} src={logoImg} alt="Logo" />
      </main>
    </TranslationsProvider>
  );
}
