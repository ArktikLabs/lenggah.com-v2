// Expertise categories
export type ExpertiseCategory =
  | "Our Expertise"
  | "Expert Design Advice"
  | "Product Guarantee"
  | "White Glove Delivery"

// Expertise content interface
export interface ExpertiseContent {
  id: string
  category: ExpertiseCategory
  title: string
  description: string[]
  imageUrl?: string
  link?: {
    text: string
    url: string
  }
}

export const expertiseContent = {
  heading:
    "Your creativity meets our expertise. Lenggah transforms ideas into chairs that truly yours.",

  categories: [
    "Our Expertise",
    "Expert Design Advice",
    "Product Guarantee",
    "White Glove Delivery",
  ] as ExpertiseCategory[],

  content: [
    {
      id: "expertise-001",
      category: "Our Expertise" as ExpertiseCategory,
      title: "12 years of experience",
      description: [
        "For over a decade, Lenggah has been crafting exceptional seating solutions that blend traditional Indonesian craftsmanship with contemporary design. Our journey began with a simple vision: to create furniture that tells a story and reflects the unique identity of each client.",
        "Our team of master artisans brings generations of woodworking knowledge, combining time-honored techniques with modern innovation. Every piece we create is a testament to our commitment to quality, authenticity, and the art of handcrafted furniture.",
      ],
      imageUrl: "/images/expertise/experience.jpg",
      link: {
        text: "See more",
        url: "#",
      },
    },
    {
      id: "expertise-002",
      category: "Expert Design Advice" as ExpertiseCategory,
      title: "Personalized design consultation",
      description: [
        "Our experienced design team works closely with you to understand your vision, space, and lifestyle. We provide professional guidance on materials, ergonomics, proportions, and aesthetics to ensure your custom piece perfectly fits your needs.",
        "From initial sketches to 3D renderings, we keep you involved throughout the design process. Our experts help you navigate choices in fabrics, finishes, and patterns, making sure every detail aligns with your personal style and functional requirements.",
      ],
      imageUrl: "/images/expertise/design-advice.jpg",
      link: {
        text: "See more",
        url: "#",
      },
    },
    {
      id: "expertise-003",
      category: "Product Guarantee" as ExpertiseCategory,
      title: "Quality you can trust",
      description: [
        "We stand behind every piece we create with a comprehensive warranty that covers craftsmanship and materials. Our commitment to quality means using only premium, sustainably-sourced materials and employing rigorous quality control at every stage of production.",
        "Each piece undergoes thorough inspection before delivery. Should any issues arise, our dedicated customer service team is ready to assist. We believe in building furniture that lasts generations, and our guarantee reflects that commitment to enduring quality.",
      ],
      imageUrl: "/images/expertise/guarantee.jpg",
      link: {
        text: "See more",
        url: "#",
      },
    },
    {
      id: "expertise-004",
      category: "White Glove Delivery" as ExpertiseCategory,
      title: "Premium delivery service",
      description: [
        "Our white glove delivery service ensures your custom furniture arrives in perfect condition. Our professional team handles every aspect of delivery, from careful transport to precise placement in your home. We treat your investment with the care it deserves.",
        "Delivery includes unpacking, assembly if needed, and removal of all packaging materials. We'll position your piece exactly where you want it and make any necessary adjustments. Our goal is a seamless experience from our workshop to your home.",
      ],
      imageUrl: "/images/expertise/delivery.jpg",
      link: {
        text: "See more",
        url: "#",
      },
    },
  ] as ExpertiseContent[],

  // Pagination settings
  pagination: {
    itemsPerPage: 1,
  },
} as const
