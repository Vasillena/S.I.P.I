import FixedImageText from "../FixedImageText/FixedImageText";
import ImageSlideshow2 from "../Slideshow2/Slideshow2";
import classes from "./FixedImage.module.css";

export default function FixedImage() {
  return (
    <div className={classes["fixed-image"]}>
      <div className={classes["fixed-image-in"]}>
        <ImageSlideshow2 />
        <FixedImageText />
      </div>
    </div>
  );
}
