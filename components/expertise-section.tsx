"use client";

import { useState } from "react";
import type React from "react";
import { Button } from "@/components/ui/button";
import { SectionContainer } from "./section-container";
import { SectionHeading } from "./section-heading";
import { CategoryTabs } from "./category-tabs";
import { PaginationDots } from "./pagination-dots";
import { expertiseContent } from "@/data/expertise-content";

export function ExpertiseSection() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  // Get content for selected category
  const currentContent = expertiseContent.content[selectedCategory];

  return (
    <SectionContainer id="expertise">
      <SectionHeading>
        {expertiseContent.heading}
      </SectionHeading>

      <CategoryTabs
        categories={expertiseContent.categories}
        activeIndex={selectedCategory}
        onCategoryClick={(index) => {
          setSelectedCategory(index);
        }}
      />

          {/* Content card (horizontal layout) */}
          <div
            key={`expertise-${selectedCategory}`}
            className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-10 animate-in slide-in-from-right duration-500"
          >
            {/* Left: tall orange thumbnail - 3 columns */}
            <div
              className="md:col-span-3 bg-brand-orange rounded-lg"
              style={{ minHeight: "400px" }}
              aria-hidden="true"
            />

            {/* Right: text column - 7 columns */}
            <div className="md:col-span-7 space-y-4">
              <h3 className="text-2xl font-medium text-brand-ink md:text-3xl">
                {currentContent.title}
              </h3>
              {currentContent.description.map((paragraph, index) => (
                <p key={index} className="text-sm leading-relaxed text-brand-ink/70 md:text-base">
                  {paragraph}
                </p>
              ))}
              {currentContent.link && (
                <a
                  href={currentContent.link.url}
                  className="inline-block text-sm text-brand-ink/60 underline hover:text-brand-ink"
                >
                  {currentContent.link.text}
                </a>
              )}
            </div>
          </div>

          {/* Pagination dots */}
          <PaginationDots
            totalPages={expertiseContent.content.length}
            currentPage={selectedCategory + 1}
            onPageChange={(page) => setSelectedCategory(page - 1)}
            variant="filled"
            color="orange"
            showNavButtons={false}
            className="mt-10"
          />

      {/* Hidden reference image per asset rules */}
      <img
        src="/images/reference/expertise-reference.png"
        alt="Reference design used to recreate expertise section"
        className="hidden"
      />
    </SectionContainer>
  );
}
