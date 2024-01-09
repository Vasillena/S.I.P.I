import Image from "next/image";
import styles from "./page.module.css";
import ImageSlideshow from "./components/Slideshow/Slideshow";
import WhoAreWe from "./components/WhoAreWe/WhoAreWe";
import FixedImage from "./components/FixedImage/FixedImage";

export default function App() {
  return (
    <main className={styles.main}>
      {/* <Home /> */}
      <ImageSlideshow />
      <WhoAreWe />
      <FixedImage />
    </main>
  );
}
