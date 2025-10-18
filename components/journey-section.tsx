"use client";

type Step = {
  title: string;
  body: string;
};

const steps: Step[] = [
  {
    title: "how to start designing",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: "how to start designing",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "how to start designing",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export function JourneySection() {
  const tabs = [
    "Create From Your Scratch",
    "Customise Our Signature",
    "Reupholster Your Seat",
  ];

  return (
    <section aria-labelledby="journey-title" className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        {/* Title */}
        <h2
          id="journey-title"
          className="text-pretty text-3xl md:text-5xl leading-tight text-foreground/90"
          style={{ fontFamily: "var(--font-display, var(--font-sans))" }}
        >
          Discover your journey with Lenggah. Explore what fits you best.
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

        {/* List items */}
        <div className="mt-8 space-y-8 md:space-y-10">
          {steps.map((s, i) => (
            <article
              key={i}
              className="rounded-lg border border-black/5 bg-background shadow-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr]">
                {/* Orange media block */}
                <div
                  className="min-h-48 md:min-h-56 lg:min-h-64 rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                  style={{ backgroundColor: "var(--brand-accent, #EA8B1A)" }}
                  aria-hidden="true"
                />
                {/* Copy */}
                <div className="p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-medium text-foreground/90">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-foreground/70">
                    {s.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: "var(--brand-accent, #EA8B1A)" }}
            aria-label="Slide 1"
          />
          <span
            className="h-2.5 w-2.5 rounded-full bg-foreground/20"
            aria-label="Slide 2"
          />
          <span
            className="h-2.5 w-2.5 rounded-full bg-foreground/20"
            aria-label="Slide 3"
          />
        </div>
      </div>
    </section>
  );
}
