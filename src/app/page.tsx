import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Programs } from "@/components/sections/programs"
import { QuoteSection } from "@/components/sections/quote-section"
import { MissionSection } from "@/components/sections/mission-section"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { Blog } from "@/components/sections/blog"
import { Testimonials } from "@/components/sections/testimonials"
import { Partners } from "@/components/sections/partners"
import { Gallery } from "@/components/sections/gallery"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <QuoteSection />
        <MissionSection />
        <WhyChooseUs />
        <Blog />
        <Testimonials />
        <Partners />
        <Gallery />
      </main>
      <Footer />
    </>
  )
}
