import { Capabilities } from "./components/LandingPage/Capabilities";
import { ContactUs } from "./components/LandingPage/ContactUs";
import { Hero } from "./components/LandingPage/Hero";
import { WhyUs } from "./components/LandingPage/WhyUs";

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
