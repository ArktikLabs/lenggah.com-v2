"use client"

import { BrandLogo } from "./brand-logo";

export function Footer() {
  return (
    <>
      {/* Main Footer */}
      <footer className="bg-brand-teal px-8 py-16 text-white md:px-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Mobile Layout */}
          <div className="md:hidden space-y-8">
            {/* Brand - Top */}
            <div>
              <BrandLogo variant="footer" className="brightness-0 invert" />
            </div>

            {/* About & Contact - 2 Columns */}
            <div className="grid grid-cols-2 gap-8">
              {/* About */}
              <div>
                <h4 className="mb-4 font-semibold">About</h4>
                <ul className="space-y-3 text-sm text-white/80">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Testimonials
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="mb-4 font-semibold">Contact</h4>
                <ul className="space-y-3 text-sm text-white/80">
                  <li>
                    <a
                      href="tel:+6281386288099"
                      className="hover:text-white transition-colors"
                    >
                      +62 813-8628-8099
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:hello@lenggah.com"
                      className="hover:text-white transition-colors"
                    >
                      hello@lenggah.com
                    </a>
                  </li>
                  <li className="text-xs leading-relaxed">
                    Jl. Munggang Gg. H. Guntong RT 10/RW 4, Kel. Balekambang,
                    Jakarta Timur 13530
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid grid-cols-12 gap-12">
            {/* Brand */}
            <div className="col-span-5 self-start">
              <BrandLogo variant="footer" className="brightness-0 invert" />
            </div>

            {/* About */}
            <div className="col-span-2">
              <h4 className="mb-6 font-semibold">About</h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            {/* Works */}
            <div className="col-span-2">
              <h4 className="mb-6 font-semibold">Works</h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Interior Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Custom Furniture
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Renovation
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-3">
              <h4 className="mb-6 font-semibold">Contact</h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li>
                  <a
                    href="tel:+6281386288099"
                    className="hover:text-white transition-colors"
                  >
                    +62 813-8628-8099
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@lenggah.com"
                    className="hover:text-white transition-colors"
                  >
                    hello@lenggah.com
                  </a>
                </li>
                <li className="text-xs leading-relaxed">
                  Jl. Munggang Gg. H. Guntong RT 10/RW 4, Kel. Balekambang,
                  Jakarta Timur 13530
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Bar */}
      <div className="bg-white px-8 py-4 md:px-16">
        <div className="mx-auto max-w-7xl flex items-center justify-between text-sm text-foreground/60">
          <p>© 2025 Lenggah. All rights reserved.</p>
          <p>
            Developed by{" "}
            <a
              href="https://www.arktik.id"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors underline"
            >
              Arktik
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
