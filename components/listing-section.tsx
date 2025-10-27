"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { SectionContainer } from "./section-container"
import { SectionHeading } from "./section-heading"
import { CategoryTabs } from "./category-tabs"
import { PaginationDots } from "./pagination-dots"
import { productListingContent } from "@/data/product-listing-content"
import { ChevronDown, X } from "lucide-react"

export function ListingSection() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState(0)

  // Temporary filter states (not applied yet)
  const [tempColor, setTempColor] = useState<string>("")
  const [tempStyle, setTempStyle] = useState<string>("")
  const [tempPriceRange, setTempPriceRange] = useState<string>("")

  // Applied filter states (after clicking Apply)
  const [appliedColor, setAppliedColor] = useState<string>("")
  const [appliedStyle, setAppliedStyle] = useState<string>("")
  const [appliedPriceRange, setAppliedPriceRange] = useState<string>("")

  const [sortBy, setSortBy] = useState<string>("default")

  // Mobile filter/sort modal states
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const [showMobileSort, setShowMobileSort] = useState(false)
  const [expandedAccordion, setExpandedAccordion] = useState<string | null>(null)

  const { itemsPerPage } = productListingContent.pagination

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...productListingContent.products]

    // Filter by category
    const categoryName = productListingContent.categories[selectedCategory]
    if (categoryName !== "Latest") {
      filtered = filtered.filter((product) => {
        if (categoryName === "Our Signatures") return product.featured
        return product.category === categoryName
      })
    }

    // Filter by color (use applied filter)
    if (appliedColor) {
      filtered = filtered.filter((product) =>
        product.colors.some((c) => c.toLowerCase() === appliedColor.toLowerCase())
      )
    }

    // Filter by style (use applied filter)
    if (appliedStyle) {
      filtered = filtered.filter((product) => product.style.toLowerCase() === appliedStyle.toLowerCase())
    }

    // Filter by price range (use applied filter)
    if (appliedPriceRange) {
      const priceRange = productListingContent.filters.priceRanges.find(
        (r) => r.label.toLowerCase().replace(/\s+/g, "-") === appliedPriceRange
      )
      if (priceRange) {
        filtered = filtered.filter(
          (product) => product.price.amount >= priceRange.min && product.price.amount <= priceRange.max
        )
      }
    }

    // Sort products
    if (sortBy === "price-low") {
      filtered.sort((a, b) => a.price.amount - b.price.amount)
    } else if (sortBy === "price-high") {
      filtered.sort((a, b) => b.price.amount - a.price.amount)
    } else if (sortBy === "name-asc") {
      filtered.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sortBy === "name-desc") {
      filtered.sort((a, b) => b.name.localeCompare(a.name))
    }

    return filtered
  }, [selectedCategory, appliedColor, appliedStyle, appliedPriceRange, sortBy])

  // Calculate pagination
  const totalProducts = filteredAndSortedProducts.length
  const totalPages = Math.ceil(totalProducts / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const displayedProducts = filteredAndSortedProducts.slice(startIndex, endIndex)

  // Apply the temporary filters when user clicks Apply button
  const applyFilters = () => {
    setAppliedColor(tempColor)
    setAppliedStyle(tempStyle)
    setAppliedPriceRange(tempPriceRange)
    setCurrentPage(1)
  }

  // Clear both temporary and applied filters
  const clearFilters = () => {
    setTempColor("")
    setTempStyle("")
    setTempPriceRange("")
    setAppliedColor("")
    setAppliedStyle("")
    setAppliedPriceRange("")
    setCurrentPage(1)
  }

  return (
    <SectionContainer id="products">
      <SectionHeading>
        {productListingContent.heading}
      </SectionHeading>

      <CategoryTabs
        categories={productListingContent.categories}
        activeIndex={selectedCategory}
        onCategoryClick={(index) => {
          setSelectedCategory(index)
          setCurrentPage(1)
        }}
      />

        {/* Signature Collection - Mobile only */}
        <div className="mt-8 md:hidden">
          <h3 className="text-base font-medium text-brand-ink">{productListingContent.sidebar.signatureCollection.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-brand-ink/70">
            {productListingContent.sidebar.signatureCollection.description}
          </p>
        </div>

        {/* Main content grid */}
        <div className="mt-8 grid grid-cols-12 gap-6">
          {/* Sidebar filters - 3 columns - Desktop only */}
          <aside aria-label="Filters" className="hidden md:block md:col-span-3 space-y-8">
            <div>
              <h3 className="text-base font-medium text-brand-ink">{productListingContent.sidebar.signatureCollection.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-ink/70">
                {productListingContent.sidebar.signatureCollection.description}
              </p>
            </div>

            <div className="space-y-6">
              <FilterBlock
                label="Colour"
                options={productListingContent.filters.colors}
                value={tempColor}
                onValueChange={setTempColor}
              />
              <FilterBlock
                label="Style"
                options={productListingContent.filters.styles}
                value={tempStyle}
                onValueChange={setTempStyle}
              />
              <FilterBlock
                label="Range Price"
                options={productListingContent.filters.priceRanges.map((r) => r.label)}
                value={tempPriceRange}
                onValueChange={setTempPriceRange}
              />

              <div className="flex gap-2">
                <Button
                  onClick={applyFilters}
                  variant="primary"
                  size="sm"
                >
                  Apply
                </Button>
                {(appliedColor || appliedStyle || appliedPriceRange) && (
                  <Button
                    onClick={clearFilters}
                    variant="outline"
                    colorScheme="ink"
                    size="sm"
                  >
                    Clear
                  </Button>
                )}
              </div>
            </div>

            {/* Contact Us prompt - Desktop only */}
            <div className="hidden md:block rounded-md border border-(--color-border) p-4">
              <p className="text-sm leading-relaxed text-brand-ink/70">
                {productListingContent.sidebar.customPrompt.text}
              </p>
              <a href="#contact" className="mt-4 block">
                <Button
                  variant="outline"
                  colorScheme="ink"
                  size="default"
                  className="w-full"
                >
                  {productListingContent.sidebar.customPrompt.buttonText}
                </Button>
              </a>
            </div>
          </aside>

          {/* Products area - 9 columns */}
          <div className="col-span-12 md:col-span-9 space-y-6">
            {/* Top row */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-brand-ink/80">
                <span className="font-medium">{totalProducts}</span> products
              </p>

              {/* Desktop: Sort dropdown */}
              <div className="hidden md:flex items-center gap-2 text-sm">
                <span className="text-brand-ink/70">Sort by</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="h-8 w-28 rounded-md bg-secondary px-3 text-xs text-brand-ink/80">
                    <SelectValue placeholder="Default" />
                  </SelectTrigger>
                  <SelectContent>
                    {productListingContent.sortOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Mobile: Filter and Sort buttons */}
              <div className="flex md:hidden gap-3 flex-1 justify-end">
                <button
                  onClick={() => setShowMobileFilters(true)}
                  className="flex items-center justify-center gap-1.5 px-4 py-2 text-sm text-brand-ink/70 hover:text-brand-ink transition-colors"
                >
                  <span>Filter</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setShowMobileSort(true)}
                  className="flex items-center justify-center gap-1.5 px-4 py-2 text-sm text-brand-ink/70 hover:text-brand-ink transition-colors"
                >
                  <span>Sort</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 overflow-hidden">
              {displayedProducts.map((product) => (
                <Link
                  key={`${product.id}-${currentPage}`}
                  href={`/products/${product.id}`}
                >
                  <article className="overflow-hidden rounded-md border border-(--color-border) bg-card animate-in slide-in-from-right duration-500 hover:shadow-lg transition-shadow cursor-pointer flex flex-col h-full">
                    <div className="relative bg-secondary" style={{ aspectRatio: "4 / 3" }}>
                      <Image
                        src={product.images.main}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="bg-secondary px-3 py-2 md:px-4 md:py-3 flex-1 flex flex-col">
                      <h4 className="line-clamp-2 text-xs md:text-sm text-brand-ink/80 min-h-[2.5rem] md:min-h-[2.8rem]">{product.name}</h4>
                      <p className="mt-auto pt-1 md:pt-2 text-[10px] md:text-xs text-brand-ink/60">{product.price.formatted}</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* Pagination dots */}
            <PaginationDots
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
              variant="filled"
              color="orange"
              showNavButtons={true}
            />

            {/* Contact Us prompt - Mobile only */}
            <div className="md:hidden rounded-md border border-(--color-border) p-4 mt-6">
              <p className="text-sm leading-relaxed text-brand-ink/70">
                {productListingContent.sidebar.customPrompt.text}
              </p>
              <a href="#contact" className="mt-4 block">
                <Button
                  variant="outline"
                  colorScheme="ink"
                  size="default"
                  className="w-full"
                >
                  {productListingContent.sidebar.customPrompt.buttonText}
                </Button>
              </a>
            </div>
          </div>
        </div>

      {/* Mobile Filter Modal */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="flex h-full flex-col">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-(--color-border) px-4 py-4">
              <h2 className="text-lg font-medium">Filters</h2>
              <button onClick={() => setShowMobileFilters(false)} aria-label="Close filters">
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Filter Content - Scrollable */}
            <div className="flex-1 overflow-y-auto px-4 py-4">
              {/* Color Filter */}
              <div className="border-b border-(--color-border) pb-4">
                <button
                  onClick={() => setExpandedAccordion(expandedAccordion === "color" ? null : "color")}
                  className="flex w-full items-center justify-between py-3 text-left"
                >
                  <span className="font-medium">Colour</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${expandedAccordion === "color" ? "rotate-180" : ""}`} />
                </button>
                {expandedAccordion === "color" && (
                  <div className="space-y-1 pt-2">
                    {productListingContent.filters.colors.map((color) => {
                      const value = color.toLowerCase().replace(/\s+/g, "-");
                      const isSelected = tempColor === value;
                      return (
                        <button
                          key={color}
                          onClick={() => setTempColor(value)}
                          className={`flex w-full items-center justify-between py-3 px-3 rounded-md transition-colors ${
                            isSelected ? "bg-brand-orange/10" : "hover:bg-secondary"
                          }`}
                        >
                          <span className={`text-sm ${isSelected ? "font-medium text-brand-orange" : ""}`}>
                            {color}
                          </span>
                          {isSelected && (
                            <div className="h-2 w-2 rounded-full bg-brand-orange" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Style Filter */}
              <div className="border-b border-(--color-border) pb-4">
                <button
                  onClick={() => setExpandedAccordion(expandedAccordion === "style" ? null : "style")}
                  className="flex w-full items-center justify-between py-3 text-left"
                >
                  <span className="font-medium">Style</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${expandedAccordion === "style" ? "rotate-180" : ""}`} />
                </button>
                {expandedAccordion === "style" && (
                  <div className="space-y-1 pt-2">
                    {productListingContent.filters.styles.map((style) => {
                      const value = style.toLowerCase().replace(/\s+/g, "-");
                      const isSelected = tempStyle === value;
                      return (
                        <button
                          key={style}
                          onClick={() => setTempStyle(value)}
                          className={`flex w-full items-center justify-between py-3 px-3 rounded-md transition-colors ${
                            isSelected ? "bg-brand-orange/10" : "hover:bg-secondary"
                          }`}
                        >
                          <span className={`text-sm ${isSelected ? "font-medium text-brand-orange" : ""}`}>
                            {style}
                          </span>
                          {isSelected && (
                            <div className="h-2 w-2 rounded-full bg-brand-orange" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Price Range Filter */}
              <div className="pb-4">
                <button
                  onClick={() => setExpandedAccordion(expandedAccordion === "price" ? null : "price")}
                  className="flex w-full items-center justify-between py-3 text-left"
                >
                  <span className="font-medium">Price Range</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${expandedAccordion === "price" ? "rotate-180" : ""}`} />
                </button>
                {expandedAccordion === "price" && (
                  <div className="space-y-1 pt-2">
                    {productListingContent.filters.priceRanges.map((range) => {
                      const value = range.label.toLowerCase().replace(/\s+/g, "-");
                      const isSelected = tempPriceRange === value;
                      return (
                        <button
                          key={range.label}
                          onClick={() => setTempPriceRange(value)}
                          className={`flex w-full items-center justify-between py-3 px-3 rounded-md transition-colors ${
                            isSelected ? "bg-brand-orange/10" : "hover:bg-secondary"
                          }`}
                        >
                          <span className={`text-sm ${isSelected ? "font-medium text-brand-orange" : ""}`}>
                            {range.label}
                          </span>
                          {isSelected && (
                            <div className="h-2 w-2 rounded-full bg-brand-orange" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-(--color-border) p-4">
              <div className="flex gap-3">
                <Button
                  onClick={clearFilters}
                  variant="outline"
                  colorScheme="ink"
                  className="flex-1"
                >
                  Clear All
                </Button>
                <Button
                  onClick={() => {
                    applyFilters()
                    setShowMobileFilters(false)
                  }}
                  variant="primary"
                  className="flex-1"
                >
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Sort Modal */}
      {showMobileSort && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="flex h-full flex-col">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-(--color-border) px-4 py-4">
              <h2 className="text-lg font-medium">Sort By</h2>
              <button onClick={() => setShowMobileSort(false)} aria-label="Close sort">
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Sort Options */}
            <div className="flex-1 overflow-y-auto px-4 py-4">
              <div className="space-y-1">
                {productListingContent.sortOptions.map((option) => {
                  const isSelected = sortBy === option.value;
                  return (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSortBy(option.value)
                        setShowMobileSort(false)
                      }}
                      className={`flex w-full items-center justify-between py-3 px-3 rounded-md transition-colors ${
                        isSelected ? "bg-brand-orange/10" : "hover:bg-secondary"
                      }`}
                    >
                      <span className={`text-sm ${isSelected ? "font-medium text-brand-orange" : ""}`}>
                        {option.label}
                      </span>
                      {isSelected && (
                        <div className="h-2 w-2 rounded-full bg-brand-orange" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </SectionContainer>
  )
}

function FilterBlock({
  label,
  options,
  value,
  onValueChange,
}: {
  label: string
  options: readonly string[]
  value: string
  onValueChange: (value: string) => void
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-brand-ink">{label}</label>
      <div className="mt-2">
        <Select value={value} onValueChange={onValueChange}>
          <SelectTrigger className="h-9 w-full rounded-md bg-secondary text-sm text-brand-ink/70">
            <SelectValue placeholder={`Select ${label}`} />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option} value={option.toLowerCase().replace(/\s+/g, "-")}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
