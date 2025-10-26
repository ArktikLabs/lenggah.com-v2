import { NavTop } from "@/components/nav-top";
import { InstagramSection } from "@/components/instagram-section";
import { Footer } from "@/components/footer";
import { CustomSeatSection } from "@/components/custom-seat-section";
import { ProductDetailSection } from "@/components/product-detail-section";

export default function Page() {
  return (
    <main className="min-h-dvh bg-background text-foreground">
      <NavTop />
      <ProductDetailSection />
      <CustomSeatSection />
      <InstagramSection />
      <Footer />
    </main>
  );
}
