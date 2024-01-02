import Link from "next/link";
import {
  FaArrowRight,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaMap,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

import jobsearch from "@/public/jobsearch.webp";
import Image from "next/image";

import { Map } from "../components/GoogleMap";
import { ContactForm } from "./form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get in Touch with Olokun LLC - Contact Information",
  description:
    "Contact Olokun LLC for inquiries, partnership opportunities, or any questions you may have. We look forward to hearing from you and assisting with your government solutions needs.",
};

export default function Contact() {
  return (
    <section className="min-h-[calc(100vh-var(--navbar-height))] h-full pt-[--navbar-height] px-4 flex flex-col bg-zinc-200 text-black">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="mb-20">Contact Us</h1>
        <div className="flex flex-col md:grid md:grid-cols-[1fr,auto] lg:grid-cols-2 md:gap-8 gap-20">
          <ContactForm />
          <div className="flex flex-col gap-4 w-fit mx-auto">
            <div className="flex items-center isolate">
              <div className="p-4 rounded-full bg-white">
                <FaEnvelope className="text-xl" />
              </div>
              <span className="bg-white rounded-full py-1 px-4 -ml-4 -z-10">
                vernon.hall@olokunllc.com
              </span>
            </div>
            <div className="flex items-center isolate">
              <span className="bg-white rounded-full py-1 px-4 -z-10 -mr-4">
                (757) 844-5522
              </span>
              <div className="p-4 rounded-full bg-white">
                <FaPhone className="text-xl" />
              </div>
            </div>
            <div className="flex isolate">
              <div className="p-4 rounded-full bg-white h-fit">
                <FaMap className="text-xl" />
              </div>
              <div className="flex flex-col bg-white p-4 rounded-xl -ml-4 mt-4 -z-10">
                <span>409 Innovation Drive</span>
                <span>Suite 101-B</span>
                <span>Chesapeake, VA 23322</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <Link
                href="tel:+17578445522"
                className="text-xl grid place-content-center rounded-full bg-white p-2 hover:bg-black hover:text-white transition-all"
                aria-label="Phone"
              >
                <FaPhone />
              </Link>
              <Link
                href="/contact"
                className="text-xl grid place-content-center rounded-full bg-white p-2 hover:bg-black hover:text-white transition-all"
                aria-label="Email"
              >
                <FaEnvelope />
              </Link>
              <Link
                href="https://facebook.com"
                className="text-xl grid place-content-center rounded-full bg-white p-2 hover:bg-black hover:text-white transition-all"
                aria-label="Facebook"
              >
                <FaFacebook />
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-xl grid place-content-center rounded-full bg-white p-2 hover:bg-black hover:text-white transition-all"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-xl grid place-content-center rounded-full bg-white p-2 hover:bg-black hover:text-white transition-all"
                aria-label="Twitter"
              >
                <FaTwitter />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 col-span-2 lg:col-span-1 gap-4 justify-center mt-auto bg-black text-white w-full p-8 rounded">
            <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
              <p>Looking for a new uplifting career?</p>
              <p className="text-3xl w-full md:max-w-[15ch] grow flex items-center bg-white text-black justify-center p-4 border-b-4 border-b-brand">
                Join Our Team & Make a Difference!
              </p>
            </div>
            <div className="hidden sm:block">
              <Image
                src={jobsearch}
                alt="Join Us"
                className="h-full w-auto bg-cover"
                priority
              />
            </div>
            <Link
              href="https://linkedin.com"
              className="bg-white border-2 border-white text-black text-center text-lg w-full flex items-center col-span-2 group"
            >
              <span className="grow group-hover:translate-x-2 transition-all">
                Apply Today
              </span>
              <div className="flex p-2 bg-brand text-white items-center justify-center rounded group-hover:pl-6 transition-all">
                <FaArrowRight />
              </div>
            </Link>
          </div>
          <div className="my-8 col-span-2">
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
}
