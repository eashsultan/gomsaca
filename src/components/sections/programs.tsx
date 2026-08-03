"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight, GraduationCap, Users, HeartPulse, Microscope, Shield, Megaphone, Sparkles, type LucideIcon } from "lucide-react"
import { FloatingParticles } from "@/components/ui/floating-elements"
import { programs as programData } from "@/lib/data"

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Users,
  HeartPulse,
  Microscope,
  Shield,
  Megaphone,
}

const accentMap: Record<string, { gradient: string; chip: string; bar: string; glow: string }> = {
  green: { gradient: "from-[#15803D] to-[#22C55E]", chip: "#16A34A", bar: "from-[#15803D] to-[#4ADE80]", glow: "rgba(34,197,94,0.18)" },
  gold: { gradient: "from-[#B45309] to-[#F59E0B]", chip: "#D97706", bar: "from-[#B45309] to-[#FBBF24]", glow: "rgba(245,158,11,0.18)" },
}

const cardColors = [
  { gradient: "from-[#0B3C6D] to-[#2563EB]", chip: "#2563EB", bar: "from-[#0B3C6D] to-[#2563EB]", glow: "rgba(37,99,235,0.18)" },
  { gradient: "from-[#BE123C] to-[#F43F5E]", chip: "#E11D48", bar: "from-[#BE123C] to-[#FB7185]", glow: "rgba(225,29,72,0.18)" },
  { gradient: "from-[#9333EA] to-[#A855F7]", chip: "#9333EA", bar: "from-[#9333EA] to-[#C084FC]", glow: "rgba(168,85,247,0.18)" },
  { gradient: "from-[#0E7490] to-[#06B6D4]", chip: "#0891B2", bar: "from-[#0E7490] to-[#22D3EE]", glow: "rgba(6,182,212,0.18)" },
  { gradient: "from-[#15803D] to-[#22C55E]", chip: "#16A34A", bar: "from-[#15803D] to-[#4ADE80]", glow: "rgba(34,197,94,0.18)" },
  { gradient: "from-[#B45309] to-[#F59E0B]", chip: "#D97706", bar: "from-[#B45309] to-[#FBBF24]", glow: "rgba(245,158,11,0.18)" },
]

export function Programs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="programs" className="py-20 lg:py-28 hero-gradient relative overflow-hidden">
      <FloatingParticles count={6} />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(11,60,109,0.10),transparent_60%)]" />
        <div className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full bg-[var(--primary)]/6 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-[480px] h-[480px] rounded-full bg-[var(--warm)]/8 blur-3xl" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center max-w-5xl mx-auto mb-14 lg:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-lighter)] text-white text-xs font-bold uppercase tracking-[0.15em] mb-6 shadow-lg shadow-[var(--primary-glow)]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Our Programmes
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight mb-6">
            <span className="text-[var(--primary)]">Core interventions</span>{" "}
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--warm)] bg-clip-text text-transparent">
              that protect our communities
            </span>
          </h2>
          <p className="text-lg text-[var(--body-text)] leading-relaxed">
            Strategic, evidence-based programmes spanning prevention, testing, treatment, care and community mobilisation across all 11 LGAs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programData.map((prog, index) => {
            const Icon = iconMap[prog.icon] || Sparkles
            const c = cardColors[index % cardColors.length]
            return (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="h-full"
              >
                <Link
                  href={prog.link}
                  className="group relative flex flex-col h-full overflow-hidden rounded-3xl bg-white border border-[var(--border)] hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[var(--primary)]/10 transition-all duration-300"
                >
                  <div className="relative p-6 lg:p-7 bg-gradient-to-br from-[#061F3A] via-[#0B3C6D] to-[#1e4f9c] overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/10 blur-2xl" />
                    <div className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full bg-white/5 blur-2xl" />
                    <div
                      className="absolute bottom-0 left-0 right-0 h-px"
                      style={{ background: `linear-gradient(90deg, transparent, ${c.chip}, transparent)` }}
                    />
                    <div className="relative flex items-center justify-between">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.gradient} text-white flex items-center justify-center shadow-xl shadow-black/30 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white border border-white/15"
                      >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: c.chip }} />
                        Programme {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="relative text-lg font-bold text-white mt-5 mb-2">
                      {prog.title}
                    </h3>
                    <p className="relative text-xs text-white/60 leading-relaxed">
                      {prog.description}
                    </p>
                  </div>
                  <div className="p-5 lg:p-6 mt-auto bg-white">
                    <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider" style={{ color: c.chip }}>
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/programmes"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-lighter)] text-white font-bold shadow-lg shadow-[var(--primary-glow)] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            Explore all programmes
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
