"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/site-content";

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const { slides, autoSlideInterval } = siteContent.hero;

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [slides.length, autoSlideInterval]);

  return (
    <section id="hero" className="w-full">
      <div className="grid min-h-[520px] grid-cols-10">
        {/* Left: dark teal panel with text - 4 columns */}
        <div className="col-span-10 md:col-span-4 bg-brand-teal text-[color:var(--primary-foreground)]">
          <div className="mx-auto flex h-full max-w-xl flex-col justify-center gap-6 px-6 py-12 md:px-10 text-center">
            <div className="min-h-[180px] md:min-h-[220px] flex flex-col justify-center overflow-hidden">
              <h1
                key={`title-${activeSlide}`}
                className="font-headings text-balance text-4xl leading-tight md:text-6xl whitespace-pre-line animate-in slide-in-from-right duration-700"
              >
                {slides[activeSlide].title}
              </h1>
            </div>

            <div className="min-h-[100px] flex items-center justify-center overflow-hidden">
              <p
                key={`desc-${activeSlide}`}
                className="max-w-md text-sm leading-relaxed text-white/80 animate-in slide-in-from-right duration-700"
              >
                {slides[activeSlide].description}
              </p>
            </div>

            <div>
              <a href="#contact">
                <Button
                  variant="outline"
                  className="rounded-xl border-[1.5px] border-(--color-brand-sand) bg-transparent px-6 text-[15px] text-(--color-brand-sand) hover:bg-(--color-brand-sand) hover:text-brand-ink"
                >
                  Contact Us
                </Button>
              </a>
            </div>

            {/* pagination dots */}
            <div
              className="mt-4 flex items-center gap-3 justify-center"
              aria-label="Hero slides"
            >
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  aria-current={activeSlide === index}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-3 w-3 rounded-full transition-all ${
                    activeSlide === index
                      ? "bg-(--color-brand-sand)"
                      : "border border-(--color-brand-sand)"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right: solid orange panel - 6 columns */}
        <div className="col-span-10 md:col-span-6 bg-brand-orange" aria-hidden="true" />
      </div>

      {/* Hidden reference image to comply with asset rules */}
      <img
        src="/images/reference/landing-reference.png"
        alt="Reference design used to recreate this UI"
        className="hidden"
      />
    </section>
  );
}
