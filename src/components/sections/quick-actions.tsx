"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Syringe,
  MapPin,
  ShieldAlert,
  HandHeart,
  Phone,
  ArrowRight,
  Sparkles,
  type LucideIcon,
} from "lucide-react"
import Link from "next/link"
import { FloatingParticles } from "@/components/ui/floating-elements"

const actions: { icon: LucideIcon; title: string; description: string; href: string; accent: string; chip: string }[] = [
  {
    icon: Syringe,
    title: "Get Tested",
    description: "Access confidential HIV testing across Gombe State.",
    href: "/programs/hiv-testing",
    accent: "from-[#BE123C] to-[#F43F5E]",
    chip: "#F43F5E",
  },
  {
    icon: MapPin,
    title: "Find Health Facility",
    description: "Locate testing and treatment centres in your LGA.",
    href: "/contact",
    accent: "from-[#0B3C6D] to-[#2563EB]",
    chip: "#2563EB",
  },
  {
    icon: ShieldAlert,
    title: "Prevention Tips",
    description: "Learn how to protect yourself and your community.",
    href: "/programs/education-awareness",
    accent: "from-[#15803D] to-[#22C55E]",
    chip: "#16A34A",
  },
  {
    icon: HandHeart,
    title: "Support Services",
    description: "Care, counselling and support for people living with HIV.",
    href: "/programs/treatment-care",
    accent: "from-[#9333EA] to-[#A855F7]",
    chip: "#9333EA",
  },
  {
    icon: Phone,
    title: "Emergency Contacts",
    description: "Reach our hotline and emergency support lines anytime.",
    href: "/contact",
    accent: "from-[#0E7490] to-[#06B6D4]",
    chip: "#0891B2",
  },
]

export function QuickActions() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="py-20 lg:py-24 hero-gradient relative overflow-hidden">
      <FloatingParticles count={6} />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(11,60,109,0.10),transparent_60%)]" />
        <div className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full bg-[var(--primary)]/6 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-[480px] h-[480px] rounded-full bg-[var(--warm)]/8 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 lg:mb-14">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] text-white text-xs font-bold uppercase tracking-[0.15em] mb-6 shadow-lg shadow-[var(--accent-glow)]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Quick Actions
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight">
            <span className="text-[var(--dark-text)]">Access services</span>{" "}
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--warm)] bg-clip-text text-transparent">
              in an instant
            </span>
          </h2>
          <p className="text-lg text-[var(--body-text)] max-w-2xl mx-auto mt-4 leading-relaxed">
            Everything you need, one tap away — testing, care, guidance and support across Gombe State.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {actions.map((action, i) => {
            const Icon = action.icon
            return (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Link
                  href={action.href}
                  className="group relative h-full flex flex-col overflow-hidden rounded-3xl bg-white border border-[var(--border)] hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[var(--primary)]/10 transition-all duration-300"
                >
                  <div className={`relative p-6 bg-gradient-to-br from-[#061F3A] via-[#0B3C6D] to-[#1e4f9c] overflow-hidden`}>
                    <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-white/10 blur-2xl" />
                    <div className="absolute -bottom-10 -left-10 w-28 h-28 rounded-full bg-white/5 blur-2xl" />
                    <div
                      className="absolute bottom-0 left-0 right-0 h-px"
                      style={{ background: `linear-gradient(90deg, transparent, ${action.chip}, transparent)` }}
                    />
                    <div className="relative flex items-center justify-between">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${action.accent} text-white flex items-center justify-center shadow-xl shadow-black/30 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span
                        className="w-2 h-2 rounded-full opacity-80 group-hover:opacity-100 transition-opacity"
                        style={{ background: action.chip, boxShadow: `0 0 12px ${action.chip}` }}
                      />
                    </div>
                    <h3 className="text-base font-bold text-white mt-5 mb-1.5">{action.title}</h3>
                    <p className="text-xs text-white/60 leading-relaxed min-h-[32px]">{action.description}</p>
                  </div>
                  <div className="p-5 mt-auto bg-white">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider" style={{ color: action.chip }}>
                      Get Started
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
