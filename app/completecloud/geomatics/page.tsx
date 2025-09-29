import { Tenor_Sans } from "next/font/google";
const tenor = Tenor_Sans({ weight: "400", subsets: ["latin"] });
import Image from "next/image";

import usernetwork from "@/public/casestudies/user-network.png";
import sites from "@/public/casestudies/sites.png";
import customer from "@/public/casestudies/customer.png";
import data from "@/public/casestudies/data.png";

export default function Engineering() {
  return (
    <section className="min-h-[calc(100vh-var(--navbar-height))] h-full pt-(--navbar-height) px-4 flex flex-col bg-zinc-200 text-black">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="mb-20">Geomatics</h1>
        <div className="flex flex-col">
          <h2 className={`${tenor.className} text-4xl text-zinc-800`}>
            Problem
          </h2>
          <p className="max-w-prose leading-6 py-8">
            One of Avatara&apos;s geomatics engineering customers is a
            family-owned firm founded in 1962 on the principles of high quality
            and excellent client service. The firm has a large geographic
            footprint, serving 20% of the counties in the U.S., with numerous
            regional offices throughout the Midwest and East Coast providing
            landscape architecture, UAS services, site design and development,
            and LiDAR services.
          </p>
          <p className="max-w-prose leading-6 py-4">
            The firm had many of the common pain points that our engineering
            clients had before they decided to make the jump to CompleteCloud.
          </p>
          <ul className="flex flex-wrap gap-4">
            <li className="bg-white p-4 rounded-sm border-b-2 border-b-brand">
              5 locations in different states
            </li>
            <li className="bg-white p-4 rounded-sm border-b-2 border-b-brand">
              Over 100 employees
            </li>
            <li className="bg-white p-4 rounded-sm border-b-2 border-b-brand">
              50% are high-end CAD graphics users
            </li>
            <li className="bg-white p-4 rounded-sm border-b-2 border-b-brand max-w-[40ch]">
              30 TB of data, which resulted in thousand in backup costs annually
            </li>
            <li className="bg-white p-4 rounded-sm border-b-2 border-b-brand max-w-[40ch]">
              Complex & expensive server infrastructure needing to be refreshed
            </li>
          </ul>
          <h2 className={`${tenor.className} text-4xl text-zinc-800 mt-20`}>
            Solution
          </h2>
          <p className="max-w-prose leading-6 py-8">
            The engineering firm made their transition to CompleteCloud in
            December of 2019. Shortly after, in March of 2020, state and
            nationwide work from home restrictions were put in place to help
            fight the spread of COVID-19. For businesses that rely heavily on
            CAD, working from home can be extremely challenging due to the
            nature that most CAD stations are tethered to the office. As a
            result, being forced to work from home crippled hundreds of
            engineering and architecture firms without the ability to access
            these applications from home. That wasn&apos;t the case for Avatara
            customers.
          </p>
          <p className="max-w-prose leading-6 py-8">
            In less than a week, this engineering firm was able to transition
            every employee at every location to working from home. That included
            50% of their employees that are graphics users and needed access at
            home and in the field. They were able to flawlessly make the shift
            to working from home because of the CompleteCloud Platform.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2">
            <li className="bg-white p-4 rounded-sm flex flex-col">
              <span className="font-semibold">
                CompleteCloud Infrastructure:
              </span>
              <span className="mt-2 text-zinc-700">
                With all their servers and desktops moved offsite into secure
                SSAE type 2 Data Centers, every employee was able to securely
                access their virtual machines and data from home on their
                personal computers or work laptops.
              </span>
            </li>
            <li className="bg-white p-4 rounded-sm flex flex-col">
              <span className="font-semibold">Support:</span>
              <span className="mt-2 text-zinc-700">
                Our support team was still there, 24x7, whenever they had
                questions or needed help in their new home offices (or kitchen
                tables, living room couches, or patios).
              </span>
            </li>
            <li className="bg-white p-4 rounded-sm flex flex-col">
              <span className="font-semibold">Productivity:</span>
              <span className="mt-2 text-zinc-700">
                Chat, video, and file sharing applications helped employees to
                effectively communicate with one another despite being
                incredibly spread out.
              </span>
            </li>
            <li className="bg-white p-4 rounded-sm flex flex-col">
              <span className="font-semibold">Security:</span>
              <span className="mt-2 text-zinc-700">
                Just because you&apos;re working from home doesn&apos;t mean you
                shouldn&apos;t remain compliant and secure. The firm was able to
                take their security envelope home and maintain security despite
                not being in their 4 walls.
              </span>
            </li>
          </ul>
          <h2 className={`${tenor.className} text-4xl text-zinc-800 mt-20`}>
            Results
          </h2>
          <p className="max-w-prose leading-6 py-8">
            Without CompleteCloud, the engineering firm would have been in a
            dire situation. It was so impactful that the company&apos;s
            president said, “If this had happened in December before we had you
            guys, we would have been dead in the water.”
          </p>
          <p className="mb-20">
            The market is shifting to make workforces more mobile and not being
            chained to the office. Not only does this improve employee
            productivity, but it also improves employee satisfaction.
            Unfortunately, most businesses today are incapable of making this
            shift and COVID-19 revealed the Achilles Heel of many
            businesses&apos; IT solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
