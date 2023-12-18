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
          <div className="bg-black py-8 text-white flex flex-col md:grid md:grid-cols-[auto,1fr] md:mt-8 -mx-4 lg:mx-0 gap-8">
            <div className="md:-translate-y-12 max-h-[400px] lg:mx-8 ml-4 w-fit">
              <Image
                src={vernon}
                alt="Vernon M. Hall Jr."
                className="max-h-full w-auto border-2 border-black rounded"
              />
            </div>
            <div className="max-w-prose flex flex-col grow mr-auto px-4">
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
            <div className="border-t-4 lg:border-t-8 pt-10 border-zinc-200 col-span-2 px-4 lg:px-8">
              <p className="pb-8 col-span-2">Meet our Board of Advisors</p>
              <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
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
          <div className="bg-white lg:rounded col-span-2 md:col-span-1 -mx-4 md:mx-0">
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
          <div className="bg-white lg:rounded col-span-2 md:col-span-1 -mx-4 md:mx-0">
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
