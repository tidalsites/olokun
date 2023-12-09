import bg from "@/public/ingenuity-bg-light.svg";
import { Tenor_Sans } from "next/font/google";
import Image from "next/image";

const tenor = Tenor_Sans({ weight: "400", subsets: ["latin"] });

export const Capabilities = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[auto,auto] min-h-screen relative">
      <div className="absolute bottom-0 left-0 max-w-2xl">
        <Image src={bg} alt="Ingenuity decoration" />
      </div>
      <div className="relative">
        <div className="flex flex-col gap-8 items-start pt-[15vh] py-10 px-4 lg:px-12 max-w-prose mx-auto w-fit sticky top-0">
          <h2 className={`${tenor.className} text-2xl lg:text-4xl`}>
            Capabilities
          </h2>
          <p className="max-w-[40ch] leading-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            velit cupiditate repudiandae. Voluptatem ex provident, totam
            distinctio facere, laudantium molestiae nobis et velit aspernatur
            saepe?
          </p>
          <button className="px-4 py-1 rounded bg-white text-black">
            Learn More
          </button>
        </div>
      </div>

      <div className="bg-neutral-300 grid grid-cols-1 xl:grid-cols-2 xl:gap-4 xl:py-10 py-20 text-black">
        <div className="flex flex-col py-4">
          <h3 className="text-2xl pr-8 mx-4 lg:mx-8 py-4 font-semibold border-b-2 border-red-700 w-fit">
            Engineering & Technical Services
          </h3>

          <p className="px-4 max-w-prose leading-8 grow py-4 flex items-center text-lg lg:px-8">
            Engineering and Technical Services are one of Olokun&apos;s core
            competencies. Our approach is to adapt to our customer requirements
            and provide sound engineering design with exceptional quality and
            producibility.
          </p>
        </div>
        <div className="flex flex-col bg-white py-4">
          <h3 className="text-2xl pr-8 mx-4 lg:mx-8 py-4 font-semibold border-b-2 border-red-700 w-fit">
            Logistics Support
          </h3>
          <p className="px-4 max-w-prose leading-8 grow py-4 flex items-center text-lg lg:px-8">
            Our logistics team can provide a wide range of services to support
            customers&apos; requirements. We provide integrated logistics
            support services in the acquisition, planning, and life cycle
            support. To provide dynamic, fast, and innovative results, our team
            is adaptable to our customer&apos;s requirements and standards.
          </p>
        </div>
        <div className="flex flex-col py-4 xl:bg-white">
          <h3 className="text-2xl pr-8 mx-4 lg:mx-8 py-4 font-semibold border-b-2 border-red-700 w-fit">
            Information Technology
          </h3>
          <p className="px-4 max-w-prose leading-8 grow py-4 flex items-center text-lg lg:px-8">
            Our Information Technology Industry Professionals provide
            information technology development, operations and sustainment
            services, and cyber security services for the various federal
            government and commercial customers. Olokun IT professionals
            architect, develop, integrate, test, deploy, and maintain secure
            software applications and web services hosted in various government
            and commercial virtual environments. Olokun uses industry best
            practices to provide an innovative and process-driven approach to
            solve challenging technical and business problems.
          </p>
        </div>
        <div className="flex flex-col py-4 bg-white xl:bg-transparent">
          <h3 className="text-2xl pr-8 mx-4 lg:mx-8 py-4 font-semibold border-b-2 border-red-700 w-fit">
            Consulting
          </h3>
          <p className="px-4 max-w-prose leading-8 grow py-4 flex items-center text-lg lg:px-8">
            Olokun has years of experience in business development support,
            pipeline development, proposal management, coordination, writing,
            review, and assessment. Our team develops detailed outlines,
            technical content, compliance matrix, and capture plans. We have
            experts in government contracting who can provide competitive bid
            strategies that will display our customers&apos; abilities to meet
            the requirements with a sound solution.
          </p>
        </div>
      </div>
    </section>
  );
};
