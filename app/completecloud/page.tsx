import { Tenor_Sans } from "next/font/google";

const tenor = Tenor_Sans({ weight: "400", subsets: ["latin"] });

export default function CompleteCloud() {
  return (
    <section className="min-h-[calc(100vh-var(--navbar-height))] h-full pt-[--navbar-height] px-4 flex flex-col bg-zinc-200 text-black">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="mb-20">CompleteCloud</h1>
        <div className="flex flex-col">
          <h2 className={`${tenor.className} text-4xl text-zinc-800`}>
            A Solution for Everyone
          </h2>
        </div>
      </div>
    </section>
  );
}
