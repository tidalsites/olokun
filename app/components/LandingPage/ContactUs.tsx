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
          href="/contact"
          className="p-2 rounded max-h-[50px] w-fit flex gap-4 group items-center bg-white text-black border-2 border-brand"
        >
          <div className="bg-brand rounded-full text-white p-2 group-hover:pl-3 transition-all flex items-center">
            <FaArrowRight className="text-2xl" />
          </div>
          <span className="text-lg font-semibold group-hover:pr-2 transition-all">
            Contact Us
          </span>
        </Link>
      </div>
      <div className="bg-black hidden lg:block bg-[url(/contact-graphic-light.png)] bg-cover overflow-hidden relative after:absolute after:h-full after:aspect-square after:-rotate-45 after:-bottom-4 after:origin-bottom-left after:bg-zinc-200 after:border-double after:border-[12px] after:border-brand after:outline after:outline-4 after:outline-white"></div>
    </section>
  );
};
