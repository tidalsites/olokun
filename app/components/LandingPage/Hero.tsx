import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Tenor_Sans } from "next/font/google";
const tenor = Tenor_Sans({ weight: "400", subsets: ["latin"] });

export const Hero = () => {
  return (
    <section className="gap-8 grid lg:place-content-center min-h-[calc(100vh-var(--navbar-height))] lg:h-screen w-screen relative isolate px-4 bg-[url(/mobile-bg.png)] lg:bg-none lg:bg-black bg-black/90 bg-center bg-cover bg-blend-multiply">
      <div className="absolute inset-0 max-h-screen overflow-hidden -z-20 hidden lg:block">
        <video
          className="w-[177.77777778vh] min-w-full min-h-[56.25vw] h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src="/hero.mp4" />
        </video>
      </div>

      <div className="my-8 flex flex-col gap-20 sm:justify-center sm:-mt-[--navbar-height] mx-0 sm:mx-auto ">
        <h1
          className={`${tenor.className} text-3xl md:text-4xl lg:text-5xl text-zinc-200 flex flex-col gap-4 sm:mx-0`}
        >
          <div className="flex flex-col sm:flex-row sm:gap-4">
            <span className="text-xl sm:text-3xl md:text-4xl lg:text-5xl">
              Where
            </span>
            <span className="text-4xl lg:text-5xl">INGENUITY</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-4 ml-8">
            <span className="text-xl sm:text-3xl md:text-4xl lg:text-5xl">
              Creates
            </span>
            <span className="text-4xl lg:text-5xl">INNOVATION</span>
          </div>
        </h1>
        <p className="max-w-prose flex items-center text-neutral-300 text-lg leading-10 grow sm:grow-0">
          We provide consulting, engineering, information technology, and
          logistics solutions for local, state, and federal government
          organizations, military, private industry, and public entities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            className="bg-white text-neutral-900 border-2 border-white rounded px-4 py-1 transition-all flex gap-2 items-center justify-center group"
            href="/contact"
          >
            <div className="flex p-2 rounded-full bg-black text-white items-center justify-center group-hover:pl-6 group-hover:justify-end transition-all">
              <FaArrowRight />
            </div>
            <span className="bg-white">Contact Us</span>
          </Link>
          <Link
            className="border-2 border-white rounded px-4 py-1 flex items-center justify-center relative after:absolute after:inset-0 after:scale-x-0 after:bg-white hover:text-black hover:after:scale-x-100 transition-all after:-z-10"
            href="/about"
          >
            Learn About Us
          </Link>
        </div>
      </div>
    </section>
  );
};
