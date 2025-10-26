"use client"

import { cn } from "@/lib/utils"

interface PaginationDotsProps {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
  variant?: "filled" | "outlined"
  color?: "sand" | "orange" | "ink"
  showNavButtons?: boolean
  className?: string
}

export function PaginationDots({
  totalPages,
  currentPage,
  onPageChange,
  variant = "filled",
  color = "orange",
  showNavButtons = false,
  className,
}: PaginationDotsProps) {
  const colorClasses = {
    sand: {
      active: variant === "filled" ? "bg-(--color-brand-sand)" : "bg-(--color-brand-sand)",
      inactive: variant === "filled" ? "bg-(--color-brand-sand)/20" : "border border-(--color-brand-sand)",
    },
    orange: {
      active: variant === "filled" ? "bg-brand-orange" : "bg-brand-orange",
      inactive: variant === "filled" ? "bg-brand-ink/20" : "border border-brand-ink/20",
    },
    ink: {
      active: variant === "filled" ? "bg-brand-ink" : "bg-brand-ink",
      inactive: variant === "filled" ? "bg-brand-ink/20" : "border border-brand-ink/20",
    },
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  return (
    <div className={cn("flex items-center justify-center gap-4 py-4", className)}>
      {showNavButtons && (
        <button
          type="button"
          onClick={handlePrevious}
          disabled={currentPage === 1}
          aria-label="Previous page"
          className="mr-2 grid h-6 w-6 place-items-center rounded-full border border-(--color-border) text-brand-ink/60 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      )}

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          aria-label={`Go to page ${page}`}
          aria-current={currentPage === page ? "true" : undefined}
          className={cn(
            "h-3 w-3 rounded-full transition-all",
            currentPage === page ? colorClasses[color].active : colorClasses[color].inactive
          )}
        />
      ))}

      {showNavButtons && (
        <button
          type="button"
          onClick={handleNext}
          disabled={currentPage === totalPages}
          aria-label="Next page"
          className="ml-2 grid h-6 w-6 place-items-center rounded-full border border-(--color-border) text-brand-ink/60 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      )}
    </div>
  )
}
