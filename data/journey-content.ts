// Journey categories
export type JourneyCategory =
  | "Create From Your Scratch"
  | "Customise Our Signature"
  | "Reupholster Your Seat"

// Journey step interface
export interface JourneyStep {
  id: string
  title: string
  body: string
  imageUrl?: string
  order: number
}

// Journey interface
export interface Journey {
  category: JourneyCategory
  steps: JourneyStep[]
}

export const journeyContent = {
  heading: "Discover your journey with Lenggah. Explore what fits you best.",

  categories: [
    "Create From Your Scratch",
    "Customise Our Signature",
    "Reupholster Your Seat",
  ] as JourneyCategory[],

  journeys: [
    {
      category: "Create From Your Scratch" as JourneyCategory,
      steps: [
        {
          id: "scratch-001",
          title: "Share Your Vision",
          body: "Tell us about your dream seating. Share your ideas, inspirations, and requirements. Our design team will work with you to understand your unique style and functional needs.",
          imageUrl: "/images/journey/scratch-vision.jpg",
          order: 1,
        },
        {
          id: "scratch-002",
          title: "Design Development",
          body: "We'll create detailed sketches and 3D renders based on your vision. Choose materials, fabrics, colors, and finishes. Make revisions until the design perfectly matches your expectations.",
          imageUrl: "/images/journey/scratch-design.jpg",
          order: 2,
        },
        {
          id: "scratch-003",
          title: "Expert Craftsmanship",
          body: "Our skilled artisans bring your design to life. Using premium materials and traditional techniques combined with modern precision. Regular updates keep you informed throughout the crafting process.",
          imageUrl: "/images/journey/scratch-craft.jpg",
          order: 3,
        },
      ],
    },
    {
      category: "Customise Our Signature" as JourneyCategory,
      steps: [
        {
          id: "custom-001",
          title: "Choose Your Base",
          body: "Select from our curated collection of signature designs. Each piece represents our finest craftsmanship and timeless aesthetics. Find the design that resonates with your style.",
          imageUrl: "/images/journey/custom-base.jpg",
          order: 1,
        },
        {
          id: "custom-002",
          title: "Personalize Details",
          body: "Customize fabrics, patterns, colors, and finishes to match your space. Add your personal touch while maintaining the integrity of our signature design. Preview your customizations in real-time.",
          imageUrl: "/images/journey/custom-personalize.jpg",
          order: 2,
        },
        {
          id: "custom-003",
          title: "Handcrafted For You",
          body: "Your customized piece is meticulously crafted by our master artisans. We ensure every detail meets our high standards and your specific requirements. Quality checked before delivery to your home.",
          imageUrl: "/images/journey/custom-craft.jpg",
          order: 3,
        },
      ],
    },
    {
      category: "Reupholster Your Seat" as JourneyCategory,
      steps: [
        {
          id: "reupholster-001",
          title: "Assessment & Consultation",
          body: "Bring or send photos of your beloved furniture. Our experts assess the condition and discuss restoration possibilities. We'll advise on the best approach to bring your piece back to life.",
          imageUrl: "/images/journey/reupholster-assess.jpg",
          order: 1,
        },
        {
          id: "reupholster-002",
          title: "Select New Materials",
          body: "Choose from our extensive collection of premium fabrics and materials. Select patterns that complement your existing decor. Our team helps you find the perfect combination for your refreshed piece.",
          imageUrl: "/images/journey/reupholster-materials.jpg",
          order: 2,
        },
        {
          id: "reupholster-003",
          title: "Expert Restoration",
          body: "Our craftsmen carefully dismantle, repair, and reupholster your furniture. Structural repairs ensure longevity. Traditional techniques preserve the character while giving it new life.",
          imageUrl: "/images/journey/reupholster-restore.jpg",
          order: 3,
        },
      ],
    },
  ] as Journey[],

  // Pagination settings
  pagination: {
    itemsPerPage: 3,
  },
} as const
