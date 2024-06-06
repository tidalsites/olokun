import Image from "next/image";

import donald from "@/public/Donald-A.-Buzard.jpg";
import bert from "@/public/Roberto-Bert-Ortiz.jpg";
import bill from "@/public/Bill-Boudouris.png";
import vernon from "@/public/vernon.webp";
import { RiDoubleQuotesL } from "react-icons/ri";

export const Team = () => {
  return (
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
        <p className="mt-4 border-t-2 border-t-brand pt-4">
          Vernon Hall founded Olokun LLC in 2021 with the mindset of creating a
          diverse company with the technical capability to provide innovative
          and process-driven solutions in the form of products and services to
          our clients. With over 18 years of experience, Vernon has served as an
          outside machinist, designer, engineer, project manager, program
          manager, division manager, and business developer. At Olokun, he
          manages the business, including but not limited to financial
          operations, business development, and program or account manager. He
          has been responsible for numerous contracts for NAVSEA, NAVAIR, NAWCs,
          NSWCs, NNSY, and MSC. Before Olokun, Vernon worked in AIT environments
          and Engineering & Design environments. His experience in both
          environments includes shipyards, small design firms, and large design
          firm support serving in the abovementioned roles. Vernon&apos;s design
          experience is in mechanical systems and equipment spanning across many
          vessels. His technical expertise includes mechanical engineering,
          weight engineering, 3-D ship design, 2-D ship design, ship
          integration, research and development, and new construction design.
          Vernon believes in collaboration with Olokun&apos;s team, teammates,
          and customers to provide the best solutions to government and
          commercial clients.
        </p>
      </div>
      <div className="border-t-4 lg:border-t-8 pt-10 border-zinc-200 col-span-2 px-4 lg:px-8 relative">
        <p className="pb-8 col-span-2">Meet our Board of Advisors</p>
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4 col-span-1 w-fit relative">
            <div className="h-[200px]">
              <Image
                src={bert}
                alt="Roberto Ortiz"
                className="max-h-full w-auto"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg">Roberto &quot;Bert&quot; Ortiz</span>
              <span className="text-sm text-zinc-200">
                President and CEO of AVMAC LLC
              </span>
            </div>
            <div className="border-t-brand border-t-2 pt-4">
              <p>
                A senior aviation and shipboard management professional, Bert
                retired as a Commander from the U.S. Navy after a 31-year career
                and started AVMAC in 2009 with Don Buzard, a shipmate and a
                30-year U.S. Navy retired Commander. Bert has extensive aircraft
                and shipboard management, maintenance, acquisition, logistics,
                operations and safety experience that both he and Don leveraged
                to provide aviation and maritime support services to both the
                Government and private industry. Bert has incrementally grown
                AVMAC every year into a multimillion-dollar award-winning
                company. Nationally, AVMAC has been recognized as a Inc.
                Magazine Private Titan in 2020 and has made the Inc. 5000 list
                of fastest growing businesses the past two years with over 500
                employees and revenues exceeding $50M.
              </p>
              <div className="text-sm mt-4 bg-brand p-4 rounded relative isolate">
                <p>
                  “With over four decades of experience in carrier and
                  amphibious aviation, Don Buzard and I recognize the value and
                  innovative potential of Olokun LLC in the maritime industry.
                  As established founders of AVMAC LLC, a leading national
                  aviation and maritime company, we are excited for the future
                  of Olokun LLC.”
                </p>
                <div className="absolute -z-10 -top-8 -left-2">
                  <RiDoubleQuotesL className="text-[128px] text-black/10" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 col-span-1 w-fit relative">
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
            </div>
            <div className="border-t-brand border-t-2 pt-4">
              <p>
                A 30-year Navy Veteran Aviation Maintenance Officer, Don brought
                the same leadership and management strategies that made him
                successful during his Navy career to AVMAC, and AVMAC too has
                been successful over the past 12 years. Don and his business
                partner, Bert Ortiz, have built AVMAC into a highly successful
                company from a start-up. AVMAC is an SBA 8(a) Business
                Development Program success story, a Service-Disabled Veteran
                Owned Small Business, and a Small Disadvantaged Owned Business
                who specializes in aviation and ship modernization technical
                support services. AVMAC has leveraged procurement program
                opportunities made available through the SBA to propel AVMAC
                from a start-up to a 60-million-dollar company in 12 years.
                AVMAC owners&apos; corporate experiences is invaluable, which is
                why Olokun has asked Don to be on the Board of Advisors.
              </p>
              <div className="text-sm mt-4 bg-brand p-4 rounded relative isolate">
                <p>
                  &quot;AVMAC has mutually benefitted from our Mentor/Protégé
                  relationship with Olokun over the past two years due to the
                  exceptional professional experience of Olokun&apos;s CEO in
                  the Ship Modernization business sector.&quot;
                </p>
                <div className="absolute -z-10 -top-8 -left-2">
                  <RiDoubleQuotesL className="text-[128px] text-black/10" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 col-span-1 w-fit relative">
            <div className="h-[200px]">
              <Image
                src={bill}
                alt="Bill Boudouris"
                className="h-full w-auto"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg">Bill Boudouris</span>
              <span className="text-sm text-zinc-200">Business Manager</span>
            </div>
            <div className="border-t-brand border-t-2 pt-4">
              <p>
                Business manager and leader with over 37 years&apos; experience
                as a Surface Warfare Naval Officer, civil service electronics
                engineer, engineering and design manager, business consultant,
                and business developer. Bill has a bachelor&apos;s degree in
                electrical engineering, and an MBA with a focus on strategy
                development. He maintains the Project Management Professional
                (PMP) certification from the Project Management Institute (PMI)
                and the Practitioner certification from the Association of
                Proposal Management Professionals (APMP). He uses his expertise
                in these areas as a coach and mentor to help others develop as
                managers, leaders.
              </p>
              {/* <p className="text-sm mt-4 bg-brand p-4 rounded"></p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
