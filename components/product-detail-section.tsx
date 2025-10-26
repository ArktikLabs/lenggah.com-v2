import type React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import type { Product } from "@/data/product-listing-content";

interface ProductDetailSectionProps {
  product: Product;
}

export function ProductDetailSection({ product }: ProductDetailSectionProps) {
  return (
    <section className="bg-white">
      {/* White/sand expertise content panel */}
      <div className="bg-white px-4 py-10 md:py-16">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-full md:col-span-8 grid grid-cols-1 gap-6 md:grid-cols-[320px,1fr]">
              {/* Main product image */}
              <div className="relative" style={{ minHeight: "400px" }}>
                <Image
                  src={product.images.main}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Photo Grid */}
              <div className="grid grid-cols-2 gap-4 md:grid-cols-8 md:gap-3">
                {product.images.gallery.map((imageUrl, i) => (
                  <div
                    key={i}
                    className="relative aspect-square rounded-md overflow-hidden"
                  >
                    <Image
                      src={imageUrl}
                      alt={`${product.name} - view ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-full md:col-span-4">
              {/* Main information */}
              <div className="mb-6">
                <h2 className="font-headings text-pretty text-brand-light-teal/80 text-2xl font-semibold">
                  {product.name}
                </h2>
                <p className="text-pretty text-foreground text-xl mt-4 font-semibold">
                  {product.price.formatted}
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
                    {product.images.gallery.slice(0, 3).map((imageUrl, i) => (
                      <div
                        key={i}
                        className="relative aspect-square rounded-md overflow-hidden"
                      >
                        <Image
                          src={imageUrl}
                          alt={`${product.name} - variation ${i + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <a
                    href="https://shopee.co.id/lenggah.works"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary" size="default" className="w-full">
                      Shop on Shopee
                    </Button>
                  </a>
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
                  {product.description}
                  {product.materials && (
                    <>
                      <span className="mt-6 block font-bold">Materials</span>
                      {product.materials.join(", ")}
                    </>
                  )}
                </p>
              </div>

              {/* Product Dimension */}
              {product.dimensions && (
                <div className="mt-6 mb-6 border-t border-gray-400">
                  <h2 className="mt-4 font-headings text-pretty text-brand-light-teal/80 text-2xl font-semibold">
                    Product Dimension
                  </h2>
                  <p className="text-pretty text-foreground/80 mt-4">
                    <span className="block font-bold">General Dimensions</span>
                    {product.dimensions.width}{product.dimensions.unit} x {product.dimensions.depth}{product.dimensions.unit} x {product.dimensions.height}{product.dimensions.unit}
                    <br />
                    (Width x Depth x Height)
                  </p>
                </div>
              )}

              {/* Contact */}
              <div className="mt-6 mb-6 border-t border-gray-400">
                <p className="text-pretty text-foreground/80 mt-4 text-lg">
                  Looking for something else or want to refine a piece from our
                  collection?
                </p>
                <div className="mt-4">
                  <a href="/#contact">
                    <Button
                      variant="outline"
                      colorScheme="foreground"
                      size="sm"
                    >
                      Contact Us
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
