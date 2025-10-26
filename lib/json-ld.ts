/**
 * JSON-LD Schema Helpers for SEO
 * https://schema.org/
 */

import { SITE_CONFIG } from "@/data/constants";
import type { Product } from "@/data/product-listing-content";

export interface Organization {
  "@context": "https://schema.org";
  "@type": "Organization" | "LocalBusiness";
  name: string;
  url: string;
  logo?: string;
  description?: string;
  sameAs?: string[];
  contactPoint?: {
    "@type": "ContactPoint";
    contactType: string;
    url: string;
  };
}

export interface ProductSchema {
  "@context": "https://schema.org";
  "@type": "Product";
  name: string;
  description: string;
  image: string[];
  brand: {
    "@type": "Brand";
    name: string;
  };
  offers: {
    "@type": "Offer";
    url: string;
    priceCurrency: string;
    price: number;
    availability: string;
    itemCondition: string;
  };
  category?: string;
  material?: string[];
}

export interface BreadcrumbList {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: {
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }[];
}

export function generateOrganizationSchema(): Organization {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/assets/favicon.png`,
    description: SITE_CONFIG.description,
    sameAs: [
      SITE_CONFIG.shopeeUrl,
      // Add more social media links here when available
      // "https://instagram.com/lenggah.works",
      // "https://facebook.com/lenggah.works",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      url: `${SITE_CONFIG.url}/#contact`,
    },
  };
}

export function generateProductSchema(product: Product): ProductSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images.gallery,
    brand: {
      "@type": "Brand",
      name: SITE_CONFIG.name,
    },
    offers: {
      "@type": "Offer",
      url: `${SITE_CONFIG.url}/products/${product.id}`,
      priceCurrency: product.price.currency,
      price: product.price.amount,
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
    },
    category: product.category,
    material: product.materials,
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
): BreadcrumbList {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Helper to safely stringify JSON-LD and embed in script tag
 */
export function jsonLdScriptProps(data: object) {
  return {
    type: "application/ld+json",
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(data),
    },
  };
}
