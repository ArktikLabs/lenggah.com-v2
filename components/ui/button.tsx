import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        // Primary: Filled button with brand orange background
        primary: 'bg-brand-orange text-white hover:opacity-90 rounded-lg transition-colors',
        // Outline: Border button with transparent background
        outline: 'border-2 bg-transparent hover:bg-current/10 rounded-lg transition-colors',
        // Ghost: Text-only button with subtle hover
        ghost: 'hover:bg-accent/10 rounded-lg transition-colors',
        // Icon: Circular button for icons
        icon: 'rounded-full border-2 border-background bg-background/95 shadow-md hover:scale-105 transition-transform text-foreground',
        // Link: Underlined text link
        link: 'underline-offset-4 hover:underline transition-colors',
      },
      colorScheme: {
        default: '',
        sand: 'text-(--color-brand-sand) border-(--color-brand-sand) hover:bg-(--color-brand-sand) hover:text-brand-ink',
        white: 'text-white border-white hover:bg-white/10',
        ink: 'text-brand-ink border-brand-ink hover:bg-brand-ink hover:text-white',
        foreground: 'text-foreground border-foreground hover:bg-foreground hover:text-background',
      },
      size: {
        sm: 'h-9 px-4 py-2 text-sm',
        default: 'h-11 px-6 py-3 text-base',
        lg: 'h-13 px-8 py-4 text-base',
        icon: 'size-10',
        'icon-sm': 'size-6',
        'icon-lg': 'size-12',
      },
    },
    defaultVariants: {
      variant: 'primary',
      colorScheme: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  colorScheme,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, colorScheme, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
