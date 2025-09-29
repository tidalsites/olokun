import { Tenor_Sans } from "next/font/google";
import Link from "next/link";
const tenor = Tenor_Sans({ weight: "400", subsets: ["latin"] });

import { FaArrowRight } from "react-icons/fa";

export const ContactUs = () => {
  return (
    <section className="min-h-[200px] bg-zinc-200 grid grid-cols-2">
      <div className="flex flex-col px-4 gap-8 mx-auto min-w-[min(80vw,600px)] col-span-2 lg:col-span-1 py-16">
        <h2
          className={`${tenor.className} text-2xl lg:text-4xl text-brand border-b-2 border-b-brand w-fit pr-8 py-8`}
        >
          Get Started Today!
        </h2>
        <Link
          className="bg-white text-neutral-900 border-2 rounded-sm px-4 py-1 transition-all flex gap-2 items-center justify-center group w-fit border-px border-brand"
          href="/contact"
        >
          <div className="flex p-2 rounded-full bg-brand text-white items-center justify-center group-hover:pl-6 group-hover:justify-end transition-all">
            <FaArrowRight />
          </div>
          <span className="bg-white">Contact Us</span>
        </Link>
      </div>
      <div className="bg-black hidden lg:block bg-[url(/contact-graphic.webp)] bg-cover overflow-hidden relative after:absolute after:h-full after:aspect-square after:-rotate-45 after:-bottom-4 after:origin-bottom-left after:bg-zinc-200 after:border-double after:border-12 after:border-brand after:outline-solid after:outline-4 after:outline-white"></div>
    </section>
  );
};
