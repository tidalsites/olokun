import { Tenor_Sans } from "next/font/google";
const tenor = Tenor_Sans({ weight: "400", subsets: ["latin"] });

export default function Work() {
  return (
    <section className="min-h-[calc(100vh-var(--navbar-height))] h-full pt-[--navbar-height] px-4 flex flex-col bg-zinc-200 text-black">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="mb-20">Our Work</h1>
        <div className="flex flex-col">
          <h2 className={`${tenor.className} text-4xl text-zinc-800`}>
            Discover the Olokun Difference
          </h2>
          <p className="max-w-prose leading-6 py-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis cum
            rem, enim saepe, inventore accusantium accusamus harum, quis animi
            qui perferendis quae similique quos? Magni, at non voluptates autem
            repudiandae cum consequatur enim culpa quod esse ad fuga, natus,
            rerum quibusdam laboriosam atque expedita eos saepe recusandae
            perspiciatis sequi earum accusantium quos. Ratione, provident
            repellendus.
          </p>
        </div>
      </div>
    </section>
  );
}
