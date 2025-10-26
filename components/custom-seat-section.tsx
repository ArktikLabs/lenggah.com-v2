import type React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { customSeatContent } from "@/data/custom-seat-content";

// Icon mapping to SVG files
const iconPaths = {
  star: "/assets/icon_star.svg",
  chair: "/assets/icon_chair.svg",
  sparkles: "/assets/icon_sparkles.svg",
  truck: "/assets/icon_truck.svg",
};

export function CustomSeatSection() {
  return (
    <section id="custom-seat" className="bg-white">
      {/* Orange CTA panel */}
      <div className="bg-brand-orange px-6 py-16 text-center md:py-20">
        <h2 className="mx-auto w-full max-w-4xl font-headings text-pretty text-3xl leading-tight text-white md:text-5xl">
          {customSeatContent.cta.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
          {customSeatContent.cta.subheading}
        </p>
        <a href={customSeatContent.cta.buttonLink}>
          <Button
            variant="outline"
            className="mt-8 rounded-xl border-2 border-white bg-transparent px-8 py-5 text-base text-white hover:bg-white/10"
          >
            {customSeatContent.cta.buttonText}
          </Button>
        </a>
      </div>

      {/* Dark teal features panel */}
      <div className="bg-brand-teal px-6 py-10 md:py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4 md:gap-10">
          {customSeatContent.features.map((feature) => {
            const iconPath = iconPaths[feature.icon];
            return (
              <div
                key={feature.label}
                className="flex flex-col items-center text-center"
              >
                <Image
                  src={iconPath}
                  alt={feature.label}
                  width={48}
                  height={48}
                  className="h-10 w-10 md:h-12 md:w-12"
                />
                <p className="mt-3 text-sm leading-snug text-white md:text-base">
                  {feature.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Hidden reference image per asset rules */}
      <img
        src="/images/reference/expertise-reference.png"
        alt="Reference design used to recreate expertise section"
        className="hidden"
      />
    </section>
  );
}
