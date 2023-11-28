import {
  Inter,
  Bodoni_Moda,
  EB_Garamond,
  PT_Serif,
  Noto_Serif,
} from "next/font/google";
import "./globals.css";
import Nav from "./components/NavBar/Nav";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const bodoni = Bodoni_Moda({ weight: "400", subsets: ["latin"] });
const eb = EB_Garamond({ subsets: ["latin"] });
const noto = Noto_Serif({ subsets: ["latin"] });
const pt = PT_Serif({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Hotel Divine View",
  description: "Hotel app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz@6..96&family=EB+Garamond&family=Noto+Serif&family=PT+Serif&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body
        className={
          inter.className +
          bodoni.className +
          eb.className +
          noto.className +
          pt.className
        }
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
