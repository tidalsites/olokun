import Image from "next/image";

import engineering from "@/public/casestudies/engineering.png";
import aerospace from "@/public/casestudies/aerospace.png";
import geomatics from "@/public/casestudies/geomatics.png";
import dod from "@/public/casestudies/dod.png";
import banking from "@/public/casestudies/banking.png";
import distribution from "@/public/casestudies/distribution.png";
import education from "@/public/casestudies/education.png";
import Link from "next/link";

export const CaseStudies = () => {
  return (
    <div className="flex flex-col items-center md:justify-center md:flex-row md:flex-wrap xl:grid grid-cols-3 gap-8 mb-20 mt-8">
      <Link
        href="/completecloud/engineering"
        className="rounded bg-white w-[min(420px,calc(100vw-2rem))] xl:w-auto aspect-[420/310] relative isolate group"
      >
        <div className="w-full h-full -z-10 brightness-90 group-hover:brightness-100">
          <Image
            src={engineering}
            alt="Engineering robots"
            className="h-full object-cover"
            width="420"
            height="310"
          />
        </div>

        <span className="bg-red-700/90 text-white w-full text-center px-2 py-4 font-semibold absolute bottom-0">
          Engineering
        </span>
      </Link>
      <Link
        href="/completecloud/aerospace"
        className="rounded bg-white w-[min(420px,calc(100vw-2rem))] xl:w-auto aspect-[420/310] relative isolate group"
      >
        <div className="absolute inset-0 -z-10 brightness-90 group-hover:brightness-100">
          <Image
            src={aerospace}
            alt="Figher jets"
            className="h-full object-cover"
            width="420"
            height="310"
          />
        </div>
        <span className="bg-red-700/90 text-white w-full text-center px-2 py-4 font-semibold absolute bottom-0">
          Aerospace
        </span>
      </Link>
      <Link
        href="/completecloud/geomatics"
        className="rounded bg-white w-[min(420px,calc(100vw-2rem))] xl:w-auto aspect-[420/310] relative isolate group"
      >
        <div className="absolute inset-0 -z-10 brightness-90 group-hover:brightness-100">
          <Image
            src={geomatics}
            alt="Survey crew pointing to drone in the sky"
            className="h-full object-cover"
            width="420"
            height="310"
          />
        </div>
        <span className="bg-red-700/90 text-white w-full text-center px-2 py-4 font-semibold absolute bottom-0">
          Geomatics
        </span>
      </Link>
      <Link
        href="/completecloud/gcc"
        className="rounded bg-white w-[min(420px,calc(100vw-2rem))] xl:w-auto aspect-[420/310] relative isolate group"
      >
        <div className="absolute inset-0 -z-10 brightness-90 group-hover:brightness-100">
          <Image
            src={dod}
            alt="Military woman in server room"
            className="h-full object-cover"
            width="420"
            height="310"
          />
        </div>
        <span className="bg-red-700/90 text-white w-full text-center px-2 py-4 font-semibold absolute bottom-0">
          CompleteCloud vs. GCC High
        </span>
      </Link>
      <Link
        href="/completecloud/banking"
        className="rounded bg-white w-[min(420px,calc(100vw-2rem))] xl:w-auto aspect-[420/310] relative isolate group"
      >
        <div className="absolute inset-0 -z-10 brightness-90 group-hover:brightness-100">
          <Image
            src={banking}
            alt="Two people shaking hands"
            className="h-full object-cover"
            width="420"
            height="310"
          />
        </div>
        <span className="bg-red-700/90 text-white w-full text-center px-2 py-4 font-semibold absolute bottom-0">
          Banking Industry
        </span>
      </Link>
      <Link
        href="/completecloud/distribution"
        className="rounded bg-white w-[min(420px,calc(100vw-2rem))] xl:w-auto aspect-[420/310] relative isolate group"
      >
        <div className="absolute inset-0 -z-10 brightness-90 group-hover:brightness-100">
          <Image
            src={distribution}
            alt="Forklift in warehouse"
            className="h-full object-cover"
            width="420"
            height="310"
          />
        </div>
        <span className="bg-red-700/90 text-white w-full text-center px-2 py-4 font-semibold absolute bottom-0">
          Distribution
        </span>
      </Link>
      <Link
        href="/completecloud/educational-institution"
        className="rounded bg-white w-[min(420px,calc(100vw-2rem))] xl:w-auto aspect-[420/310] relative isolate group"
      >
        <div className="absolute inset-0 -z-10 brightness-90 group-hover:brightness-100">
          <Image
            src={education}
            alt="Kids in classroom"
            className="h-full object-cover"
            width="420"
            height="310"
          />
        </div>
        <span className="bg-red-700/90 text-white w-full text-center px-2 py-4 font-semibold absolute bottom-0">
          Educational Institution
        </span>
      </Link>
    </div>
  );
};
