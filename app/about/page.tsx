import { Metadata } from "next";
import { Tenor_Sans } from "next/font/google";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Vision } from "./Vision";
import { Team } from "./Team";
import Image from "next/image";
const tenor = Tenor_Sans({ weight: "400", subsets: ["latin"] });

import commercial from "@/public/handshake-right.png";
import gov from "@/public/gov.png";

export const metadata: Metadata = {
  title: "About Olokun - Your Trusted Partner in Government Solutions",
  description:
    "Learn about Olokun LLC, an SBA Certified Minority-Owned Business Enterprise (MBE) based in Norfolk, Virginia. Discover how we provide consulting, engineering, IT, and logistics solutions to government organizations, military, private industry, and more. Explore our commitment to excellence and expertise in maritime modernization, engineering, capture management, and customer-centric solutions since our founding in June 2021.",
};

export default function About() {
  return (
    <section className="min-h-[calc(100vh-var(--navbar-height))] h-full pt-[--navbar-height] px-4 flex flex-col bg-zinc-200 text-black">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="mb-20">About Us</h1>
        <div className="flex flex-col">
          <h2 className={`${tenor.className} text-4xl text-zinc-800`}>
            Who We Are?
          </h2>
          <p className="max-w-prose leading-6 py-8">
            Olokun LLC is an SBA Certified Minority-Owned Business Enterprise
            (MBE) located in Norfolk, Virginia. We provide consulting,
            engineering, information technology, and logistics solutions for
            local, state, and federal government organizations, military,
            private industry, and public entities.
          </p>
          <p className="max-w-prose leading-6 py-4">
            Olokun, LLC (UEID: M7JSB8E7KB73, Cage Code: 95V71) is registered in
            the System of Award Management (SAM) under primary NAICS 541330 for
            Engineering Services and various secondary NAICS codes associated
            with Consulting, Management, Professional, and Technical services.
          </p>
          <p className="max-w-prose leading-6 py-4">
            Since our founding on June 10, 2021, Olokun is uniquely situated to
            leverage our management expertise and professional talents related
            to Maritime Industry Modernization, Engineering, Capture Management,
            Strategic Teaming, and Life-Cycle Logistics to provide a quality,
            cost effective solution to our customers. Based on the past two (2)
            years of customer feedback, Olokun is disciplined by process and
            adaptive to customer needs.
          </p>
          <Team />
        </div>
        <div className="mt-20 grid grid-cols-2 gap-8">
          <h2
            className={`${tenor.className} text-4xl text-zinc-800 col-span-2`}
          >
            Who We Serve
          </h2>
          <div className="bg-white lg:rounded col-span-2 md:col-span-1 -mx-4 md:mx-0">
            <h3 className="p-4 md:px-0 bg-zinc-200 text-xl font-light">
              Government
            </h3>
            <p className="grow max-w-prose leading-7 py-8 p-4">
              As a small business, Olokun provides subject matter expertise,
              specializing in marine engineering, design, information
              technology, logistics, planning &amp; maintenance, planning &amp;
              modernization, and system engineering support to the Department of
              Defense and commercial businesses supporting the Maritime
              industry. Olokun&apos;s process driven, and innovative approach
              allows our customers to yield benefits in performance and quality
              at a reasonable cost.
            </p>
          </div>
          <div className="bg-white lg:rounded col-span-2 md:col-span-1 -mx-4 md:mx-0 flex flex-col">
            <h3 className="p-4 md:px-0 bg-zinc-200 text-xl font-light">
              Commercial
            </h3>
            <p className="grow max-w-prose leading-7 py-8 p-4">
              With subject matter experts in government and commercial business,
              Olokun&apos;s services provide small and large businesses flexible
              solutions to align people, processes, assets, and technology to
              develop organizationally and build strong business development
              strategies. Olokun provides proven processes and innovative
              solutions with strategies that target clients&apos; needs for
              business growth.
            </p>
          </div>
          <Link
            className="bg-black text-white border-2 border-black rounded px-4 py-1 transition-all flex gap-2 items-center justify-center group w-fit"
            href="/capabilities"
          >
            <div className="flex p-2 rounded-full bg-white text-black items-center justify-center group-hover:pl-6 group-hover:justify-end transition-all">
              <FaArrowRight />
            </div>
            <span>View All Capabilities</span>
          </Link>
        </div>
        <div className="mt-20">
          <h2 className={`${tenor.className} text-4xl text-zinc-800`}>
            What We Stand For
          </h2>
        </div>
        <Vision />
      </div>
    </section>
  );
}
