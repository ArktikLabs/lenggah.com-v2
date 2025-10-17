import { NavTop } from "@/components/nav-top"
import { Hero } from "@/components/hero"
import { ListingSection } from "@/components/listing-section"
import { PatternsSection } from "@/components/patterns-section"
import { JourneySection } from "@/components/journey-section"
import { ExpertiseSection } from "@/components/expertise-section"
import { InstagramSection } from "@/components/instagram-section"
import { ConsultationForm } from "@/components/consultation-form"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-dvh bg-background text-foreground">
      <NavTop />
      <Hero />
      <ListingSection />
      <PatternsSection />
      <JourneySection />
      <ExpertiseSection />
      <InstagramSection />
      <ConsultationForm />
      <Footer />
    </main>
  )
}
