"use client";

import { Button } from "./ui/button";
import { siteContent } from "@/data/site-content";

export function InstagramSection() {
  return (
    <section className="bg-white px-8 py-16 md:px-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 grid grid-cols-12 gap-4 items-center">
          <div className="col-span-12 md:col-span-8">
            <h2 className="font-headings text-pretty text-3xl leading-tight text-brand-light-teal/80 md:text-5xl whitespace-pre-line">
              {siteContent.instagram.heading}
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 flex justify-start md:justify-end">
            <Button variant="outline" colorScheme="foreground" size="default">
              Follow Us
            </Button>
          </div>
        </div>

        {/* Instagram Grid - 12 column system */}
        <div className="grid grid-cols-12 gap-4 md:gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="col-span-6 sm:col-span-4 md:col-span-2 aspect-square bg-brand-orange"
              aria-label={`Instagram post ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
