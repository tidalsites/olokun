import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";

import "./globals.css";
import Nav from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ToastContainer } from "react-toastify";
import AnalyticsTag from "./components/GoogleAnalyticsTag";

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
        <AnalyticsTag />
        <Nav />
        <ToastContainer />
        {children}
        <Footer />
      </body>
    </html>
  );
}
