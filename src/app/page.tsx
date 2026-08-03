import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { QuickActions } from "@/components/sections/quick-actions"
import { CoreFunctions } from "@/components/sections/core-functions"
import { About } from "@/components/sections/about"
import { Publications } from "@/components/sections/publications"
import { Programs } from "@/components/sections/programs"
import { QuoteSection } from "@/components/sections/quote-section"
import { MissionSection } from "@/components/sections/mission-section"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { Testimonials } from "@/components/sections/testimonials"
import { Gallery } from "@/components/sections/gallery"
import { Awards } from "@/components/sections/awards"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuickActions />
        <CoreFunctions />
        <About />
        <Programs />
        <QuoteSection />
        <MissionSection />
        <WhyChooseUs />
        <Publications />
        <Awards />
        <Testimonials />
        <Gallery />
      </main>
      <Footer />
    </>
  )
}
