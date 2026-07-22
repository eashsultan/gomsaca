"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/section-header"
import { missionStatement } from "@/lib/data"

export function MissionSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-6 py-2 rounded-full bg-[var(--primary-bg)] text-[var(--primary)] text-sm font-semibold mb-4">
            {missionStatement.headline}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--dark-text)] mb-6">
            {missionStatement.subheadline}
          </h2>
          <p className="text-lg text-[var(--body-text)] leading-relaxed max-w-4xl mx-auto">
            {missionStatement.description}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
