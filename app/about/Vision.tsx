import { FaCheckCircle } from "react-icons/fa";

export const Vision = () => {
  return (
    <section className="grid grid-cols-2 grid-rows-2 gap-2 place-content-center my-8">
      <div className="py-8 bg-white px-4 ">
        <p>Vision</p>
        <p className="text-2xl font-semibold py-8 text-center">
          A place where ingenuity and innovation is analyzed in every solution.
        </p>
      </div>
      <div className="py-8 bg-white px-4">
        <p>Mission</p>
        <p className="text-2xl font-semibold py-8 text-center">
          Promote ingenuity and innovation in every product, service, and
          solution.
        </p>
      </div>
      <div className="col-span-2 py-8 bg-white px-4 relative">
        <div className="absolute left-[50%] top-0 bg-white border-8 border-zinc-200 h-8 w-8 -translate-x-[50%] -translate-y-[calc(50%+4px)] rotate-45"></div>
        <p>Core Values</p>
        <ul className="flex flex-wrap gap-4 justify-between items-center h-full">
          <li className="text-xl py-2 border-b-2 border-b-red-700">
            Accountable
          </li>
          <li className="text-xl py-2 border-b-2 border-b-red-700">Ethical</li>
          <li className="text-xl py-2 border-b-2 border-b-red-700">Flexible</li>
          <li className="text-xl py-2 border-b-2 border-b-red-700">
            Integrity
          </li>
          <li className="text-xl py-2 border-b-2 border-b-red-700">
            Innovative
          </li>
        </ul>
      </div>
      <div className="flex flex-col max-w-prose bg-white p-4">
        <p>Guiding Principles</p>
        <div>
          <ul>
            <li>
              <p className="flex items-center gap-2 py-4">
                <FaCheckCircle className="text-2xl text-green-600" />
                <span className="font-bold">Own The Outcome</span>
              </p>
              <p>
                Our staff takes responsibility for achieving cus- tomer goals
                regardless of circumstances. Our reporting relationships and
                responsibilities are clear; we have oversight procecures in
                place to ensure follow-through at all levels.
              </p>
            </li>
            <li>
              <p className="flex items-center gap-2 py-4">
                <FaCheckCircle className="text-2xl text-green-600" />
                <span className="font-bold">Drive To Certainty</span>
              </p>
              <p>
                Disciplined planning: concise, complete com- munications to
                eliminate confusion; and follow up to ensure actions are
                understood and completed on time. Olokun employees focus on
                making sure everything they can control to complete a task gets
                done correctly, on time, and on budget.
              </p>
            </li>
            <li>
              <p className="flex items-center gap-2 py-4">
                <FaCheckCircle className="text-2xl text-green-600" />
                <span className="font-bold">Manage Risk</span>
              </p>
              <p>
                Every task has elements that can&apos;t be driven to certainty.
                To manage uncertainty our staff engages in ongoing programs or
                project risk management at all levels.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col max-w-prose bg-white p-4">
        <p>Attributes That Set Us Apart</p>
        <div>
          <ul>
            <li>
              <p className="flex items-center gap-2 py-4">
                <FaCheckCircle className="text-2xl text-green-600" />
                <span className="font-bold">Efficiency</span>
              </p>
              <p>
                Olokun operates with highly qualified person- nel filling key
                positions. Our professional team has the requisite experience,
                formal education, and technical skills to elevate our
                customer&apos;s projects to a winning level.
              </p>
            </li>
            <li>
              <p className="flex items-center gap-2 py-4">
                <FaCheckCircle className="text-2xl text-green-600" />
                <span className="font-bold">Affordability</span>
              </p>
              <p>
                We deliver well-qualified personnel and facili- ties at highly
                competitive rates.
              </p>
            </li>
            <li>
              <p className="flex items-center gap-2 py-4">
                <FaCheckCircle className="text-2xl text-green-600" />
                <span className="font-bold">Support</span>
              </p>
              <p>
                We support organizations who are commited to the success of
                government and private industry contracts. Olokun is committed
                to maximizing your success while minimizing your stress.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
