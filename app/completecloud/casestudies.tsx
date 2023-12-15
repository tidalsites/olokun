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
    <div className="grid grid-cols-3 gap-8 mb-20 mt-8">
      <Link
        href="/completecloud/engineering"
        className="flex items-end justify-center rounded bg-white h-80 relative isolate group"
      >
        <div className="absolute inset-0 -z-10 brightness-90 group-hover:brightness-100">
          <Image src={engineering} alt="Engineering robots" />
        </div>

        <span className="bg-red-700/90 text-white w-full text-center px-2 py-4 font-semibold">
          Engineering
        </span>
      </Link>
      <Link
        href="/completecloud/aerospace"
        className="flex items-end justify-center rounded bg-white h-80 relative isolate group"
      >
        <div className="absolute inset-0 -z-10 brightness-90 group-hover:brightness-100">
          <Image src={aerospace} alt="Figher jets" />
        </div>
        <span className="bg-red-700/90 text-white w-full text-center px-2 py-4 font-semibold">
          Aerospace
        </span>
      </Link>
      <Link
        href="/completecloud/geomatics"
        className="flex items-end justify-center rounded bg-white h-80 relative isolate group"
      >
        <div className="absolute inset-0 -z-10 brightness-90 group-hover:brightness-100">
          <Image
            src={geomatics}
            alt="Survey crew pointing to drone in the sky"
          />
        </div>
        <span className="bg-red-700/90 text-white w-full text-center px-2 py-4 font-semibold">
          Geomatics
        </span>
      </Link>
      <Link
        href="/completecloud/gcc"
        className="flex items-end justify-center rounded bg-white h-80 relative isolate group"
      >
        <div className="absolute inset-0 -z-10 brightness-90 group-hover:brightness-100">
          <Image src={dod} alt="Military woman in server room" />
        </div>
        <span className="bg-red-700/90 text-white w-full text-center px-2 py-4 font-semibold">
          CompleteCloud vs. GCC High
        </span>
      </Link>
      <Link
        href="/completecloud/banking"
        className="flex items-end justify-center rounded bg-white h-80 relative isolate group"
      >
        <div className="absolute inset-0 -z-10 brightness-90 group-hover:brightness-100">
          <Image src={banking} alt="Two people shaking hands" />
        </div>
        <span className="bg-red-700/90 text-white w-full text-center px-2 py-4 font-semibold">
          Banking Industry
        </span>
      </Link>
      <Link
        href="/completecloud/distribution"
        className="flex items-end justify-center rounded bg-white h-80 relative isolate group"
      >
        <div className="absolute inset-0 -z-10 brightness-90 group-hover:brightness-100">
          <Image src={distribution} alt="Forklift in warehouse" />
        </div>
        <span className="bg-red-700/90 text-white w-full text-center px-2 py-4 font-semibold">
          Distribution
        </span>
      </Link>
      <Link
        href="/completecloud/educational-institution"
        className="flex items-end justify-center rounded bg-white h-80 relative isolate group"
      >
        <div className="absolute inset-0 -z-10 brightness-90 group-hover:brightness-100">
          <Image src={education} alt="Kids in classroom" />
        </div>
        <span className="bg-red-700/90 text-white w-full text-center px-2 py-4 font-semibold">
          Educational Institution
        </span>
      </Link>
    </div>
  );
};
