import { Tenor_Sans } from "next/font/google";
import Image from "next/image";
import bg from "@/public/ingenuity-bg-light.svg";
import graphic from "@/public/whyus-graphic.png";
const tenor = Tenor_Sans({ weight: "400", subsets: ["latin"] });

export const WhyUs = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[auto,auto] min-h-screen relative">
      <div className="flex items-center justify-center">
        <Image src={graphic} alt="Decorative" />
      </div>
      <div className="flex flex-col gap-8 items-start pt-[15vh] py-10 px-4 lg:px-12 max-w-prose mx-auto w-fit">
        <div className="absolute top-0 left-0 max-w-2xl scale-y-[-1]">
          <Image src={bg} alt="Ingenuity decoration" />
        </div>
        <h2 className={`${tenor.className} text-2xl lg:text-4xl`}>Why Us</h2>
        <p className="max-w-[40ch] leading-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
          velit cupiditate repudiandae. Voluptatem ex provident, totam
          distinctio facere, laudantium molestiae nobis et velit aspernatur
          saepe?
        </p>
        <p className="max-w-[40ch] leading-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          soluta est doloribus ducimus quo! Doloribus amet voluptatibus
          temporibus eaque illum quam maiores culpa quia, nihil non accusamus ut
          eos repellat in corrupti.
        </p>
        <button className="px-4 py-1 rounded bg-white text-black">
          Find out more about CompleteCloud
        </button>
      </div>
    </section>
  );
};
