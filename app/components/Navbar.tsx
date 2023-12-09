"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Link from "next/link";
import logoLight from "@/public/logo-light.svg";
import logo from "@/public/logo.svg";
import Image from "next/image";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      className="bg-transparent text-white absolute top-0 py-4"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="py-4">
          <Link href="/" className="py-4">
            <Image src={logo} alt="Olokun LLC" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4 items-center h-full"
        justify="center"
      >
        <NavbarItem>
          <Link href="/">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about">About</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/capabilities">Capabilities</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/work">Our Work</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contact">Contact</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-neutral-200 text-black">
        <NavbarMenuItem>
          <Link className="w-full" href="/">
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" href="/about">
            About
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" href="/capabilities">
            Capabilities
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" href="/completecloud">
            CompleteCloud
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" href="work">
            Our Work
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" href="/contact">
            Contact
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
