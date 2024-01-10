import { Tenor_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { ListItem } from "../components/ListItem";
const tenor = Tenor_Sans({ weight: "400", subsets: ["latin"] });

import capabilitiesData from "./capabilities.json";

const { capabilities } = capabilitiesData;

import { Metadata } from "next";

import consulting from "@/public/capabilities/consulting.webp";
import engineering from "@/public/capabilities/engineering.webp";
import it from "@/public/capabilities/it.webp";
import logistics from "@/public/capabilities/logistics.webp";
import completecloud from "@/public/completecloud.png";

export const metadata: Metadata = {
  title: "Our Comprehensive Capabilities - Olokun LLC Government Solutions",
  description:
    "Explore Olokun LLC's wide-ranging capabilities, including consulting, engineering, information technology, and logistics solutions for local, state, and federal government organizations, military, private industry, and public entities. Discover how our expertise in maritime modernization, engineering, and customer-centric solutions sets us apart in the industry.",
};

export default function Capabilities() {
  return (
    <div className="min-h-[calc(100vh-var(--navbar-height))] h-full pt-[--navbar-height] px-4 flex flex-col bg-zinc-200 text-black">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="mb-20">Capabilities</h1>

        <div className="flex flex-col gap-20">
          {Array.from(capabilities).map((capability, i) => {
            let img = engineering;
            const { heading, text, image, services, alt } = capability;
            const isAltPosition = i % 2;

            if (image === "it") {
              img = it;
            }

            if (image === "consulting") {
              img = consulting;
            }

            if (image === "logistics") {
              img = logistics;
            }
            return isAltPosition ? (
              <section
                className="xl:grid grid-cols-[auto,1fr] gap-x-20"
                key={`capability_${i}`}
              >
                <div className="hidden xl:row-span-2 w-full h-full xl:flex">
                  <Image
                    src={img}
                    alt={alt}
                    className="max-h-full w-auto"
                    priority={i === 0}
                  />
                </div>
                <h2
                  className={`${tenor.className} text-4xl text-zinc-800 mb-8`}
                >
                  {heading}
                </h2>
                <div className="flex flex-col gap-8 col-span-2 xl:col-span-1 mb-20">
                  <p className="max-w-prose leading-6">{text}</p>
                  <div className="flex flex-col sm:grid grid-cols-2 gap-4 justify-between py-4 border-t-2 border-zinc-300 w-fit xl:w-full">
                    {services.map((service, i) => {
                      return (
                        <ListItem text={service} key={`${heading}_${i}`} />
                      );
                    })}
                  </div>
                </div>
              </section>
            ) : (
              <section
                className="xl:grid grid-cols-[1fr,auto] gap-x-20"
                key={`capability_${i}`}
              >
                <h2
                  className={`${tenor.className} text-4xl text-zinc-800 mb-8`}
                >
                  {heading}
                </h2>
                <div className="hidden xl:row-span-2 w-full h-full xl:flex justify-end max-h-[650px]">
                  <Image src={img} alt={alt} className="max-h-full w-auto" />
                </div>
                <div className="flex flex-col gap-8 col-span-2 xl:col-span-1 mb-20">
                  <p className="max-w-prose leading-6">{text}</p>
                  <div className="flex flex-col sm:grid grid-cols-2 gap-4 justify-between py-4 border-t-2 border-zinc-300 w-fit xl:w-full">
                    {services.map((service, i) => {
                      return (
                        <ListItem text={service} key={`${heading}_${i}`} />
                      );
                    })}
                  </div>
                </div>
              </section>
            );
          })}
          <section className="xl:grid grid-cols-[1fr,auto] mb-20">
            <h2 className={`${tenor.className} text-4xl text-zinc-800 mb-8`}>
              CompleteCloud
            </h2>
            <div className="hidden xl:row-span-2 w-full h-full xl:flex justify-end max-h-[650px]">
              <Image
                src={completecloud}
                alt="CompleteCloud"
                className="max-h-full w-auto"
              />
            </div>
            <div className="flex flex-col gap-8 col-span-2 xl:col-span-1 mb-20">
              <p className="max-w-prose leading-6 mb-8">
                Olokun&apos;s partnership with Avatara CompleteCloud Platform
                provides clients/customers with a holistic, private cloud
                solution for security and productivity. No matter the industry,
                CompleteCloud has an entire Information Technology (IT)
                infrastructure at a per user per month cost for scalability and
                affordability. Here is why:
              </p>
              <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 xl:pr-20">
                <li className="flex flex-col gap-2 p-2 text-sm bg-white rounded max-w-[35ch]">
                  <span className="uppercase border-b-2 border-b-brand pb-2 w-fit pr-4 font-semibold">
                    Predictable Cost
                  </span>
                  <p>Predictable IT budget, no capital expenses</p>
                </li>
                <li className="flex flex-col gap-2 p-2 text-sm bg-white rounded max-w-[35ch]">
                  <span className="uppercase border-b-2 border-b-brand pb-2 w-fit pr-4 font-semibold">
                    Business Continuity
                  </span>
                  <p>All data backed up in secondary data center</p>
                </li>
                <li className="flex flex-col gap-2 p-2 text-sm bg-white rounded max-w-[35ch]">
                  <span className="uppercase border-b-2 border-b-brand pb-2 w-fit pr-4 font-semibold">
                    Mobile Flexibility
                  </span>
                  <p>
                    Users have the same computing experience at home or on
                    travel as in the office with no clunky VPN connection
                  </p>
                </li>
                <li className="flex flex-col gap-2 p-2 text-sm bg-white rounded max-w-[35ch]">
                  <span className="uppercase border-b-2 border-b-brand pb-2 w-fit pr-4 font-semibold">
                    Collaboration Tools
                  </span>
                  <p>
                    Centralized, secure, cost-effective using a Unified
                    Communications Suite
                  </p>
                </li>
                <li className="flex flex-col gap-2 p-2 text-sm bg-white rounded max-w-[35ch]">
                  <span className="uppercase border-b-2 border-b-brand pb-2 w-fit pr-4 font-semibold">
                    Robust Security
                  </span>
                  <p>
                    Layered managed security on top of a platform built from the
                    ground up with security in mind
                  </p>
                </li>
                <li className="flex flex-col gap-2 p-2 text-sm bg-white rounded max-w-[35ch]">
                  <span className="uppercase border-b-2 border-b-brand pb-2 w-fit pr-4 font-semibold">
                    Industry Compliance
                  </span>
                  <p>Audit ready, all the time (FDIC, NIST, HIPAA, CMMC)</p>
                </li>
                <li className="flex flex-col gap-2 p-2 text-sm bg-white rounded max-w-[35ch]">
                  <span className="uppercase border-b-2 border-b-brand pb-2 w-fit pr-4 font-semibold">
                    Available Support
                  </span>
                  <p>
                    Centralization &amp; standardization enables faster
                    resolution from our 24/7 US-based team
                  </p>
                </li>
                <li className="flex flex-col gap-2 p-2 text-sm bg-white rounded max-w-[35ch]">
                  <span className="uppercase border-b-2 border-b-brand pb-2 w-fit pr-4 font-semibold">
                    Scalability
                  </span>
                  <p>
                    Simplify M&amp;A, growth, and staffing while increasing
                    valuation for sale
                  </p>
                </li>
                <li className="flex flex-col gap-2 p-2 text-sm bg-white rounded max-w-[35ch]">
                  <span className="uppercase border-b-2 border-b-brand pb-2 w-fit pr-4 font-semibold">
                    IT Management
                  </span>
                  <p>
                    Single source solution to all things Information Technology
                    (IT)
                  </p>
                </li>
              </ul>

              <Link
                className="bg-black text-white border-2 border-black rounded px-4 py-1 transition-all flex gap-2 items-center justify-center group w-fit h-fit mt-8"
                href="/completecloud"
              >
                <div className="flex p-2 rounded-full bg-white text-black items-center justify-center group-hover:pl-6 group-hover:justify-end transition-all">
                  <FaArrowRight />
                </div>
                <span>Discover CompleteCloud</span>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
