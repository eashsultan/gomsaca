"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Sparkles } from "lucide-react"
import { FloatingParticles } from "@/components/ui/floating-elements"
import { partners } from "@/lib/data"

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  Government: { bg: "bg-[var(--primary-bg)]", text: "text-[var(--primary)]", border: "border-[var(--primary)]/15" },
  Development: { bg: "bg-[var(--warm-bg)]", text: "text-[var(--warm)]", border: "border-[var(--warm)]/20" },
  "UN Agency": { bg: "bg-[var(--primary-bg)]", text: "text-[var(--primary)]", border: "border-[var(--primary)]/15" },
  NGO: { bg: "bg-[var(--accent-bg)]", text: "text-[var(--accent)]", border: "border-[var(--accent)]/20" },
  International: { bg: "bg-[var(--warm-bg)]", text: "text-[var(--warm)]", border: "border-[var(--warm)]/20" },
}

function getInitials(name: string) {
  return name
    .split(/[\s.]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
}

const doubledPartners = [...partners, ...partners]

export function Partners() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative overflow-hidden">
      <div className="py-20 lg:py-28 bg-white relative">
        <FloatingParticles count={6} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[var(--primary)]/4 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[var(--primary-bg)]/80 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-5xl mx-auto text-center mb-14 lg:mb-16"
          >
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white text-xs font-bold uppercase tracking-[0.15em] mb-6 shadow-lg shadow-[var(--primary)]/20"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Partners
            </motion.span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight mb-6">
              <span className="text-[var(--primary)]">Our Strategic</span>{" "}
              <span className="text-[var(--dark-text)]">Partners</span>{" "}
              <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] bg-clip-text text-transparent">
                & Collaborators
              </span>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto text-[var(--body-text)]"
            >
              Working together with government agencies, development organizations, and international bodies.
            </motion.p>
          </motion.div>

          <div ref={ref} className="relative overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)" }}>
            {isInView && (
              <motion.div
                className="flex gap-4 py-4"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {doubledPartners.map((partner, i) => {
                  const colors = categoryColors[partner.category] || { bg: "bg-zinc-50", text: "text-zinc-700", border: "border-zinc-200" }
                  return (
                    <span
                      key={`${partner.name}-${i}`}
                      className={`inline-flex items-center gap-3 px-5 py-3 rounded-xl border text-sm font-medium whitespace-nowrap transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 cursor-default shrink-0 ${colors.bg} ${colors.text} ${colors.border}`}
                    >
                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${colors.bg} ${colors.text}`}>
                        {getInitials(partner.name)}
                      </span>
                      <span className="flex flex-col">
                        <span>{partner.name}</span>
                        <span className="text-[10px] opacity-60 font-normal">({partner.category})</span>
                      </span>
                    </span>
                  )
                })}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
