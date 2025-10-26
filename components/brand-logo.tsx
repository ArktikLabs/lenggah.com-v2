"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

interface BrandLogoProps {
  className?: string
  variant?: "header" | "footer"
}

export function BrandLogo({ className, variant = "header" }: BrandLogoProps) {
  // Use typemark SVG for header, original PNG for footer
  const logoSrc = variant === "header" ? "/assets/logo_typemark.svg" : "/assets/logo.png"
  const logoWidth = variant === "header" ? 283 : 1008
  const logoHeight = variant === "header" ? 53 : 494
  const defaultClassName = variant === "header"
    ? "h-auto max-h-12 w-auto md:max-h-16"
    : "h-auto max-h-32 w-auto md:max-h-48 lg:max-h-60"

  return (
    <Image
      src={logoSrc}
      alt="Lenggah - Seat Authentically Yours"
      width={logoWidth}
      height={logoHeight}
      className={cn(defaultClassName, className)}
      priority
    />
  )
}
