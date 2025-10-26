# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application for lenggah.com, built using React 19, TypeScript, and Tailwind CSS. The project was created with v0.app and syncs automatically with deployments on Vercel.

## Development Commands

### Installation
```bash
pnpm install
```

### Development
```bash
pnpm dev          # Start development server at http://localhost:3000
```

### Build & Production
```bash
pnpm build        # Build for production
pnpm start        # Start production server
```

### Code Quality
```bash
pnpm lint         # Run ESLint
```

Note: ESLint and TypeScript errors are ignored during builds (see [next.config.mjs](next.config.mjs:4-7)).

## Architecture

### Project Structure

- **[app/](app/)** - Next.js 15 App Router directory
  - [app/layout.tsx](app/layout.tsx) - Root layout with Google Fonts (Quicksand, DM Sans) and Vercel Analytics
  - [app/page.tsx](app/page.tsx) - Homepage composed of section components
  - [app/product/page.tsx](app/product/page.tsx) - Product detail page
  - [app/globals.css](app/globals.css) - Global styles and Tailwind config

- **[components/](components/)** - React components
  - Page section components (hero, listing-section, patterns-section, etc.)
  - [components/ui/](components/ui/) - shadcn/ui components (button, select, etc.)
  - Components are modular and imported into page layouts

- **[lib/](lib/)** - Utilities
  - [lib/utils.ts](lib/utils.ts) - Contains `cn()` helper for merging Tailwind classes

### Key Technologies

- **UI Framework**: shadcn/ui with Radix UI primitives
  - Configuration in [components.json](components.json)
  - Style: "new-york"
  - Base color: "neutral"
  - Icon library: Lucide React

- **Styling**: Tailwind CSS v4 with:
  - CSS variables for theming
  - `next-themes` for dark/light mode support
  - Custom animations via `tailwindcss-animate`

- **Forms**: React Hook Form with Zod validation

- **Path Aliases**: `@/*` maps to root directory (configured in [tsconfig.json](tsconfig.json:21-23))

### Component Architecture

Pages are built using a compositional pattern:
1. Each page imports multiple section components
2. Section components are self-contained and handle their own layout/logic
3. Shared UI components use shadcn/ui patterns
4. All components use TypeScript with React 19

### Adding shadcn/ui Components

To add new shadcn/ui components, the project is configured with:
- Components directory: `@/components`
- Utils: `@/lib/utils`
- UI components: `@/components/ui`

New components should follow the shadcn/ui "new-york" style variant.

### Fonts

Custom fonts are loaded in [app/layout.tsx](app/layout.tsx:9-14):
- **Quicksand**: Used for headings (CSS variable: `--font-headings`)
- **DM Sans**: Used for body text (default font-sans)

### Images

Next.js image optimization is disabled ([next.config.mjs](next.config.mjs:9-11)). Images are served unoptimized.
