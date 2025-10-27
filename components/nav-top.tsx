"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
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

          {/* Search - hidden on mobile */}
          <div className="hidden md:flex col-span-3 justify-end">
            <SearchInput />
          </div>
          {/* Empty spacer for mobile grid */}
          <div className="md:hidden col-span-2" />
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

      {/* Mobile menu - Full screen */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background lg:hidden">
          <div className="flex h-full flex-col">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-(--color-border) px-4 py-4">
              <h2 className="text-lg font-medium">Menu</h2>
              <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Menu Content */}
            <nav className="flex-1 overflow-y-auto px-4 py-4">
              {/* Search - shown at top of mobile menu */}
              <div className="mb-6">
                <SearchInput variant="mobile" />
              </div>

              <ul className="space-y-1">
                <li>
                  <Link
                    href="#"
                    className="flex items-center justify-between py-3 px-3 rounded-md text-sm text-brand-ink/70 hover:bg-secondary hover:text-brand-ink transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>Our Services</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </li>
                {categories.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="flex items-center justify-between py-3 px-3 rounded-md text-sm text-brand-ink/70 hover:bg-secondary hover:text-brand-ink transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span>{item}</span>
                      <ChevronRight className="h-4 w-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
