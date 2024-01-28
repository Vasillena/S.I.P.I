import { Gloria_Hallelujah } from "next/font/google";

import Link from "next/link";
import Image from "next/image";

import classes from "./Socials.module.css";

import image1 from "@/public/socials-1.svg";
import image2 from "@/public/socials-2.svg";
import image3 from "@/public/socials-3.svg";

const gloriaHallelujah = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: "400",
});

export default function Socials() {
  return (
    <div className={`${classes.socials} ${gloriaHallelujah.className}`}>
      <ul className={classes["socials-list"]}>
        <li>
          <Link
            href="https://www.facebook.com/sipi.kapana/"
            className={classes["socials-link"]}
            target="_blank"
          >
            <Image src={image1} alt="Facebook logo" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/sipi.kapana/?hl=bg"
            className={classes["socials-link"]}
            target="_blank"
          >
            <Image src={image2} alt="Instagram logo" />
          </Link>
        </li>
        <li>
          <Link href="/reserve" className={classes["socials-link"]}>
            <Image src={image3} alt="Envelope logo" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
