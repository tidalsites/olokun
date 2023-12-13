import { Tenor_Sans } from "next/font/google";
const tenor = Tenor_Sans({ weight: "400", subsets: ["latin"] });
import Image from "next/image";

import engineering from "@/public/casestudies/engineering.png";
import aerospace from "@/public/casestudies/aerospace.png";
import geomatics from "@/public/casestudies/geomatics.png";
import dod from "@/public/casestudies/dod.png";
import banking from "@/public/casestudies/banking.png";
import distribution from "@/public/casestudies/distribution.png";
import education from "@/public/casestudies/education.png";
import Link from "next/link";

export default function Work() {
  return (
    <section className="min-h-[calc(100vh-var(--navbar-height))] h-full pt-[--navbar-height] px-4 flex flex-col bg-zinc-200 text-black">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="mb-20">Our Work</h1>
        <div className="flex flex-col">
          <h2 className={`${tenor.className} text-4xl text-zinc-800`}>
            Case Studies
          </h2>
          <p className="max-w-prose leading-6 py-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis cum
            rem, enim saepe, inventore accusantium accusamus harum, quis animi
            qui perferendis quae similique quos? Magni, at non voluptates autem
            repudiandae cum consequatur enim culpa quod esse ad fuga, natus,
            rerum quibusdam laboriosam atque expedita eos saepe recusandae
            perspiciatis sequi earum accusantium quos. Ratione, provident
            repellendus.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8 mb-20">
          <Link
            href="/work/engineering"
            className="flex items-end justify-center rounded bg-white h-80 relative isolate group"
          >
            <div className="absolute inset-0 -z-10 brightness-90 group-hover:brightness-100">
              <Image src={engineering} alt="Engineering robots" />
            </div>

            <span className="bg-red-700/90 text-white w-full text-center px-2 py-4 font-semibold">
              Engineering
            </span>
          </Link>
          <div className="flex items-end justify-center rounded bg-white h-80 relative isolate group">
            <div className="absolute inset-0 -z-10 brightness-90 group-hover:brightness-100">
              <Image src={aerospace} alt="Figher jets" />
            </div>
            <span className="bg-red-700/90 text-white w-full text-center px-2 py-4 font-semibold">
              Aerospace
            </span>
          </div>
          <div className="flex items-end justify-center rounded bg-white h-80 relative isolate group">
            <div className="absolute inset-0 -z-10 brightness-90 group-hover:brightness-100">
              <Image
                src={geomatics}
                alt="Survey crew pointing to drone in the sky"
              />
            </div>
            <span className="bg-red-700/90 text-white w-full text-center px-2 py-4 font-semibold">
              Geomatics
            </span>
          </div>
          <div className="flex items-end justify-center rounded bg-white h-80 relative isolate group">
            <div className="absolute inset-0 -z-10 brightness-90 group-hover:brightness-100">
              <Image src={dod} alt="Military woman in server room" />
            </div>
            <span className="bg-red-700/90 text-white w-full text-center px-2 py-4 font-semibold">
              CompleteCloud vs. GCC High
            </span>
          </div>
          <div className="flex items-end justify-center rounded bg-white h-80 relative isolate group">
            <div className="absolute inset-0 -z-10 brightness-90 group-hover:brightness-100">
              <Image src={banking} alt="Two people shaking hands" />
            </div>
            <span className="bg-red-700/90 text-white w-full text-center px-2 py-4 font-semibold">
              Banking Industry
            </span>
          </div>
          <div className="flex items-end justify-center rounded bg-white h-80 relative isolate group">
            <div className="absolute inset-0 -z-10 brightness-90 group-hover:brightness-100">
              <Image src={distribution} alt="Forklift in warehouse" />
            </div>
            <span className="bg-red-700/90 text-white w-full text-center px-2 py-4 font-semibold">
              Distribution
            </span>
          </div>
          <div className="flex items-end justify-center rounded bg-white h-80 relative isolate group">
            <div className="absolute inset-0 -z-10 brightness-90 group-hover:brightness-100">
              <Image src={education} alt="Kids in classroom" />
            </div>
            <span className="bg-red-700/90 text-white w-full text-center px-2 py-4 font-semibold">
              Educational Institution
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
