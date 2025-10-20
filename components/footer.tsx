"use client"

export function Footer() {
  return (
    <>
      {/* Main Footer */}
      <footer className="bg-brand-teal px-8 py-16 text-white md:px-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-12">
            {/* Brand */}
            <div className="md:col-span-5">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white">
                  <span className="font-headings text-xl font-light">L</span>
                </div>
              </div>
              <h3 className="font-headings text-lg font-light">Lenggah</h3>
              <p className="mt-2 text-sm text-white/80">Seat Authentically Yours</p>
            </div>

            {/* About */}
            <div className="md:col-span-2">
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
            <div className="md:col-span-2">
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
            <div className="md:col-span-3">
              <h4 className="mb-6 font-semibold">Contact</h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li>
                  <a href="tel:+6281386288099" className="hover:text-white transition-colors">
                    +62 813-8628-8099
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@lenggah.com" className="hover:text-white transition-colors">
                    hello@lenggah.com
                  </a>
                </li>
                <li className="text-xs leading-relaxed">
                  Jl. Munggang Gg. H. Guntong Jl. Munggang Gg. H. Guntong RT 10/RW 4, Kel. Balekambang, Jakarta Timur
                  13530
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Bar */}
      <div className="flex items-center justify-between bg-white px-8 py-4 text-xs text-foreground/60 md:px-16">
        <p>© 2025 Lenggah. All rights reserved. Developed by Artik</p>
        <p>Developed by Artik</p>
      </div>
    </>
  )
}
