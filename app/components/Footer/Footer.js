import Link from "next/link";

import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer-text"]}>
        <p className="copyright">
          Copyright © 2024 S.I.P.I. All Rights Reserved | Crafted by
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
