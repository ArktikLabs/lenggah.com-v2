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
        "With over 12 years of experience in civil construction and interior design, we know what it takes to bring spaces to life, from concept to creation. Before Lenggah, we spent more than a decade serving the interior needs of the community under the name Ada Tukang, delivering solutions that combined functionality with thoughtful design. Along the way, we partnered with large companies in the B2B sector, honing our expertise in creating environments that inspire and perform.",
        "Our journey in B2C began in Jabodetabek and has since expanded to serving clients across Indonesia. Over the years, we have grown not only in capacity but in insight, guided by the knowledge of experienced local interior designers and deep research into people's preferences and lifestyles.",
        "This experience forms the foundation of Lenggah, a brand dedicated to offering premium interior solutions that resonate with modern tastes. We combine minimalist design with elegant patterns, producing pieces that are as beautiful as they are functional. Every item is crafted with premium materials that guarantee comfort, durability, and quality, ensuring each creation feels as special as it is built to last.",
        "At Lenggah, we don't just design spaces. We craft experiences. Every detail reflects careful consideration of your style, your space, and the way you live, turning interiors into personalized expressions of beauty and purpose.",
      ],
      imageUrl: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
    },
    {
      id: "expertise-002",
      category: "Expert Design Advice" as ExpertiseCategory,
      title: "Design expert companions who turn your ideas into reality",
      description: [
        "We understand the frustration of working with custom services that feel one-sided. Often, they only take your brief and, if the result isn't what you hoped for, the responsibility falls entirely on you. That's why we approach things differently. From the very first idea to the moment your custom chair is ready, we walk alongside you, exploring possibilities and discussing options together. We see ourselves as your design companion, making sure every choice fits your style, your space, and the way you live.",
        "We begin by understanding what inspires you. Whether it's a moodboard, a quick sketch, or just a feeling you want your space to have, we listen and explore your vision together. Then, we actively reach out to share tailored ideas, discuss options, and guide you step by step. If you'd like to dive deeper, we can arrange a relaxed online design session to brainstorm and refine the details together.",
        "Every detail, from the model to the fabric to the finish is considered together. We blend your ideas with our experience to make choices that are thoughtful, practical, and beautiful. Every step is collaborative, so the final piece reflects your taste and your space perfectly.",
        "Each chair is handcrafted to order, designed to combine personality with functionality. The result is a bespoke piece that fits your home, reflects your lifestyle, and turns everyday moments into something meaningful. With us by your side, creating a chair is not just about design—it's about shaping something personal and made just for you.",
      ],
      imageUrl: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80",
    },
    {
      id: "expertise-003",
      category: "Product Guarantee" as ExpertiseCategory,
      title: "Trusted Quality and Guarantee",
      description: [
        "With over 12 years of experience, we trust in the quality of every craft and the materials we carefully select. We craft every products with care using materials and construction designed to last. To ensure your confidence, we provide a 3 year warranty on the structural frame, seat and back cushions, armchairs, sofa beds, and selected accessories. Full terms and conditions are available in our warranty brochure.",
        `What is Included
        This warranty covers domestic use and protects against manufacturing or material defects in:
        - Frames and structural components
        - Seat and back cushions
        - Armchairs and sofas
        - Some of accessory parts`,
        `What is Not Included
        This warranty does not apply to:
        - Covers made of fabric, leather, or coated materials
        - Pouffes or some lounge chairs
        - Accessories outside the warranty list
        - Damage from incorrect assembly, misuse, improper cleaning, or modifications
        - Natural wear, stains, scratches, or accidental damage`,
        "With Lenggah, you are not just getting a well-design furniture. You are getting furniture that built with care, tested for longevity, and supported by a guarantee that keeps your home comfortable and worry-free.",
      ],
      imageUrl: "https://images.unsplash.com/photo-1565120130276-dfbd9a7a3ad7?w=800&q=80",
    },
    {
      id: "expertise-004",
      category: "White Glove Delivery" as ExpertiseCategory,
      title: "White Glove Delivery Service",
      description: [
        "Your experience with Lenggah does not end when your chair is complete. It continues until it reaches your home, just as perfect as when it left our workshop.",
        "Within the Jabodetabek area, we provide a dedicated White Glove Delivery service handled by our trained two-person team. Each piece is carefully packed in a custom heavy-duty box that protects it from dust, weather, and impact during transport. From the moment it leaves our studio, your chair is in safe hands.",
        "When it arrives, our team will bring it directly into your home, unpack it carefully, and position it in your chosen space. We handle every detail with quiet precision, leaving no mess behind, only the comfort of something beautifully made, ready to be enjoyed.",
        "To ensure a smooth delivery experience, please take a moment to review your doorway and room dimensions, especially for large armchairs or sofas, so we can place your piece effortlessly where it belongs.",
      ],
      imageUrl: "https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?w=800&q=80",
    },
  ] as ExpertiseContent[],

  // Pagination settings
  pagination: {
    itemsPerPage: 1,
  },
} as const;
