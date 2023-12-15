import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaPhone,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import innovate from "@/public/innovate.png";

export const Footer = () => {
  return (
    <footer className="flex flex-wrap pt-4 border-t-white border-t-2 gap-8 ">
      <section className="bg-white text-black p-4 pl-12">
        <p className="text-lg font-semibold border-b-red-700 border-b-2 py-2">
          Olokun LLC
        </p>
        <p className="max-w-[30ch] text-sm leading-6 py-2">
          Olokun LLC is an SBA Certified Minority-Owned Business Enterprise
          (MBE) located in Norfolk, Virginia. We provide consulting,
          engineering, information technology, and logistics solutions for
          local, state, and federal government organizations, military, private
          industry, and public entities.
        </p>
        <div className="h-[45px] w-auto mt-8">
          <Image src={innovate} alt="innovate" className="max-h-full w-auto" />
        </div>
      </section>
      <div className="flex flex-wrap gap-8 md:justify-around grow max-w-5xl mx-auto">
        <section className="p-4">
          <p className="text-lg border-b-2 border-b-white w-fit pr-8">Links</p>
          <nav
            aria-label="Footer Navigation"
            className="flex flex-col gap-4 mt-8"
          >
            <Link className="underline" href="/">
              Home
            </Link>
            <Link className="underline" href="/about">
              About
            </Link>
            <Link className="underline" href="/capabilities">
              Capabilities
            </Link>
            <Link className="underline" href="/work">
              Our Work
            </Link>
            <Link className="underline" href="/completecloud">
              CompleteCloud
            </Link>
            <Link className="underline" href="/contact">
              Contact
            </Link>
          </nav>
        </section>
        <section className="p-4">
          <p className="text-lg border-b-2 border-b-white pr-8 w-fit">
            Characteristics
          </p>
          <ul className="mt-8 flex flex-col gap-2">
            <li>DUNS: 107010003</li>
            <li>UEID: M7JSB8E7KB73</li>
            <li>Cage Code: 95V71</li>
          </ul>
        </section>
        <section className="p-4">
          <p className="text-lg border-b-2 border-b-white pr-8 w-fit">
            NAICS Codes
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-2">
            <li>541330</li>
            <li>541310</li>
            <li>336611</li>
            <li>541512</li>
            <li>541611</li>
            <li>541618</li>
            <li>541990</li>
            <li>541690</li>
            <li>541614</li>
          </ul>
        </section>
        <section className="p-4">
          <p className="text-lg border-b-2 border-b-white pr-8 w-fit">
            Contact Us
          </p>
          <div className="flex flex-col mt-8">
            <span className="font-semibold">Olokun LLC</span>
            <span>409 Innovation Dr.</span>
            <span>Suite 101-b</span>
            <span>Chesapeake, VA 23322</span>
          </div>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="tel:+17578445522"
              className="text-lg grid place-content-center rounded-full bg-white/10 p-2 transition-all hover:bg-white hover:text-black"
              aria-label="Phone"
            >
              <FaPhone />
            </Link>
            <Link
              href="/contact"
              className="text-lg grid place-content-center rounded-full bg-white/10 p-2 transition-all hover:bg-white hover:text-black"
              aria-label="Email"
            >
              <FaEnvelope />
            </Link>
            <Link
              href="https://facebook.com"
              className="text-lg grid place-content-center rounded-full bg-white/10 p-2 transition-all hover:bg-white hover:text-black"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://linkedin.com"
              className="text-lg grid place-content-center rounded-full bg-white/10 p-2 transition-all hover:bg-white hover:text-black"
              aria-label="Linkedin"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://twitter.com"
              className="text-lg grid place-content-center rounded-full bg-white/10 p-2 transition-all hover:bg-white hover:text-black"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
          </div>
        </section>
      </div>

      <div className="text-sm py-2 border-t-[1px] border-t-white text-center w-full">
        &copy; 2023 Olokun LLC. All Rights Reserved
      </div>
    </footer>
  );
};
