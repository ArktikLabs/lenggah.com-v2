"use client";

import { cn } from "@/lib/utils";

interface CategoryTabsProps {
  categories: string[];
  activeIndex?: number;
  onCategoryClick?: (index: number) => void;
}

export function CategoryTabs({
  categories,
  activeIndex = 0,
  onCategoryClick,
}: CategoryTabsProps) {
  return (
    <nav aria-label="Categories" className="mt-8 w-full">
      <ul className="grid grid-cols-12 gap-2 items-center text-sm md:text-base text-brand-ink/70">
        {categories.map((category, idx) => (
          <li
            key={category}
            className={cn(
              "relative text-center",
              "col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2"
            )}
          >
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onCategoryClick?.(idx);
              }}
              className={cn(
                "block w-full px-2 py-3 hover:text-brand-ink transition-colors",
                idx === activeIndex ? "text-brand-ink font-medium" : ""
              )}
            >
              {category}
            </a>
            {idx === activeIndex && (
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-1 left-1/2 h-[2px] w-3/4 -translate-x-1/2 bg-brand-ink/50"
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
