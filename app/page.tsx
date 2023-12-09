import { Capabilities } from "./components/LandingPage/Capabilities";
import { Hero } from "./components/LandingPage/Hero";

export default function Home() {
  return (
    <main className="min-h-screen grid place-content-center">
      <Hero />
      <Capabilities />
    </main>
  );
}
