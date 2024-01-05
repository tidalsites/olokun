import { Metadata } from "next";
import { Tenor_Sans } from "next/font/google";
import Link from "next/link";
const tenor = Tenor_Sans({ weight: "400", subsets: ["latin"] });
import { FaArrowRight } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Our Achievements - Olokun LLC Success Stories",
  description:
    "Explore our portfolio of inspiring testimonials and in-depth case studies, highlighting Olokun LLC's successful projects and satisfied clients. Discover how our consulting, engineering, IT, and logistics solutions have consistently delivered exceptional results for local, state, and federal government organizations, military, private industry, and public entities.",
};

export default function Work() {
  return (
    <div className="min-h-[calc(100vh-var(--navbar-height))] h-full pt-[--navbar-height] px-4 flex flex-col bg-zinc-200 text-black">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="mb-20">Our Work</h1>
        <section className="flex flex-col mb-20">
          <h2 className={`${tenor.className} text-4xl text-zinc-800`}>
            Discover the Olokun Difference
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
        </section>
      </div>
      <section className="flex flex-wrap lg:grid lg:grid-cols-2 gap-4 mb-20 mx-auto">
        <div className="p-4 rounded-lg w-fit bg-white flex flex-col max-w-prose row-span-2">
          <span className="text-sm text-zinc-600">N00189-22-D-0010</span>
          <span className="font-bold text-xl mt-4">
            Life Cycle Engineering (LCE) (Subcontractor), CNAF
          </span>
          <div className="flex gap-2 text-sm">
            <span className="bg-brand p-2 rounded text-white font-semibold">
              Engineering &amp; Technical Services
            </span>
            <span className="bg-zinc-200 p-2 rounded">
              03/23/2021 - Current
            </span>
          </div>
          <p className="mt-8">
            Olokun was subcontracted to provide support to LCE for CNAF EMS
            Support contract as a small business teammate. LCE was contracted as
            the prime to provide engineering, technical, and maintenance
            services to accomplish specific requirements described herein for
            aircraft carrier maintenance and modernization advance planning,
            work package development and integration, and work package
            execution.
          </p>
          <ul className="flex flex-wrap gap-2 text-sm mt-8">
            <li className="bg-zinc-200 p-2 max-w-[22ch] w-full flex items-center rounded-lg">
              Integrated modernization and repair work package planning
            </li>
            <li className="bg-zinc-200 p-2 max-w-[22ch] w-full flex items-center rounded-lg">
              Life cycle maintenance plans (LCMP) development
            </li>
            <li className="bg-zinc-200 p-2 max-w-[22ch] w-full flex items-center rounded-lg">
              Design review of Ship Change Documents (SCD), including SCD
              guidance
            </li>
            <li className="bg-zinc-200 p-2 max-w-[22ch] w-full flex items-center rounded-lg">
              Fleet modernization program support
            </li>
            <li className="bg-zinc-200 p-2 max-w-[22ch] w-full flex items-center rounded-lg">
              Integrated Logistics Support (ILS) ship checks and updates
            </li>
            <li className="bg-zinc-200 p-2 max-w-[22ch] w-full flex items-center rounded-lg">
              Diagnostics
            </li>
            <li className="bg-zinc-200 p-2 max-w-[22ch] w-full flex items-center rounded-lg">
              Machine and equipment assessment and recommendations
            </li>
            <li className="bg-zinc-200 p-2 max-w-[22ch] w-full flex items-center rounded-lg">
              Update and maintain currency of Life Cycle Resource Systems (LCRS)
              data base
            </li>
            <li className="bg-zinc-200 p-2 max-w-[22ch] w-full flex items-center rounded-lg">
              Management Support Systems Analysis
            </li>
            <li className="bg-zinc-200 p-2 max-w-[22ch] w-full flex items-center rounded-lg">
              SCD ILS requirements documentation
            </li>
            <li className="bg-zinc-200 p-2 max-w-[22ch] w-full flex items-center rounded-lg">
              TEAM ONE Support
            </li>
            <li className="bg-zinc-200 p-2 max-w-[22ch] w-full flex items-center rounded-lg">
              Causal Model Analysis
            </li>
            <li className="bg-zinc-200 p-2 max-w-[22ch] w-full flex items-center rounded-lg">
              CVN IPT Mock Availability Support
            </li>
          </ul>
          <Link className="mt-8 text-[--link] flex gap-2 items-center" href="#">
            <span>View Feedback</span>
            <FaArrowRight />
          </Link>
        </div>
        <div className="p-4 rounded-lg w-fit bg-white flex flex-col max-w-prose">
          <span className="text-sm text-zinc-600">N00039-23-D-9008</span>
          <span className="font-bold text-xl mt-4">
            VTG Defense (Subcontractor), NAVWAR
          </span>
          <div className="flex gap-2 text-sm">
            <span className="bg-brand p-2 rounded text-white font-semibold">
              Information Technology
            </span>
            <span className="bg-zinc-200 p-2 rounded">
              12/16/2022 - Current
            </span>
          </div>
          <p className="mt-8">
            Olokun was subcontracted as a small business teammate to provide VTG
            Defense with Information Technology and Logistical Support for the
            CANES Full Deployment Contract. The CANES Full Deployment Contract
            is an Indefinite Delivery - Indefinite Quantity (IDIQ) Multiple
            Award Contract (MAC) for the purpose of procuring Build-to-Print
            (BTP) CANES production units, kits, modules, components, software,
            spares and development items for shore, surface, and submarine
            platforms. This contract encompasses functions to support production
            activities including but not limited to, program management
            functions.
          </p>
        </div>
        <div className="p-4 rounded-lg w-fit bg-white flex flex-col max-w-prose">
          <span className="text-sm text-zinc-600">OLK-001-22-01</span>
          <span className="font-bold text-xl mt-4">AVMAC LLC</span>
          <div className="flex gap-2 text-sm">
            <span className="bg-brand p-2 rounded text-white font-semibold">
              Consulting Services - Ship Integration / AIT
            </span>
            <span className="bg-zinc-200 p-2 rounded">
              12/03/2021 - Current
            </span>
          </div>
          <p className="mt-8">
            Olokun LLC was contracted to provide Business Development Services
            for AVMAC&apos;s Ship Integration Division. AVMAC&apos;s Ship
            Integration Division performs all aspects of shipboard and
            land-based site installations. Olokun provides analysis of current
            and future opportunities, tracking of current and future
            opportunities, capture and proposal development services, capture
            and readiness reviews, program management support, CPARs
            development, CPARs responses, CPARs review, organizational
            capabilities development.
          </p>
        </div>
        <div className="p-4 rounded-lg w-fit bg-white flex flex-col max-w-prose">
          <span className="text-sm text-zinc-600">
            2023_Agreement_Consulting_LPI
          </span>
          <span className="font-bold text-xl mt-4">LPI Technical Services</span>
          <div className="flex gap-2 text-sm">
            <span className="bg-brand p-2 rounded text-white font-semibold">
              Consulting Services - Ship Repair / AIT
            </span>
            <span className="bg-zinc-200 p-2 rounded">
              01/27/2023 - Current
            </span>
          </div>
          <p className="mt-8">
            Olokun LLC was contracted to provide Business Development Services
            for Ship Repair and AIT business opportunities. LPI Technical
            Services performs all aspects of shipboard and land-based site
            installations including metal fabrication. Olokun provides analysis
            of current and future opportunities, tracking of current and future
            opportunities, capture development services, proposal development
            services, capture and readiness reviews, CPARs development, CPARs
            responses, and CPARs review.
          </p>
        </div>
        <div className="p-4 rounded-lg w-fit bg-white flex flex-col max-w-prose">
          <span className="text-sm text-zinc-600">
            2023_Agreement_Consulting_Seaside
          </span>
          <span className="font-bold text-xl mt-4">Seaside Staffing LLC</span>
          <div className="flex gap-2 text-sm">
            <span className="bg-brand p-2 rounded text-white font-semibold">
              Consulting Services - Ship Repair / AIT
            </span>
            <span className="bg-zinc-200 p-2 rounded">
              03/20/2023 - Current
            </span>
          </div>
          <p className="mt-8">
            Olokun LLC was contracted to provide Business Development and
            Organizational Development Services for government contracting
            opportunities primarily in ship repair, AIT, logistics, and
            administrative services. Seaside Staffing performs ship repair and
            AIT staffing and training services in the Maritime industry. Olokun
            provides analysis of current and future opportunities, tracking of
            current and future opportunities, capture development services,
            proposal development services, capture and readiness reviews, and
            organizational development services including Informational
            Technology infrastructure development and support for NIST and CMMC
            compliance.
          </p>
        </div>
        <div className="p-4 rounded-lg w-fit bg-white flex flex-col max-w-prose">
          <span className="text-sm text-zinc-600">C373230_MKT230014</span>
          <span className="font-bold text-xl mt-4">QED Systems, Inc.</span>
          <div className="flex gap-2 text-sm">
            <span className="bg-brand p-2 rounded text-white font-semibold">
              Consulting Services - Ship Repair / AIT
            </span>
            <span className="bg-zinc-200 p-2 rounded">
              03/30/2023 - 04/17/2023
            </span>
          </div>
          <p className="mt-8">
            Olokun LLC was contracted to provide Proposal Coordination and
            Support to respond to RFP for installation of MACHALT 667 and
            MACHALT 739 in various locations.
          </p>
        </div>
        <div className="p-4 rounded-lg w-fit bg-white flex flex-col max-w-prose">
          <span className="text-sm text-zinc-600">
            2022_Agreement_Consulting_I-Mazing
          </span>
          <span className="font-bold text-xl mt-4">i-Mazing Solutions</span>
          <div className="flex gap-2 text-sm">
            <span className="bg-brand p-2 rounded text-white font-semibold">
              Consulting Services - Information Technology
            </span>
            <span className="bg-zinc-200 p-2 rounded">
              01/12/2022 - 12/31/2022
            </span>
          </div>
          <p className="mt-8">
            Olokun LLC was contracted to provide business development support
            for government services contracts. Olokun provided support and
            completed tasks in proposal development, proposal management, and
            pipeline development. I-Mazing&apos;s core business is database
            management, data analytics, data processing and information
            technology on-site and off-site support.
          </p>
        </div>
        <div className="p-4 rounded-lg w-fit bg-white flex flex-col max-w-prose">
          <span className="text-sm text-zinc-600">
            2022_Agreement_Consulting_kSARIA
          </span>
          <span className="font-bold text-xl mt-4">
            kSARIA Service Corporation
          </span>
          <div className="flex gap-2 text-sm">
            <span className="bg-brand p-2 rounded text-white font-semibold">
              Consulting Services - Electrical/Fiber Installation
            </span>
            <span className="bg-zinc-200 p-2 rounded">
              02/07/2022 - 07/31/2022
            </span>
          </div>
          <p className="mt-8">
            Olokun LLC was contracted to provide business development support
            for electrical and fiber installation contracts with current and new
            customers. Olokun provided support and completed tasks in proposal
            development, proposal management, and pipeline development. Olokun
            provided a list of opportunities for kSARIA to monitor and track new
            and current customer areas. Olokun worked directly with
            kSARIA&apos;s general manager and newly hired business development
            managers to help develop and manage business opportunities for
            kSARIA Service Corporation.
          </p>
        </div>
        <div className="p-4 rounded-lg w-fit bg-white flex flex-col max-w-prose">
          <span className="text-sm text-zinc-600">
            2022_Agreement_CompleteCloud_PughAssociates
          </span>
          <span className="font-bold text-xl mt-4">
            Pugh Associates of Florida, LLC
          </span>
          <div className="flex gap-2 text-sm">
            <span className="bg-brand p-2 rounded text-white font-semibold">
              CompleteCloud Services
            </span>
            <span className="bg-zinc-200 p-2 rounded">
              02/07/2022 - 07/31/2022
            </span>
          </div>
          <p className="mt-8">
            Olokun LLC was contracted to provide an Information Technology (IT)
            infrastructure to meet DOD and CMMC compliance requirements.
          </p>
        </div>
      </section>
    </div>
  );
}
