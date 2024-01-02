import { Tenor_Sans } from "next/font/google";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import bg from "@/public/ingenuity-bg-light.svg";
import graphic from "@/public/why-us.webp";
import Link from "next/link";
const tenor = Tenor_Sans({ weight: "400", subsets: ["latin"] });

export const WhyUs = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[auto,auto] min-h-screen relative pb-20 overflow-x-hidden">
      <div className="items-center justify-center hidden lg:flex mt-20 px-8 max-h-[600px]">
        <Image src={graphic} alt="Decorative" className="max-h-full w-auto" />
      </div>
      <div className="flex flex-col gap-8 items-start pt-[15vh] py-10 px-4 max-w-prose mx-auto">
        <div className="absolute top-0 left-0 max-w-2xl scale-y-[-1]">
          <Image src={bg} alt="Ingenuity decoration" />
        </div>
        <h2 className={`${tenor.className} text-2xl lg:text-4xl`}>Why Us</h2>
        <p className="max-w-prose leading-8">
          Olokun is uniquely situated to leverage our management expertise and
          professional talents related to Maritime Industry Modernization,
          Engineering, Capture Management, Strategic Teaming, and Life-Cycle
          Logistics to provide a quality, cost effective solution to our
          customers. Based on the past two (2) years of customer feedback,
          Olokun is disciplined by process and adaptive to customer needs.
        </p>
        <p className="max-w-prose leading-8">
          Olokun&apos;s subject matter experts have backgrounds supporting
          design, engineering, installation, maintenance, and modernization
          support for DOD customers including, but not limited to:
        </p>
        <ul className="grid grid-cols-auto xl:grid-cols-3 sm:gap-2 w-full">
          <li className="bg-white p-4 max-w-[20ch]grid place-content-center text-sm font-semibold text-black border-b-2 border-b-zinc-200 sm:border-b-0 sm:border-l-4 sm:border-l-brand">
            Engineering &amp; Design Services and Management
          </li>
          <li className="bg-white p-4 max-w-[20ch]grid place-content-center text-sm font-semibold text-black border-b-2 border-b-zinc-200 sm:border-b-0 sm:border-l-4 sm:border-l-brand">
            Federal Defense Major Program and Project Management
          </li>
          <li className="bg-white p-4 max-w-[20ch]grid place-content-center text-sm font-semibold text-black border-b-2 border-b-zinc-200 sm:border-b-0 sm:border-l-4 sm:border-l-brand">
            Financial Management
          </li>
          <li className="bg-white p-4 max-w-[20ch]grid place-content-center text-sm font-semibold text-black border-b-2 border-b-zinc-200 sm:border-b-0 sm:border-l-4 sm:border-l-brand">
            Information Technology Services
          </li>
          <li className="bg-white p-4 max-w-[20ch]grid place-content-center text-sm font-semibold text-black border-b-2 border-b-zinc-200 sm:border-b-0 sm:border-l-4 sm:border-l-brand">
            Logistic Services
          </li>
          <li className="bg-white p-4 max-w-[20ch]grid place-content-center text-sm font-semibold text-black border-b-2 border-b-zinc-200 sm:border-b-0 sm:border-l-4 sm:border-l-brand">
            Waterfront Industrial Services
          </li>
        </ul>
        <Link
          href="/about"
          className="px-4 py-1 rounded bg-white text-black flex gap-4 items-center justify-start group"
        >
          <span className="font-semibold bg-white z-20 h-full flex items-center rounded-full px-4">
            Learn more about us
          </span>
          <div className="flex justify-center items-center p-2 rounded-full bg-black text-white -translate-x-[calc(100%+1rem+1px)] transition-all z-10 group-hover:translate-x-0 group-hover:justify-end group-hover:pl-6">
            <FaArrowRight />
          </div>
        </Link>
      </div>
    </section>
  );
};
