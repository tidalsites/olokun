import { Tenor_Sans } from "next/font/google";
const tenor = Tenor_Sans({ weight: "400", subsets: ["latin"] });
import Image from "next/image";

import usernetwork from "@/public/casestudies/user-network.png";
import sites from "@/public/casestudies/sites.png";
import customer from "@/public/casestudies/customer.png";
import data from "@/public/casestudies/data.png";

export default function EducationalInstitution() {
  return (
    <div className="min-h-[calc(100vh-var(--navbar-height))] h-full pt-[--navbar-height] px-4 flex flex-col bg-zinc-200 text-black">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="mb-20">Educational Institution</h1>
        <div className="flex flex-col">
          <section>
            <h2 className={`${tenor.className} text-4xl text-zinc-800`}>
              Problem
            </h2>
            <p className="max-w-prose leading-6 py-8">
              For more than 100 years, one of our customers has been an
              innovative and vital component in the educational landscape of St.
              Louis. The small, private elementary school itself occupies a
              historical building in the suburb of Clayton, Missouri. Through
              its commitment to innovation and education, the school&apos;s
              students consistently rank in the top 10th percentile in testing
              nationally.
            </p>
            <p className="max-w-prose leading-6 py-4">
              While ahead of the curve in educational standards, the school had
              suffered from using outdated technology. They lacked several
              components to help the school and its staff function more
              efficiently:
            </p>
            <ul className="list-disc flex flex-col gap-4 pl-4 pb-4">
              <li>
                A shared file storage system for all business and education
                documents
              </li>
              <li>A modern education registrar system and database</li>
              <li>
                Upgraded accounting software to move operations in-house instead
                of outsourced
              </li>
              <li>Remote access to technology</li>
              <li>Updates to hardware and Microsoft Office licenses</li>
              <li>A disaster and continuity plan</li>
            </ul>
            <p className="max-w-prose leading-6 py-4">
              In assessing their own technology needs, the school found that the
              capital investment required would be extensive and their next
              major capital campaign was still a couple years away. Upgrades
              would have to come from operating funds and the school found
              themselves at a crossroads — until they looked into CompleteCloud,
              a solution that would have to soon be put to the ultimate test.
            </p>
          </section>
          <section>
            <h2 className={`${tenor.className} text-4xl text-zinc-800 mt-20`}>
              Solution
            </h2>
            <p className="max-w-prose leading-6 py-8">
              The CompleteCloud&apos;s Utility Model allowed the school to
              upgrade all of their hardware and software, created a centralized
              SharePoint server and hosted the new registrar and associated
              database. The teachers and staff could now access their computers
              from anywhere because the entire technology platform was secured
              in an enterprise data center. All of their goals were accomplished
              with no capital investment, making it a huge victory for all
              stakeholders.
            </p>
          </section>
          <section className="mb-20">
            <h2 className={`${tenor.className} text-4xl text-zinc-800 mt-20`}>
              Results
            </h2>
            <p className="max-w-prose leading-6 py-8">
              Not long after their decision to rely on CompleteCloud, the school
              was forced to put their new technology and disaster plan into
              place. On the verge of their centennial celebration, the Head of
              School awoke to an alarm and found the building filled with smoke.
              The next morning, a significant portion of the school was in
              ruins.
            </p>
            <p className="max-w-prose leading-6 py-4">
              Because the school&apos;s entire technology was now in the cloud,
              none of their functionality, data, or computing power was lost.
              The school&apos;s phone was immediately rerouted to the Head of
              School&apos;s cellphone to speak with anxious parents. Teachers
              had access to their computers remotely and were freely able to
              communicate with parents and fellow staff.
            </p>
            <p className="max-w-prose leading-6 py-4">
              While the school&apos;s historic building was being repaired,
              temporary locations were found to continue the school year.
              Because the staff had very little to do to setup their technology
              solutions and business operations, they could focus on creating a
              welcoming experience for children and parents — their technology
              just kept working. Through the transition, they did not lose a
              single file or document. They simply plugged in new Thin Clients
              and picked up right where they left off.
            </p>
            <p className="max-w-prose leading-6 py-4">
              Over the course of the nine months, the team continued to leverage
              the CompleteCloud as they bounced from their replacement location
              and their construction site during the rebuild. It was a critical
              time for the school staff as they were entering their 100th year
              and had been planning the most significant capital campaign the
              school had ever executed. They were planning a new technology wing
              that would put them in the forefront of all private schools in the
              nation. A fire would not impede their progress.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
