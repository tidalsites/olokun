import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";

import "./globals.css";
import { Providers } from "./providers";
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
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
