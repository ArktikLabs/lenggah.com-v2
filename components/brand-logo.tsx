"use client"

import { cn } from "@/lib/utils"

export function BrandLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <span className="font-headings text-3xl md:text-4xl tracking-wide text-brand-ink/70">Lenggah</span>
      {/* subtle wave tail to hint the mark */}
      <svg aria-hidden="true" className="ml-1 h-4 w-6 text-brand-ink/30" viewBox="0 0 24 8" fill="none">
        <path
          d="M1 4c2.5-4 4.5 4 7 0s4.5 4 7 0 4.5 4 7 0"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
