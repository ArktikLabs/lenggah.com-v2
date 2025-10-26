import type React from "react";
import { Button } from "@/components/ui/button";
import { SectionContainer } from "./section-container";
import { SectionHeading } from "./section-heading";
import { CategoryTabs } from "./category-tabs";

const tabs = [
  "Our Expertise",
  "Expert Design Advice",
  "Product Guarantee",
  "White Glove Delivery",
];

const features = [
  { icon: StarIcon, label: "12 Years of Trust" },
  { icon: ChairIcon, label: "Expert Design Advice" },
  { icon: SparklesIcon, label: "Product Guarantee" },
  { icon: TruckIcon, label: "White Glove Delivery" },
];

export function ExpertiseSection() {
  return (
    <SectionContainer id="expertise">
      <SectionHeading>
        Your creativity meets our expertise. Lenggah transforms ideas into chairs that truly yours.
      </SectionHeading>

      <CategoryTabs categories={tabs} />

          {/* Content card (horizontal layout) */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-[320px,1fr]">
            {/* Left: tall orange thumbnail */}
            <div
              className="bg-brand-orange"
              style={{ minHeight: "400px" }}
              aria-hidden="true"
            />

            {/* Right: text column */}
            <div className="space-y-4">
              <h3 className="text-2xl font-medium text-brand-ink md:text-3xl">
                12 years of experience
              </h3>
              <p className="text-sm leading-relaxed text-brand-ink/70 md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-sm leading-relaxed text-brand-ink/70 md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <a
                href="#"
                className="inline-block text-sm text-brand-ink/60 underline hover:text-brand-ink"
              >
                See more
              </a>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="mt-10 flex items-center justify-center gap-3">
            <span
              className="h-2 w-2 rounded-full bg-brand-ink/20"
              aria-label="page 1"
            />
            <span
              className="h-2 w-2 rounded-full bg-brand-orange"
              aria-current="true"
            />
            <span
              className="h-2 w-2 rounded-full bg-brand-ink/20"
              aria-label="page 3"
            />
          </div>


      {/* Hidden reference image per asset rules */}
      <img
        src="/images/reference/expertise-reference.png"
        alt="Reference design used to recreate expertise section"
        className="hidden"
      />
    </SectionContainer>
  );
}

// Simple icon components to match the screenshot
function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      {...props}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function ChairIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      {...props}
    >
      <path d="M5 8h14M5 8v2a2 2 0 002 2h10a2 2 0 002-2V8M5 8V5a2 2 0 012-2h10a2 2 0 012 2v3M7 12v8M17 12v8" />
    </svg>
  );
}

function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      {...props}
    >
      <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
    </svg>
  );
}

function TruckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      {...props}
    >
      <path d="M16 3h5v13h-2m-3 0H1V5a1 1 0 011-1h11a1 1 0 011 1v11z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}
