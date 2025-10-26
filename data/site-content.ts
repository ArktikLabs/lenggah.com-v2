/**
 * Single Source of Truth (SSOT) for all site content
 * Update content here and it will reflect across the entire site
 */

export const siteContent = {
  // Hero Section Slides
  hero: {
    slides: [
      {
        title: "Crafted For The One Who Seek Authenticity",
        description:
          "Authenticity isn't found in mass production, but in choices only you can make. Let's create the chair you envisioned and make it truly yours.",
      },
      {
        title: "Design Your Perfect Seating Experience",
        description:
          "From concept to creation, we transform your vision into a masterpiece. Every stitch, every curve, crafted to reflect your unique style.",
      },
      {
        title: "Where Comfort Meets Craftsmanship",
        description:
          "Experience the perfect blend of traditional techniques and modern design. Each piece is handcrafted with attention to detail and built to last.",
      },
    ],
    autoSlideInterval: 5000, // milliseconds
  },

  // Custom Seat Section
  customSeat: {
    heading:
      "Custom your seat where every detail speaks your identity and story",
    subheading:
      "Start your custom chair journey and book a private session today",
    features: [
      { label: "12 Years of Trust" },
      { label: "Expert Design Advice" },
      { label: "Product Guarantee" },
      { label: "White Glove Delivery" },
    ],
  },

  // Expertise Section
  expertise: {
    heading:
      "Your creativity meets our expertise. Lenggah transforms ideas into chairs that truly yours.",
    categories: [
      "Our Expertise",
      "Expert Design Advice",
      "Product Guarantee",
      "White Glove Delivery",
    ],
    content: {
      title: "12 years of experience",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  },

  // Instagram Section
  instagram: {
    heading: "@lenggah.works\nFollow Us on Instagram",
    handle: "@lenggah.works",
    buttonText: "Follow Us",
  },

  // Consultation Form
  consultation: {
    heading: "Book Consultation",
    description:
      "Transform your ideas into a chair that's authentically yours. Fill out the form below, and our team will guide you from concept to creation, turning your concepts into a chair that reflects your style and identity.",
  },

  // Navigation
  navigation: {
    categories: [
      "Latest",
      "Our Signatures",
      "Chairs",
      "Sofas",
      "Puffs & Stools",
      "Accessories",
      "Create From the Scratch",
    ],
  },

  // Footer
  footer: {
    tagline: "Seat Authentically Yours",
    sections: {
      about: {
        title: "About",
        links: [
          { label: "Services", href: "#" },
          { label: "Portfolio", href: "#" },
          { label: "Testimonials", href: "#" },
        ],
      },
      works: {
        title: "Works",
        links: [
          { label: "Interior Design", href: "#" },
          { label: "Custom Furniture", href: "#" },
          { label: "Renovation", href: "#" },
        ],
      },
      contact: {
        title: "Contact",
        phone: "+62 813-8628-8099",
        email: "hello@lenggah.com",
        address:
          "Jl. Munggang Gg. H. Guntong Jl. Munggang Gg. H. Guntong RT 10/RW 4, Kel. Balekambang, Jakarta Timur 13530",
      },
    },
    copyright: "© 2025 Lenggah. All rights reserved.",
    developer: "Developed by Artik",
  },
} as const;
