"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { aboutData } from "@/lib/data"

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="About Us"
          title="Gombe State Agency for the Control of AIDS"
          description={aboutData.whoWeAre}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <Card className="p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-[var(--dark-text)] mb-4">Our Full Story</h3>
            <p className="text-[var(--body-text)] leading-relaxed text-lg">
              {aboutData.history}
            </p>
            <Button variant="primary" size="lg" className="mt-6">
              Our Full Story
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--primary-bg)] text-[var(--primary)] font-semibold">
            Impact Award to GOMSACA by CIHP.
            <a href="#" className="underline hover:text-[var(--primary-dark)]">Click Here</a>
          </span>
        </motion.div>
      </div>
    </section>
  )
}
