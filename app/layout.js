// import { Inter } from "next/font/google";
import "./globals.css";
import { Gloria_Hallelujah } from "next/font/google";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Socials from "./components/Socials/Socials";

// const inter = Inter({ subsets: ["latin"] });
const gloriaHallelujah = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "S.I.P.I.",
  description: "Bar Website",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={gloriaHallelujah.className}>
          <Navigation />
          {children}
          <Socials />
          <Footer />
        </body>
      </html>
    </>
  );
}
