"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import CountUp from "react-countup"
import { Play, CheckCircle, HeartPulse, MapPin, Building2, Shield } from "lucide-react"
import { FloatingParticles } from "@/components/ui/floating-elements"

const reasons = [
  {
    title: "Evidence-Based Programs",
    desc: "HIV prevention and treatment programs across all 11 LGAs grounded in data and proven methodologies.",
  },
  {
    title: "Dedicated Professionals",
    desc: "Team of public health professionals committed to your well-being and community health outcomes.",
  },
  {
    title: "Accessible Care",
    desc: "Prompt and effective access to testing, treatment, and care services when and where you need them.",
  },
  {
    title: "Full Continuum Support",
    desc: "Comprehensive support at every stage of the HIV care continuum, from prevention to long-term management.",
  },
]

const counters = [
  { icon: HeartPulse, value: 82500, suffix: "+", label: "Individuals on ART" },
  { icon: MapPin, value: 486, suffix: "+", label: "Communities Reached" },
  { icon: Building2, value: 124, suffix: "", label: "Health Facilities" },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 hero-gradient relative overflow-hidden">
      <FloatingParticles count={6} />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(11,110,58,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,245,233,0.15),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--primary)]/4 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[var(--primary-bg)]/80 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white text-xs font-bold uppercase tracking-[0.15em] mb-6 shadow-lg shadow-[var(--primary)]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
            Why Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight mb-4">
            <span className="text-[var(--primary)]">Why communities</span>{" "}
            <span className="text-[var(--dark-text)]">trust us with their health</span>
          </h2>
          <p className="text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto text-[var(--body-text)]">
            Our commitment to excellence, compassion, and evidence-based interventions has earned the trust of countless individuals across Gombe State.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          {counters.map((counter, i) => (
            <div
              key={counter.label}
              className="flex items-center gap-5 px-8 py-5 rounded-2xl bg-white border border-[var(--primary)]/15 shadow-sm hover:shadow-lg hover:border-[var(--primary)]/30 transition-all duration-300 min-w-[240px]"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--primary-bg)] to-[var(--primary)]/10 flex items-center justify-center shrink-0">
                <counter.icon className="w-7 h-7 text-[var(--primary)]" />
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-extrabold text-[var(--primary)]">
                  <WhyCounter value={counter.value} suffix={counter.suffix} />
                </div>
                <p className="text-sm text-[var(--body-text)] font-medium">{counter.label}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-3"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer shadow-xl shadow-black/5 ring-1 ring-[var(--primary)]/10">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/999165867338083734.jpeg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors duration-500">
                <div className="w-20 h-20 rounded-full bg-white/95 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-black/20">
                  <Play className="w-8 h-8 text-[var(--primary)] ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-2 space-y-5"
          >
            {reasons.map((reason, i) => (
              <div
                key={i}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-[var(--primary)]/10 hover:border-[var(--primary)]/30 hover:shadow-lg hover:shadow-[var(--primary)]/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary-bg)] to-[var(--primary)]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-[var(--primary)]" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--dark-text)] text-base mb-1">{reason.title}</h4>
                  <p className="text-sm text-[var(--body-text)] leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function WhyCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <span ref={ref}>
      {inView ? <CountUp end={value} duration={2.5} suffix={suffix} /> : `0${suffix}`}
    </span>
  )
}
