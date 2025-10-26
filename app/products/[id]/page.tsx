import { NavTop } from "@/components/nav-top";
import { InstagramSection } from "@/components/instagram-section";
import { Footer } from "@/components/footer";
import { CustomSeatSection } from "@/components/custom-seat-section";
import { ProductDetailSection } from "@/components/product-detail-section";
import { productListingContent } from "@/data/product-listing-content";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  const product = productListingContent.products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-dvh bg-background text-foreground">
      <NavTop />
      <ProductDetailSection product={product} />
      <CustomSeatSection />
      <InstagramSection />
      <Footer />
    </main>
  );
}

// Generate static params for all products
export async function generateStaticParams() {
  return productListingContent.products.map((product) => ({
    id: product.id,
  }));
}
