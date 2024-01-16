import Link from "next/link";
import classes from "./Socials.module.css";

import Image from "next/image";

import image1 from "@/public/socials-1.png";
import image2 from "@/public/socials-2.png";
import image3 from "@/public/socials-3.png";

export default function Socials() {
  return (
    <div className={classes["socials-container"]}>
      <ul className={classes["socials-list"]}>
        <li>
          <Link
            href="https://www.facebook.com/sipi.kapana/"
            className={classes["socials-link"]}
            target="_blank"
          >
            <Image
              className={classes.socials}
              src={image1}
              alt="Facebook logo"
            />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/sipi.kapana/?hl=bg"
            className={classes["socials-link"]}
            target="_blank"
          >
            <Image
              className={classes.socials}
              src={image2}
              alt="Instagram logo"
            />
          </Link>
        </li>
        <li>
          <Link href="/reserve" className={classes["socials-link"]}>
            <Image
              className={classes.socials}
              src={image3}
              alt="Envelope logo"
            />
          </Link>
        </li>
        {/* <li>
          <Link href="#" className={classes["socials-link"]}>
            Youtube
          </Link>
        </li>
        <li>
          <Link href="#" className={classes["socials-link"]}>
            Twitter
          </Link>
        </li> */}
      </ul>
    </div>
  );
}
