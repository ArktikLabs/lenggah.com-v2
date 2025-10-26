import { NavTop } from "@/components/nav-top";
import { InstagramSection } from "@/components/instagram-section";
import { Footer } from "@/components/footer";
import { CustomSeatSection } from "@/components/custom-seat-section";
import { ProductDetailSection } from "@/components/product-detail-section";
import { productListingContent } from "@/data/product-listing-content";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { generateProductSchema, generateBreadcrumbSchema, jsonLdScriptProps } from "@/lib/json-ld";
import { SITE_CONFIG } from "@/data/constants";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

// Generate metadata for each product page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = productListingContent.products.find((p) => p.id === id);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} - Lenggah`,
    description: product.description,
    openGraph: {
      title: `${product.name} - Lenggah`,
      description: product.description,
      images: [
        {
          url: product.images.main,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} - Lenggah`,
      description: product.description,
      images: [product.images.main],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const product = productListingContent.products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  // Generate structured data
  const productSchema = generateProductSchema(product);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Products", url: `${SITE_CONFIG.url}/#products` },
    { name: product.name, url: `${SITE_CONFIG.url}/products/${product.id}` },
  ]);

  return (
    <>
      <script {...jsonLdScriptProps(productSchema)} />
      <script {...jsonLdScriptProps(breadcrumbSchema)} />
      <main className="min-h-dvh bg-background text-foreground">
        <NavTop />
        <ProductDetailSection product={product} />
        <CustomSeatSection />
        <InstagramSection />
        <Footer />
      </main>
    </>
  );
}

// Generate static params for all products
export async function generateStaticParams() {
  return productListingContent.products.map((product) => ({
    id: product.id,
  }));
}
