"use client";

import Link from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaMap,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import { Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";

export default function Contact() {
  return (
    <section className="min-h-[calc(100vh-var(--navbar-height))] h-full pt-[--navbar-height] px-4 flex flex-col bg-zinc-200 text-black">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="mb-20">Contact</h1>
        <div className="grid grid-cols-2">
          <form
            action=""
            className="grid grid-cols-2 gap-8 px-8 py-12 bg-white border-[1px] border-zinc-300 shadow-[0_2px_4px_rgba(0,0,0,.3)]"
          >
            <div className="flex flex-col gap-8 ">
              <label className="flex flex-col max-w-xs">
                <input
                  type="text"
                  placeholder="First Name"
                  className="px-2 py-1 border-b-2 border-b-zinc-200"
                />
              </label>
              <label className="flex flex-col max-w-xs">
                <input
                  type="text"
                  className="px-2 py-1 border-b-2 border-b-zinc-200"
                  placeholder="Last Name"
                />
              </label>
              <label className="flex flex-col max-w-xs">
                <input
                  type="email"
                  className="px-2 py-1 border-b-2 border-b-zinc-200"
                  placeholder="Email Address"
                />
              </label>
              <label className="flex flex-col max-w-xs">
                <input
                  type="text"
                  className="px-2 py-1 border-b-2 border-b-zinc-200"
                  placeholder="Phone Number"
                />
              </label>
            </div>
            <div className="flex flex-col gap-8 ">
              <div className="flex w-full max-w-xs flex-col gap-2">
                <Select
                  label="Services interested in"
                  selectionMode="multiple"
                  className="max-w-xs "
                >
                  <SelectItem
                    key="engineering"
                    value="engineering"
                    className="text-zinc-800"
                  >
                    Engineering
                  </SelectItem>
                  <SelectItem
                    className="text-zinc-800"
                    key="logistics"
                    value="logistics"
                  >
                    Logistics
                  </SelectItem>
                  <SelectItem
                    className="text-zinc-800 hover:bg-zinc-200"
                    key="it"
                    value="it"
                  >
                    Information Technology
                  </SelectItem>
                  <SelectItem
                    className="text-zinc-800"
                    key="consulting"
                    value="consulting"
                  >
                    Consulting
                  </SelectItem>
                  <SelectItem
                    className="text-zinc-800"
                    key="completecloud"
                    value="completecloud"
                  >
                    CompleteCloud
                  </SelectItem>
                </Select>
              </div>
            </div>
            <textarea
              name=""
              id=""
              cols={20}
              className="border-2 border-zinc-300 px-2 py-1 min-h-[200px] col-span-2"
              placeholder="Describe what you are looking for"
            ></textarea>

            <button className="rounded p-2 pl-4 mt-8 w-fit bg-black text-white flex gap-2 items-center group hover:bg-green-700">
              <span className="text-lg group-hover:pl-2 transition-all">
                Submit
              </span>
              <div className="rounded-full bg-white p-2 grid place-content-center text-black transition-all">
                <RiMailSendLine className="text-2xl" />
              </div>
            </button>
          </form>
          <div className="flex flex-col gap-4 w-fit px-4 mx-auto">
            <p className="flex items-center isolate">
              <div className="p-4 rounded-full bg-white">
                <FaEnvelope className="text-xl" />
              </div>
              <span className="bg-white rounded-full py-1 px-4 -ml-4 -z-10">
                vernon.hall@olokunllc.com
              </span>
            </p>
            <p className="flex items-center isolate">
              <span className="bg-white rounded-full py-1 px-4 -z-10 -mr-4">
                (757) 844-5522
              </span>
              <div className="p-4 rounded-full bg-white">
                <FaPhone className="text-xl" />
              </div>
            </p>
            <p className="flex isolate">
              <div className="p-4 rounded-full bg-white h-fit">
                <FaMap className="text-xl" />
              </div>
              <div className="flex flex-col bg-white p-4 rounded-xl -ml-4 mt-4 -z-10">
                <span>409 Innovation Drive</span>
                <span>Suite 101-B</span>
                <span>Chesapeake, VA 23322</span>
              </div>
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Link
                href="tel:+17578445522"
                className="text-xl grid place-content-center rounded-full bg-white p-2"
                aria-label="Phone"
              >
                <FaPhone />
              </Link>
              <Link
                href="/contact"
                className="text-xl grid place-content-center rounded-full bg-white p-2"
                aria-label="Email"
              >
                <FaEnvelope />
              </Link>
              <Link
                href="https://facebook.com"
                className="text-xl grid place-content-center rounded-full bg-white p-2"
                aria-label="Facebook"
              >
                <FaFacebook />
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-xl grid place-content-center rounded-full bg-white p-2"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-xl grid place-content-center rounded-full bg-white p-2"
                aria-label="Twitter"
              >
                <FaTwitter />
              </Link>
            </div>
          </div>
          <div className="my-8 col-span-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12790.136866360528!2d-76.2225191!3d36.7337463!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ba9708ea5b9ef3%3A0xcb514dfcf96f7249!2sOlokun%20LLC!5e0!3m2!1sen!2sus!4v1702218870134!5m2!1sen!2sus"
              style={{ border: 0, width: "100%", minHeight: "400px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
