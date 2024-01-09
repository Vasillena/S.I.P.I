import Link from "next/link";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      {/* <div className={classes["footer-top"]}>
        <ul className={classes["footer-list"]}>
          <li>
            <Link href="#" className={classes["footer-link"]}>
              Facebook
            </Link>
          </li>
          <li>
            <Link href="#" className={classes["footer-link"]}>
              Instagram
            </Link>
          </li>
          <li>
            <Link href="#" className={classes["footer-link"]}>
              Youtube
            </Link>
          </li>
          <li>
            <Link href="#" className={classes["footer-link"]}>
              Twitter
            </Link>
          </li>
        </ul>
      </div> */}
      <div className={classes["footer-bottom"]}>
        <p className="copyright">
          Copyright © 2024 S.I.P.I.. All Rights Reserved | Crafted by
          <Link
            href="https://github.com/Vasillena"
            target="_blank"
            className={classes["github-link"]}
          >
            {" "}
            Vasillena
          </Link>
        </p>
      </div>
    </footer>
  );
}
