"use client";

import bg from "@/public/ingenuity-bg-light.svg";
import { Tenor_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

const tenor = Tenor_Sans({ weight: "400", subsets: ["latin"] });

export const Capabilities = () => {
  const scrollTopLeftRef = useRef<HTMLDivElement>(null);
  const scrollTopRightRef = useRef<HTMLDivElement>(null);
  const scrollBottomLeftRef = useRef<HTMLDivElement>(null);
  const scrollBottomRightRef = useRef<HTMLDivElement>(null);
  const topLeftControls = useAnimation();
  const topRightControls = useAnimation();
  const bottomLeftControls = useAnimation();
  const bottomRightControls = useAnimation();
  const isTopLeftInView = useInView(scrollTopLeftRef);
  const isBottomLeftInView = useInView(scrollBottomLeftRef, {
    margin: "0px 0px 400px 0px",
  });
  const isTopRightInView = useInView(scrollTopRightRef);
  const isBottomRightInView = useInView(scrollBottomRightRef);

  const variants = {
    start: {
      translateX: "var(--tx-start)",
      translateY: "var(--ty-start)",
    },
    end: {
      translateX: 0,
      translateY: 0,
    },
  };

  useEffect(() => {
    if (isTopLeftInView) {
      topLeftControls.start("end");
    }

    if (isTopRightInView) {
      topRightControls.start("end");
    }

    if (isBottomLeftInView) {
      bottomLeftControls.start("end");
    }

    if (isBottomRightInView) {
      bottomRightControls.start("end");
    }
  }, [
    isBottomLeftInView,
    isBottomRightInView,
    isTopLeftInView,
    isTopRightInView,
    topLeftControls,
    topRightControls,
    bottomLeftControls,
    bottomRightControls,
  ]);

  return (
    <section className="grid grid-cols-1 md:grid-cols-[auto_auto] min-h-screen relative overflow-hidden">
      <div className="absolute bottom-0 left-0 max-w-2xl hidden md:block">
        <Image src={bg} alt="Ingenuity decoration" />
      </div>
      <div className="relative py-20 md:py-0">
        <div className="flex flex-col gap-8 items-start py-4 px-4 lg:px-12 max-w-prose mx-auto w-fit reltaive md:sticky md:mt-4 top-[calc(1rem+var(--navbar-height))]">
          <h2 className={`${tenor.className} text-2xl lg:text-4xl`}>
            Capabilities
          </h2>
          <p className="max-w-[40ch] leading-8">
            At Olokun, we redefine the standards of government contracting
            through our unwavering commitment to excellence. Our expertise
            extends across a spectrum of critical domains, positioning us as
            leaders in consulting, engineering and technical services,
            logistics, and information technology.
          </p>
          <Link
            className="bg-white text-neutral-900 border-2 border-white rounded-sm px-4 py-1 transition-all flex gap-2 items-center justify-center group"
            href="/capabilities"
          >
            <div className="flex p-2 rounded-full bg-black text-white items-center justify-center group-hover:pl-6 group-hover:justify-end transition-all">
              <FaArrowRight />
            </div>
            <span className="bg-white">View All Capabilities</span>
          </Link>
        </div>
      </div>

      <div className="bg-zinc-200 grid grid-cols-2 xl:gap-4 text-black overflow-hidden">
        <motion.div
          initial="start"
          animate={topLeftControls}
          variants={variants}
          transition={{ duration: 0.75 }}
          className="flex flex-col py-4 h-full col-span-2 xl:col-span-1 bg-zinc-200 [--tx-start:-100%] [--ty-start:0]"
          ref={scrollTopLeftRef}
        >
          <h3 className="text-2xl pr-8 mx-4 lg:mx-8 py-4 font-semibold border-b-2 border-brand w-fit">
            Engineering & Technical Services
          </h3>

          <p className="px-4 max-w-prose leading-8 grow py-4 flex items-center text-lg lg:px-8">
            Engineering and Technical Services are one of Olokun&apos;s core
            competencies. Our approach is to adapt to our customer requirements
            and provide sound engineering design with exceptional quality and
            producibility.
          </p>
        </motion.div>
        <motion.div
          initial="start"
          animate={topRightControls}
          variants={variants}
          transition={{ duration: 0.75 }}
          className="flex flex-col py-4 h-full col-span-2 xl:col-span-1 xl:bg-white origin-bottom-left [--tx-start:100%] [--ty-start:0] xl:[--tx-start:0] xl:[--ty-start:-100%]"
          ref={scrollTopRightRef}
        >
          <h3 className="text-2xl pr-8 mx-4 lg:mx-8 py-4 font-semibold border-b-2 border-brand w-fit">
            Logistics Support
          </h3>
          <p className="px-4 max-w-prose leading-8 grow py-4 flex items-center text-lg lg:px-8">
            Our logistics team can provide a wide range of services to support
            customers&apos; requirements. We provide integrated logistics
            support services in the acquisition, planning, and life cycle
            support. To provide dynamic, fast, and innovative results, our team
            is adaptable to our customer&apos;s requirements and standards.
          </p>
        </motion.div>
        <motion.div
          initial="start"
          animate={bottomLeftControls}
          variants={variants}
          transition={{ duration: 0.75 }}
          className="flex flex-col py-4 h-full col-span-2 xl:col-span-1 xl:bg-white [--tx-start:-100%] [--ty-start:0] xl:[--tx-start:0] xl:[--ty-start:100%]"
          ref={scrollBottomLeftRef}
        >
          <h3 className="text-2xl pr-8 mx-4 lg:mx-8 py-4 font-semibold border-b-2 border-brand w-fit">
            Information Technology
          </h3>
          <p className="px-4 max-w-prose leading-8 grow py-4 flex items-center text-lg lg:px-8">
            Our Information Technology Industry Professionals provide
            information technology development, operations and sustainment
            services, and cyber security services for the various federal
            government and commercial customers. Olokun IT professionals
            architect, develop, integrate, test, deploy, and maintain secure
            software applications and web services hosted in various government
            and commercial virtual environments. Olokun uses industry best
            practices to provide an innovative and process-driven approach to
            solve challenging technical and business problems.
          </p>
        </motion.div>
        <motion.div
          initial="start"
          animate={bottomRightControls}
          variants={variants}
          transition={{ duration: 0.75 }}
          className="flex flex-col py-4 h-full col-span-2 xl:col-span-1 [--tx-start:50%] [--ty-start:0]"
          ref={scrollBottomRightRef}
        >
          <h3 className="text-2xl pr-8 mx-4 lg:mx-8 py-4 font-semibold border-b-2 border-brand w-fit">
            Consulting
          </h3>
          <p className="px-4 max-w-prose leading-8 grow py-4 flex items-center text-lg lg:px-8">
            Olokun has years of experience in business development support,
            pipeline development, proposal management, coordination, writing,
            review, and assessment. Our team develops detailed outlines,
            technical content, compliance matrix, and capture plans. We have
            experts in government contracting who can provide competitive bid
            strategies that will display our customers&apos; abilities to meet
            the requirements with a sound solution.
          </p>
        </motion.div>
        <div className="py-4 border-t-2 border-b-2 border-t-brand border-b-brand grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:flex 2xl:flex-wrap gap-4 col-span-2 bg-white justify-center items-center font-bold text-lg">
          <span className="font-normal text-sm px-4 col-span-3 lg:col-span-4 xl:col-span-5 2xl:px-8 w-full">
            NAICS Codes:
          </span>
          <span className="border-r border-r-zinc-300 px-4">541330</span>
          <span className="border-r border-r-zinc-300 px-4">541310</span>
          <span className="border-r border-r-zinc-300 px-4">336611</span>
          <span className="border-r border-r-zinc-300 px-4">541512</span>
          <span className="border-r border-r-zinc-300 px-4">541611</span>
          <span className="border-r border-r-zinc-300 px-4">541618</span>
          <span className="border-r border-r-zinc-300 px-4">541990</span>
          <span className="border-r border-r-zinc-300 px-4">541690</span>
          <span className="px-4">541614</span>
        </div>
      </div>
    </section>
  );
};
