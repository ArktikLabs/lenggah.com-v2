"use client"

import { Search } from "lucide-react"

export function SearchInput() {
  return (
    <form className="relative w-44 md:w-64">
      <label htmlFor="site-search" className="sr-only">
        Search
      </label>
      <input
        id="site-search"
        placeholder="Search"
        className="w-full rounded-md bg-secondary px-4 py-2 pr-10 text-sm text-brand-ink/80 placeholder:text-brand-ink/40 outline-none ring-1 ring-[color:var(--color-border)]"
      />
      <Search className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-ink/40" />
    </form>
  )
}
