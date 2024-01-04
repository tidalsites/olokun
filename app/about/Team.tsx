"use client";

import Image from "next/image";
import { PiCaretDoubleRight, PiXCircleBold } from "react-icons/pi";

import donald from "@/public/Donald-A.-Buzard.jpg";
import bert from "@/public/Roberto-Bert-Ortiz.jpg";
import bill from "@/public/Bill-Boudouris.png";
import vernon from "@/public/vernon.webp";
import { RefObject, useRef } from "react";

export const Team = () => {
  const bertRef = useRef<HTMLDialogElement>(null);
  const donaldRef = useRef<HTMLDialogElement>(null);
  const billRef = useRef<HTMLDialogElement>(null);

  function showModal(ref: RefObject<HTMLDialogElement>) {
    // Close other modals

    [bertRef, donaldRef, billRef].map((el) => {
      if (el !== ref && el.current && el.current.open) {
        el.current.close();
      }
    });
    ref.current?.show();
  }

  function closeModal(ref: RefObject<HTMLDialogElement>) {
    ref.current?.close();
  }

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
        <p className="mt-8">
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
          <div className="flex flex-col gap-4 col-span-1">
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
              <button
                className="text-sm underline text-left mt-2 flex items-center group"
                onClick={() => showModal(bertRef)}
              >
                <span>Learn more about Bert</span>
                <div className="text-lg group-hover:ml-2 transition-all">
                  <PiCaretDoubleRight />
                </div>
              </button>
              <dialog
                ref={bertRef}
                className="absolute top-[calc(100%+30px)] w-max flex-col gap-4 transition-all overflow-hidden max-w-[min(100%,800ch)] z-30 p-4 bg-black border-t-8 border-t-zinc-200 text-white [&[open]]:flex [@starting-style]:scale-y-0 [@starting-style]:h-0 [@starting-style]:opacity-0 origin-top [transition-behavior]-[allow-discrete]"
              >
                <button
                  className="group self-end"
                  onClick={() => closeModal(bertRef)}
                >
                  <PiXCircleBold className="text-4xl text-white group-hover:text-brand transition-all" />
                </button>
                <p>
                  A senior aviation and shipboard management professional, Bert
                  retired as a Commander from the U.S. Navy after a 31-year
                  career and started AVMAC in 2009 with Don Buzard, a shipmate
                  and a 30-year U.S. Navy retired Commander. Bert has extensive
                  aircraft and shipboard management, maintenance, acquisition,
                  logistics, operations and safety experience that both he and
                  Don leveraged to provide aviation and maritime support
                  services to both the Government and private industry. Bert has
                  incrementally grown AVMAC every year into a
                  multimillion-dollar award-winning company. Nationally, AVMAC
                  has been recognized as a Inc. Magazine Private Titan in 2020
                  and has made the Inc. 5000 list of fastest growing businesses
                  the past two years with over 500 employees and revenues
                  exceeding $50M.
                </p>
              </dialog>
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
              <button
                className="text-sm underline text-left mt-2 flex items-center group"
                onClick={() => showModal(donaldRef)}
              >
                <span>Learn more about Donald</span>
                <div className="text-lg group-hover:ml-2 transition-all">
                  <PiCaretDoubleRight />
                </div>
              </button>
              <dialog
                ref={donaldRef}
                className="absolute top-[calc(100%+30px)] w-max flex-col gap-4 transition-all overflow-hidden max-w-[min(100%,800ch)] z-30 p-4 bg-black border-t-8 border-t-zinc-200 text-white [&[open]]:flex [@starting-style]:scale-y-0 [@starting-style]:h-0 [@starting-style]:opacity-0 origin-top [transition-behavior]-[allow-discrete]"
              >
                <button
                  className="group self-end"
                  onClick={() => closeModal(donaldRef)}
                >
                  <PiXCircleBold className="text-4xl text-white group-hover:text-brand transition-all" />
                </button>
                <p>
                  A 30-year Navy Veteran Aviation Maintenance Officer, Don
                  brought the same leadership and management strategies that
                  made him successful during his Navy career to AVMAC, and AVMAC
                  too has been successful over the past 12 years. Don and his
                  business partner, Bert Ortiz, have built AVMAC into a highly
                  successful company from a start-up. AVMAC is an SBA 8(a)
                  Business Development Program success story, a Service-Disabled
                  Veteran Owned Small Business, and a Small Disadvantaged Owned
                  Business who specializes in aviation and ship modernization
                  technical support services. AVMAC has leveraged procurement
                  program opportunities made available through the SBA to propel
                  AVMAC from a start-up to a 60-million-dollar company in 12
                  years. AVMAC owners&apos; corporate experiences is invaluable,
                  which is why Olokun has asked Don to be on the Board of
                  Advisors.
                </p>
              </dialog>
            </div>
          </div>
          <div className="flex flex-col gap-4 col-span-1">
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
              <button
                className="text-sm underline text-left mt-2 flex items-center group"
                onClick={() => showModal(billRef)}
              >
                <span>Learn more about Bill</span>
                <div className="text-lg group-hover:ml-2 transition-all">
                  <PiCaretDoubleRight />
                </div>
              </button>
              <dialog
                ref={billRef}
                className="absolute top-[calc(100%+30px)] w-max flex-col gap-4 transition-all overflow-hidden max-w-[min(100%,800ch)] z-30 p-4 bg-black border-t-8 border-t-zinc-200 text-white [&[open]]:flex [@starting-style]:scale-y-0 [@starting-style]:h-0 [@starting-style]:opacity-0 origin-top [transition-behavior]-[allow-discrete]"
              >
                <button
                  className="group self-end"
                  onClick={() => closeModal(billRef)}
                  autoFocus
                >
                  <PiXCircleBold className="text-4xl text-white group-hover:text-brand transition-all" />
                </button>
                <p>
                  Business manager and leader with over 37 years&apos;
                  experience as a Surface Warfare Naval Officer, civil service
                  electronics engineer, engineering and design manager, business
                  consultant, and business developer. Bill has a bachelor&apos;s
                  degree in electrical engineering, and an MBA with a focus on
                  strategy development. He maintains the Project Management
                  Professional (PMP) certification from the Project Management
                  Institute (PMI) and the Practitioner certification from the
                  Association of Proposal Management Professionals (APMP). He
                  uses his expertise in these areas as a coach and mentor to
                  help others develop as managers, leaders.
                </p>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
