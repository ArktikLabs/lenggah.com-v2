import { ChevronRight } from "lucide-react";

export function PatternsSection() {
  const tabs = [
    "Abstract",
    "Geometric",
    "Nordic",
    "Japanese",
    "Aztec",
    "Indonesia",
  ];

  const cards = [
    { id: 1, title: "Lorem ipsum dolor sit amet" },
    { id: 2, title: "Lorem ipsum dolor sit amet" },
    { id: 3, title: "Lorem ipsum dolor sit amet" },
    { id: 4, title: "Lorem ipsum dolor sit amet" },
    { id: 5, title: "Lorem ipsum dolor sit amet" },
    { id: 6, title: "Lorem ipsum dolor sit amet", hasChevron: true },
  ];

  return (
    <section className="bg-background px-6 py-16 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="font-display text-3xl leading-snug tracking-tight text-foreground lg:text-4xl lg:leading-tight">
          Various Patterns inspired by global ethnic artistry and crafted to be
          uniquely yours.
        </h2>

        {/* Category tabs */}
        <nav aria-label="Categories" className="mt-6 w-full">
          <ul className="flex w-full flex-wrap items-center text-sm md:text-base text-brand-ink/70">
            {tabs.map((c, idx) => (
              <li key={c} className="relative flex-1 min-w-0">
                <a
                  href="#"
                  className={`block w-full px-2 py-2 text-center hover:text-brand-ink ${
                    idx === 0 ? "text-brand-ink" : ""
                  }`}
                >
                  {c}
                </a>
                {idx === 0 && (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-2 left-1/2 h-[2px] w-full -translate-x-1/2 bg-brand-ink/50"
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Horizontal scrollable card grid */}
        <div className="mt-12 overflow-x-auto">
          <div className="flex gap-6 pb-4">
            {cards.map((card) => (
              <div
                key={card.id}
                className="relative shrink-0 overflow-hidden rounded-sm bg-card shadow-sm"
                style={{ width: "280px" }}
              >
                {/* Image placeholder */}
                <div className="relative h-64 bg-brand-orange">
                  {card.hasChevron && (
                    <button
                      aria-label="Next"
                      className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-background bg-background/95 text-foreground shadow-md transition-transform hover:scale-105"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  )}
                </div>

                {/* Card footer */}
                <div className="bg-secondary/40 p-4">
                  <p className="text-sm leading-relaxed text-foreground">
                    {card.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            aria-label="Page 1"
            className="h-3 w-3 rounded-full bg-accent"
          />
          <button
            aria-label="Page 2"
            className="h-3 w-3 rounded-full bg-border"
          />
          <button
            aria-label="Page 3"
            className="h-3 w-3 rounded-full bg-border"
          />
        </div>
      </div>
    </section>
  );
}
