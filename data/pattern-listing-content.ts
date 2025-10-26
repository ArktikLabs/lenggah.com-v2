// Pattern categories
export type PatternCategory =
  | "Abstract"
  | "Geometric"
  | "Nordic"
  | "Japanese"
  | "Aztec"
  | "Indonesia"

// Pattern interface
export interface Pattern {
  id: string
  name: string
  description: string
  category: PatternCategory
  images: {
    main: string
    gallery: string[]
    thumbnail: string
  }
  colors: string[]
  inspiration?: string
  featured?: boolean
  tags?: string[]
}

export const patternListingContent = {
  heading:
    "Various Patterns inspired by global ethnic artistry and crafted to be uniquely yours.",

  categories: [
    "Abstract",
    "Geometric",
    "Nordic",
    "Japanese",
    "Aztec",
    "Indonesia",
  ] as PatternCategory[],

  patterns: [
    {
      id: "pattern-001",
      name: "Flowing Waves",
      description:
        "Abstract pattern inspired by ocean currents and natural water movements.",
      category: "Abstract" as PatternCategory,
      images: {
        main: "/images/patterns/abstract-waves-main.jpg",
        gallery: [
          "/images/patterns/abstract-waves-1.jpg",
          "/images/patterns/abstract-waves-2.jpg",
        ],
        thumbnail: "/images/patterns/abstract-waves-thumb.jpg",
      },
      colors: ["Blue", "Teal", "White", "Gray"],
      inspiration: "Ocean currents and flowing water",
      featured: true,
      tags: ["abstract", "waves", "fluid", "calming"],
    },
    {
      id: "pattern-002",
      name: "Organic Forms",
      description:
        "Free-flowing abstract design with organic shapes and earthy tones.",
      category: "Abstract" as PatternCategory,
      images: {
        main: "/images/patterns/abstract-organic-main.jpg",
        gallery: ["/images/patterns/abstract-organic-1.jpg"],
        thumbnail: "/images/patterns/abstract-organic-thumb.jpg",
      },
      colors: ["Beige", "Brown", "Cream", "Tan"],
      inspiration: "Natural organic forms",
      featured: false,
      tags: ["abstract", "organic", "earthy", "minimal"],
    },
    {
      id: "pattern-003",
      name: "Hexagonal Harmony",
      description:
        "Geometric hexagonal pattern with clean lines and perfect symmetry.",
      category: "Geometric" as PatternCategory,
      images: {
        main: "/images/patterns/geometric-hex-main.jpg",
        gallery: [
          "/images/patterns/geometric-hex-1.jpg",
          "/images/patterns/geometric-hex-2.jpg",
        ],
        thumbnail: "/images/patterns/geometric-hex-thumb.jpg",
      },
      colors: ["Navy", "Gold", "White"],
      inspiration: "Honeycomb structures",
      featured: true,
      tags: ["geometric", "hexagon", "symmetry", "modern"],
    },
    {
      id: "pattern-004",
      name: "Triangle Grid",
      description:
        "Dynamic triangular grid pattern creating depth and movement.",
      category: "Geometric" as PatternCategory,
      images: {
        main: "/images/patterns/geometric-triangle-main.jpg",
        gallery: ["/images/patterns/geometric-triangle-1.jpg"],
        thumbnail: "/images/patterns/geometric-triangle-thumb.jpg",
      },
      colors: ["Black", "White", "Gray"],
      inspiration: "Modern architecture",
      featured: false,
      tags: ["geometric", "triangle", "angular", "contemporary"],
    },
    {
      id: "pattern-005",
      name: "Nordic Snowflake",
      description:
        "Traditional Nordic snowflake motif with intricate details.",
      category: "Nordic" as PatternCategory,
      images: {
        main: "/images/patterns/nordic-snowflake-main.jpg",
        gallery: [
          "/images/patterns/nordic-snowflake-1.jpg",
          "/images/patterns/nordic-snowflake-2.jpg",
        ],
        thumbnail: "/images/patterns/nordic-snowflake-thumb.jpg",
      },
      colors: ["White", "Gray", "Navy", "Red"],
      inspiration: "Scandinavian winter traditions",
      featured: true,
      tags: ["nordic", "snowflake", "winter", "traditional"],
    },
    {
      id: "pattern-006",
      name: "Forest Lines",
      description:
        "Minimalist Nordic pattern inspired by forest landscapes.",
      category: "Nordic" as PatternCategory,
      images: {
        main: "/images/patterns/nordic-forest-main.jpg",
        gallery: ["/images/patterns/nordic-forest-1.jpg"],
        thumbnail: "/images/patterns/nordic-forest-thumb.jpg",
      },
      colors: ["Green", "Brown", "Cream"],
      inspiration: "Scandinavian forests",
      featured: false,
      tags: ["nordic", "forest", "nature", "minimal"],
    },
    {
      id: "pattern-007",
      name: "Cherry Blossom Wave",
      description:
        "Delicate cherry blossom petals flowing in waves.",
      category: "Japanese" as PatternCategory,
      images: {
        main: "/images/patterns/japanese-sakura-main.jpg",
        gallery: [
          "/images/patterns/japanese-sakura-1.jpg",
          "/images/patterns/japanese-sakura-2.jpg",
        ],
        thumbnail: "/images/patterns/japanese-sakura-thumb.jpg",
      },
      colors: ["Pink", "White", "Brown", "Gold"],
      inspiration: "Sakura season in Japan",
      featured: true,
      tags: ["japanese", "sakura", "floral", "elegant"],
    },
    {
      id: "pattern-008",
      name: "Seigaiha Waves",
      description:
        "Traditional Seigaiha wave pattern symbolizing peaceful seas.",
      category: "Japanese" as PatternCategory,
      images: {
        main: "/images/patterns/japanese-seigaiha-main.jpg",
        gallery: ["/images/patterns/japanese-seigaiha-1.jpg"],
        thumbnail: "/images/patterns/japanese-seigaiha-thumb.jpg",
      },
      colors: ["Blue", "Navy", "White", "Gold"],
      inspiration: "Traditional Japanese textile patterns",
      featured: true,
      tags: ["japanese", "waves", "traditional", "seigaiha"],
    },
    {
      id: "pattern-009",
      name: "Aztec Sun",
      description:
        "Bold Aztec sun pattern with geometric precision.",
      category: "Aztec" as PatternCategory,
      images: {
        main: "/images/patterns/aztec-sun-main.jpg",
        gallery: [
          "/images/patterns/aztec-sun-1.jpg",
          "/images/patterns/aztec-sun-2.jpg",
        ],
        thumbnail: "/images/patterns/aztec-sun-thumb.jpg",
      },
      colors: ["Orange", "Red", "Gold", "Black"],
      inspiration: "Aztec calendar and sun worship",
      featured: true,
      tags: ["aztec", "sun", "bold", "cultural"],
    },
    {
      id: "pattern-010",
      name: "Zigzag Steps",
      description:
        "Dynamic zigzag pattern inspired by Aztec pyramids.",
      category: "Aztec" as PatternCategory,
      images: {
        main: "/images/patterns/aztec-zigzag-main.jpg",
        gallery: ["/images/patterns/aztec-zigzag-1.jpg"],
        thumbnail: "/images/patterns/aztec-zigzag-thumb.jpg",
      },
      colors: ["Turquoise", "Orange", "Brown", "Cream"],
      inspiration: "Aztec architecture",
      featured: false,
      tags: ["aztec", "zigzag", "geometric", "bold"],
    },
    {
      id: "pattern-011",
      name: "Batik Parang",
      description:
        "Classic Indonesian Parang Batik pattern symbolizing strength.",
      category: "Indonesia" as PatternCategory,
      images: {
        main: "/images/patterns/indonesia-parang-main.jpg",
        gallery: [
          "/images/patterns/indonesia-parang-1.jpg",
          "/images/patterns/indonesia-parang-2.jpg",
        ],
        thumbnail: "/images/patterns/indonesia-parang-thumb.jpg",
      },
      colors: ["Brown", "Cream", "Gold", "Navy"],
      inspiration: "Javanese royal batik",
      featured: true,
      tags: ["indonesian", "batik", "parang", "traditional"],
    },
    {
      id: "pattern-012",
      name: "Kawung Motif",
      description:
        "Sacred Kawung pattern representing purity and longevity.",
      category: "Indonesia" as PatternCategory,
      images: {
        main: "/images/patterns/indonesia-kawung-main.jpg",
        gallery: ["/images/patterns/indonesia-kawung-1.jpg"],
        thumbnail: "/images/patterns/indonesia-kawung-thumb.jpg",
      },
      colors: ["Brown", "White", "Tan"],
      inspiration: "Traditional Javanese philosophy",
      featured: true,
      tags: ["indonesian", "batik", "kawung", "sacred"],
    },
  ] as Pattern[],

  // Pagination settings
  pagination: {
    itemsPerPage: 6,
    enableInfiniteScroll: false,
  },
} as const
