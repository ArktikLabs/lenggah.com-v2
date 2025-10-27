"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";
import { PaginationDots } from "./pagination-dots";
import type { Product } from "@/data/product-listing-content";

interface ProductDetailSectionProps {
  product: Product;
}

export function ProductDetailSection({ product }: ProductDetailSectionProps) {
  const [selectedImage, setSelectedImage] = useState(product.images.main);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const allImages = product.images.gallery;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0 && currentImageIndex < allImages.length - 1) {
        // Swipe left - next image (slide from right to left)
        setSlideDirection('left');
        setTimeout(() => {
          setCurrentImageIndex(currentImageIndex + 1);
          setTimeout(() => setSlideDirection(null), 50);
        }, 300);
      } else if (diff < 0 && currentImageIndex > 0) {
        // Swipe right - previous image (slide from left to right)
        setSlideDirection('right');
        setTimeout(() => {
          setCurrentImageIndex(currentImageIndex - 1);
          setTimeout(() => setSlideDirection(null), 50);
        }, 300);
      }
    }
  };

  useEffect(() => {
    setSelectedImage(allImages[currentImageIndex]);
  }, [currentImageIndex, allImages]);

  return (
    <section className="bg-white">
      {/* White/sand expertise content panel */}
      <div className="bg-white px-4 py-10 md:py-16">
        <div className="mx-auto w-full max-w-6xl">
          {/* Back to home link */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-brand-ink/70 hover:text-brand-ink transition-colors group"
            >
              <span className="flex items-center justify-center h-8 w-8 rounded-full border border-brand-orange text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                <ChevronLeft className="h-4 w-4" />
              </span>
              <span>Back to Home</span>
            </Link>
          </div>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-full md:col-span-8 grid grid-cols-1 gap-6 md:grid-cols-[320px,1fr]">
              {/* Main product image - Swipeable on mobile */}
              <div
                ref={scrollContainerRef}
                className="relative overflow-hidden"
                style={{ minHeight: "400px" }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <Image
                  src={selectedImage}
                  alt={product.name}
                  fill
                  className={`object-cover rounded-lg transition-transform duration-300 ease-out ${
                    slideDirection === 'left' ? '-translate-x-full' :
                    slideDirection === 'right' ? 'translate-x-full' :
                    'translate-x-0'
                  }`}
                />

                {/* Pagination dots - inside image at bottom (mobile only) */}
                <div className="md:hidden absolute bottom-4 left-0 right-0">
                  <PaginationDots
                    totalPages={allImages.length}
                    currentPage={currentImageIndex + 1}
                    onPageChange={(page) => setCurrentImageIndex(page - 1)}
                    variant="filled"
                    color="orange"
                  />
                </div>
              </div>

              {/* Photo Grid - Image Selector (desktop only) */}
              <div className="hidden md:grid grid-cols-2 gap-4 md:grid-cols-8 md:gap-3">
                {/* Gallery thumbnails */}
                {product.images.gallery.map((imageUrl, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setSelectedImage(imageUrl);
                      setCurrentImageIndex(i);
                    }}
                    className={`relative aspect-square rounded-md overflow-hidden cursor-pointer transition-all ${
                      selectedImage === imageUrl
                        ? "ring-2 ring-brand-orange"
                        : "hover:opacity-80"
                    }`}
                  >
                    <Image
                      src={imageUrl}
                      alt={`${product.name} - view ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
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
