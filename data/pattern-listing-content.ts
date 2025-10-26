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
        main: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80",
          "https://images.unsplash.com/photo-1557672199-6a50c91e9d7f?w=800&q=80",
        ],
        thumbnail: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&q=80",
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
        main: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
        gallery: ["https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"],
        thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80",
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
        main: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80",
          "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?w=800&q=80",
        ],
        thumbnail: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=400&q=80",
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
        main: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
        gallery: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"],
        thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80",
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
        main: "https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=800&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=800&q=80",
          "https://images.unsplash.com/photo-1482128577572-fab4674cb37d?w=800&q=80",
        ],
        thumbnail: "https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=400&q=80",
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
        main: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800&q=80",
        gallery: ["https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800&q=80"],
        thumbnail: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=400&q=80",
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
        main: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&q=80",
          "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80",
        ],
        thumbnail: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=400&q=80",
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
        main: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
        gallery: ["https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80"],
        thumbnail: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&q=80",
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
        main: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80",
          "https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=800&q=80",
        ],
        thumbnail: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&q=80",
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
        main: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        gallery: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"],
        thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
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
        main: "https://images.unsplash.com/photo-1609875512779-80d1c7186e0c?w=800&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1609875512779-80d1c7186e0c?w=800&q=80",
          "https://images.unsplash.com/photo-1610736957105-e36c2e8c01f7?w=800&q=80",
        ],
        thumbnail: "https://images.unsplash.com/photo-1609875512779-80d1c7186e0c?w=400&q=80",
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
        main: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80",
        gallery: ["https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80"],
        thumbnail: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&q=80",
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
