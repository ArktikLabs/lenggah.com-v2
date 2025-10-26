import { ChevronRight } from "lucide-react";
import { SectionContainer } from "./section-container";
import { SectionHeading } from "./section-heading";
import { CategoryTabs } from "./category-tabs";

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
    <SectionContainer id="patterns">
      <SectionHeading>
        Various Patterns inspired by global ethnic artistry and crafted to be uniquely yours.
      </SectionHeading>

      <CategoryTabs categories={tabs} />

        {/* Card grid - using 12 column system */}
        <div className="mt-12 grid grid-cols-12 gap-6">
          <div className="col-span-12 overflow-x-auto">
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
    </SectionContainer>
  );
}
