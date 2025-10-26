import type React from "react";
import { Button } from "./ui/button";
import { productListingContent } from "@/data/product-listing-content";

export function ProductDetailSection() {
  // Using the first featured product as example
  const product =
    productListingContent.products.find((p) => p.featured) ||
    productListingContent.products[0];
  return (
    <section className="bg-white">
      {/* White/sand expertise content panel */}
      <div className="bg-white px-4 py-10 md:py-16">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-full md:col-span-8 grid grid-cols-1 gap-6 md:grid-cols-[320px,1fr]">
              <div
                className="bg-brand-orange"
                style={{ minHeight: "400px" }}
                aria-hidden="true"
              />

              {/* Photo Grid */}
              <div className="grid grid-cols-2 gap-4 md:grid-cols-8 md:gap-3">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-brand-orange"
                    aria-label={`Product photo ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="col-span-full md:col-span-4">
              {/* Main information */}
              <div className="mb-6">
                <h2 className="font-headings text-pretty text-brand-light-teal/80 text-2xl font-semibold">
                  Lorem ipsum dolor sit amet ipsum dolor sit amet
                </h2>
                <p className="text-pretty text-foreground text-xl mt-4 font-semibold">
                  Start from Rp 9.999.999
                </p>
              </div>

              {/* Variations */}
              <div className="mt-6 mb-6 border-t border-gray-400">
                <h2 className="mt-4 font-headings text-pretty text-brand-light-teal/80 text-2xl font-semibold">
                  Variations
                </h2>
                <div>
                  {/* Photo Grid */}
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-4 mt-4 mb-4">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div
                        key={i}
                        className="aspect-square bg-brand-orange"
                        aria-label={`Product photo ${i + 1}`}
                      />
                    ))}
                  </div>
                  <Button variant="primary" size="default" className="w-full">
                    Shop on Shopee
                  </Button>
                </div>
                <p className="text-pretty text-foreground/80 mt-4">
                  This item is custom and pre order within 2-4 Weeks. The
                  estimated arrival date is determined by purchase date,
                  recipient's locations, and the shipping carrier.
                </p>
              </div>

              {/* Product Description */}
              <div className="mt-6 mb-6 border-t border-gray-400">
                <h2 className="mt-4 font-headings text-pretty text-brand-light-teal/80 text-2xl font-semibold">
                  Product Description
                </h2>
                <p className="text-pretty text-foreground/80 mt-4">
                  Classic comfort. Timeless style. This effortless swivel chair
                  brings the best of both worlds together, with your choice of
                  bold prints or rich fabrics for a look that's both modern and
                  unmistakably original.
                  <span className="mt-6 block font-bold">
                    Materials Construction
                  </span>
                  Plywood Frame
                  <br />2 inch Tubular Frame
                  <span className="mt-6 block font-bold">Materials Fabric</span>
                  Pattern: xxxxxx (95% Polyester, 5% Linen)
                  <br />
                  Others: xxxxxx (95% Polyester, 5% Linen)
                </p>
              </div>

              {/* Product Dimension */}
              <div className="mt-6 mb-6 border-t border-gray-400">
                <h2 className="mt-4 font-headings text-pretty text-brand-light-teal/80 text-2xl font-semibold">
                  Product Dimension
                </h2>
                <p className="text-pretty text-foreground/80 mt-4">
                  Classic comfort. Timeless style. This effortless swivel chair
                  brings the best of both worlds together, with your choice of
                  bold prints or rich fabrics for a look that's both modern and
                  unmistakably original.
                  <span className="mt-6 block font-bold">
                    General Dimensions
                  </span>
                  35.5"W x 33"D x 29.5"H
                  <span className="mt-6 block font-bold">Weight</span>
                  26 lbs
                  <span className="mt-6 block font-bold">Weight Limit</span>
                  300 lbs
                </p>
              </div>

              {/* Contact */}
              <div className="mt-6 mb-6 border-t border-gray-400">
                <p className="text-pretty text-foreground/80 mt-4 text-lg">
                  Looking for something else or want to refine a piece from our
                  collection?
                  <div className="mt-4">
                    <Button
                      variant="outline"
                      colorScheme="foreground"
                      size="sm"
                    >
                      Contact Us
                    </Button>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
