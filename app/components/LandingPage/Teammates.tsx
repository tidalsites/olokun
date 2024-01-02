import Image from "next/image";

import avmac from "@/public/teammates/avmac.png";
import avatara from "@/public/avatara.png";
import lce from "@/public/teammates/lce.png";
import saria from "@/public/teammates/saria.png";
import vtg from "@/public/teammates/vtg.png";
import navsup from "@/public/teammates/navsup.png";
import imazing from "@/public/teammates/imazing.png";
import qed from "@/public/teammates/qed.png";
import navair from "@/public/teammates/navair.png";
import commandernavair from "@/public/teammates/commandernavair.png";
import seaside from "@/public/teammates/seasidestaffing.png";
import lpi from "@/public/teammates/lpi.jpeg";
import msc from "@/public/teammates/msc.png";
import navsea from "@/public/teammates/navsea.png";
import kdshipyard from "@/public/teammates/kdshipyard.webp";

export const Teammates = () => {
  return (
    <section className="bg-zinc-200 text-zinc-800 text-center py-20 border-b-2 border-b-black border-t-2 border-t-black px-8">
      <h2 className="text-2xl mb-8">Our Teammates</h2>
      <p className="max-w-prose mx-auto mb-20">
        Olokun believes strong partnerships and customer relationships are key
        to providing outstanding performance and quality services. Our industry
        partners and customers are listed as teammates below:
      </p>
      <div className="grid grid-cols-auto gap-8">
        <div className="bg-zinc-300 p-8 rounded-lg grid place-content-center">
          <Image src={avmac} alt="Avmac LLC" className="max-h-16 w-auto" />
        </div>
        <div className="bg-zinc-300 p-8 rounded-lg grid place-content-center">
          <Image src={avatara} alt="Avatara" className="max-h-16 w-auto" />
        </div>
        <div className="bg-zinc-300 p-8 rounded-lg grid place-content-center">
          <Image
            src={lce}
            alt="Life Cycle Engineering"
            className="max-h-16 w-auto"
          />
        </div>
        <div className="bg-zinc-300 p-8 rounded-lg grid place-content-center">
          <Image src={saria} alt="kSaria" className="max-h-16 w-auto" />
        </div>
        <div className="bg-zinc-300 p-8 rounded-lg grid place-content-center">
          <Image src={vtg} alt="VTG" className="max-h-16 w-auto" />
        </div>
        <div className="bg-zinc-300 p-8 rounded-lg grid place-content-center">
          <Image
            src={imazing}
            alt="I-Mazing Solutions"
            className="max-h-16 w-auto"
          />
        </div>
        <div className="bg-zinc-300 p-8 rounded-lg grid place-content-center">
          <Image src={navsup} alt="Navsup" className="max-h-16 w-auto" />
        </div>
        <div className="bg-zinc-300 p-8 rounded-lg grid place-content-center">
          <Image src={qed} alt="QED Systems, Inc" className="max-h-16 w-auto" />
        </div>
        <div className="bg-zinc-300 p-8 rounded-lg grid place-content-center">
          <Image
            src={seaside}
            alt="Seaside Staffing"
            className="max-h-16 w-auto"
          />
        </div>
        <div className="bg-zinc-300 p-8 rounded-lg grid place-content-center">
          <Image
            src={navair}
            alt="Naval Air Systems Command"
            className="max-h-16 w-auto"
          />
        </div>
        <div className="bg-zinc-300 p-8 rounded-lg grid place-content-center">
          <Image
            src={commandernavair}
            alt="Commander Naval Air Forces"
            className="max-h-16 w-auto"
          />
        </div>
        <div className="bg-zinc-300 p-8 rounded-lg grid place-content-center">
          <Image
            src={msc}
            alt="Military Sealift Command"
            className="max-h-16 w-auto"
          />
        </div>
        <div className="bg-zinc-300 p-8 rounded-lg grid place-content-center">
          <Image src={navsea} alt="Navsea" className="max-h-16 w-auto" />
        </div>
        <div className="bg-zinc-300 p-8 rounded-lg grid place-content-center">
          <Image
            src={lpi}
            alt="LPI Technical Services"
            className="max-h-16 w-auto"
          />
        </div>
        <div className="bg-zinc-300 p-8 rounded-lg grid place-content-center">
          <Image
            src={kdshipyard}
            alt="KD Shipyard Repairs, LLC"
            className="max-h-full w-auto"
          />
        </div>
      </div>
    </section>
  );
};
