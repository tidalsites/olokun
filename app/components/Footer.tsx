import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex flex-wrap pt-4 border-t-white border-t-2 justify-between px-4">
      <section className="py-4">
        <p className="text-lg border-b-2 border-b-white w-fit">Links</p>
        <nav
          aria-label="Footer Navigation"
          className="flex flex-col gap-4 mt-8"
        >
          <Link className="underline" href="/">
            Home
          </Link>
          <Link className="underline" href="/about">
            About
          </Link>
          <Link className="underline" href="/capabilities">
            Capabilities
          </Link>
          <Link className="underline" href="/work">
            Our Work
          </Link>
          <Link className="underline" href="/completecloud">
            CompleteCloud
          </Link>
          <Link className="underline" href="/contact">
            Contact
          </Link>
        </nav>
      </section>
      <section>
        <p>Contact Us</p>
      </section>
      <div className="text-sm py-2 border-t-[1px] border-t-white text-center w-full">
        &copy; 2023 Olokun LLC. All Rights Reserved
      </div>
    </footer>
  );
};
