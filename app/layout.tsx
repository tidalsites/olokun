import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";
import Nav from "./components/Navbar";
import { Footer } from "./components/Footer";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Olokun",
  description: "Olokun Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
