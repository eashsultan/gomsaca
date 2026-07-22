"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/section-header"
import { partners } from "@/lib/data"

const categoryColors: Record<string, string> = {
  Government: "bg-blue-50 text-blue-700 border-blue-200",
  Development: "bg-emerald-50 text-emerald-700 border-emerald-200",
  "UN Agency": "bg-sky-50 text-sky-700 border-sky-200",
  Finance: "bg-amber-50 text-amber-700 border-amber-200",
}

export function Partners() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--gray-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Partners"
          title="Our Strategic Partners & Collaborators"
          description="Working together with government agencies, development organizations, and financial institutions."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {partners.map((partner) => (
            <span
              key={partner.name}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${
                categoryColors[partner.category] || "bg-zinc-50 text-zinc-700 border-zinc-200"
              }`}
            >
              {partner.name}
              <span className="text-xs opacity-60">({partner.category})</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
