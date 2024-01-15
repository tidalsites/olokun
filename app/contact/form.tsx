"use client";

import { PiCheckLight, PiSpinner } from "react-icons/pi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TContactSchema, ContactSchema } from "@/schemas/contact";
import { RiMailSendLine } from "react-icons/ri";
import { sendContactEmail } from "@/lib/sendEmail";
import { toast } from "react-toastify";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<TContactSchema>({
    resolver: zodResolver(ContactSchema),
  });

  const sendContactRequest = async (data: TContactSchema) => {
    const results = await sendContactEmail(data);

    if (results.success) {
      toast.success("Email sent successfully. We'll be in touch shortly");
    }

    if (!results.success) {
      if (results.error) console.error(results.error);

      if (!results.error && results.data) {
        console.error(results.data);
      }
      toast.error("We were unable to process your request");
    }

    reset();
  };

  return (
    <form
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
            <span className="text-xs text-brand mt-[1px]">
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
            <span className="text-xs text-brand mt-[1px]">
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
            <span className="text-xs text-brand mt-[1px]">
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
            <span className="text-xs text-brand mt-[1px]">
              {errors["phone"].message}
            </span>
          )}
        </label>
      </div>
      <div className="flex flex-col gap-8 mb-8">
        <div className="flex w-full max-w-xs flex-col gap-2 bg-zinc-200 rounded">
          <div className="flex justify-between items-center rounded p-2">
            <span className="text-sm">Interested in specific services?</span>
          </div>
          <div className="flex flex-col bg-zinc-100 rounded p-2 grow m-2">
            <label
              htmlFor="engineering"
              className="relative hover:text-zinc-800/80 hover:bg-zinc-200 cursor-pointer flex items-center justify-between rounded"
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
              className="relative hover:text-zinc-800/80 hover:bg-zinc-200 cursor-pointer flex items-center justify-between rounded"
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
            <label className="relative hover:text-zinc-800/80 hover:bg-zinc-200 cursor-pointer flex items-center justify-between rounded">
              Consulting
              <input
                className="h-0 w-0 absolute opacity-0"
                type="checkbox"
                {...register("consulting")}
              />
              {watch("consulting") && <PiCheckLight />}
            </label>
            <label className="relative hover:text-zinc-800/80 hover:bg-zinc-200 cursor-pointer flex items-center justify-between rounded">
              Information Technology
              <input
                className="h-0 w-0 absolute opacity-0"
                type="checkbox"
                {...register("it")}
              />
              {watch("it") && <PiCheckLight />}
            </label>
            <label className="relative hover:text-zinc-800/80 hover:bg-zinc-200 cursor-pointer flex items-center justify-between rounded">
              Business Development
              <input
                className="h-0 w-0 absolute opacity-0"
                type="checkbox"
                {...register("business_development")}
              />
              {watch("business_development") && <PiCheckLight />}
            </label>
            <label className="relative hover:text-zinc-800/80 hover:bg-zinc-200 cursor-pointer flex items-center justify-between rounded">
              Career Opportunity
              <input
                className="h-0 w-0 absolute opacity-0"
                type="checkbox"
                {...register("career")}
              />
              {watch("career") && <PiCheckLight />}
            </label>
            <label className="relative hover:text-zinc-800/80 hover:bg-zinc-200 cursor-pointer flex items-center justify-between rounded">
              General Inquiry
              <input
                className="h-0 w-0 absolute opacity-0"
                type="checkbox"
                {...register("general")}
              />
              {watch("general") && <PiCheckLight />}
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
          <span className="text-xs text-brand mt-[1px]">
            {errors["description"].message}
          </span>
        )}
      </div>

      <button
        disabled={isSubmitting}
        className={`${
          isSubmitting ? "bg-neutral-700" : "bg-black"
        } rounded px-4 py-1 mt-8 w-fit text-white flex gap-2 items-center group`}
      >
        <div className="rounded-full bg-white p-2 grid place-content-center text-black group-hover:pl-6 transition-all">
          {isSubmitting ? (
            <PiSpinner className="animate-spin text-2xl text-neutral-900" />
          ) : (
            <RiMailSendLine className="text-2xl" />
          )}
        </div>
        <span>Submit</span>
      </button>
    </form>
  );
};
