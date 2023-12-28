import { Tenor_Sans } from "next/font/google";
const tenor = Tenor_Sans({ weight: "400", subsets: ["latin"] });

export default function Banking() {
  return (
    <div className="min-h-[calc(100vh-var(--navbar-height))] h-full pt-[--navbar-height] px-4 flex flex-col bg-zinc-200 text-black">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="mb-20">Banking</h1>
        <div className="flex flex-col">
          <section>
            <h2 className={`${tenor.className} text-4xl text-zinc-800`}>
              Problem
            </h2>
            <p className="max-w-prose leading-6 py-8">
              Our client has been providing quality banking services to the St.
              Louis area since 2005. Their mission focuses on quality service to
              their customers, support to employees, return to their
              shareholders, and a positive impact in their community. This
              mission has allowed them to expand to four locations throughout
              the St. Louis area. After operating with an in-house IT solution
              for the past 12 years, the bank decided that in order to continue
              to grow as a company, they needed a change in the technology they
              were using;
            </p>
            <p className="max-w-prose py-4 text-xl bg-brand text-white text-center font-semibold uppercase">
              CompleteCloud was that change.
            </p>
          </section>
          <section>
            <h2 className={`${tenor.className} text-4xl text-zinc-800 mt-20`}>
              Solution
            </h2>
            <p className="max-w-prose leading-6 pt-8 text-xl font-bold border-b-brand border-b-2 w-fit pb-2 pr-8">
              Managed Security for Financial Institutions
            </p>
            <p className="max-w-prose leading-6 pt-8">
              Every bank and financial institution across the country has
              security and auditing concerns, our client was no different. They
              needed a way to increase their cyber security, while continuing to
              remain compliant with FDIC standards along with passing their
              annual audits.
            </p>
            <p className="max-w-prose leading-6 pt-8">
              By moving to CompleteCloud, the only completely private and secure
              by design platform in the industry, they were able to increase
              security with:
            </p>
            <ul className="leading-6 pt-8 flex flex-col xl:grid grid-cols-2 gap-4 text-sm">
              <li className="pl-4 border-l-8 border-l-brand bg-white flex items-center py-2">
                All of the bank&apos;s data was moved to secure Data Centers in
                St. Louis, which provides 24x7 security guards, video
                surveillance, and restricted biometric access
              </li>
              <li className="pl-4 border-l-8 border-l-brand bg-white flex items-center py-2">
                Multi-Factor Authentication for mobile users
              </li>
              <li className="pl-4 border-l-8 border-l-brand bg-white flex items-center py-2">
                Anti-malware for both server and workstations
              </li>
              <li className="pl-4 border-l-8 border-l-brand bg-white flex items-center py-2">
                Active security with host based intrusion detection, periodic
                internal and external vulnerability scans, and real-time log
                review and retention for compliance reports
              </li>
              <li className="pl-4 border-l-8 border-l-brand bg-white flex items-center py-2">
                DNS filtering for malware and content filtering for general
                corporate purposes
              </li>
              <li className="pl-4 border-l-8 border-l-brand bg-white flex items-center py-2">
                Encrypted email and file sharing
              </li>
            </ul>
          </section>
          <section>
            <h2 className={`${tenor.className} text-4xl text-zinc-800 mt-20`}>
              Results
            </h2>
            <p className="max-w-prose leading-6 py-8 text-xl font-bold pb-2 pr-8 border-b-2 border-b-brand w-fit mb-8">
              Improving Productivity. Increasing Efficiency.
            </p>
            <div className="flex flex-col gap-4 xl:grid grid-cols-2 mb-20">
              <div className="bg-white p-4 max-w-prose rounded-lg">
                <p className="pb-2 mb-4 border-b-2 border-b-brand">
                  Enhanced Compliance Reporting
                </p>
                <p className="text-sm leading-6 text-zinc-900">
                  Because of CompleteCloud, the bank was more confident than
                  ever in meeting their compliance standards. Now, the bank
                  could pull reports that provide increased visibility into
                  their infrastructure, enabling them to provide greater
                  reporting capabilities than their previous IT environment.
                  These reports cover everything from app infrastructure, to
                  security overviews, or any changes made to user profiles.
                </p>
              </div>
              <div className="bg-white p-4 max-w-prose rounded-lg">
                <p className="pb-2 mb-4 border-b-2 border-b-brand">
                  Revolutionized Disaster Recovery
                </p>
                <p className="text-sm leading-6 text-zinc-900">
                  Each year, the bank ran a disaster recovery scenario that
                  consisted of physically uploading data to offsite servers.
                  These tests were ran to ensure they were well prepared if
                  anything ever happened to their building or data. With their
                  data now housed on servers located in remote data centers,
                  they simply have to log in at another location or on their
                  secure mobile connection if disaster ever strikes.
                </p>
              </div>
              <div className="bg-white p-4 max-w-prose rounded-lg">
                <p className="pb-2 mb-4 border-b-2 border-b-brand">
                  Ease of Integration with Hardware and Software
                </p>
                <p className="text-sm leading-6 text-zinc-900">
                  By moving to CompleteCloud, the bank was able to replace all
                  of their outdated hardware with new Windows virtual desktops.
                  With hardware updated and data moved into their own private
                  cloud environment, system capability and integration with Jack
                  Henry, Calyx, LaserPro, and DepositPro work flawlessly.
                </p>
              </div>
              <div className="bg-white p-4 max-w-prose rounded-lg">
                <p className="pb-2 mb-4 border-b-2 border-b-brand">
                  Complete and Secure Mobility
                </p>
                <p className="text-sm leading-6 text-zinc-900">
                  On their previous system, the bank was unable to securely work
                  off site and still meet compliance standards. Now that their
                  data is no longer residing locally, users have the ability to
                  work from home with no degradation in performance, while still
                  meeting compliance standards because of Multi-Factor
                  Authentication. CompleteCloud&apos;s mobility set the entire
                  organization up for a successful transition to work from home
                  during the COVID-19 crisis of 2020.
                </p>
              </div>
              <div className="bg-white p-4 max-w-prose rounded-lg">
                <p className="pb-2 mb-4 border-b-2 border-b-brand">
                  24x7 Support and System Transparency
                </p>
                <p className="text-sm leading-6 text-zinc-900">
                  Before CompleteCloud, the bank was splitting two of their
                  employees&apos; time to handle the IT support of their 60
                  employees. When the bank made the switch to CompleteCloud they
                  upgraded to our 24x7 US-based Support. They average about 17
                  calls a month to our support team with 80% of those calls
                  being answered in under a minute and 90% of those cases being
                  resolved within 10 minutes.
                </p>
                <p className="text-sm leading-6 text-zinc-900">
                  With Avatara&apos;s Customer Portal they get complete
                  transparency into how well their users are being supported.
                  They can see information such as: how many support tickets are
                  submitted, progress on current projects and new orders, and
                  call data.
                </p>
              </div>
              <div className="bg-white p-4 max-w-prose rounded-lg">
                <p className="pb-2 mb-4 border-b-2 border-b-brand">
                  Improved Connectivity
                </p>
                <p className="text-sm leading-6 text-zinc-900">
                  With the bank&apos;s data centralized in their private cloud
                  environment it took their three independent locations and made
                  them function and work as fluidly as one single location. To
                  enhance their performance and productivity even further,
                  Avatara upgraded their main site to a direct fiber connection
                  and took over managing and paying for their internet bill.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
