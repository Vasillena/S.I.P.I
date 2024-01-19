// import { Inter } from "next/font/google";
import "./globals.css";
import { Gloria_Hallelujah } from "next/font/google";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Socials from "./components/Socials/Socials";
import BackToTop from "./components/BackToTop/BackToTop";

const gloriaHallelujah = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "S.I.P.I.",
  description:
    "Welcome to S.I.P.I. Enjoy the greatest parties, cocktails and vibe.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={gloriaHallelujah.className}>
          <Navigation />
          {children}
          <Socials />
          <BackToTop />
          <Footer />
        </body>
      </html>
    </>
  );
}
