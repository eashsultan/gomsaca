"use client"

import { motion } from "framer-motion"
import { Heart, MessageCircle } from "lucide-react"
import { missionStatement } from "@/lib/data"

export function MissionSection() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[var(--border-light)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[var(--border-light)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-[var(--primary-bg)]/50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[var(--primary-bg)] text-[var(--primary)] text-sm font-semibold mb-6">
            <MessageCircle className="w-4 h-4" />
            {missionStatement.headline}
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[var(--dark-text)] mb-6 max-w-3xl mx-auto leading-[1.1]">
            {missionStatement.subheadline}
          </h2>
          <p className="text-lg lg:text-xl text-[var(--body-text)] leading-relaxed max-w-4xl mx-auto">
            {missionStatement.description}
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10"
          >
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--primary)] text-white font-semibold shadow-lg shadow-[var(--primary-glow)]">
              <Heart className="w-4 h-4" />
              Together we can end AIDS
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
