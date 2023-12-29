import { Capabilities } from "./components/LandingPage/Capabilities";
import { ContactUs } from "./components/LandingPage/ContactUs";
import { Hero } from "./components/LandingPage/Hero";
import { WhyUs } from "./components/LandingPage/WhyUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Olokun - Your Partner in Government Contracting and Modernization",
  description:
    "Discover top-tier consulting, engineering, IT, and logistics solutions for government, military, and private sectors at Olokun. Redefining excellence in government contracting with a commitment to quality and customer satisfaction.",
};

export default function Home() {
  return (
    <main className="min-h-screen grid place-content-center">
      <Hero />
      <Capabilities />
      <WhyUs />
      <ContactUs />
    </main>
  );
}
