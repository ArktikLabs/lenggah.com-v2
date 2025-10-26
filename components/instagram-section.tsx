"use client";

export function InstagramSection() {
  return (
    <section className="bg-white px-8 py-16 md:px-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 grid grid-cols-12 gap-4 items-center">
          <div className="col-span-12 md:col-span-8">
            <h2 className="font-headings text-pretty text-3xl leading-tight text-brand-light-teal/80 md:text-5xl">
              @lenggah.works
              <br className="hidden md:block" />
              Follow Us on Instagram
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 flex justify-start md:justify-end">
            <button className="rounded-lg border-2 border-foreground px-6 py-2 text-foreground transition-colors hover:bg-foreground hover:text-background">
              Follow Us
            </button>
          </div>
        </div>

        {/* Instagram Grid - 12 column system */}
        <div className="grid grid-cols-12 gap-4 md:gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="col-span-6 sm:col-span-4 md:col-span-2 aspect-square bg-brand-orange"
              aria-label={`Instagram post ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
