"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PaginationDots } from "@/components/pagination-dots";
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
      <div className="grid grid-cols-1 md:grid-cols-10">
        {/* Image panel - shown first on mobile, 6 columns on desktop */}
        <div className="relative h-[300px] md:h-auto md:min-h-[520px] md:col-span-6 md:order-2 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80"
            alt="Modern living room interior"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </div>

        {/* Text panel - shown second on mobile, 4 columns on desktop */}
        <div className="bg-brand-teal text-[color:var(--primary-foreground)] md:col-span-4 md:order-1">
          <div className="mx-auto flex h-full max-w-xl flex-col justify-center gap-4 md:gap-6 px-6 py-8 md:py-12 md:px-10 text-center">
            <div className="flex flex-col justify-center overflow-hidden">
              <h1
                key={`title-${activeSlide}`}
                className="font-headings text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight whitespace-pre-line animate-in slide-in-from-right duration-700"
              >
                {slides[activeSlide].title}
              </h1>
            </div>

            <div className="flex items-center justify-center overflow-hidden">
              <p
                key={`desc-${activeSlide}`}
                className="max-w-md text-xs sm:text-sm leading-relaxed text-white/80 animate-in slide-in-from-right duration-700"
              >
                {slides[activeSlide].description}
              </p>
            </div>

            <div>
              <a href="#contact">
                <Button
                  variant="outline"
                  colorScheme="sand"
                  size="default"
                >
                  Contact Us
                </Button>
              </a>
            </div>

            {/* pagination dots */}
            <PaginationDots
              totalPages={slides.length}
              currentPage={activeSlide + 1}
              onPageChange={(page) => setActiveSlide(page - 1)}
              variant="outlined"
              color="sand"
              className="mt-2 md:mt-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
