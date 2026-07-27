"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SectionHeader } from "@/components/ui/section-header"
import { partners } from "@/lib/data"

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  Government: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  Development: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
  "UN Agency": { bg: "bg-sky-50", text: "text-sky-700", border: "border-sky-200" },
  NGO: { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" },
  International: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
}

const doubledPartners = [...partners, ...partners]

export function Partners() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--gray-bg)] to-white pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          label="Partners"
          title="Our Strategic Partners & Collaborators"
          description="Working together with government agencies, development organizations, and international bodies."
        />

        <div ref={ref} className="relative overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)" }}>
          {isInView && (
            <motion.div
              className="flex gap-3 py-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {doubledPartners.map((partner, i) => {
                const colors = categoryColors[partner.category] || { bg: "bg-zinc-50", text: "text-zinc-700", border: "border-zinc-200" }
                return (
                  <span
                    key={`${partner.name}-${i}`}
                    className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl border text-sm font-medium whitespace-nowrap transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-default shrink-0 ${colors.bg} ${colors.text} ${colors.border}`}
                  >
                    {partner.name}
                    <span className="text-[10px] opacity-60 font-normal">({partner.category})</span>
                  </span>
                )
              })}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
