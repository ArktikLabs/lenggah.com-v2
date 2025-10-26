/**
 * Product Listing Data
 * Single source of truth for all product-related content
 */

export type ProductCategory =
  | "Latest"
  | "Our Signatures"
  | "Chairs"
  | "Sofas"
  | "Puffs & Stools"
  | "Accessories";

export type ProductColor =
  | "Beige"
  | "Brown"
  | "Black"
  | "White"
  | "Gray"
  | "Navy"
  | "Teal"
  | "Orange"
  | "Natural";

export type ProductStyle =
  | "Modern"
  | "Contemporary"
  | "Minimalist"
  | "Scandinavian"
  | "Industrial"
  | "Traditional"
  | "Mid-Century"
  | "Bohemian";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: {
    amount: number;
    currency: string;
    formatted: string;
  };
  images: {
    main: string;
    gallery: string[];
    thumbnail: string;
  };
  category: ProductCategory;
  colors: ProductColor[];
  style: ProductStyle;
  dimensions?: {
    width: number;
    depth: number;
    height: number;
    unit: "cm" | "inch";
  };
  materials?: string[];
  inStock: boolean;
  featured?: boolean;
  tags?: string[];
}

export const productListingContent = {
  // Section heading
  heading:
    "Explore the range of chairs designed by Lenggah to match your taste, lifestyle, and space.",

  // Categories for navigation
  categories: [
    "Latest",
    "Our Signatures",
    "Chairs",
    "Sofas",
    "Puffs & Stools",
    "Accessories",
  ] as ProductCategory[],

  // Filter options
  filters: {
    colors: [
      "Beige",
      "Brown",
      "Black",
      "White",
      "Gray",
      "Navy",
      "Teal",
      "Orange",
      "Natural",
    ] as ProductColor[],
    styles: [
      "Modern",
      "Contemporary",
      "Minimalist",
      "Scandinavian",
      "Industrial",
      "Traditional",
      "Mid-Century",
      "Bohemian",
    ] as ProductStyle[],
    priceRanges: [
      { label: "Under 5M", min: 0, max: 5000000 },
      { label: "5M - 10M", min: 5000000, max: 10000000 },
      { label: "10M - 20M", min: 10000000, max: 20000000 },
      { label: "Above 20M", min: 20000000, max: Infinity },
    ],
  },

  // Sidebar content
  sidebar: {
    signatureCollection: {
      title: "Lenggah Signature Collection",
      description:
        "Explore our Signature Collection. Timeless pieces that embody Lenggah's finest craftsmanship, designed to bring authenticity and character into every space.",
    },
    customPrompt: {
      text: "Looking for something else or want to refine a piece from our collection?",
      buttonText: "Contact Us",
    },
  },

  // Sort options
  sortOptions: [
    { value: "default", label: "Default" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "name-asc", label: "Name: A-Z" },
    { value: "name-desc", label: "Name: Z-A" },
    { value: "newest", label: "Newest First" },
  ],

  // Products data
  products: [
    {
      id: "prod-001",
      name: "Modern Teak Lounge Chair",
      description:
        "Handcrafted lounge chair with premium teak wood frame and custom upholstery. Perfect for living rooms and reading corners.",
      price: {
        amount: 9999999,
        currency: "IDR",
        formatted: "Start from Rp 9.999.999",
      },
      images: {
        main: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
          "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&q=80",
          "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=800&q=80",
        ],
        thumbnail: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80",
      },
      category: "Chairs" as ProductCategory,
      colors: ["Beige", "Brown", "Natural"] as ProductColor[],
      style: "Scandinavian" as ProductStyle,
      dimensions: {
        width: 75,
        depth: 85,
        height: 90,
        unit: "cm" as const,
      },
      materials: ["Teak Wood", "Premium Fabric", "High-Density Foam"],
      inStock: true,
      featured: true,
      tags: ["lounge", "wooden", "handcrafted"],
    },
    {
      id: "prod-002",
      name: "Contemporary Fabric Armchair",
      description:
        "Elegant armchair featuring contemporary design with plush cushioning and durable fabric upholstery.",
      price: {
        amount: 8500000,
        currency: "IDR",
        formatted: "Start from Rp 8.500.000",
      },
      images: {
        main: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
          "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=80",
        ],
        thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80",
      },
      category: "Chairs" as ProductCategory,
      colors: ["Gray", "Navy", "Beige"] as ProductColor[],
      style: "Contemporary" as ProductStyle,
      dimensions: {
        width: 70,
        depth: 80,
        height: 85,
        unit: "cm" as const,
      },
      materials: ["Hardwood Frame", "Premium Linen", "Memory Foam"],
      inStock: true,
      featured: false,
      tags: ["contemporary", "armchair", "comfort"],
    },
    {
      id: "prod-003",
      name: "Minimalist Dining Chair Set",
      description:
        "Set of 4 minimalist dining chairs with clean lines and ergonomic design. Ideal for modern dining spaces.",
      price: {
        amount: 12000000,
        currency: "IDR",
        formatted: "Start from Rp 12.000.000",
      },
      images: {
        main: "https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=80",
        gallery: ["https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=80"],
        thumbnail: "https://images.unsplash.com/photo-1503602642458-232111445657?w=400&q=80",
      },
      category: "Chairs" as ProductCategory,
      colors: ["White", "Black", "Natural"] as ProductColor[],
      style: "Minimalist" as ProductStyle,
      dimensions: {
        width: 45,
        depth: 50,
        height: 80,
        unit: "cm" as const,
      },
      materials: ["Oak Wood", "Metal Legs", "Leather Seat"],
      inStock: true,
      featured: true,
      tags: ["dining", "minimalist", "set"],
    },
    {
      id: "prod-004",
      name: "Signature Velvet Sofa",
      description:
        "Luxurious 3-seater sofa upholstered in premium velvet with deep cushioning for ultimate comfort.",
      price: {
        amount: 25000000,
        currency: "IDR",
        formatted: "Start from Rp 25.000.000",
      },
      images: {
        main: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
          "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80",
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
          "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=800&q=80",
        ],
        thumbnail: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
      },
      category: "Sofas" as ProductCategory,
      colors: ["Teal", "Navy", "Gray"] as ProductColor[],
      style: "Modern" as ProductStyle,
      dimensions: {
        width: 220,
        depth: 95,
        height: 85,
        unit: "cm" as const,
      },
      materials: ["Hardwood Frame", "Velvet Upholstery", "Feather Fill"],
      inStock: true,
      featured: true,
      tags: ["sofa", "velvet", "luxury", "signature"],
    },
    {
      id: "prod-005",
      name: "Industrial Bar Stool",
      description:
        "Adjustable height bar stool with industrial aesthetic. Features metal frame and wooden seat.",
      price: {
        amount: 3500000,
        currency: "IDR",
        formatted: "Start from Rp 3.500.000",
      },
      images: {
        main: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=800&q=80",
        gallery: ["https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=800&q=80"],
        thumbnail: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=400&q=80",
      },
      category: "Puffs & Stools" as ProductCategory,
      colors: ["Black", "Brown", "Natural"] as ProductColor[],
      style: "Industrial" as ProductStyle,
      dimensions: {
        width: 40,
        depth: 40,
        height: 95,
        unit: "cm" as const,
      },
      materials: ["Metal Frame", "Reclaimed Wood", "Rubber Padding"],
      inStock: true,
      featured: false,
      tags: ["bar stool", "industrial", "adjustable"],
    },
    {
      id: "prod-006",
      name: "Handwoven Cushion Collection",
      description:
        "Set of decorative cushions featuring traditional Indonesian weaving patterns. Perfect accent pieces.",
      price: {
        amount: 1500000,
        currency: "IDR",
        formatted: "Start from Rp 1.500.000",
      },
      images: {
        main: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&q=80",
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
        ],
        thumbnail: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400&q=80",
      },
      category: "Accessories" as ProductCategory,
      colors: ["Orange", "Teal", "Beige", "Brown"] as ProductColor[],
      style: "Bohemian" as ProductStyle,
      materials: ["Cotton", "Traditional Weaving", "Poly Fill"],
      inStock: true,
      featured: false,
      tags: ["cushion", "handwoven", "traditional", "accessories"],
    },
    {
      id: "prod-007",
      name: "Mid-Century Accent Chair",
      description:
        "Classic mid-century design with tapered wooden legs and button-tufted backrest. A timeless addition to any room.",
      price: {
        amount: 7800000,
        currency: "IDR",
        formatted: "Start from Rp 7.800.000",
      },
      images: {
        main: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80",
          "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80",
        ],
        thumbnail: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&q=80",
      },
      category: "Chairs" as ProductCategory,
      colors: ["Orange", "Teal", "Gray"] as ProductColor[],
      style: "Mid-Century" as ProductStyle,
      dimensions: {
        width: 68,
        depth: 75,
        height: 82,
        unit: "cm" as const,
      },
      materials: ["Walnut Wood", "Linen Blend", "Foam Padding"],
      inStock: true,
      featured: true,
      tags: ["accent", "mid-century", "retro"],
    },
    {
      id: "prod-008",
      name: "Scandinavian L-Shaped Sofa",
      description:
        "Spacious L-shaped sofa with clean Scandinavian lines. Perfect for modern living spaces and family gatherings.",
      price: {
        amount: 32000000,
        currency: "IDR",
        formatted: "Start from Rp 32.000.000",
      },
      images: {
        main: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=80",
          "https://images.unsplash.com/photo-1598300188592-f31ed26fc223?w=800&q=80",
          "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80",
        ],
        thumbnail: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400&q=80",
      },
      category: "Sofas" as ProductCategory,
      colors: ["Beige", "Gray", "White"] as ProductColor[],
      style: "Scandinavian" as ProductStyle,
      dimensions: {
        width: 280,
        depth: 180,
        height: 80,
        unit: "cm" as const,
      },
      materials: ["Pine Frame", "Premium Cotton", "High-Resilience Foam"],
      inStock: true,
      featured: true,
      tags: ["l-shape", "scandinavian", "sectional"],
    },
    {
      id: "prod-009",
      name: "Traditional Teak Ottoman",
      description:
        "Handcrafted ottoman with intricate carvings. Features traditional Indonesian motifs and plush cushioning.",
      price: {
        amount: 4500000,
        currency: "IDR",
        formatted: "Start from Rp 4.500.000",
      },
      images: {
        main: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&q=80",
        gallery: ["https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&q=80"],
        thumbnail: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400&q=80",
      },
      category: "Puffs & Stools" as ProductCategory,
      colors: ["Brown", "Natural"] as ProductColor[],
      style: "Traditional" as ProductStyle,
      dimensions: {
        width: 60,
        depth: 60,
        height: 45,
        unit: "cm" as const,
      },
      materials: ["Carved Teak", "Batik Fabric", "Dense Foam"],
      inStock: true,
      featured: false,
      tags: ["ottoman", "traditional", "carved"],
    },
    {
      id: "prod-010",
      name: "Modern Leather Recliner",
      description:
        "Premium leather recliner with adjustable positions and built-in footrest. Ultimate comfort for relaxation.",
      price: {
        amount: 18500000,
        currency: "IDR",
        formatted: "Start from Rp 18.500.000",
      },
      images: {
        main: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80",
          "https://images.unsplash.com/photo-1519710889408-a991c7e0f9c3?w=800&q=80",
          "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&q=80",
        ],
        thumbnail: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&q=80",
      },
      category: "Chairs" as ProductCategory,
      colors: ["Black", "Brown"] as ProductColor[],
      style: "Modern" as ProductStyle,
      dimensions: {
        width: 90,
        depth: 100,
        height: 105,
        unit: "cm" as const,
      },
      materials: ["Top-Grain Leather", "Steel Frame", "Memory Foam"],
      inStock: true,
      featured: true,
      tags: ["recliner", "leather", "comfort"],
    },
    {
      id: "prod-011",
      name: "Bohemian Rattan Lounge Set",
      description:
        "Natural rattan lounge set with colorful cushions. Brings a relaxed, tropical vibe to any space.",
      price: {
        amount: 15000000,
        currency: "IDR",
        formatted: "Start from Rp 15.000.000",
      },
      images: {
        main: "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=800&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=800&q=80",
          "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80",
        ],
        thumbnail: "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=400&q=80",
      },
      category: "Sofas" as ProductCategory,
      colors: ["Natural", "Beige", "Orange"] as ProductColor[],
      style: "Bohemian" as ProductStyle,
      dimensions: {
        width: 180,
        depth: 90,
        height: 75,
        unit: "cm" as const,
      },
      materials: ["Natural Rattan", "Woven Wicker", "Cotton Cushions"],
      inStock: true,
      featured: false,
      tags: ["rattan", "bohemian", "tropical", "set"],
    },
    {
      id: "prod-012",
      name: "Contemporary Marble Coffee Table",
      description:
        "Elegant coffee table with genuine marble top and brass-finished legs. A statement piece for modern interiors.",
      price: {
        amount: 8900000,
        currency: "IDR",
        formatted: "Start from Rp 8.900.000",
      },
      images: {
        main: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=800&q=80",
        gallery: ["https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=800&q=80"],
        thumbnail: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=400&q=80",
      },
      category: "Accessories" as ProductCategory,
      colors: ["White", "Black", "Gray"] as ProductColor[],
      style: "Contemporary" as ProductStyle,
      dimensions: {
        width: 120,
        depth: 60,
        height: 45,
        unit: "cm" as const,
      },
      materials: ["Marble", "Brass", "Powder-Coated Metal"],
      inStock: true,
      featured: false,
      tags: ["coffee table", "marble", "contemporary"],
    },
  ] as Product[],

  // Pagination settings
  pagination: {
    itemsPerPage: 6,
    showDots: true,
  },
} as const;
