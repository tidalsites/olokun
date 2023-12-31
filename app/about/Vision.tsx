import { FaCheckCircle } from "react-icons/fa";

export const Vision = () => {
  return (
    <section className="grid grid-cols-2 grid-rows-[auto auto auto 1fr 1fr 1fr] gap-2 place-content-center my-8">
      <div className="py-8 bg-white px-4 col-span-2 md:col-span-1">
        <p>Vision</p>
        <p className="text-2xl font-semibold py-8 md:text-center">
          A place where ingenuity and innovation is analyzed in every solution.
        </p>
      </div>
      <div className="py-8 bg-white px-4 col-span-2 md:col-span-1">
        <p>Mission</p>
        <p className="text-2xl font-semibold py-8 md:text-center">
          Promote ingenuity and innovation in every product, service, and
          solution.
        </p>
      </div>
      <div className="col-span-2 py-8 bg-white px-4 relative">
        <div className="absolute left-[50%] top-0 bg-white border-8 border-zinc-200 h-8 w-8 -translate-x-[50%] -translate-y-[calc(50%+4px)] rotate-45"></div>
        <p>Core Values</p>
        <ul className="flex flex-wrap gap-4 md:justify-between items-center h-full">
          <li className="text-xl py-2 border-b-2 border-b-brand">
            Accountable
          </li>
          <li className="text-xl py-2 border-b-2 border-b-brand">Ethical</li>
          <li className="text-xl py-2 border-b-2 border-b-brand">Flexible</li>
          <li className="text-xl py-2 border-b-2 border-b-brand">Integrity</li>
          <li className="text-xl py-2 border-b-2 border-b-brand">Innovative</li>
        </ul>
      </div>
      <div className="grid max-w-prose bg-white p-4 col-span-2 md:col-span-1 grid-rows-[subgrid] row-span-4">
        <p>Guiding Principles</p>
        <ul className="row-span-3 grid grid-rows-[subgrid]">
          <li>
            <p className="flex items-center gap-2 py-4">
              <FaCheckCircle className="text-2xl text-brand" />
              <span className="font-bold">Own The Outcome</span>
            </p>
            <p>
              Our staff takes responsibility for achieving customer goals
              regardless of circumstances. Our reporting relationships and
              responsibilities are clear; we have oversight procecures in place
              to ensure follow-through at all levels.
            </p>
          </li>
          <li>
            <p className="flex items-center gap-2 py-4">
              <FaCheckCircle className="text-2xl text-brand" />
              <span className="font-bold">Drive To Certainty</span>
            </p>
            <p>
              Disciplined planning: concise, complete communications to
              eliminate confusion; and follow up to ensure actions are
              understood and completed on time. Olokun employees focus on making
              sure everything they can control to complete a task gets done
              correctly, on time, and on budget.
            </p>
          </li>
          <li>
            <p className="flex items-center gap-2 py-4">
              <FaCheckCircle className="text-2xl text-brand" />
              <span className="font-bold">Manage Risk</span>
            </p>
            <p>
              Every task has elements that can&apos;t be driven to certainty. To
              manage uncertainty our staff engages in ongoing programs or
              project risk management at all levels.
            </p>
          </li>
        </ul>
      </div>
      <div className="grid max-w-prose bg-white p-4 col-span-2 md:col-span-1 grid-rows-[subgrid] row-span-4">
        <p>Attributes That Set Us Apart</p>
        <ul className="row-span-3 grid grid-rows-[subgrid]">
          <li>
            <p className="flex items-center gap-2 py-4">
              <FaCheckCircle className="text-2xl text-brand" />
              <span className="font-bold">Efficiency</span>
            </p>
            <p>
              Olokun operates with highly qualified personnel filling key
              positions. Our professional team has the requisite experience,
              formal education, and technical skills to elevate our
              customer&apos;s projects to a winning level.
            </p>
          </li>
          <li>
            <p className="flex items-center gap-2 py-4">
              <FaCheckCircle className="text-2xl text-brand" />
              <span className="font-bold">Affordability</span>
            </p>
            <p>
              We deliver well-qualified personnel and facilities at highly
              competitive rates.
            </p>
          </li>
          <li>
            <p className="flex items-center gap-2 py-4">
              <FaCheckCircle className="text-2xl text-brand" />
              <span className="font-bold">Support</span>
            </p>
            <p>
              We support organizations who are commited to the success of
              government and private industry contracts. Olokun is committed to
              maximizing your success while minimizing your stress.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
