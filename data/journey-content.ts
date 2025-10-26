// Journey categories
export type JourneyCategory =
  | "Create From Your Scratch"
  | "Buying Our Signature"
  | "Reupholster Your Seat";

// Journey step interface
export interface JourneyStep {
  id: string;
  title: string;
  body: string;
  imageUrl?: string;
  order: number;
}

// Journey interface
export interface Journey {
  category: JourneyCategory;
  steps: JourneyStep[];
}

export const journeyContent = {
  heading: "Discover your journey with Lenggah. Explore what fits you best.",

  categories: [
    "Create From Your Scratch",
    "Buying Our Signature",
    "Reupholster Your Seat",
  ] as JourneyCategory[],

  journeys: [
    {
      category: "Create From Your Scratch" as JourneyCategory,
      steps: [
        {
          id: "scratch-001",
          title: "Step 1: Tell Us Your Vision",
          body: "Let's begin with your story. Share a few simple details about what you're looking for, your space, your preferred style, and your budget range. You can also upload screenshots or photos of references you love, any moodboards, sketches, or fabric inspirations that reflect your taste. If you already have something in mind, feel free to include rough sketches or quick doodles that show the layout or mood you're imagining. This helps us understand your vision clearly, so we can shape it into something real.",
          imageUrl: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&q=80",
          order: 1,
        },
        {
          id: "scratch-002",
          title: "Step 2: Design Consultation",
          body: `Our Design Advisor will review your preferences and get a feel for your personal style.

We'll reach out through a quick call or email to explore ideas together.
If needed, we can arrange a complimentary online design session, relaxed and personal, just to make sure every detail feels right for you.`,
          imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
          order: 2,
        },
        {
          id: "scratch-003",
          title: "Step 3: Fabric Samples",
          body: "See and feel the fabrics before you decide. We'll send the samples directly to you via delivery. If you prefer an in-person discussion to explore materials and ideas together with our design advisor, we offer private consultation visits for clients within the Greater Jakarta area (Jabodetabek).  Please note: sample materials and delivery may include an additional cost, as listed on Lenggah's official Shopee marketplace. For in-person discussions, a consultation fee of approximately IDR 200,000 per visit applies.",
          imageUrl: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80",
          order: 3,
        },
        {
          id: "scratch-004",
          title: "Step 4: Quotations",
          body: `After your fabric and model preferences are set, we'll prepare a personalised quotation just for you.

Need to compare a few options? No problem. We can provide multiple quotations for different combinations, so you can make the best decision for your space.

The quotation will also include  delivery costs, both for clients within Jabodetabek and outside the area, so you will have a clear understanding of the total service cost before confirming your order.`,
          imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
          order: 4,
        },
        {
          id: "scratch-005",
          title: "Step 5: Placing Your Order",
          body: "When you're ready, we'll finalise your order and provide a clear production timeline. You'll receive an email containing the final quotation and a payment link via Lenggah's official Shopee marketplace. Once payment is confirmed, we'll invite you to a dedicated WhatsApp group, connecting you directly with our project manager and chair craftsmen. You'll receive updates throughout each production stage, ensuring full transparency and peace of mind as your custom piece comes to life.",
          imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
          order: 5,
        },
        {
          id: "scratch-006",
          title: "Step 6: Delivery within Jabodetabek",
          body: `Before we deliver your custom piece, we will share a Quality Control (QC) update that includes tests for strength, welding, stitching, and overall finish to ensure everything meets our standards.

For deliveries within the Greater Jakarta area (Jabodetabek):
Our delivery team will contact you to schedule a convenient date and time window. On delivery day, you will receive a text update one hour before arrival. We will bring your piece into your home, unpack it carefully, and take the packaging with us, leaving you to enjoy the comfort and craftsmanship made just for you.

For orders outside Jabodetabek:
We partner with trusted logistics providers to ensure your item arrives safely and securely. Each piece is professionally wrapped and packed with layered protection, so it reaches you in perfect condition, and ready to be unboxed and enjoyed.`,
          imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
          order: 6,
        },
      ],
    },
    {
      category: "Buying Our Signature" as JourneyCategory,
      steps: [
        {
          id: "custom-001",
          title: "Step 1: Choose Lenggah Signature",
          body: "Browse our curated Signature Lenggah collection and find the chair that speaks to you. Each design is thoughtfully crafted and ready to order, featuring timeless shapes and distinctive patterns from our exclusive fabric selections.",
          imageUrl: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=80",
          order: 1,
        },
        {
          id: "custom-002",
          title: "Step 2: Fabric sample service",
          body: `Personalise your piece by choosing from our available fabric options. You can view them directly on our marketplace or request fabric samples to see and feel the materials before you decide.
Please note: sample materials and delivery may include an additional cost, as listed on Lenggah's official Shopee marketplace.`,
          imageUrl: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80",
          order: 2,
        },
        {
          id: "custom-003",
          title: "Step 3: Confirm and Order",
          body: `Once you've selected your preferred seat, place your order through Lenggah's official Shopee marketplace.

Please include your WhatsApp number in the notes section when completing your purchase. You'll receive a confirmation message via our official WhatsApp Business account, along with your production timeline.

For delivery within the Greater Jakarta area (Jabodetabek):
We use our own dedicated delivery team to ensure your piece arrives safely and is handled with care.

For areas outside Jabodetabek:
We work with trusted logistics providers to ensure your item arrives safely and securely

For detailed shipping information and cost estimates, please contact our admin team or reach out via Shopee chat.`,
          imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
          order: 3,
        },
        {
          id: "custom-004",
          title: "Step 4: Production and Updates",
          body: `Our craftsmen will begin handcrafting your chair to order. You'll receive progress updates through messages from our official WhatsApp Business account, so you can stay informed and connected at every stage of the process.`,
          imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
          order: 4,
        },
        {
          id: "custom-005",
          title: "Step 5: Delivery",
          body: `Before we deliver your custom piece, we will share a Quality Control (QC) update that includes tests for strength, welding, stitching, and overall finish to ensure everything meets our standards.

For deliveries within the Greater Jakarta area (Jabodetabek):
Our delivery team will contact you to schedule a convenient date and time window. On delivery day, you will receive a text update one hour before arrival. We will bring your piece into your home, unpack it carefully, and take the packaging with us, leaving you to enjoy the comfort and craftsmanship made just for you.

For orders outside Jabodetabek:
Each piece is professionally wrapped and packed with layered protection, so it reaches you in perfect condition, ready to be unboxed and enjoyed.`,
          imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
          order: 5,
        },
      ],
    },
    {
      category: "Reupholster Your Seat" as JourneyCategory,
      steps: [
        {
          id: "reupholster-001",
          title: "Step 1: Share your vision",
          body: `Start your journey by uploading photos of your existing chair and noting down its dimensions — especially the parts you'd like to repair or reupholster. Then, answer a few quick questions about your preferences and requirements.

This helps us clearly understand your vision, style, and budget, so we can bring your renewed piece to life just the way you imagine it.`,
          imageUrl: "https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?w=800&q=80",
          order: 1,
        },
        {
          id: "reupholster-002",
          title: "Step 2: Design Advice",
          body: `One of our Design Advisors will carefully review your preferences to get a clear sense of your style and needs.
We'll reach out by either phone call or email first to explore your options together, and if it helps, we can follow up with a complimentary online design advice meeting - whatever feels right for you. Guiding you every step of the way in creating custom made chairs tailored for you and your home.`,
          imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
          order: 2,
        },
        {
          id: "reupholster-003",
          title: "Step 3: Fabric sample service",
          body: `See and feel the fabrics before you decide. We'll send the samples directly to you via delivery. If you prefer an in-person discussion to explore materials and ideas together with our design advisor, we offer private consultation visits for clients within the Greater Jakarta area (Jabodetabek).  Please note: sample materials and delivery may include an additional cost, as listed on Lenggah's official Shopee marketplace.
For in-person discussions, a consultation fee of approximately IDR 200,000 per visit applies.`,
          imageUrl: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80",
          order: 3,
        },
        {
          id: "reupholster-004",
          title: "Step 4: Quotations",
          body: `After your fabric and model preferences are set, we'll prepare a personalised quotation just for you.

Need to compare a few options? No problem. We can provide multiple quotations for different combinations, so you can make the best decision for your space.

The quotation will also include pickup and delivery costs, both for clients within Jabodetabek and outside the area, so you will have a clear understanding of the total service cost before confirming your order.`,
          imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
          order: 4,
        },
        {
          id: "reupholster-005",
          title: "Step 5: Placing Your Order",
          body: `When you're ready, we'll finalise your order and provide a clear production timeline. You'll receive an email containing the final quotation and a payment link via Lenggah's official Shopee marketplace.
Once payment is confirmed, we'll invite you to a dedicated WhatsApp group, connecting you directly with our project manager and chair craftsmen. You'll receive updates throughout each production stage, ensuring full transparency and peace of mind as your custom piece comes to life.`,
          imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
          order: 5,
        },
        {
          id: "reupholster-006",
          title: "Step 6: Send Your Chair to Our Workshop",
          body: `Once everything is confirmed, we will guide you through the delivery process.

For clients in the Greater Jakarta area (Jabodetabek), we can assist with pickup using our in-house delivery team.

For clients outside Jabodetabek, you may send your chair using any delivery service you trust. Our team will guide you on what to document, including photos or short videos of your chair before shipping, to ensure everything arrives safely and in good condition`,
          imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
          order: 6,
        },
        {
          id: "reupholster-007",
          title: "Step 7: Delivery",
          body: `Before we deliver your custom piece, we will share a Quality Control (QC) update that includes tests for strength, welding, stitching, and overall finish to ensure everything meets our standards.

For deliveries within the Greater Jakarta area (Jabodetabek):
Our delivery team will contact you to schedule a convenient date and time window. On delivery day, you will receive a text update one hour before arrival. We will bring your piece into your home, unpack it carefully, and take the packaging with us, leaving you to enjoy the comfort and craftsmanship made just for you.

For orders outside Jabodetabek:
Each piece is professionally wrapped and packed with layered protection, so it reaches you in perfect condition, ready to be unboxed and enjoyed.`,
          imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
          order: 7,
        },
      ],
    },
  ] as Journey[],
} as const;
