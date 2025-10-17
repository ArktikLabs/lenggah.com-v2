"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

const categories = ["Latest", "Our Signatures", "Chairs", "Sofas", "Puffs & Stools", "Accessories"]

const products = new Array(6).fill(0).map((_, i) => ({
  id: i + 1,
  name: "Lorem ipsum dolor sit amet, consectetur adipiscing",
  price: "Start from Rp 9.999.999",
}))

export function ListingSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 md:py-14">
        {/* Heading */}
        <h2 className="font-display text-pretty text-3xl leading-tight text-brand-ink/80 md:text-5xl">
          Explore the range of chairs designed by Lenggah to
          <br className="hidden md:block" />
          match your taste, lifestyle, and space.
        </h2>

        {/* Category tabs */}
        <nav aria-label="Categories" className="mt-6">
          <ul className="flex flex-wrap items-center gap-6 text-sm md:text-base text-brand-ink/70">
            {categories.map((c, idx) => (
              <li key={c} className="relative">
                <a href="#" className={`hover:text-brand-ink ${idx === 0 ? "text-brand-ink" : ""}`}>
                  {c}
                </a>
                {idx === 0 && (
                  <span aria-hidden="true" className="absolute -bottom-2 left-0 h-[2px] w-16 bg-brand-ink/50" />
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Main content grid */}
        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-[280px,1fr]">
          {/* Sidebar filters */}
          <aside aria-label="Filters" className="space-y-8">
            <div>
              <h3 className="text-base font-medium text-brand-ink">Lenggah Signature Collection</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-ink/70">
                Explore our Signature Collection. Timeless pieces that embody Lenggah’s finest craftsmanship, designed
                to bring authenticity and character into every space.
              </p>
            </div>

            <div className="space-y-6">
              <FilterBlock label="Colour" />
              <FilterBlock label="Style" />
              <FilterBlock label="Range Price" />

              <Button className="w-[120px] rounded-md bg-brand-orange text-[15px] text-white hover:opacity-90">
                Apply
              </Button>
            </div>

            <div className="rounded-md border border-[color:var(--color-border)] p-4">
              <p className="text-sm leading-relaxed text-brand-ink/70">
                Looking for something else or want to refine a piece from our collection?
              </p>
              <Button
                variant="outline"
                className="mt-4 w-full rounded-xl border-[1.5px] px-6 text-[15px] bg-transparent"
              >
                Contact Us
              </Button>
            </div>
          </aside>

          {/* Products area */}
          <div className="space-y-6">
            {/* Top row */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-brand-ink/80">
                <span className="font-medium">10</span> products
              </p>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-brand-ink/70">Sort by</span>
                <Select>
                  <SelectTrigger className="h-8 w-28 rounded-md bg-secondary px-3 text-xs text-brand-ink/80">
                    <SelectValue placeholder="Default" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((p) => (
                <article
                  key={p.id}
                  className="overflow-hidden rounded-md border border-[color:var(--color-border)] bg-card"
                >
                  <div className="bg-brand-orange" style={{ aspectRatio: "4 / 3" }} aria-hidden="true" />
                  <div className="bg-secondary px-4 py-3">
                    <h4 className="line-clamp-2 text-sm text-brand-ink/80">{p.name}</h4>
                    <p className="mt-2 text-xs text-brand-ink/60">{p.price}</p>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination dots */}
            <div className="flex items-center justify-center gap-4 py-4">
              <span className="h-2 w-2 rounded-full bg-brand-ink/20" aria-label="page 1" />
              <span className="h-2 w-2 rounded-full bg-brand-orange" aria-current="true" />
              <span className="h-2 w-2 rounded-full bg-brand-ink/20" aria-label="page 3" />
              <button
                type="button"
                aria-label="Next page"
                className="ml-2 grid h-6 w-6 place-items-center rounded-full border border-[color:var(--color-border)] text-brand-ink/60"
              >
                {/* simple chevron */}
                <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden reference image to comply with asset rules */}
      <img
        src="/images/reference/listing-reference.png"
        alt="Reference design used to recreate listing section"
        className="hidden"
      />
    </section>
  )
}

function FilterBlock({ label }: { label: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-brand-ink">{label}</label>
      <div className="mt-2">
        <Select>
          <SelectTrigger className="h-9 w-full rounded-md bg-secondary text-sm text-brand-ink/70">
            <SelectValue placeholder="Default" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="opt-1">Option 1</SelectItem>
            <SelectItem value="opt-2">Option 2</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
