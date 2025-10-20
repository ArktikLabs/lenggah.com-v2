import type React from "react";
import { Button } from "@/components/ui/button";

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
    <section className="bg-white">
      {/* Orange CTA panel */}
      <div className="bg-brand-orange px-6 py-16 text-center md:py-20">
        <h2 className="mx-auto w-full max-w-4xl font-display text-pretty text-3xl leading-tight text-white md:text-5xl">
          Custom your seat where every detail speaks your identity and story
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
          Start your custom chair journey and book a private session today
        </p>
        <Button
          variant="outline"
          className="mt-8 rounded-xl border-2 border-white bg-transparent px-8 py-5 text-base text-white hover:bg-white/10"
        >
          Contact Us
        </Button>
      </div>

      {/* Dark teal features panel */}
      <div className="bg-brand-teal px-6 py-10 md:py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4 md:gap-10">
          {features.map((f) => (
            <div
              key={f.label}
              className="flex flex-col items-center text-center"
            >
              <f.icon className="h-10 w-10 text-white md:h-12 md:w-12" />
              <p className="mt-3 text-sm leading-snug text-white md:text-base">
                {f.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* White/sand expertise content panel */}
      <div className="bg-white px-4 py-10 md:py-16">
        <div className="mx-auto w-full max-w-6xl">
          {/* Heading */}
          <h2 className="font-display text-pretty text-3xl leading-tight text-brand-ink/80 md:text-5xl">
            Your creativity meets our expertise. Lenggah
            <br className="hidden md:block" />
            transforms ideas into chairs that truly yours.
          </h2>

          {/* Category tabs */}
          <nav aria-label="Categories" className="mt-6 w-full">
            <ul className="flex w-full flex-wrap items-center text-sm md:text-base text-brand-ink/70">
              {tabs.map((c, idx) => (
                <li key={c} className="relative flex-1 min-w-0">
                  <a
                    href="#"
                    className={`block w-full px-2 py-2 text-center hover:text-brand-ink ${
                      idx === 0 ? "text-brand-ink" : ""
                    }`}
                  >
                    {c}
                  </a>
                  {idx === 0 && (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-2 left-1/2 h-[2px] w-full -translate-x-1/2 bg-brand-ink/50"
                    />
                  )}
                </li>
              ))}
            </ul>
          </nav>

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
