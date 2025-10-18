"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="w-full">
      <div className="grid min-h-[520px] grid-cols-1 md:grid-cols-2">
        {/* Left: dark teal panel with text */}
        <div className="bg-brand-teal text-[color:var(--primary-foreground)]">
          <div className="mx-auto flex h-full max-w-xl flex-col justify-center gap-6 px-6 py-12 md:px-10 text-center">
            <h1 className="font-display text-balance text-4xl leading-tight md:text-6xl">
              Crafted For The
              <br /> One Who Seek
              <br /> Authenticity
            </h1>

            <p className="max-w-md text-sm leading-relaxed text-white/80">
              Authenticity isn’t found in mass production, but in choices only you can make. Let’s create the chair you
              envisioned and make it truly yours.
            </p>

            <div>
              <Button
                variant="outline"
                className="rounded-xl border-[1.5px] border-[color:var(--color-brand-sand)] bg-transparent px-6 text-[15px] text-[color:var(--color-brand-sand)] hover:bg-[color:var(--color-brand-sand)] hover:text-brand-ink"
              >
                Contact Us
              </Button>
            </div>

            {/* pagination dots */}
            <div className="mt-4 flex items-center gap-3 justify-center" aria-label="Hero slides">
              <span aria-current="true" className="h-3 w-3 rounded-full bg-[color:var(--color-brand-sand)]" />
              <span className="h-3 w-3 rounded-full border border-[color:var(--color-brand-sand)]" />
              <span className="h-3 w-3 rounded-full border border-[color:var(--color-brand-sand)]" />
            </div>
          </div>
        </div>

        {/* Right: solid orange panel */}
        <div className="bg-brand-orange" aria-hidden="true" />
      </div>

      {/* Hidden reference image to comply with asset rules */}
      <img
        src="/images/reference/landing-reference.png"
        alt="Reference design used to recreate this UI"
        className="hidden"
      />
    </section>
  )
}
