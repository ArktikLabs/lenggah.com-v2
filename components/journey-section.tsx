"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionContainer } from "./section-container";
import { SectionHeading } from "./section-heading";
import { CategoryTabs } from "./category-tabs";
import { journeyContent } from "@/data/journey-content";

export function JourneySection() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  // Get steps for selected category
  const currentJourney = journeyContent.journeys[selectedCategory];
  const steps = currentJourney.steps;

  return (
    <SectionContainer id="journey">
      <SectionHeading className="text-brand-ink/80">
        {journeyContent.heading}
      </SectionHeading>

      <CategoryTabs
        categories={journeyContent.categories}
        activeIndex={selectedCategory}
        onCategoryClick={setSelectedCategory}
      />

        {/* List items */}
        <div className="mt-8 space-y-8 md:space-y-10">
          {steps.map((step) => (
            <article
              key={step.id}
              className="rounded-lg border border-black/5 bg-background shadow-sm h-[400px]"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] h-full">
                {/* Image block */}
                <div className="min-h-48 md:min-h-full rounded-t-lg md:rounded-l-lg md:rounded-tr-none relative overflow-hidden">
                  {step.imageUrl && (
                    <Image
                      src={step.imageUrl}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                {/* Orange media block - commented out */}
                {/* <div
                  className="min-h-48 md:min-h-full rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                  style={{ backgroundColor: "var(--brand-accent, #EA8B1A)" }}
                  aria-hidden="true"
                /> */}
                {/* Copy */}
                <div className="flex flex-col p-6 md:p-8 overflow-hidden">
                  <h3 className="text-lg md:text-xl font-medium text-foreground/90 shrink-0">
                    {step.title}
                  </h3>
                  <div className="mt-3 flex-1 overflow-y-auto">
                    <p className="text-sm leading-6 text-foreground/70 whitespace-pre-line">
                      {step.body}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
    </SectionContainer>
  );
}
