"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

export function BrandLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/assets/logo.png"
      alt="Lenggah - Seat Authentically Yours"
      width={1008}
      height={494}
      className={cn("h-auto max-h-12 w-auto md:max-h-16", className)}
      priority
    />
  )
}
