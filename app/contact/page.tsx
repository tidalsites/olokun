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
import jobsearch from "@/public/jobsearch.png";
import Image from "next/image";
import { PiCaretDown, PiCheckLight } from "react-icons/pi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TContactSchema, ContactSchema } from "@/schemas/contact";
import { Map } from "../components/GoogleMap";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<TContactSchema>({
    resolver: zodResolver(ContactSchema),
  });

  const sendContactRequest = () => {
    alert("DEVMODE: Form has not been connected to email client");
    reset();
  };

  return (
    <section className="min-h-[calc(100vh-var(--navbar-height))] h-full pt-[--navbar-height] px-4 flex flex-col bg-zinc-200 text-black">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="mb-20">Contact</h1>
        <div className="flex flex-col md:grid md:grid-cols-[1fr,auto] lg:grid-cols-2 md:gap-8 gap-20">
          <form
            action=""
            className="lg:grid lg:grid-cols-2 lg:row-span-2 gap-8 px-8 py-12 bg-white border-[1px] border-zinc-300 shadow-[0_2px_4px_rgba(0,0,0,.3)]"
            onSubmit={handleSubmit(sendContactRequest)}
          >
            <div className="flex flex-col gap-8 mb-8">
              <label className="flex flex-col max-w-xs">
                <input
                  type="text"
                  placeholder="First Name"
                  className="px-2 py-1 border-b-2 border-b-zinc-200"
                  {...register("first_name")}
                />
                {errors && errors["first_name"] && (
                  <span className="text-xs text-red-700 mt-[1px]">
                    {errors["first_name"].message}
                  </span>
                )}
              </label>
              <label className="flex flex-col max-w-xs">
                <input
                  type="text"
                  className="px-2 py-1 border-b-2 border-b-zinc-200"
                  placeholder="Last Name"
                  {...register("last_name")}
                />
                {errors && errors["last_name"] && (
                  <span className="text-xs text-red-700 mt-[1px]">
                    {errors["last_name"].message}
                  </span>
                )}
              </label>
              <label className="flex flex-col max-w-xs">
                <input
                  type="email"
                  className="px-2 py-1 border-b-2 border-b-zinc-200"
                  placeholder="Email Address"
                  {...register("email")}
                />
                {errors && errors["email"] && (
                  <span className="text-xs text-red-700 mt-[1px]">
                    {errors["email"].message}
                  </span>
                )}
              </label>
              <label className="flex flex-col max-w-xs">
                <input
                  type="text"
                  className="px-2 py-1 border-b-2 border-b-zinc-200"
                  placeholder="Phone Number"
                  {...register("phone")}
                />
                {errors && errors["phone"] && (
                  <span className="text-xs text-red-700 mt-[1px]">
                    {errors["phone"].message}
                  </span>
                )}
              </label>
            </div>
            <div className="flex flex-col gap-8 mb-8">
              <div className="flex w-full max-w-xs flex-col gap-2">
                <div className="flex justify-between items-center bg-zinc-200 rounded p-2">
                  <span className="text-sm text-zinc-700">
                    Select your services
                  </span>
                  <PiCaretDown />
                </div>
                <div className="flex flex-col bg-zinc-100 rounded p-2 grow">
                  <label
                    htmlFor="engineering"
                    className="relative hover:text-zinc-800/80 cursor-pointer flex justify-between"
                  >
                    Engineering
                    <input
                      className="h-0 w-0 absolute opacity-0"
                      type="checkbox"
                      {...register("engineering")}
                      id="engineering"
                    />
                    {watch("engineering") && <PiCheckLight />}
                  </label>
                  <label
                    htmlFor="logistics"
                    className="relative hover:text-zinc-800/80 cursor-pointer flex justify-between"
                  >
                    Logistics
                    <input
                      className="h-0 w-0 absolute opacity-0"
                      type="checkbox"
                      {...register("logistics")}
                      id="logistics"
                    />
                    {watch("logistics") && <PiCheckLight />}
                  </label>
                  <label className="relative hover:text-zinc-800/80 cursor-pointer flex justify-between">
                    Consulting
                    <input
                      className="h-0 w-0 absolute opacity-0"
                      type="checkbox"
                      {...register("consulting")}
                    />
                    {watch("consulting") && <PiCheckLight />}
                  </label>
                  <label className="relative hover:text-zinc-800/80 cursor-pointer flex justify-between">
                    Information Technology
                    <input
                      className="h-0 w-0 absolute opacity-0"
                      type="checkbox"
                      {...register("it")}
                    />
                    {watch("it") && <PiCheckLight />}
                  </label>
                </div>
              </div>
            </div>
            <div className="col-span-2 flex flex-col">
              <textarea
                {...register("description")}
                cols={20}
                className="border-2 border-zinc-300 px-2 py-1 min-h-[200px] w-full"
                placeholder="Describe what you are looking for"
              ></textarea>
              {errors && errors["description"] && (
                <span className="text-xs text-red-700 mt-[1px]">
                  {errors["description"].message}
                </span>
              )}
            </div>

            <button className="rounded px-4 py-1 mt-8 w-fit bg-black text-white flex gap-2 items-center group hover:bg-green-700">
              <span className="text-lg group-hover:pl-2 transition-all">
                Submit
              </span>
              <div className="rounded-full bg-white p-2 grid place-content-center text-black transition-all">
                <RiMailSendLine className="text-2xl" />
              </div>
            </button>
          </form>
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
          <div className="grid grid-cols-2 col-span-2 lg:col-span-1 gap-4 justify-center mt-auto bg-black text-white w-full p-8 rounded">
            <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
              <p>Looking for a new uplifting career?</p>
              <p className="text-3xl w-full md:max-w-[15ch] grow flex items-center bg-white text-black justify-center p-4 border-b-4 border-b-red-700">
                Join Our Team & Make a Difference!
              </p>
            </div>
            <div className="hidden sm:block">
              <Image
                src={jobsearch}
                alt="Join Us"
                className="h-full w-auto bg-cover"
              />
            </div>
            <Link
              href="https://linkedin.com"
              className="bg-white px-4 py-1 text-black text-center col-span-2 text-lg mt-4"
            >
              Apply Today
            </Link>
          </div>
          <div className="my-8 col-span-2">
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12790.136866360528!2d-76.2225191!3d36.7337463!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ba9708ea5b9ef3%3A0xcb514dfcf96f7249!2sOlokun%20LLC!5e0!3m2!1sen!2sus!4v1702218870134!5m2!1sen!2sus"
              style={{ border: 0, width: "100%", minHeight: "400px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe> */}
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
}
