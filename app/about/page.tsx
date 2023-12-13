import { Tenor_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Vision } from "./Vision";
const tenor = Tenor_Sans({ weight: "400", subsets: ["latin"] });

import donald from "@/public/Donald-A.-Buzard.jpg";
import bert from "@/public/Roberto-Bert-Ortiz.jpg";
import vernon from "@/public/vernon-cropped.png";

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
          <div className="bg-black py-8 text-white grid grid-cols-[auto,1fr] mt-8 gap-y-8">
            <div className="-translate-y-12 max-h-[400px] mx-8 w-fit">
              <Image
                src={vernon}
                alt="Vernon M. Hall Jr."
                className="max-h-full w-auto border-2 border-black rounded"
              />
            </div>
            <div className="max-w-prose flex flex-col grow mx-auto">
              <span className="text-lg">Vernon M. Hall Jr.</span>
              <span className="text-sm text-zinc-200">Founder & CEO</span>
              <p className="mt-8">
                Vernon Hall founded Olokun LLC in 2021 with the mindset of
                creating a diverse company with the technical capability to
                provide innovative and process-driven solutions in the form of
                products and services to our clients. With over 18 years of
                experience, Vernon has served as an outside machinist, designer,
                engineer, project manager, program manager, division manager,
                and business developer. At Olokun, he manages the business,
                including but not limited to financial operations, business
                development, and program or account manager. He has been
                responsible for numerous contracts for NAVSEA, NAVAIR, NAWCs,
                NSWCs, NNSY, and MSC. Before Olokun, Vernon worked in AIT
                environments and Engineering & Design environments. His
                experience in both environments includes shipyards, small design
                firms, and large design firm support serving in the
                abovementioned roles. Vernon&apos;s design experience is in
                mechanical systems and equipment spanning across many vessels.
                His technical expertise includes mechanical engineering, weight
                engineering, 3-D ship design, 2-D ship design, ship integration,
                research and development, and new construction design. Vernon
                believes in collaboration with Olokun&apos;s team, teammates,
                and customers to provide the best solutions to government and
                commercial clients.
              </p>
            </div>
            <div className="border-t-8 pt-10 border-zinc-200 col-span-2 px-8">
              <p className="pb-8 col-span-2">Meet our Board of Advisors</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-4 col-span-1">
                  <div className="h-[200px]">
                    <Image
                      src={bert}
                      alt="Roberto Ortiz"
                      className="max-h-full w-auto"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg">
                      Roberto &quot;Bert&quot; Ortiz
                    </span>
                    <span className="text-sm text-zinc-200">
                      Founder/Co-Owner/President/CEO of AVMAC LLC
                    </span>
                    {/* <p className="mt-8">
                      A senior aviation and shipboard management professional,
                      Bert retired as a Commander from the U.S. Navy after a
                      31-year career and started AVMAC in 2009 with Don Buzard,
                      a shipmate and a 30-year U.S. Navy retired Commander. Bert
                      has extensive aircraft and shipboard management,
                      maintenance, acquisition, logistics, operations and safety
                      experience that both he and Don leveraged to provide
                      aviation and maritime support services to both the
                      Government and private industry. Bert has incrementally
                      grown AVMAC every year into a multimillion-dollar
                      award-winning company. Nationally, AVMAC has been
                      recognized as a Inc. Magazine Private Titan in 2020 and
                      has made the Inc. 5000 list of fastest growing businesses
                      the past two years with over 500 employees and revenues
                      exceeding $50M. AVMAC was named the City of Chesapeake
                      Business of the Year in 2021 and listed as the Inside
                      Business Hampton Roads top 20 Fastest growing business for
                      five years in a row. Bert leads all aspects of the
                      company&apos;s development and was named as the Small
                      Business Administration&apos;s Person of the Year in the
                      Commonwealth of Virginia and the National second runner-up
                      in 2019. Bert completed his degree in Business
                      Administration with a specialization in Technology
                      Management from St. Leo University and has completed his
                      Defense Acquisition University certifications in
                      Acquisition and Logistics as well as Production, Quality
                      and Manufacturing.
                    </p> */}
                  </div>
                </div>
                <div className="flex flex-col gap-4 col-span-1">
                  <div className="h-[200px]">
                    <Image
                      src={donald}
                      alt="Donald A. Buzard"
                      className="max-h-full w-auto"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg">Donald A. Buzard</span>
                    <span className="text-sm text-zinc-200">
                      Co-Owner/COO of AVMAC LLC
                    </span>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-2 gap-8">
          <h2
            className={`${tenor.className} text-4xl text-zinc-800 col-span-2`}
          >
            Who We Serve
          </h2>
          <p className="max-w-prose leading-6 py-8 col-span-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iste
            dolor corporis eius doloremque eum error expedita soluta ut,
            accusantium vero, repellat ea dolorem veniam, est voluptate
            reiciendis assumenda? Distinctio dolorem alias qui animi ipsum
            voluptate dignissimos quo, quod vero nihil dolores tempore veniam
            esse corporis, sit ea molestias. Ut, blanditiis ullam. Quaerat,
            tempore inventore!
          </p>
          <div className="bg-white rounded">
            <h3 className="p-4 bg-zinc-200 text-xl font-light border-b-2 border-b-red-700">
              Government
            </h3>
            <div className="relative isolate">
              <p className="max-w-prose leading-6 py-8 bg-white p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                iste dolor corporis eius doloremque eum error expedita soluta
                ut, accusantium vero, repellat ea dolorem veniam, est voluptate
                reiciendis assumenda? Distinctio dolorem alias qui animi ipsum
                voluptate dignissimos quo, quod vero nihil dolores tempore
                veniam esse corporis, sit ea molestias. Ut, blanditiis ullam.
                Quaerat, tempore inventore!
              </p>
              <p className="max-w-prose leading-6 bg-white p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, ducimus voluptatem? Quaerat ratione molestiae
                deserunt nesciunt voluptatum fuga nobis odio quis repellat ullam
                laudantium eius quae minima expedita commodi ea laboriosam optio
                accusantium reprehenderit, officiis perspiciatis amet.
                Obcaecati?
              </p>
            </div>
          </div>
          <div className="bg-white">
            <h3 className="p-4 bg-zinc-200 text-xl font-light border-b-2 border-b-red-700">
              Commercial
            </h3>
            <div className="p-4">
              <p className="max-w-prose leading-6 py-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                iste dolor corporis eius doloremque eum error expedita soluta
                ut, accusantium vero, repellat ea dolorem veniam, est voluptate
                reiciendis assumenda? Distinctio dolorem alias qui animi ipsum
                voluptate dignissimos quo, quod vero nihil dolores tempore
                veniam esse corporis, sit ea molestias. Ut, blanditiis ullam.
                Quaerat, tempore inventore!
              </p>
              <p className="max-w-prose leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, ducimus voluptatem? Quaerat ratione molestiae
                deserunt nesciunt voluptatum fuga nobis odio quis repellat ullam
                laudantium eius quae minima expedita commodi ea laboriosam optio
                accusantium reprehenderit, officiis perspiciatis amet.
                Obcaecati?
              </p>
            </div>
          </div>
          <Link
            href="/capabilities"
            className="px-4 py-1 bg-black text-white rounded w-fit flex items-center gap-2 group mx-auto col-span-2 my-8 transition-all "
          >
            <div className="flex p-2 rounded-full bg-white text-black items-center justify-center group-hover:pl-6 group-hover:justify-end transition-all">
              <FaArrowRight />
            </div>
            <span>Check out our Capabilities</span>
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
