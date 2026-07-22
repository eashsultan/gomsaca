"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import CountUp from "react-countup"
import { Play, CheckCircle, HeartPulse, Shield, Users } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"

const reasons = [
  "Evidence-based HIV prevention and treatment programs across all 11 LGAs.",
  "Dedicated team of public health professionals committed to your well-being.",
  "Prompt and effective access to testing, treatment, and care services.",
  "Comprehensive support at every stage of the HIV care continuum.",
]

const counters = [
  { icon: HeartPulse, value: 82500, suffix: "+", label: "Individuals on ART" },
  { icon: Shield, value: 124, suffix: "", label: "Health Facilities" },
  { icon: Users, value: 486, suffix: "+", label: "Communities Reached" },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Why Choose Us"
          title="Why communities trust us with their health"
          description="Our commitment to excellence, compassion, and evidence-based interventions has earned the trust of countless individuals across Gombe State."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/gombe.jpg')" }}
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-[var(--primary)] ml-0.5" fill="currentColor" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ul className="space-y-3 mb-8">
              {reasons.map((reason, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5" />
                  <span className="text-[var(--body-text)]">{reason}</span>
                </motion.li>
              ))}
            </ul>

            <div className="grid grid-cols-3 gap-4">
              {counters.map((counter, i) => (
                <motion.div
                  key={counter.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="text-center p-4 rounded-xl bg-[var(--gray-bg)]"
                >
                  <counter.icon className="w-5 h-5 text-[var(--primary)] mx-auto mb-1" />
                  <div className="text-xl font-bold text-[var(--primary)]">
                    <WhyCounter value={counter.value} suffix={counter.suffix} />
                  </div>
                  <p className="text-xs text-[var(--body-text)]">{counter.label}</p>
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
      {inView ? <CountUp end={value} duration={2} suffix={suffix} /> : `0${suffix}`}
    </span>
  )
}
