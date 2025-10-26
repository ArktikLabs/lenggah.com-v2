/**
 * Design Tokens for Lenggah.com
 * Centralized design system constants for consistent UI
 */

export const DesignTokens = {
  // Container widths
  container: {
    maxWidth: "max-w-7xl",
    padding: "px-4 md:px-6 lg:px-8",
  },

  // Section spacing
  spacing: {
    section: "py-12 md:py-16 lg:py-24",
    sectionCompact: "py-10 md:py-14 lg:py-20",
  },

  // Typography
  typography: {
    h1: "font-headings text-4xl md:text-5xl lg:text-6xl leading-tight",
    h2: "font-headings text-3xl md:text-4xl lg:text-5xl leading-tight",
    h3: "font-headings text-2xl md:text-3xl leading-tight",
    h4: "text-xl md:text-2xl font-medium",
    body: "text-sm md:text-base leading-relaxed",
    bodySmall: "text-xs md:text-sm leading-relaxed",
  },

  // Colors (using CSS variables)
  colors: {
    primary: "text-brand-ink",
    secondary: "text-brand-ink/70",
    muted: "text-brand-ink/40",
    accent: "text-brand-orange",
    heading: "text-brand-light-teal/80",
  },

  // Grid
  grid: {
    cols12: "grid grid-cols-12 gap-6",
    cols12Compact: "grid grid-cols-12 gap-4",
  },

  // Buttons
  buttons: {
    primary: "rounded-lg bg-brand-orange px-6 py-3 text-base text-white hover:opacity-90 transition-colors",
    secondary: "rounded-lg border-2 border-foreground px-6 py-3 text-base text-foreground hover:bg-foreground hover:text-background transition-colors",
    outline: "rounded-xl border-[1.5px] border-brand-ink/70 bg-transparent px-6 py-2 text-base text-brand-ink/70 hover:bg-brand-ink hover:text-white transition-colors",
  },
} as const;
