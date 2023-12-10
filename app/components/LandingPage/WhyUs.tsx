import { Tenor_Sans } from "next/font/google";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import bg from "@/public/ingenuity-bg-light.svg";
import graphic from "@/public/whyus-graphic.png";
import completeCloudLogo from "@/public/completecloudlogo.png";
import Link from "next/link";
const tenor = Tenor_Sans({ weight: "400", subsets: ["latin"] });

export const WhyUs = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[auto,auto] min-h-screen relative pb-20 overflow-x-hidden">
      <div className="items-center justify-center hidden md:flex">
        <Image src={graphic} alt="Decorative" />
      </div>
      <div className="flex flex-col gap-8 items-start pt-[15vh] py-10 px-4 lg:px-12 max-w-prose mx-auto w-fit">
        <div className="absolute top-0 left-0 max-w-2xl scale-y-[-1]">
          <Image src={bg} alt="Ingenuity decoration" />
        </div>
        <h2 className={`${tenor.className} text-2xl lg:text-4xl`}>Why Us</h2>
        <p className="max-w-[40ch] leading-8">
          Olokun is uniquely situated to leverage our management expertise and
          professional talents related to Maritime Industry Modernization,
          Engineering, Capture Management, Strategic Teaming, and Life-Cycle
          Logistics to provide a quality, cost effective solution to our
          customers. Based on the past two (2) years of customer feedback,
          Olokun is disciplined by process and adaptive to customer needs.
        </p>
        <p className="max-w-[40ch] leading-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          soluta est doloribus ducimus quo! Doloribus amet voluptatibus
          temporibus eaque illum quam maiores culpa quia, nihil non accusamus ut
          eos repellat in corrupti.
        </p>
        <Link
          href="/completecloud"
          className="px-4 py-1 rounded bg-white text-black flex gap-4 items-center justify-start w-[50vw] isolate group"
        >
          <div className="h-16 flex items-center">
            <Image
              src={completeCloudLogo}
              alt="CompleteCloud"
              className="max-h-full w-auto"
            />
          </div>
          <span className="font-semibold bg-white z-20 h-full flex items-center rounded-full px-4">
            Find out more about CompleteCloud
          </span>
          <div className="flex justify-center items-center p-2 rounded-full bg-black text-white -translate-x-[calc(100%+1rem+1px)] transition-all z-10 group-hover:translate-x-0 group-hover:justify-end group-hover:pl-6">
            <FaArrowRight />
          </div>
        </Link>
      </div>
    </section>
  );
};
