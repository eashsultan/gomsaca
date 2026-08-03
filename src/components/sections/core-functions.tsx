"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Shield, Stethoscope, LineChart, Building2, Users, Sparkles, ArrowRight } from "lucide-react"
import { FloatingParticles } from "@/components/ui/floating-elements"

const functions = [
  {
    title: "Prevention and Behavioural Change",
    description: "Driving campaigns and programs to prevent new infections and promote safe behaviors.",
    icon: Shield,
    gradient: "from-[#0B3C6D] to-[#2563EB]",
    chip: "text-[#2563EB]",
    glow: "rgba(37,99,235,0.18)",
    bar: "from-[#0B3C6D] to-[#2563EB]",
  },
  {
    title: "Diagnostic, Treatment and Care Support",
    description: "Ensuring access to testing, antiretroviral therapy, and comprehensive care for affected individuals.",
    icon: Stethoscope,
    gradient: "from-[#15803D] to-[#22C55E]",
    chip: "text-[#16A34A]",
    glow: "rgba(34,197,94,0.18)",
    bar: "from-[#15803D] to-[#4ADE80]",
  },
  {
    title: "Planning, Research, Monitoring and Evaluation",
    description: "Using data and research to guide policies and evaluate program effectiveness.",
    icon: LineChart,
    gradient: "from-[#BE123C] to-[#F43F5E]",
    chip: "text-[#E11D48]",
    glow: "rgba(225,29,72,0.18)",
    bar: "from-[#BE123C] to-[#FB7185]",
  },
  {
    title: "Administration and Finance",
    description: "Managing resources efficiently to support the agency's operations and sustainability.",
    icon: Building2,
    gradient: "from-[#9333EA] to-[#A855F7]",
    chip: "text-[#9333EA]",
    glow: "rgba(168,85,247,0.18)",
    bar: "from-[#9333EA] to-[#C084FC]",
  },
  {
    title: "Community Mobilization and Resource Mobilization",
    description: "Engaging communities and securing resources to fund interventions and support.",
    icon: Users,
    gradient: "from-[#0E7490] to-[#06B6D4]",
    chip: "text-[#0891B2]",
    glow: "rgba(6,182,212,0.18)",
    bar: "from-[#0E7490] to-[#22D3EE]",
  },
]

export function CoreFunctions() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [featured, ...rest] = functions

  return (
    <section ref={ref} className="py-20 lg:py-28 hero-gradient relative overflow-hidden">
      <FloatingParticles count={6} />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(11,60,109,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,241,251,0.15),transparent_50%)]" />
        <div className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full bg-[var(--primary)]/6 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-[480px] h-[480px] rounded-full bg-[var(--warm)]/8 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-5xl mx-auto text-center mb-14 lg:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white text-xs font-bold uppercase tracking-[0.15em] mb-6 shadow-lg shadow-[var(--primary)]/20"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Core Functions
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-6">
            <span className="text-[var(--primary)]">Our</span>{" "}
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--warm)] bg-clip-text text-transparent">
              Core Functions
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-lg lg:text-xl text-[var(--body-text)] leading-relaxed"
          >
            GomSACA leads the coordinated response through five primary directorates, ensuring comprehensive action across all fronts.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-2"
          >
            <div className="group relative h-full rounded-[2rem] p-[2px] bg-gradient-to-br from-[var(--warm)]/50 via-[var(--primary)]/40 to-[var(--primary-light)]/50 overflow-hidden shadow-2xl shadow-[var(--primary)]/10">
              <div className="relative h-full rounded-[calc(2rem-2px)] bg-gradient-to-br from-[#061F3A] via-[#0B3C6D] to-[#1e4f9c] p-8 lg:p-10 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
                  <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-[var(--primary-light)]/10 blur-3xl" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/5" />
                </div>
                <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 lg:gap-8 h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${featured.gradient} flex items-center justify-center shrink-0 shadow-xl shadow-black/30`}>
                    <featured.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[11px] font-bold uppercase tracking-wider mb-3 border border-white/15">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--warm-light)]" />
                      Flagship Directorate
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-3">{featured.title}</h3>
                    <p className="text-white/75 leading-relaxed">{featured.description}</p>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--warm)] to-[var(--warm-light)] text-[#061F3A] text-sm font-bold shadow-lg shadow-[var(--warm)]/30 hover:shadow-xl hover:shadow-[var(--warm)]/40 transition-shadow duration-300 whitespace-nowrap"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {rest.map((func, index) => {
            const Icon = func.icon
            return (
              <motion.div
                key={func.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: (index + 1) * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group relative bg-white rounded-3xl border border-[var(--border)] overflow-hidden hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[var(--primary)]/10 transition-all duration-300 flex flex-col"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${func.bar} opacity-70 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: func.glow }} />
                <div className="relative flex flex-col flex-1 p-7 lg:p-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${func.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--dark-text)] mb-3">{func.title}</h3>
                  <p className="text-sm text-[var(--body-text)] mb-6 flex-1">{func.description}</p>
                  <a
                    href="#"
                    className={`inline-flex items-center gap-1.5 font-semibold text-sm ${func.chip} hover:underline underline-offset-4 transition-colors group/link`}
                  >
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
