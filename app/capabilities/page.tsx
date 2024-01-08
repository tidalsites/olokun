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
import completecloud from "@/public/completecloudlogo.png";

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
            return (
              <section
                className="xl:grid grid-cols-[1fr,auto]"
                key={`capability_${i}`}
              >
                {isAltPosition ? (
                  <>
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
                  </>
                ) : (
                  <>
                    <h2
                      className={`${tenor.className} text-4xl text-zinc-800 mb-8`}
                    >
                      {heading}
                    </h2>
                    <div className="hidden xl:row-span-2 w-full h-full xl:flex justify-end max-h-[650px]">
                      <Image
                        src={img}
                        alt={alt}
                        className="max-h-full w-auto"
                      />
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
                  </>
                )}
              </section>
            );
          })}
          <section>
            <h2
              className={`${tenor.className} text-4xl text-zinc-800 lg:mt-40 col-span-2`}
            >
              CompleteCloud
            </h2>
            <div className="flex gap-8 mt-8 mb-20 col-span-2">
              <div>
                <p className="max-w-prose leading-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium perspiciatis doloremque consectetur dolorum sequi
                  fuga et facere, natus, voluptas esse cupiditate magnam
                  excepturi praesentium porro id. Cupiditate sint magnam
                  incidunt dignissimos voluptas nostrum id doloribus ratione
                  blanditiis consequatur aliquid, vel tempora iure nesciunt
                  repudiandae, dolorem eos perferendis. In ab expedita assumenda
                  esse repellendus eos dolores saepe perspiciatis voluptas
                  laudantium perferendis itaque deleniti sed rerum et ad
                  doloremque eveniet dolorum suscipit aut tempora, quaerat
                  error? Aut modi, esse vel deserunt cupiditate error
                  voluptatem?
                </p>
                <Link
                  className="bg-black text-white border-2 border-black rounded px-4 py-1 transition-all flex gap-2 items-center justify-center group w-fit mt-8"
                  href="/completecloud"
                >
                  <div className="flex p-2 rounded-full bg-white text-black items-center justify-center group-hover:pl-6 group-hover:justify-end transition-all">
                    <FaArrowRight />
                  </div>
                  <span>Discover CompleteCloud</span>
                </Link>
              </div>
              <div className="hidden lg:flex items-center p-4 border-l-2 border-zinc-300">
                <div className="max-h-[150px]">
                  <Image
                    src={completecloud}
                    alt="CompleteCloud"
                    className="max-h-full w-auto"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
