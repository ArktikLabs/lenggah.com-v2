"use client"

import { Search } from "lucide-react"

interface SearchInputProps {
  variant?: "default" | "mobile";
}

export function SearchInput({ variant = "default" }: SearchInputProps) {
  const isMobile = variant === "mobile";

  return (
    <form className={isMobile ? "relative w-full" : "relative w-44 md:w-64"}>
      <label htmlFor="site-search" className="sr-only">
        Search
      </label>
      <input
        id="site-search"
        placeholder="Search"
        className={
          isMobile
            ? "w-full bg-transparent border-none px-3 py-3 pr-10 text-sm text-brand-ink/70 placeholder:text-brand-ink/40 outline-none focus:outline-none"
            : "w-full rounded-md bg-secondary px-4 py-2 pr-10 text-sm text-brand-ink/80 placeholder:text-brand-ink/40 outline-none ring-1 ring-(--color-border)"
        }
      />
      <Search className={isMobile ? "pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-ink/40" : "pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-ink/40"} />
    </form>
  );
}
