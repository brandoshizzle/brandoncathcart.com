import localFont from "next/font/local";
import { Barlow_Condensed } from 'next/font/google'
import Navbar from "./navbar";
import Footer from "./footer";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-barlow-condensed',
  display: 'swap',
})


export const metadata = {
  title: "Brandon Cathcart",
  description: "Brandon Cathcart is a web developer and audio engineer based in Edmonton, CA.",
};

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} ${barlowCondensed.variable} antialiased min-h-screen`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
