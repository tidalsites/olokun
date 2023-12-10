import { Tenor_Sans } from "next/font/google";
import Link from "next/link";
const tenor = Tenor_Sans({ weight: "400", subsets: ["latin"] });

export const ContactUs = () => {
  return (
    <section className="min-h-[200px] bg-zinc-200 grid grid-cols-2">
      <div className="flex flex-col px-4 gap-8 mx-auto min-w-[min(80vw,600px)] col-span-2 lg:col-span-1 py-16">
        <h2
          className={`${tenor.className} text-2xl lg:text-4xl text-red-700 border-b-2 border-b-red-700 w-fit pr-8 py-8`}
        >
          Get Started Today!
        </h2>
        <Link href="/contact" className="px-4 py-1 rounded bg-red-700 w-fit">
          Contact Our Team
        </Link>
      </div>
      <div className="bg-black hidden lg:block bg-[url(/contact-graphic-light.png)] bg-cover overflow-hidden relative after:absolute after:h-full after:aspect-square after:-rotate-45 after:-bottom-4 after:origin-bottom-left after:bg-zinc-200 after:border-double after:border-[12px] after:border-red-700 after:outline after:outline-4 after:outline-white"></div>
    </section>
  );
};
