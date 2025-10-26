"use client";

import { useState } from "react";
import { SectionContainer } from "./section-container";
import { SectionHeading } from "./section-heading";
import { CategoryTabs } from "./category-tabs";
import { PaginationDots } from "./pagination-dots";
import { journeyContent } from "@/data/journey-content";

export function JourneySection() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const { itemsPerPage } = journeyContent.pagination;

  // Get steps for selected category
  const currentJourney = journeyContent.journeys[selectedCategory];
  const steps = currentJourney.steps;

  // Calculate pagination
  const totalSteps = steps.length;
  const totalPages = Math.ceil(totalSteps / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedSteps = steps.slice(startIndex, endIndex);

  return (
    <SectionContainer id="journey">
      <SectionHeading className="text-brand-ink/80">
        {journeyContent.heading}
      </SectionHeading>

      <CategoryTabs
        categories={journeyContent.categories}
        activeIndex={selectedCategory}
        onCategoryClick={(index) => {
          setSelectedCategory(index);
          setCurrentPage(1);
        }}
      />

        {/* List items */}
        <div className="mt-8 space-y-8 md:space-y-10">
          {displayedSteps.map((step) => (
            <article
              key={`${step.id}-${currentPage}`}
              className="rounded-lg border border-black/5 bg-background shadow-sm animate-in slide-in-from-right duration-500"
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
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-foreground/70">
                    {step.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination dots */}
        <PaginationDots
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          variant="filled"
          color="orange"
          showNavButtons={false}
          className="mt-10"
        />
    </SectionContainer>
  );
}
