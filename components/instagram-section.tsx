"use client"

export function InstagramSection() {
  return (
    <section className="bg-background px-8 py-16 md:px-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <p className="text-sm text-foreground/60">@lenggah.works</p>
            <h2 className="font-display text-4xl font-light text-foreground md:text-5xl">Follow Us on Instagram</h2>
          </div>
          <button className="rounded-lg border-2 border-foreground px-6 py-2 text-foreground transition-colors hover:bg-foreground hover:text-background">
            Follow Us
          </button>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-6 md:gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-square bg-brand-orange" aria-label={`Instagram post ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
