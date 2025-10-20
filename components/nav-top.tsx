"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { BrandLogo } from "./brand-logo";

export function NavTop() {
  return (
    <header className="w-full border-b border-[color:var(--color-border)] bg-brand-sand">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="#"
            className="text-sm md:text-base text-brand-ink/70 hover:opacity-80"
          >
            Our Services
          </Link>
          <BrandLogo />
          <form className="relative w-44 md:w-64">
            <label htmlFor="site-search" className="sr-only">
              Search
            </label>
            <input
              id="site-search"
              placeholder="Search"
              className="w-full rounded-full bg-secondary px-4 py-2 pr-10 text-sm text-brand-ink/80 placeholder:text-brand-ink/40 outline-none ring-1 ring-[color:var(--color-border)]"
            />
            <Search className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-ink/40" />
          </form>
        </div>
      </div>
      {/* category strip */}
      <nav
        aria-label="Categories"
        className="border-t border-[color:var(--color-border)] bg-secondary"
      >
        <div className="mx-auto max-w-6xl px-4">
          <ul className="flex h-12 items-center justify-between text-sm md:text-base text-brand-ink/70">
            {[
              "Latest",
              "Our Signatures",
              "Chairs",
              "Sofas",
              "Puffs & Stools",
              "Accessories",
              "Create From the Scratch",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-brand-ink hover:underline underline-offset-4"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
