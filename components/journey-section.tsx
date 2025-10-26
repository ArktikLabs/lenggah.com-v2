"use client";

import { SectionContainer } from "./section-container";
import { SectionHeading } from "./section-heading";
import { CategoryTabs } from "./category-tabs";

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
    <SectionContainer id="journey">
      <SectionHeading className="text-brand-ink/80">
        Discover your journey with Lenggah. Explore what fits you best.
      </SectionHeading>

      <CategoryTabs categories={tabs} />

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
    </SectionContainer>
  );
}
