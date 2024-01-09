"use client";

import { Tenor_Sans } from "next/font/google";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import bg from "@/public/ingenuity-bg-light.svg";
import graphic from "@/public/why-us.webp";
import Link from "next/link";
import { motion } from "framer-motion";
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
        <motion.h2
          initial={{ translateY: "100%", opacity: 0 }}
          whileInView={{ translateY: "0", opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={`${tenor.className} text-2xl lg:text-4xl`}
        >
          Why Us
        </motion.h2>
        <motion.p
          initial={{ translateY: "100%", opacity: 0 }}
          whileInView={{ translateY: "0", opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-prose leading-8"
        >
          Olokun is uniquely situated to leverage our management expertise and
          professional talents related to Maritime Industry Modernization,
          Engineering, Capture Management, Strategic Teaming, and Life-Cycle
          Logistics to provide a quality, cost effective solution to our
          customers. Based on the past two (2) years of customer feedback,
          Olokun is disciplined by process and adaptive to customer needs.
        </motion.p>
        <motion.p
          initial={{ translateY: "100%", opacity: 0 }}
          whileInView={{ translateY: "0", opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-prose leading-8"
        >
          Olokun&apos;s subject matter experts have backgrounds supporting
          design, engineering, installation, maintenance, and modernization
          support for DOD customers including, but not limited to:
        </motion.p>
        <motion.ul
          initial={{ translateY: "100%", opacity: 0 }}
          whileInView={{ translateY: "0", opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-auto xl:grid-cols-3 sm:gap-2 w-full"
        >
          <motion.li
            initial={{ translateY: "100%", opacity: 0 }}
            whileInView={{ translateY: "0", opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-4 place-content-center text-sm font-semibold text-black border-b-2 border-b-zinc-200 sm:border-b-0 sm:border-l-4 sm:border-l-brand"
          >
            Engineering &amp; Design Services and Management
          </motion.li>
          <motion.li
            initial={{ translateY: "100%", opacity: 0 }}
            whileInView={{ translateY: "0", opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-4 place-content-center text-sm font-semibold text-black border-b-2 border-b-zinc-200 sm:border-b-0 sm:border-l-4 sm:border-l-brand"
          >
            Federal Defense Major Program and Project Management
          </motion.li>
          <motion.li
            initial={{ translateY: "100%", opacity: 0 }}
            whileInView={{ translateY: "0", opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white p-4 place-content-center text-sm font-semibold text-black border-b-2 border-b-zinc-200 sm:border-b-0 sm:border-l-4 sm:border-l-brand"
          >
            Financial Management
          </motion.li>
          <motion.li
            initial={{ translateY: "100%", opacity: 0 }}
            whileInView={{ translateY: "0", opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-4 place-content-center text-sm font-semibold text-black border-b-2 border-b-zinc-200 sm:border-b-0 sm:border-l-4 sm:border-l-brand"
          >
            Information Technology Services
          </motion.li>
          <motion.li
            initial={{ translateY: "100%", opacity: 0 }}
            whileInView={{ translateY: "0", opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-4 place-content-center text-sm font-semibold text-black border-b-2 border-b-zinc-200 sm:border-b-0 sm:border-l-4 sm:border-l-brand"
          >
            Logistic Services
          </motion.li>
          <motion.li
            initial={{ translateY: "100%", opacity: 0 }}
            whileInView={{ translateY: "0", opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-4 place-content-center text-sm font-semibold text-black border-b-2 border-b-zinc-200 sm:border-b-0 sm:border-l-4 sm:border-l-brand"
          >
            Waterfront Industrial Services
          </motion.li>
        </motion.ul>
        <Link
          className="bg-white text-neutral-900 border-2 border-white rounded px-4 py-1 transition-all flex gap-2 items-center justify-center group"
          href="/about"
        >
          <div className="flex p-2 rounded-full bg-black text-white items-center justify-center group-hover:pl-6 group-hover:justify-end transition-all">
            <FaArrowRight />
          </div>
          <span className="bg-white">Learn More About Us</span>
        </Link>
      </div>
    </section>
  );
};
