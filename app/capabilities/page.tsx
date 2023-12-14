import { Tenor_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
const tenor = Tenor_Sans({ weight: "400", subsets: ["latin"] });

import completecloud from "@/public/completecloudlogo.png";
import engineering from "@/public/capabilities/engineering.png";
import logistics from "@/public/capabilities/logistics.png";
import it from "@/public/capabilities/it.png";
import consulting from "@/public/capabilities/consulting.png";

import { MdOutlineManageAccounts } from "react-icons/md";
import { PiGraphBold } from "react-icons/pi";
import { PiStrategyBold } from "react-icons/pi";
import { PiShieldCheckFill } from "react-icons/pi";
import { PiListMagnifyingGlass } from "react-icons/pi";
import { PiPenNibBold } from "react-icons/pi";
import { PiMicrophoneStageFill } from "react-icons/pi";
import { PiFileBold } from "react-icons/pi";
import { PiFileCloudLight } from "react-icons/pi";
import { PiHandshakeFill } from "react-icons/pi";
import { PiUsersFourFill } from "react-icons/pi";
import { PiFilesBold } from "react-icons/pi";

export default function Capabilities() {
  return (
    <section className="min-h-[calc(100vh-var(--navbar-height))] h-full pt-[--navbar-height] px-4 flex flex-col bg-zinc-200 text-black">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="mb-20">Capabilities</h1>

        <div className="grid grid-cols-2 grid-rows-[repeat(4,auto_auto_200px)] gap-x-20 items-start">
          <h2 className={`${tenor.className} text-4xl text-zinc-800`}>
            Engineering & Technical Services
          </h2>
          <div className="row-span-2 w-full h-full">
            <Image
              src={engineering}
              alt="U.S. Navy Ship"
              className="max-h-full w-auto"
            />
          </div>
          <div className="flex flex-col gap-8">
            <p className="max-w-prose leading-6">
              Engineering and Technical Services are one of Olokun&apos;s core
              competencies. Our approach is to adapt to our customer
              requirements and provide sound engineering design with exceptional
              quality and producibility. We have experienced drafters,
              designers, and engineers who can provide cradle to grave
              engineering support to various customers and customers&apos;
              requirements. Olokun&apos;s engineering team can offer a wide
              range of calculations and engineering studies to support customer
              needs. Olokun knows structural, mechanical, and electrical
              discipline practices to apply that knowledge to various shore and
              ship platforms. Our drafters, designers, and engineers have
              experience with NAVFAC, NAVSEA, ABS, MSC, and USCG Regulations.
            </p>
            <div className="grid grid-cols-2 gap-4 justify-between p-4 border-t-2 border-zinc-300">
              <div className="flex gap-2">
                <FaCheckCircle className="text-2xl text-green-600" />
                <span>Marine Engineering</span>
              </div>
              <div className="flex gap-2">
                <FaCheckCircle className="text-2xl text-green-600" />
                <span>Design Services</span>
              </div>
              <div className="flex gap-2">
                <FaCheckCircle className="text-2xl text-green-600" />
                <span>CAD Modeling</span>
              </div>
              <div className="flex gap-2">
                <FaCheckCircle className="text-2xl text-green-600" />
                <span>Electrical & Electronic Engineering</span>
              </div>
              <div className="flex gap-2">
                <FaCheckCircle className="text-2xl text-green-600" />
                <span>HVAC Engineering</span>
              </div>
              <div className="flex gap-2">
                <FaCheckCircle className="text-2xl text-green-600" />
                <span>Engineering Studies</span>
              </div>
              <div className="flex gap-2">
                <FaCheckCircle className="text-2xl text-green-600" />
                <span>Structural Engineering</span>
              </div>
              <div className="flex gap-2">
                <FaCheckCircle className="text-2xl text-green-600" />
                <span>AIT Installation Support</span>
              </div>
            </div>
          </div>
          <div className="col-span-2"></div>

          <div className="row-span-2">
            <Image
              src={logistics}
              alt="Pen and keyboard"
              className="max-h-full w-auto"
            />
          </div>
          <h2 className={`${tenor.className} text-4xl text-zinc-800`}>
            Logistics Support
          </h2>
          <div className="flex flex-col gap-8 mb-20">
            <p className="max-w-prose leading-6 pt-8">
              At Olokun LLC, our logistics team can provide a wide range of
              services to support customers&apos; requirements. We provide
              integrated logistics support services in the acquisition,
              planning, and life cycle support. To provide dynamic, fast, and
              innovative results, our team is adaptable to our customer&apos;s
              requirements and standards.
            </p>
            <div className="grid grid-cols-2 gap-4 justify-between p-4 border-t-2 border-zinc-300">
              <div className="flex gap-2">
                <FaCheckCircle className="text-2xl text-green-600" />
                <span>Program/Project Management</span>
              </div>
              <div className="flex gap-2">
                <FaCheckCircle className="text-2xl text-green-600" />
                <span>Planning and Estimating</span>
              </div>
              <div className="flex gap-2">
                <FaCheckCircle className="text-2xl text-green-600" />
                <span>Commonality Maximization</span>
              </div>
              <div className="flex gap-2">
                <FaCheckCircle className="text-2xl text-green-600" />
                <span>Obsolescence Management</span>
              </div>
              <div className="flex gap-2">
                <FaCheckCircle className="text-2xl text-green-600" />
                <span>Item Reduction</span>
              </div>
              <div className="flex gap-2">
                <FaCheckCircle className="text-2xl text-green-600" />
                <span>Technical Manual Conversions</span>
              </div>
              <div className="flex gap-2">
                <FaCheckCircle className="text-2xl text-green-600" />
                <span>Warehousing support</span>
              </div>
              <div className="flex gap-2">
                <FaCheckCircle className="text-2xl text-green-600" />
                <span>Alteration Tracking</span>
              </div>
              <div className="flex gap-2">
                <FaCheckCircle className="text-2xl text-green-600" />
                <span>Material Ordering</span>
              </div>
              <div className="flex gap-2">
                <FaCheckCircle className="text-2xl text-green-600" />
                <span>Scheduling</span>
              </div>
              <div className="flex gap-2">
                <FaCheckCircle className="text-2xl text-green-600" />
                <span>Work Packaging</span>
              </div>
            </div>
          </div>
          <div className="col-span-2"></div>

          <h2 className={`${tenor.className} text-4xl text-zinc-800`}>
            Information Technology
          </h2>
          <div className="row-span-2">
            <Image src={it} alt="Digital cloud" className="max-h-full w-auto" />
          </div>
          <div className="flex flex-col gap-8 mb-20">
            <p className="max-w-prose leading-6 pt-8">
              Our Information Technology Industry Professionals provide
              information technology development, operations and sustainment
              services, and cyber security services for the various federal
              government and commercial customers. Olokun IT professionals
              architect, develop, integrate, test, deploy, and maintain secure
              software applications and web services hosted in various
              government and commercial virtual environments. Olokun uses
              industry best practices to provide an innovative and
              process-driven approach to solve challenging technical and
              business problems.
            </p>
            <div className="grid grid-cols-2 gap-4 justify-between p-4 border-t-2 border-zinc-300">
              <div className="flex gap-2">
                <FaCheckCircle className="text-2xl text-green-600" />
                <span>Program/Project Management</span>
              </div>
              <div className="flex gap-2">
                <FaCheckCircle className="text-2xl text-green-600" />
                <span>Cloud Infrastructure and Virtualization</span>
              </div>
              <div className="flex gap-2">
                <FaCheckCircle className="text-2xl text-green-600" />
                <span>Integration and Sustainment</span>
              </div>
              <div className="flex gap-2">
                <FaCheckCircle className="text-2xl text-green-600" />
                <span>Information Assurance</span>
              </div>
              <div className="flex gap-2">
                <FaCheckCircle className="text-2xl text-green-600" />
                <span>Vulnerability Analysis & Remediation</span>
              </div>
              <div className="flex gap-2">
                <FaCheckCircle className="text-2xl text-green-600" />
                <span>Cyber Planning and Analysis</span>
              </div>
              <div className="flex gap-2">
                <FaCheckCircle className="text-2xl text-green-600" />
                <span>Security Architecture</span>
              </div>
            </div>
          </div>
          <div className="col-span-2"></div>
          <div className="row-span-2">
            <Image
              src={consulting}
              alt="People at business meeting"
              className="max-h-full w-auto"
            />
          </div>
          <h2 className={`${tenor.className} text-4xl text-zinc-800`}>
            Consulting
          </h2>
          <div className="flex flex-col gap-8 mb-20">
            <p className="max-w-prose leading-6 pt-8">
              Olokun has years of experience in business development support,
              pipeline development, proposal management, coordination, writing,
              review, and assessment. Our team develops detailed outlines,
              technical content, compliance matrix, and capture plans. We have
              experts in government contracting who can provide competitive bid
              strategies that will display our customers&apos; abilities to meet
              the requirements with a sound solution.
            </p>
            <div className="grid grid-cols-2 gap-4 justify-between p-4 border-t-2 border-zinc-300">
              <div className="flex gap-2">
                <FaCheckCircle className="text-2xl text-green-600" />
                <span>Business Development Support</span>
              </div>
              <div className="flex gap-2">
                <FaCheckCircle className="text-2xl text-green-600" />
                <span>Pipeline Development</span>
              </div>
              <div className="flex gap-2">
                <FaCheckCircle className="text-2xl text-green-600" />
                <span>Capture Management</span>
              </div>
              <div className="flex gap-2">
                <FaCheckCircle className="text-2xl text-green-600" />
                <span>Proposal Management/Coordination</span>
              </div>
              <div className="flex gap-2">
                <FaCheckCircle className="text-2xl text-green-600" />
                <span>Proposal Writing</span>
              </div>
              <div className="flex gap-2">
                <FaCheckCircle className="text-2xl text-green-600" />
                <span>Review & Assessment</span>
              </div>
            </div>
          </div>

          <h2
            className={`${tenor.className} text-4xl text-zinc-800 col-span-2 mt-40`}
          >
            CompleteCloud
          </h2>
          <div className="flex gap-8 mb-20 col-span-2">
            <div>
              <p className="max-w-prose leading-6 pt-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium perspiciatis doloremque consectetur dolorum sequi
                fuga et facere, natus, voluptas esse cupiditate magnam excepturi
                praesentium porro id. Cupiditate sint magnam incidunt
                dignissimos voluptas nostrum id doloribus ratione blanditiis
                consequatur aliquid, vel tempora iure nesciunt repudiandae,
                dolorem eos perferendis. In ab expedita assumenda esse
                repellendus eos dolores saepe perspiciatis voluptas laudantium
                perferendis itaque deleniti sed rerum et ad doloremque eveniet
                dolorum suscipit aut tempora, quaerat error? Aut modi, esse vel
                deserunt cupiditate error voluptatem?
              </p>
              <Link
                href="/completecloud"
                className="bg-black text-white px-4 py-1 flex gap-2 items-center w-fit my-4 rounded"
              >
                <div className="rounded-full p-2 flex items-center bg-white text-black">
                  <FaArrowRight />
                </div>
                <span>Discover CompleteCloud</span>
              </Link>
            </div>
            <div className="flex items-center p-4 border-l-2 border-zinc-300">
              <div className="max-h-[150px]">
                <Image
                  src={completecloud}
                  alt="CompleteCloud"
                  className="max-h-full w-auto"
                />
              </div>
            </div>
          </div>

          <p className="max-w-prose leading-6 text-center mx-auto col-span-2 my-8">
            Olokun&apos;s subject matter experts have backgrounds supporting
            Alteration Installation Teams (AIT), Engineering, Ship Repair, Ship
            Modernization, and C5ISR support opportunities for various
            government contractors, but not limited to:
          </p>
          <div className="py-8 border-t-2 border-t-red-700 grid grid-cols-4 gap-8 mb-20 col-span-2">
            <div className="flex flex-col gap-2 bg-white rounded p-4 items-center">
              <span className="p-2 rounded-full border-red-700 border-4 w-fit">
                <MdOutlineManageAccounts className="text-6xl text-red-700" />
              </span>
              <span className="text-center">Proposal Management</span>
            </div>
            <div className="flex flex-col gap-2 bg-white rounded p-4 items-center">
              <span className="p-2 rounded-full border-red-700 border-4 w-fit">
                <PiGraphBold className="text-6xl text-red-700" />
              </span>
              <span className="text-center">Proposal Coordination</span>
            </div>
            <div className="flex flex-col gap-2 bg-white rounded p-4 items-center">
              <span className="p-2 rounded-full border-red-700 border-4 w-fit">
                <PiStrategyBold className="text-6xl text-red-700" />
              </span>
              <span className="text-center">Win Strategy Development</span>
            </div>
            <div className="flex flex-col gap-2 bg-white rounded p-4 items-center">
              <span className="p-2 rounded-full border-red-700 border-4 w-fit">
                <PiShieldCheckFill className="text-6xl text-red-700" />
              </span>
              <span className="text-center">Compliance Checks</span>
            </div>
            <div className="flex flex-col gap-2 bg-white rounded p-4 items-center">
              <span className="p-2 rounded-full border-red-700 border-4 w-fit">
                <PiListMagnifyingGlass className="text-6xl text-red-700" />
              </span>
              <span className="text-center">Color Team Reviews</span>
            </div>
            <div className="flex flex-col gap-2 bg-white rounded p-4 items-center">
              <span className="p-2 rounded-full border-red-700 border-4 w-fit">
                <PiPenNibBold className="text-6xl text-red-700" />
              </span>
              <span className="text-center">Written Proposals</span>
            </div>
            <div className="flex flex-col gap-2 bg-white rounded p-4 items-center">
              <span className="p-2 rounded-full border-red-700 border-4 w-fit">
                <PiMicrophoneStageFill className="text-6xl text-red-700" />
              </span>
              <span className="text-center">Oral Proposals</span>
            </div>
            <div className="flex flex-col gap-2 bg-white rounded p-4 items-center">
              <span className="p-2 rounded-full border-red-700 border-4 w-fit">
                <PiFileBold className="text-6xl text-red-700" />
              </span>
              <span className="text-center">Capture Plans</span>
            </div>
            <div className="flex flex-col gap-2 bg-white rounded p-4 items-center">
              <span className="p-2 rounded-full border-red-700 border-4 w-fit">
                <PiFileCloudLight className="text-6xl text-red-700" />
              </span>
              <span className="text-center">Strategic Plans</span>
            </div>
            <div className="flex flex-col gap-2 bg-white rounded p-4 items-center">
              <span className="p-2 rounded-full border-red-700 border-4 w-fit">
                <PiHandshakeFill className="text-6xl text-red-700" />
              </span>
              <span className="text-center">Teaming Negotiations</span>
            </div>
            <div className="flex flex-col gap-2 bg-white rounded p-4 items-center">
              <span className="p-2 rounded-full border-red-700 border-4 w-fit">
                <PiUsersFourFill className="text-6xl text-red-700" />
              </span>
              <span className="text-center">
                Customer & Competitor Profiles
              </span>
            </div>
            <div className="flex flex-col gap-2 bg-white rounded p-4 items-center">
              <span className="p-2 rounded-full border-red-700 border-4 w-fit">
                <PiFilesBold className="text-6xl text-red-700" />
              </span>
              <span className="text-center">Sources Sought/RFIs Responses</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
