import { Tenor_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
const tenor = Tenor_Sans({ weight: "400", subsets: ["latin"] });

import { Metadata } from "next";

import completecloud from "@/public/completecloudlogo.png";
import engineering from "@/public/capabilities/engineering.webp";
import logistics from "@/public/capabilities/logistics.webp";
import it from "@/public/capabilities/it.webp";
import consulting from "@/public/capabilities/consulting.webp";

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
          <section className="xl:grid grid-cols-[1fr,auto]">
            <h2 className={`${tenor.className} text-4xl text-zinc-800 mb-8`}>
              Engineering & Technical Services
            </h2>
            <div className="hidden xl:row-span-2 w-full h-full xl:flex justify-end">
              <Image
                src={engineering}
                alt="U.S. Navy Ship"
                className="max-h-full w-auto"
              />
            </div>
            <div className="flex flex-col gap-8 col-span-2 xl:col-span-1 mb-20">
              <p className="max-w-prose leading-6">
                Engineering and Technical Services are one of Olokun&apos;s core
                competencies. Our approach is to adapt to our customer
                requirements and provide sound engineering design with
                exceptional quality and producibility. We have experienced
                drafters, designers, and engineers who can provide cradle to
                grave engineering support to various customers and
                customers&apos; requirements. Olokun&apos;s engineering team can
                offer a wide range of calculations and engineering studies to
                support customer needs. Olokun knows structural, mechanical, and
                electrical discipline practices to apply that knowledge to
                various shore and ship platforms. Our drafters, designers, and
                engineers have experience with NAVFAC, NAVSEA, ABS, MSC, and
                USCG Regulations.
              </p>
              <div className="flex flex-col sm:grid grid-cols-2 gap-4 justify-between py-4 border-t-2 border-zinc-300 w-fit xl:w-full">
                <div className="grid grid-cols-[auto,1fr] gap-2">
                  <FaCheckCircle className="text-2xl text-brand" />
                  <span>Marine Engineering</span>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-2">
                  <FaCheckCircle className="text-2xl text-brand" />
                  <span>Design Services</span>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-2">
                  <FaCheckCircle className="text-2xl text-brand" />
                  <span>CAD Modeling</span>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-2">
                  <FaCheckCircle className="text-2xl text-brand" />
                  <span>Electrical & Electronic Engineering</span>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-2">
                  <FaCheckCircle className="text-2xl text-brand" />
                  <span>HVAC Engineering</span>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-2">
                  <FaCheckCircle className="text-2xl text-brand" />
                  <span>Engineering Studies</span>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-2">
                  <FaCheckCircle className="text-2xl text-brand" />
                  <span>Structural Engineering</span>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-2">
                  <FaCheckCircle className="text-2xl text-brand" />
                  <span>AIT Installation Support</span>
                </div>
              </div>
            </div>
            <div className="col-span-2"></div>
          </section>

          <section className="xl:grid grid-cols-[1fr,auto]">
            <div className="hidden xl:row-span-2 w-full h-full xl:flex">
              <Image
                src={logistics}
                alt="Pen and keyboard"
                className="max-h-full w-auto"
              />
            </div>
            <h2 className={`${tenor.className} text-4xl text-zinc-800 mb-8`}>
              Logistics Support
            </h2>
            <div className="flex flex-col gap-8 col-span-2 xl:col-span-1 mb-20">
              <p className="max-w-prose leading-6">
                At Olokun LLC, our logistics team can provide a wide range of
                services to support customers&apos; requirements. We provide
                integrated logistics support services in the acquisition,
                planning, and life cycle support. To provide dynamic, fast, and
                innovative results, our team is adaptable to our customer&apos;s
                requirements and standards.
              </p>
              <div className="flex flex-col sm:grid grid-cols-2 gap-4 justify-between py-4 border-t-2 border-zinc-300 w-fit xl:w-full">
                <div className="grid grid-cols-[auto,1fr] gap-2">
                  <FaCheckCircle className="text-2xl text-brand" />
                  <span>Program/Project Management</span>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-2">
                  <FaCheckCircle className="text-2xl text-brand" />
                  <span>Planning and Estimating</span>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-2">
                  <FaCheckCircle className="text-2xl text-brand" />
                  <span>Commonality Maximization</span>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-2">
                  <FaCheckCircle className="text-2xl text-brand" />
                  <span>Obsolescence Management</span>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-2">
                  <FaCheckCircle className="text-2xl text-brand" />
                  <span>Item Reduction</span>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-2">
                  <FaCheckCircle className="text-2xl text-brand" />
                  <span>Technical Manual Conversions</span>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-2">
                  <FaCheckCircle className="text-2xl text-brand" />
                  <span>Warehousing support</span>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-2">
                  <FaCheckCircle className="text-2xl text-brand" />
                  <span>Alteration Tracking</span>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-2">
                  <FaCheckCircle className="text-2xl text-brand" />
                  <span>Material Ordering</span>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-2">
                  <FaCheckCircle className="text-2xl text-brand" />
                  <span>Scheduling</span>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-2">
                  <FaCheckCircle className="text-2xl text-brand" />
                  <span>Work Packaging</span>
                </div>
              </div>
            </div>
            <div className="col-span-2"></div>
          </section>
          <section className="xl:grid grid-cols-[1fr,auto]">
            <h2 className={`${tenor.className} text-4xl text-zinc-800 mb-8`}>
              Information Technology
            </h2>
            <div className="hidden xl:row-span-2 w-full h-full xl:flex justify-end">
              <Image
                src={it}
                alt="Digital cloud"
                className="max-h-full w-auto"
              />
            </div>
            <div className="flex flex-col gap-8 col-span-2 xl:col-span-1 mb-20">
              <p className="max-w-prose leading-6">
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
              <div className="flex flex-col sm:grid grid-cols-2 gap-4 justify-between py-4 border-t-2 border-zinc-300 w-fit xl:w-full">
                <div className="grid grid-cols-[auto,1fr] gap-2">
                  <FaCheckCircle className="text-2xl text-brand" />
                  <span>Program/Project Management</span>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-2">
                  <FaCheckCircle className="text-2xl text-brand" />
                  <span>Cloud Infrastructure and Virtualization</span>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-2">
                  <FaCheckCircle className="text-2xl text-brand" />
                  <span>Integration and Sustainment</span>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-2">
                  <FaCheckCircle className="text-2xl text-brand" />
                  <span>Information Assurance</span>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-2">
                  <FaCheckCircle className="text-2xl text-brand" />
                  <span>Vulnerability Analysis & Remediation</span>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-2">
                  <FaCheckCircle className="text-2xl text-brand" />
                  <span>Cyber Planning and Analysis</span>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-2">
                  <FaCheckCircle className="text-2xl text-brand" />
                  <span>Security Architecture</span>
                </div>
              </div>
            </div>
            <div className="col-span-2"></div>
          </section>

          <section className="xl:grid grid-cols-[1fr,auto]">
            <div className="hidden xl:row-span-2 w-full h-full xl:flex">
              <Image
                src={consulting}
                alt="People at business meeting"
                className="max-h-full w-auto"
              />
            </div>
            <h2 className={`${tenor.className} text-4xl text-zinc-800 mb-8`}>
              Consulting
            </h2>
            <div className="flex flex-col gap-8 col-span-2 xl:col-span-1 mb-20">
              <p className="max-w-prose leading-6">
                Olokun has years of experience in business development support,
                pipeline development, proposal management, coordination,
                writing, review, and assessment. Our team develops detailed
                outlines, technical content, compliance matrix, and capture
                plans. We have experts in government contracting who can provide
                competitive bid strategies that will display our customers&apos;
                abilities to meet the requirements with a sound solution.
              </p>
              <div className="flex flex-col sm:grid grid-cols-2 gap-4 justify-between py-4 border-t-2 border-zinc-300 w-fit xl:w-full">
                <div className="grid grid-cols-[auto,1fr] gap-2">
                  <FaCheckCircle className="text-2xl text-brand" />
                  <span>Business Development Support</span>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-2">
                  <FaCheckCircle className="text-2xl text-brand" />
                  <span>Pipeline Development</span>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-2">
                  <FaCheckCircle className="text-2xl text-brand" />
                  <span>Capture Management</span>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-2">
                  <FaCheckCircle className="text-2xl text-brand" />
                  <span>Proposal Management/Coordination</span>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-2">
                  <FaCheckCircle className="text-2xl text-brand" />
                  <span>Proposal Writing</span>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-2">
                  <FaCheckCircle className="text-2xl text-brand" />
                  <span>Review & Assessment</span>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-2">
                  <FaCheckCircle className="text-2xl text-brand" />
                  <span>Win Strategy Development</span>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-2">
                  <FaCheckCircle className="text-2xl text-brand" />
                  <span>Compliance Checks</span>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-2">
                  <FaCheckCircle className="text-2xl text-brand" />
                  <span>Color Team Reviews</span>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-2">
                  <FaCheckCircle className="text-2xl text-brand" />
                  <span>Oral Proposals</span>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-2">
                  <FaCheckCircle className="text-2xl text-brand" />
                  <span>Teaming Negotiations</span>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-2">
                  <FaCheckCircle className="text-2xl text-brand" />
                  <span>Sources Sought/RFI Responses</span>
                </div>
              </div>
            </div>
          </section>
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
                  href="/completecloud"
                  className="bg-black text-white px-4 py-1 flex gap-2 items-center w-fit my-4 rounded"
                >
                  <div className="rounded-full p-2 flex items-center bg-white text-black">
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
