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

        {/* List items - Mobile: Horizontal scroll, Desktop: Vertical stack */}
        <div className="mt-8">
          {/* Mobile: Horizontal scroll */}
          <div className="md:hidden -mx-4 px-4 overflow-x-auto">
            <div className="flex gap-4 pb-4">
              {steps.map((step) => (
                <article
                  key={step.id}
                  className="rounded-lg border border-black/5 bg-background shadow-sm flex-shrink-0 w-[85vw]"
                >
                  <div className="flex flex-col h-full">
                    {/* Image block */}
                    <div className="h-48 rounded-t-lg relative overflow-hidden">
                      {step.imageUrl && (
                        <Image
                          src={step.imageUrl}
                          alt={step.title}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                    {/* Copy */}
                    <div className="flex flex-col p-6">
                      <h3 className="text-lg font-medium text-foreground/90">
                        {step.title}
                      </h3>
                      <div className="mt-3">
                        <p className="text-sm leading-6 text-foreground/70 whitespace-pre-line line-clamp-6">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Desktop: Vertical stack */}
          <div className="hidden md:block space-y-10">
            {steps.map((step) => (
              <article
                key={step.id}
                className="rounded-lg border border-black/5 bg-background shadow-sm h-[400px]"
              >
                <div className="grid grid-cols-[1fr_1.4fr] h-full">
                  {/* Image block */}
                  <div className="h-full rounded-l-lg relative overflow-hidden">
                    {step.imageUrl && (
                      <Image
                        src={step.imageUrl}
                        alt={step.title}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  {/* Copy */}
                  <div className="flex flex-col p-8 overflow-hidden">
                    <h3 className="text-xl font-medium text-foreground/90 shrink-0">
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
        </div>
    </SectionContainer>
  );
}
