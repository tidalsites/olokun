"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import logo from "@/public/logo.svg";
import Image from "next/image";

import { PiListBold, PiXBold } from "react-icons/pi";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const updateMenuState = () => {
    return setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="h-[--navbar-height]">
      <nav
        className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4"
        aria-label="Primary Navigation"
      >
        <button
          onClick={() => {
            updateMenuState();
          }}
          aria-controls="mobile-nav"
          aria-label="Mobile Menu Toggle"
        >
          {isMenuOpen ? (
            <PiXBold className="text-zinc-200 text-4xl w-fit px-4 md:hidden" />
          ) : (
            <PiListBold className="text-zinc-200 text-4xl w-fit px-4 md:hidden" />
          )}
        </button>

        <div className="h-full flex items-center grow">
          <Image src={logo} alt="Olokun LLC" className="h-full w-auto" />
        </div>
        <div className="hidden md:flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/capabilities">Capabilities</Link>
          <Link href="/work">Our Work</Link>
          <Link href="/completecloud" className="hidden lg:block">
            CompleteCloud
          </Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
      <nav
        className={`absolute h-[calc(100vh-var(--navbar-height))] top-[--navbar-height] left-0 z-30 bg-black/20 backdrop-blur-sm w-screen md:hidden transition-all ${
          !isMenuOpen ? "-translate-x-full" : "translate-x-0"
        }`}
        onClick={(e) => {
          const target = e.target as EventTarget & HTMLElement;
          if (target.nodeName === "NAV") setIsMenuOpen(false);
        }}
        id="mobile-nav"
        aria-label="Mobile Navigation"
      >
        <div className="w-[min(100vw,400px)] flex flex-col gap-4 p-7 bg-zinc-200 text-black h-full">
          <Link onClick={() => setIsMenuOpen(false)} href="/">
            Home
          </Link>
          <Link onClick={() => setIsMenuOpen(false)} href="/about">
            About
          </Link>
          <Link onClick={() => setIsMenuOpen(false)} href="/capabilities">
            Capabilities
          </Link>
          <Link onClick={() => setIsMenuOpen(false)} href="/work">
            Our Work
          </Link>
          <Link onClick={() => setIsMenuOpen(false)} href="/completecloud">
            CompleteCloud
          </Link>
          <Link onClick={() => setIsMenuOpen(false)} href="/contact">
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}
