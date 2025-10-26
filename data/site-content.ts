/**
 * Single Source of Truth (SSOT) for all site content
 * Update content here and it will reflect across the entire site
 */

export const siteContent = {
  // Hero Section Slides
  hero: {
    slides: [
      {
        title: "Crafted for The One Who Seek Authenticity",
        description:
          "Authenticity isn’t found in mass production, but in choices only you can make. Let’s create the chair you envisioned and make it truly yours.",
        ctaText: "See How It Works",
        ctaLink: "#how-it-works",
      },
      {
        title: "Choose A Seat That Feels Truly Yours",
        description:
          "Every curve, every texture, every detail of Our Signature is made to stand apart. Crafted for those who see beauty in precision and purpose.",
        ctaText: "See Our Collections",
        ctaLink: "#listing",
      },
      {
        title: "Reupholster the Seat You’ll Love Even More",
        description:
          "Refresh your upholstery to reflect your true taste. Lenggah’s expertise helps turn your vision into the seat you’ll love even more.",
        ctaText: "See How It Works",
        ctaLink: "#custom-seat",
      },
    ],
    autoSlideInterval: 5000, // milliseconds
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
          "Jl. Munggang Gg. H. Guntong RT 10/RW 4, Kel. Balekambang, Jakarta Timur 13530",
      },
    },
    copyright: "© 2025 Lenggah. All rights reserved.",
    developer: "Developed by Artik",
  },
} as const;
