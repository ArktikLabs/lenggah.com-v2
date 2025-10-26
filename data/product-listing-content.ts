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
        main: "/images/products/chair-001-main.jpg",
        gallery: [
          "/images/products/chair-001-1.jpg",
          "/images/products/chair-001-2.jpg",
          "/images/products/chair-001-3.jpg",
        ],
        thumbnail: "/images/products/chair-001-thumb.jpg",
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
        main: "/images/products/chair-002-main.jpg",
        gallery: [
          "/images/products/chair-002-1.jpg",
          "/images/products/chair-002-2.jpg",
        ],
        thumbnail: "/images/products/chair-002-thumb.jpg",
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
        main: "/images/products/chair-003-main.jpg",
        gallery: ["/images/products/chair-003-1.jpg"],
        thumbnail: "/images/products/chair-003-thumb.jpg",
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
        main: "/images/products/sofa-001-main.jpg",
        gallery: [
          "/images/products/sofa-001-1.jpg",
          "/images/products/sofa-001-2.jpg",
          "/images/products/sofa-001-3.jpg",
          "/images/products/sofa-001-4.jpg",
        ],
        thumbnail: "/images/products/sofa-001-thumb.jpg",
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
        main: "/images/products/stool-001-main.jpg",
        gallery: ["/images/products/stool-001-1.jpg"],
        thumbnail: "/images/products/stool-001-thumb.jpg",
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
        main: "/images/products/cushion-001-main.jpg",
        gallery: [
          "/images/products/cushion-001-1.jpg",
          "/images/products/cushion-001-2.jpg",
        ],
        thumbnail: "/images/products/cushion-001-thumb.jpg",
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
        main: "/images/products/chair-004-main.jpg",
        gallery: [
          "/images/products/chair-004-1.jpg",
          "/images/products/chair-004-2.jpg",
        ],
        thumbnail: "/images/products/chair-004-thumb.jpg",
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
        main: "/images/products/sofa-002-main.jpg",
        gallery: [
          "/images/products/sofa-002-1.jpg",
          "/images/products/sofa-002-2.jpg",
          "/images/products/sofa-002-3.jpg",
        ],
        thumbnail: "/images/products/sofa-002-thumb.jpg",
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
        main: "/images/products/ottoman-001-main.jpg",
        gallery: ["/images/products/ottoman-001-1.jpg"],
        thumbnail: "/images/products/ottoman-001-thumb.jpg",
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
        main: "/images/products/chair-005-main.jpg",
        gallery: [
          "/images/products/chair-005-1.jpg",
          "/images/products/chair-005-2.jpg",
          "/images/products/chair-005-3.jpg",
        ],
        thumbnail: "/images/products/chair-005-thumb.jpg",
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
        main: "/images/products/lounge-001-main.jpg",
        gallery: [
          "/images/products/lounge-001-1.jpg",
          "/images/products/lounge-001-2.jpg",
        ],
        thumbnail: "/images/products/lounge-001-thumb.jpg",
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
        main: "/images/products/table-001-main.jpg",
        gallery: ["/images/products/table-001-1.jpg"],
        thumbnail: "/images/products/table-001-thumb.jpg",
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
