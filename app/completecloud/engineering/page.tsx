import { Tenor_Sans } from "next/font/google";
const tenor = Tenor_Sans({ weight: "400", subsets: ["latin"] });
import Image from "next/image";

import usernetwork from "@/public/casestudies/user-network.png";
import sites from "@/public/casestudies/sites.png";
import customer from "@/public/casestudies/customer.png";
import data from "@/public/casestudies/data.png";

export default function Engineering() {
  return (
    <section className="min-h-[calc(100vh-var(--navbar-height))] h-full pt-[--navbar-height] px-4 flex flex-col bg-zinc-200 text-black">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="mb-20">Engineering</h1>
        <div className="flex flex-col">
          <h2 className={`${tenor.className} text-4xl text-zinc-800`}>
            Problem
          </h2>
          <p className="max-w-prose leading-6 py-8">
            One of our engineering clients was founded in Kansas City, Kansas
            and has been headquartered there since early 2002. At first they
            worked primarily in civil engineering and lighting design services,
            but now they have multiple disciplines, with a focus on surveying. A
            culture focused on leadership, mentorship, and community outreach
            helped them grow to over 70 employees in 3 different offices
            throughout the Midwest region.
          </p>
          <p className="max-w-prose leading-6 py-4">
            Their success turned into explosive growth and their IT
            infrastructure simply wasn&apos;t able to keep pace. Despite their
            best efforts, their rapid growth caused workflow issues, data
            storage problems, individual site network restrictions, and security
            concerns.
          </p>
          <p className="max-w-prose leading-6 py-4">
            One of their main services is using remote robots to survey sewers
            and capture significant amounts of CCTV video data. As a result,
            they struggled with moving data from remote sites to a central
            location over a traditional VPN model. They had accumulated 17 TB of
            data and only half was backed up on external hard drives. Not only
            was half of their data not backed up, but their backups were rarely
            tested and they had been hit with multiple viruses over the years.
            If disaster were to strike, it would&apos;ve been detrimental to
            their business. At a minimum, they would have had extensive data
            loss, and worst case they might have had to shut their doors.
          </p>
          <p className="max-w-prose leading-6 py-4">
            Their explosive growth forced them to re-examine their overall IT
            strategy, especially now that they had grown to 3 sites across the
            Midwest. Leadership wanted the entire company to feel as one
            connected office, but these sites felt disconnected and separated
            from one another.
          </p>
          <h2 className={`${tenor.className} text-4xl text-zinc-800 mt-20`}>
            Solution
          </h2>
          <p className="max-w-prose leading-6 py-8">
            They chose CompleteCloud to help secure and scale their IT
            infrastructure. The CompleteCloud Platform centralized all of their
            site&apos;s data and in the process even discovered 5 terabytes of
            unknown data from a remote server and employees&apos; local PCs.
            This centralization allowed their expanding CCTV data to be uploaded
            into secure remote servers that replicated the CompleteCloud data
            centers, so all sites could access it, providing a customized
            workflow for their unique operation. To further connect each site,
            we layered in our voice, chat, and video communication solutions,
            helping them feel as one cohesive company.
          </p>
          <h2 className={`${tenor.className} text-4xl text-zinc-800 mt-20`}>
            Results
          </h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="max-w-prose leading-6 py-8">
                Once again, they feel like one unified organization. The company
                is better able to communicate and work with each location now
                that all of their servers, virtual Desktops, high-end CAD
                graphic systems, data backups, and even phones are hosted in
                redundant data centers. Since adopting the CompleteCloud
                Platform, they moved their headquarters and didn&apos;t have
                access to their office for two weeks. During those two weeks,
                their work was not inhibited. With centralized data and virtual
                desktops, they flawlessly used CAD and GIS programs from home
                with no performance degradation. Transitioning to their new
                building was effortless and smooth.
              </p>
              <p className="max-w-prose leading-6 py-4">
                Additionally, their data needs continued to grow and were
                quickly outgrowing the current server infrastructure. To address
                these issues we built an entirely new server structure to keep
                up with their growing data demands. This type of project
                would&apos;ve been extremely expensive, costing at least
                $150,000 with any other IT vendor, but it cost them $0 on the
                CompleteCloud Platform.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 justify-center mb-20 py-8 px-4 border-t-2 border-t-red-700 border-b-2 border-b-red-700">
              <div className="flex flex-col bg-white rounded p-4 items-center">
                <span className="font-bold text-center text-2xl">
                  130 Users
                </span>
                <span className="text-zinc-600 -mt-2">85% Increase</span>
                <Image
                  src={usernetwork}
                  alt="User network icon"
                  className="mt-4"
                />
              </div>
              <div className="flex flex-col bg-white rounded p-4 items-center">
                <span className="font-bold text-center text-2xl">7 Sites</span>
                <span className="text-zinc-600 -mt-2">133% Increase</span>
                <Image src={sites} alt="Scrollwork icon" className="mt-4" />
              </div>
              <div className="flex flex-col bg-white rounded p-4 items-center">
                <span className="font-bold text-center text-2xl">6 Years</span>
                <span className="text-zinc-600 -mt-2">as a customer</span>
                <Image src={customer} alt="Shooting star" className="mt-4" />
              </div>
              <div className="flex flex-col bg-white rounded p-4 items-center">
                <span className="font-bold text-center text-2xl">
                  30 Terabytes
                </span>
                <span className="text-zinc-600 -mt-2">of data sent</span>
                <Image
                  src={data}
                  alt="Cloud data transfer icon"
                  className="mt-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
