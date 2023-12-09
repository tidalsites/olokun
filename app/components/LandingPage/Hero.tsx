import Link from "next/link";
import { Tenor_Sans } from "next/font/google";

const tenor = Tenor_Sans({ weight: "400", subsets: ["latin"] });

export const Hero = () => {
  return (
    <section className="gap-8 grid place-content-center h-screen w-screen relative isolate px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-black to-black/20 -z-10"></div>
      <div className="absolute inset-0 max-h-screen overflow-hidden -z-20">
        <video
          className="w-[177.77777778vh] min-w-full min-h-[56.25vw] h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src="/hero.mp4" />
        </video>
      </div>

      <h1 className={`${tenor.className} text-5xl flex flex-col gap-4`}>
        <span>Where INNOVATION</span>
        <span className="pl-8">Creates INGENUITY</span>
      </h1>
      <p className="max-w-prose text-neutral-300 text-lg leading-10">
        We provide consulting, engineering, information technology, and
        logistics solutions for local, state, and federal government
        organizations, military, private industry, and public entities.
      </p>
      <div className="flex gap-4">
        <Link
          className="bg-white text-neutral-900 border-2 border-white rounded px-4 py-1 transition-colors"
          href="/contact"
        >
          Contact Us
        </Link>
        <Link className="border-2 border-white rounded px-4 py-1" href="/about">
          Learn More
        </Link>
      </div>
    </section>
  );
};
