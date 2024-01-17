import Image from "next/image";
import styles from "./page.module.css";
import ImageSlideshow from "./components/Slideshow/Slideshow";
import WhoAreWe from "./components/WhoAreWe/WhoAreWe";
import FixedImage from "./components/FixedImage/FixedImage";

import logoImg from "@/public/logo2.png";

export default function App() {
  return (
    <main className={styles.main}>
      <ImageSlideshow />
      <WhoAreWe />
      <FixedImage />
      <Image src={logoImg} alt="Logo" width={250} />
    </main>
  );
}
