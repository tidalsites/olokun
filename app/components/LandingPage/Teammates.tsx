import avmac from "@/public/teammates/avmac.png";
import Image from "next/image";

export const Teammates = () => {
  return (
    <section className="bg-zinc-200 text-zinc-800 text-center py-20 border-b-2 border-b-black border-t-2 border-t-black px-8">
      <h2 className="text-2xl mb-8">Our Teammates</h2>
      <p className="max-w-prose mx-auto mb-20">
        We are proud to be a part of a diverse and talented team ecosystem. Here
        is a list of some of the teammates that we have had the privilege of
        working with.
      </p>
      <div className="grid grid-cols-auto gap-8 max-w-7xl mx-auto">
        <div className="bg-zinc-300 p-8 rounded-lg">
          <Image src={avmac} alt="Avmac LLC" />
        </div>
        <div className="bg-zinc-300 p-8 rounded-lg">
          <Image src={avmac} alt="Avmac LLC" />
        </div>
        <div className="bg-zinc-300 p-8 rounded-lg">
          <Image src={avmac} alt="Avmac LLC" />
        </div>
        <div className="bg-zinc-300 p-8 rounded-lg">
          <Image src={avmac} alt="Avmac LLC" />
        </div>
        <div className="bg-zinc-300 p-8 rounded-lg">
          <Image src={avmac} alt="Avmac LLC" />
        </div>
        <div className="bg-zinc-300 p-8 rounded-lg">
          <Image src={avmac} alt="Avmac LLC" />
        </div>
      </div>
    </section>
  );
};
