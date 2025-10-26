"use client";

import { useState } from "react";
import type React from "react";
import Image from "next/image";
import { SectionContainer } from "./section-container";
import { SectionHeading } from "./section-heading";
import { CategoryTabs } from "./category-tabs";
import { expertiseContent } from "@/data/expertise-content";

export function ExpertiseSection() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  // Get content for selected category
  const currentContent = expertiseContent.content[selectedCategory];

  return (
    <SectionContainer id="expertise">
      <SectionHeading>{expertiseContent.heading}</SectionHeading>

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
        {/* Left: image thumbnail - 3 columns with fixed aspect ratio */}
        <div className="md:col-span-3 rounded-lg overflow-hidden">
          <div className="relative w-full aspect-[3/4]">
            {currentContent.imageUrl && (
              <Image
                src={currentContent.imageUrl}
                alt={currentContent.title}
                fill
                className="object-cover"
              />
            )}
          </div>
        </div>
        {/* Orange thumbnail - commented out */}
        {/* <div
          className="md:col-span-3 bg-brand-orange rounded-lg"
          style={{ minHeight: "400px" }}
          aria-hidden="true"
        /> */}

        {/* Right: text column - 7 columns */}
        <div className="md:col-span-7 space-y-4">
          <h3 className="text-2xl font-medium text-brand-ink md:text-3xl">
            {currentContent.title}
          </h3>
          {currentContent.description.map((paragraph, index) => (
            <p
              key={index}
              className="text-sm leading-relaxed text-brand-ink/70 md:text-base whitespace-pre-line"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
