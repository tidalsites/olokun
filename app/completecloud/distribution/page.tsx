import { Tenor_Sans } from "next/font/google";
const tenor = Tenor_Sans({ weight: "400", subsets: ["latin"] });

export default function Distribution() {
  return (
    <div className="min-h-[calc(100vh-var(--navbar-height))] h-full pt-(--navbar-height) px-4 flex flex-col bg-zinc-200 text-black">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="mb-20">Distribution</h1>
        <div className="flex flex-col">
          <section>
            <h2 className={`${tenor.className} text-4xl text-zinc-800`}>
              Problem
            </h2>
            <p className="max-w-prose leading-6 py-8">
              Our business has been focused primarily on engineering,
              manufacturing, and healthcare industries for the past 5 years.
              Each of these businesses has unique needs that our CompleteCloud
              IT Platform addresses perfectly—from our industry-first CAD
              solution to compliance security and the ability to aggregate
              multiple sites into feeling like one centralized location. We are
              so successful in these markets that they make up about 60% of our
              total business. We know this space well and have been helping
              businesses in these areas for the last 15 years.
            </p>
            <p className="max-w-prose leading-6 py-4">
              We&apos;ve recently seen explosive growth in yet another industry,
              distribution. We&apos;ve always worked with this industry, but
              we&apos;ve seen an increasing number of distributors looking to
              make the jump away from their traditional on-premise model or
              current expensive and convoluted IT systems. It may not seem like
              these businesses would have very complex IT systems, but they do.
              To help illustrate the complexity of these environments,
              let&apos;s take a look at one of our newest distribution clients.
            </p>
            <p className="max-w-prose">
              At a high level, our client—like every other distributor we work
              with—had three IT challenges plaguing them.
            </p>
            <ul className="list-disc py-4 ml-4 flex flex-col gap-4">
              <li className="max-w-prose">
                <span className="font-semibold">Multiple Shifts:</span> They had
                three shifts that required support outside of normal business
                hours. They couldn&apos;t afford to have any downtime, so
                support that worked around their schedule was critical.
              </li>
              <li className="max-w-prose">
                <span className="font-semibold">
                  Diverse Type of Users & Mobility Needs:
                </span>{" "}
                The client had a variety of user types from those who simply
                input data on the warehouse floor to remote sales staff
                traveling the country. Each needed to integrate seamlessly into
                one IT environment, regardless of where they were or what they
                were doing.
              </li>
              <li className="max-w-prose">
                <span className="font-semibold">
                  Vital Wi-Fi Needs & Robust Shipping/Receiving Stations:
                </span>{" "}
                They had large warehouses that required solid Wi-Fi coverage
                throughout for a variety of devices, ranging from bar code
                scanners to forklifts on the floor.
              </li>
            </ul>
          </section>
          <section className="mb-20">
            <h2 className={`${tenor.className} text-4xl text-zinc-800 mt-20`}>
              Solution
            </h2>
            <p className="max-w-prose leading-6 py-8">
              This client was in a tricky situation; they were in the middle of
              merging two separate companies. This would double the size of
              their original business, so the demands and complexity of their IT
              increased dramatically. Fortunately, with our CompleteCloud
              Platform, we had everything built and ready, and over the weekend
              of migration, both companies were flawlessly merged into one
              business. This wasn&apos;t a one-time concern for our client,
              however. Their plan to grow into a nationwide presence relied
              heavily on acquiring new business and adding more sites across the
              country.
            </p>
            <p className="max-w-prose leading-6 py-4">
              One of the reasons CompleteCloud was so appealing to this
              distributor was the predictable pricing and scalability of our
              solution. The CompleteCloud Platform is billed on a per-user
              per-month pricing model, which means they knew exactly what they
              would be paying if they acquired a new company. This made it easy
              to estimate new IT costs and scale their business in a predictable
              way.
            </p>
            <p className="max-w-prose leading-6 py-4">
              Being able to scale their business easily was obviously important,
              but they also needed their data protected, which is where our
              managed security suite came in. With private cloud security, DNS
              filtering, a Security Operation Center, multifactor
              authentication, encrypted email, and cyber security training for
              employees, they had confidence in their data protection that they
              didn&apos;t have before. Knowing the most secure IT platform on
              the market today was protecting their data, they could expand
              their business without any IT worries.
            </p>
            <p className="max-w-prose leading-6 py-4">
              With a scalable and secure business, the only thing they needed
              was solid IT support to handle their growing business and work
              outside of the traditional 9-5 schedule. Avatara provides 24/7/365
              support for all our clients—not just those who work during normal
              office hours. And where most IT providers charge more for support
              outside of traditional work hours, we don&apos;t. Whether a
              warehouse employee is having connectivity issues with a kiosk or a
              remote sales rep needs help on a Friday night, we have them
              covered.
            </p>
            <p className="max-w-prose leading-6 py-4">
              With a variety of users, locations across the country, and a
              rapid-growth model in the coming years, the only IT solution that
              made sense for this client was the security-first CompleteCloud
              Platform.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
