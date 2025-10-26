"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "./brand-logo";
import { SearchInput } from "./search-input";
import { Button } from "./ui/button";
import { CATEGORIES } from "@/data/constants";

export function NavTop() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [...CATEGORIES, "Create From the Scratch"];

  return (
    <header className="w-full border-b border-(--color-border) bg-brand-sand">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-12 gap-4 h-16 md:h-20 items-center">
          {/* Burger menu button - visible on mobile only */}
          <div className="col-span-2 md:col-span-3 flex items-center">
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            <Link
              href="#"
              className="hidden lg:block text-sm lg:text-base text-brand-ink/70 hover:opacity-80 whitespace-nowrap"
            >
              Our Services
            </Link>
          </div>

          {/* Logo */}
          <div className="col-span-8 md:col-span-6 flex justify-center">
            <BrandLogo />
          </div>

          {/* Search */}
          <div className="col-span-2 md:col-span-3 flex justify-end">
            <SearchInput />
          </div>
        </div>
      </div>

      {/* Desktop category strip */}
      <nav
        aria-label="Categories"
        className="hidden lg:block border-t border-(--color-border) bg-secondary"
      >
        <div className="mx-auto max-w-7xl px-4">
          <ul className="flex h-12 items-center justify-between text-sm text-brand-ink/70">
            {categories.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-brand-ink hover:underline underline-offset-4 whitespace-nowrap"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-(--color-border) bg-secondary">
          <nav className="mx-auto max-w-7xl px-4 py-4">
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="block text-base text-brand-ink/70 hover:text-brand-ink"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Services
                </Link>
              </li>
              {categories.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="block text-base text-brand-ink/70 hover:text-brand-ink"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
