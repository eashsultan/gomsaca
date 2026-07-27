"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import CountUp from "react-countup"
import { Play, CheckCircle, HeartPulse, Shield, Users, MapPin, Building2 } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { FloatingParticles } from "@/components/ui/floating-elements"
import { StaggerGrid, StaggerItem } from "@/components/ui/animated-section"

const reasons = [
  "Evidence-based HIV prevention and treatment programs across all 11 LGAs.",
  "Dedicated team of public health professionals committed to your well-being.",
  "Prompt and effective access to testing, treatment, and care services.",
  "Comprehensive support at every stage of the HIV care continuum.",
]

const counters = [
  { icon: HeartPulse, value: 82500, suffix: "+", label: "Individuals on ART" },
  { icon: MapPin, value: 486, suffix: "+", label: "Communities Reached" },
  { icon: Building2, value: 124, suffix: "", label: "Health Facilities" },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <FloatingParticles count={6} />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[var(--gray-subtle)] to-white pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          label="Why Choose Us"
          title="Why communities trust us with their health"
          description="Our commitment to excellence, compassion, and evidence-based interventions has earned the trust of countless individuals across Gombe State."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer shadow-xl shadow-black/5">
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
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <ul className="space-y-4 mb-10">
              {reasons.map((reason, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-[var(--gray-bg)] transition-colors"
                >
                  <CheckCircle className="w-6 h-6 text-[var(--primary)] shrink-0 mt-0.5" />
                  <span className="text-[var(--body-text)] text-lg">{reason}</span>
                </motion.li>
              ))}
            </ul>

            <div className="grid grid-cols-3 gap-5">
              {counters.map((counter, i) => (
                <motion.div
                  key={counter.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="text-center p-5 rounded-2xl bg-white border border-[var(--border)] shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#E8F5E9] flex items-center justify-center mx-auto mb-3">
                    <counter.icon className="w-5 h-5 text-[#0B6E3A]" />
                  </div>
                  <div className="text-2xl font-bold text-[var(--dark-text)]">
                    <WhyCounter value={counter.value} suffix={counter.suffix} />
                  </div>
                  <p className="text-xs text-[var(--body-text)] mt-1 font-medium">{counter.label}</p>
                </motion.div>
              ))}
            </div>
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
