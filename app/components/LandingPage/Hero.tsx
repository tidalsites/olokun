import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Tenor_Sans, Play } from "next/font/google";
const tenor = Tenor_Sans({ weight: "400", subsets: ["latin"] });
const play = Play({ weight: "400", subsets: ["latin"] });
const playBold = Play({ weight: "700", subsets: ["latin"] });

export const Hero = () => {
  return (
    <section className="gap-8 grid lg:place-content-center min-h-[calc(100vh-var(--navbar-height))] lg:h-screen w-screen relative isolate px-4 bg-[url(/mobile-bg.webp)] lg:bg-none lg:bg-black bg-black/90 bg-center bg-cover bg-blend-multiply">
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
      <div className="absolute inset-0 -z-10 bg-black/60"></div>

      <div className="my-8 flex flex-col gap-20 sm:justify-center sm:-mt-[--navbar-height] mx-0 sm:mx-auto ">
        <h1
          className={`${play.className} text-4xl sm:text-5xl md:text-6xl text-zinc-200 flex flex-col gap-4 sm:mx-0 uppercase`}
        >
          <div className="flex flex-col sm:items-end sm:flex-row sm:gap-4">
            <span className="sm:border-b-4 border-b-red-700 pr-4">Where</span>
            <span className=" bg-red-700 border-b-4 border-b-red-700 py-2 px-4 -mx-4">
              INGENUITY
            </span>
          </div>
          <div className="flex flex-col sm:items-end sm:flex-row sm:gap-4">
            <span className="sm:border-b-4 border-b-red-700 pr-4">Creates</span>
            <span className=" bg-red-700 border-b-4 border-b-red-700 py-2 px-4 -mx-4">
              INNOVATION
            </span>
          </div>
        </h1>
        <p className="max-w-prose text-lg leading-10 grow sm:grow-0">
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
