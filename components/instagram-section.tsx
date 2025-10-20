"use client";

export function InstagramSection() {
  return (
    <section className="bg-white px-8 py-16 md:px-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <h2 className="font-headings text-pretty text-3xl leading-tight text-brand-light-teal/80 md:text-5xl">
            @lenggah.works
            <br className="hidden md:block" />
            Follow Us on Instagram
          </h2>
          <button className="rounded-lg border-2 border-foreground px-6 py-2 text-foreground transition-colors hover:bg-foreground hover:text-background">
            Follow Us
          </button>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-6 md:gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-brand-orange"
              aria-label={`Instagram post ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
