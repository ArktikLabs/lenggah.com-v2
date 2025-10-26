"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { SectionContainer } from "./section-container"
import { SectionHeading } from "./section-heading"
import { CategoryTabs } from "./category-tabs"
import { PaginationDots } from "./pagination-dots"
import { Button } from "./ui/button"
import { patternListingContent } from "@/data/pattern-listing-content"

export function PatternsSection() {
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const { itemsPerPage } = patternListingContent.pagination

  // Filter patterns by category
  const filteredPatterns = patternListingContent.patterns.filter(
    (pattern) =>
      pattern.category === patternListingContent.categories[selectedCategory]
  )

  // Calculate pagination
  const totalPatterns = filteredPatterns.length
  const totalPages = Math.ceil(totalPatterns / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const displayedPatterns = filteredPatterns.slice(startIndex, endIndex)

  return (
    <SectionContainer id="patterns">
      <SectionHeading>
        {patternListingContent.heading}
      </SectionHeading>

      <CategoryTabs
        categories={patternListingContent.categories}
        activeIndex={selectedCategory}
        onCategoryClick={(index) => {
          setSelectedCategory(index)
          setCurrentPage(1)
        }}
      />

        {/* Card grid - using 12 column system */}
        <div className="mt-12 relative">
          {/* Previous button */}
          {currentPage > 1 && (
            <Button
              onClick={() => setCurrentPage((prev) => prev - 1)}
              variant="icon"
              size="icon-lg"
              aria-label="Previous page"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20 z-10"
            >
              <ChevronRight className="h-5 w-5 rotate-180" />
            </Button>
          )}

          {/* Next button */}
          {currentPage < totalPages && (
            <Button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              variant="icon"
              size="icon-lg"
              aria-label="Next page"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-20 z-10"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          )}

          <div className="grid grid-cols-12 gap-6 overflow-hidden">
            {displayedPatterns.map((pattern, index) => (
              <div
                key={`${pattern.id}-${currentPage}`}
                className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2 relative overflow-hidden rounded-sm bg-secondary shadow-sm animate-in slide-in-from-right duration-500"
              >
                {/* Image placeholder */}
                <div className="relative aspect-square bg-brand-orange" />

                {/* Card footer */}
                <div className="p-4">
                  <p className="text-sm leading-relaxed text-foreground">
                    {pattern.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <PaginationDots
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          variant="filled"
          color="orange"
          showNavButtons={false}
          className="mt-8"
        />
    </SectionContainer>
  );
}
