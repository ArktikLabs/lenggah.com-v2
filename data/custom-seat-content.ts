// Feature interface
export interface Feature {
  icon: "star" | "chair" | "sparkles" | "truck"
  label: string
  description?: string
}

export const customSeatContent = {
  // Main CTA section
  cta: {
    heading:
      "Custom your seat where every detail speaks your identity and story",
    subheading: "Start your custom chair journey and book a private session today",
    buttonText: "Contact Us",
    buttonLink: "/#contact",
  },

  // Features section
  features: [
    {
      icon: "star" as const,
      label: "12 Years of Trust",
      description: "Over a decade of crafting exceptional seating solutions",
    },
    {
      icon: "chair" as const,
      label: "Expert Design Advice",
      description: "Professional guidance from experienced designers",
    },
    {
      icon: "sparkles" as const,
      label: "Product Guarantee",
      description: "Quality assurance on all our handcrafted pieces",
    },
    {
      icon: "truck" as const,
      label: "White Glove Delivery",
      description: "Premium delivery and installation service",
    },
  ] as Feature[],
} as const
