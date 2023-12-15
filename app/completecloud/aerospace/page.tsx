import { Tenor_Sans } from "next/font/google";
const tenor = Tenor_Sans({ weight: "400", subsets: ["latin"] });

export default function Aerospace() {
  return (
    <section className="min-h-[calc(100vh-var(--navbar-height))] h-full pt-[--navbar-height] px-4 flex flex-col bg-zinc-200 text-black">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="mb-20">Aerospace</h1>
        <div className="flex flex-col">
          <h2 className={`${tenor.className} text-4xl text-zinc-800`}>
            Problem
          </h2>
          <p className="max-w-prose leading-6 py-8">
            One of our clients is a diversified solutions provider for the
            aerospace and defense industries. They employ stringent controls and
            lean manufacturing practices to deliver certified, flight critical
            components that exceed exacting quality, cost and delivery
            standards. From precision manufacturing to innovative engineering
            services, this aerospace manufacturing company is the partner of
            choice for a wide range of aerospace and defense applications.
          </p>
          <p className="max-w-prose leading-6 py-4">
            When the owners acquired the company in 2007, they were facing a
            challenging turnaround project. There were many issues with the
            company varying from internal manufacturing operations and
            infrastructure to external account related issues. As they built a
            plan to turn the company around, they identified their IT
            infrastructure as strategic in their turnaround efforts, yet not
            core to their business. They needed a solution in place fast so they
            could focus their energy on improving manufacturing processes and
            enhancing client relationships.
          </p>
          <p className="max-w-pros">
            The current IT infrastructure had a long list of issues:
          </p>
          <ul className="list-disc py-4 ml-4">
            <li>Outdated hardware</li>
            <li>Patchwork network</li>
            <li>Part-time/non-skilled IT support</li>
            <li>Expensive external IT consultants</li>
            <li>No backup</li>
            <li>No off-site storage</li>
            <li>No disaster recovery</li>
          </ul>
          <h2 className={`${tenor.className} text-4xl text-zinc-800 mt-20`}>
            Solution
          </h2>
          <p className="max-w-prose leading-6 py-8">
            The company decided to go with Avatara&apos;s CompleteCloud
            Platform. They were able to avoid the capital expenditure while
            completely rebuilding their IT infrastructure. Their new
            infrastructure was built in a secure enterprise data center, which
            was critical due to the sensitivity of their client base being a
            Department of Defense supplier. They addressed the computing needs
            of their diverse 70 employees, varying from assembly line terminals
            to manufacturing engineers. They also checked the box on off-site
            backup and disaster recovery, which was important to them and their
            clients.
          </p>
          <h2 className={`${tenor.className} text-4xl text-zinc-800 mt-20`}>
            Results
          </h2>
          <p className="max-w-prose leading-6 py-8">
            This client has now been on Avatara&apos;s CompleteCloud Platform
            for seven years. They have grown to more than 170 employees in two
            locations. What was once a turnaround project is now a thriving
            enterprise.
          </p>
          <div className="max-w-prose mx-auto my-20 flex flex-col">
            <p className="font-bold text-xl py-4 text-zinc-700">
              “Our IT just works; it is reliable and secure and allows us to run
              our business effectively. I am a financially driven business owner
              and I have done cost comparisons 4-5 times over the last seven
              years; I cannot find a more cost-effective solution.”
            </p>
            <p className="ml-auto">- CEO of Client Company</p>
          </div>
        </div>
      </div>
    </section>
  );
}
