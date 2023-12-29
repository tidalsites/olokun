import { Tenor_Sans } from "next/font/google";

const tenor = Tenor_Sans({ weight: "400", subsets: ["latin"] });

import avatara from "@/public/casestudies/avatara.png";

import { Features } from "./features";
import { CaseStudies } from "./casestudies";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CompleteCloud: The Smart Platform for Security and Productivity",
  description:
    "Discover CompleteCloud, our smart platform designed for security and productivity-conscious businesses. Explore case studies showcasing how CompleteCloud has empowered clients, providing an all-inclusive per user per month pricing model for a competitive advantage and peace of mind.",
};

export default function CompleteCloud() {
  return (
    <section className="min-h-[calc(100vh-var(--navbar-height))] h-full pt-[--navbar-height] px-4 flex flex-col bg-zinc-200 text-black">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="mb-20">CompleteCloud</h1>
        <div className="flex flex-col">
          <h2 className={`${tenor.className} text-4xl text-zinc-800`}>
            A Solution for Everyone
          </h2>
          <p className="max-w-prose leading-6 pt-8">
            CompleteCloud is a Smart Platform that was built for security and
            productivity conscious businesses and is delivered and supported in
            an all-inclusive per user per month pricing model, giving our
            customers a competitive advantage and peace of mind.
          </p>
          <div className="mt-4 outline -outline-offset-8 outline-2 outline-brand w-fit">
            <Image src={avatara} alt="avatara dashboard" />
          </div>
          <p className="max-w-prose leading-6 py-8 mt-4">
            The CompleteCloud Platform offers a revolutionized approach to
            buying, accessing, and maintaining your IT environment. Key features
            include:
          </p>
          <Features />
        </div>
        <h2 className={`${tenor.className} text-4xl text-zinc-800`}>
          CompleteCloud Case Studies
        </h2>
        <CaseStudies />
      </div>
    </section>
  );
}
