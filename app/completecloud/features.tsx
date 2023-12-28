import Image from "next/image";
import {
  PiCircuitryFill,
  PiCloudFill,
  PiComputerTowerFill,
  PiHardDrivesFill,
  PiHeadsetFill,
  PiLineSegmentsFill,
  PiPlugsConnectedBold,
  PiShieldCheckFill,
  PiUserSwitchFill,
} from "react-icons/pi";

import avatara from "@/public/avatara.png";

export const Features = () => {
  return (
    <div className="mb-20 grid gap-2 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-8">
      <div className="grid lg:grid-cols-[auto,1fr] gap-2 text-sm p-2 w-fit rounded isolate bg-white">
        <span className="flex h-fit w-fit justify-center row-span-2">
          <PiHardDrivesFill className="text-brand text-6xl" />
        </span>
        <div className="flex flex-col gap-2">
          <span className="font-semibold">Servers & Unlimited Storage</span>
          <p className="max-w-[30ch]">
            Business/active directory, dedicated email exchange, file and app
            servers, private voice PBX, and infrastructure licensing
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-[auto,1fr] gap-2 text-sm p-2 w-fit rounded isolate bg-white">
        <span className="flex h-fit w-fit justify-center row-span-2">
          <PiCloudFill className="text-brand text-6xl" />
        </span>
        <div className="flex flex-col gap-2">
          <span className="font-semibold">Cloud Desktops</span>
          <p className="max-w-[30ch]">
            Dedicated Windows 10 cloud desktops include Microsoft Office
            licensing and 6 different specification options for varying employee
            needs
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-[auto,1fr] gap-2 text-sm p-2 w-fit rounded isolate bg-white">
        <span className="flex h-fit w-fit justify-center row-span-2">
          <PiPlugsConnectedBold className="text-brand text-6xl" />
        </span>
        <div className="flex flex-col gap-2">
          <span className="font-semibold">Connectivity</span>
          <p className="max-w-[30ch]">
            Fully managed and paid redundant data center internet and local site
            internet
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-[auto,1fr] gap-2 text-sm p-2 w-fit rounded isolate bg-white">
        <span className="flex h-fit w-fit justify-center row-span-2">
          <PiComputerTowerFill className="text-brand text-6xl" />
        </span>
        <div className="flex flex-col gap-2">
          <span className="font-semibold">Local Hardware</span>
          <p className="max-w-[30ch]">
            Complete site hardware refresh includes firewalls, managed POE
            switches, wireless access points, Windows 10 thin clients, and
            phones
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-[auto,1fr] gap-2 text-sm p-2 w-fit rounded isolate bg-white">
        <span className="flex h-fit w-fit justify-center row-span-2">
          <PiShieldCheckFill className="text-brand text-6xl" />
        </span>
        <div className="flex flex-col gap-2">
          <span className="font-semibold">Managed Security</span>
          <p className="max-w-[30ch]">
            An ever-evolving layered approach to security that meets industry
            compliance standards including 24/7 security operations center and
            Data Loss Protections (DLP) consultation
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-[auto,1fr] gap-2 text-sm p-2 w-fit rounded isolate bg-white">
        <span className="flex h-fit w-fit justify-center row-span-2">
          <PiCircuitryFill className="text-brand text-6xl" />
        </span>
        <div className="flex flex-col gap-2">
          <span className="font-semibold">Artificial Intelligence</span>
          <p className="max-w-[30ch]">
            Ava, our proprietary self-healing Artificial Intelligence, offers
            automated proactive support, pre-support engagement diagnostics,
            anomaly monitoring, and user productivity tips
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-[auto,1fr] gap-2 text-sm p-2 w-fit rounded isolate bg-white">
        <span className="flex h-fit w-fit justify-center row-span-2">
          <PiHeadsetFill className="text-brand text-6xl" />
        </span>
        <div className="flex flex-col gap-2">
          <span className="font-semibold">Support</span>
          <p className="max-w-[30ch]">
            Team of US-based experts available 24/7 via phone, text, or chat
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-[auto,1fr] gap-2 text-sm p-2 w-fit rounded isolate bg-white">
        <span className="flex h-fit w-fit justify-center row-span-2">
          <PiUserSwitchFill className="text-brand text-6xl" />
        </span>
        <div className="flex flex-col gap-2">
          <span className="font-semibold">Customer Portal</span>
          <p className="max-w-[30ch]">
            Track cases, orders, and projects; change management and resource
            manager; billing detail; customer satisfaction surveys; security
            risk metrics; user productivity metrics
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-[auto,1fr] gap-2 text-sm p-2 w-fit rounded isolate bg-white">
        <span className="flex h-fit w-fit justify-center row-span-2">
          <PiLineSegmentsFill className="text-brand text-6xl" />
        </span>
        <div className="flex flex-col gap-2">
          <span className="font-semibold">Productivity Suite</span>
          <p className="max-w-[30ch]">
            Email archive, secure file sharing, collaboration tools, and unified
            communications including video conferencing, soft phone, and chat
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-[auto,1fr] gap-2 text-sm p-2 w-fit rounded isolate bg-white">
        <span className="flex h-fit w-fit justify-center row-span-2">
          <Image src={avatara} alt="Avatara" height="60" width="60" />
        </span>
        <div className="flex flex-col gap-2">
          <span className="font-semibold">Avatara Connect</span>
          <p className="max-w-[30ch]">
            Anywhere access to cloud desktop, soft phone, video, chat, remote
            files, and SSO web apps; custom dashboard reporting at a glance
          </p>
        </div>
      </div>
    </div>
  );
};
