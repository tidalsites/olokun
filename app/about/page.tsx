import { Vision } from "./Vision";

export default function About() {
  return (
    <section className="min-h-screen h-full pt-[--navbar-height] px-4 flex flex-col">
      <h1>About Us</h1>
      <h2>Who We Are</h2>
      <h2>Who We Serve</h2>
      <h2>What We Stand For</h2>
      <Vision />
    </section>
  );
}
