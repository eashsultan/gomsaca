"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import CountUp from "react-countup"
import { Play, CheckCircle, HeartPulse, MapPin, Building2, Shield, Sparkles, HeartHandshake, Stethoscope, Eye } from "lucide-react"
import { FloatingParticles } from "@/components/ui/floating-elements"
import { TiltCard } from "@/components/ui/tilt-card"

const reasons = [
  {
    icon: HeartHandshake,
    title: "Evidence-Based Programs",
    desc: "HIV prevention and treatment programs across all 11 LGAs grounded in data and proven methodologies.",
  },
  {
    icon: Stethoscope,
    title: "Dedicated Professionals",
    desc: "Team of public health professionals committed to your well-being and community health outcomes.",
  },
  {
    icon: MapPin,
    title: "Accessible Care",
    desc: "Prompt and effective access to testing, treatment, and care services when and where you need them.",
  },
  {
    icon: Shield,
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(11,60,109,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,241,251,0.15),transparent_50%)]" />
        <div className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full bg-[var(--primary)]/6 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-[480px] h-[480px] rounded-full bg-[var(--warm)]/8 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 lg:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white text-xs font-bold uppercase tracking-[0.15em] mb-6 shadow-lg shadow-[var(--primary)]/20"
          >
            <Sparkles className="w-3.5 h-3.5 text-white/90" />
            Why Choose Us
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-6">
            <span className="text-[var(--primary)]">Why communities</span>{" "}
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--warm)] bg-clip-text text-transparent">
              trust us
            </span>
            <span className="text-[var(--dark-text)]"> with their health</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto text-[var(--body-text)]"
          >
            Our commitment to excellence, compassion, and evidence-based interventions has earned the trust of countless individuals across Gombe State.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-5 mb-16"
        >
          {counters.map((counter, i) => (
            <motion.div
              key={counter.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-[var(--primary)]/40 via-[var(--warm)]/30 to-[var(--primary-light)]/40 group">
                <div className="relative flex items-center gap-5 px-8 py-5 rounded-[calc(1rem-1.5px)] bg-white/85 backdrop-blur-sm hover:bg-white transition-colors duration-300 min-w-[240px]">
                  <div className="relative shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center shadow-lg shadow-[var(--primary)]/25 transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-3">
                      <counter.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white bg-[var(--warm)]" />
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-extrabold text-[var(--primary)]">
                      <WhyCounter value={counter.value} suffix={counter.suffix} />
                    </div>
                    <p className="text-sm text-[var(--body-text)] font-medium">{counter.label}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-3"
          >
            <div className="h-full">
              <div className="relative h-full min-h-[340px] rounded-[2rem] p-[2px] bg-gradient-to-br from-[var(--primary)]/60 via-[var(--warm)]/40 to-[var(--primary-light)]/60 group overflow-hidden shadow-2xl shadow-[var(--primary)]/10">
                <div
                  className="absolute inset-[2px] rounded-[calc(2rem-2px)] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('/gallery-outreach.jpg')" }}
                />
                <div className="absolute inset-[2px] rounded-[calc(2rem-2px)] bg-gradient-to-t from-[#061F3A]/85 via-[#061F3A]/20 to-transparent" />
                <div className="absolute top-5 left-5 z-10">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider shadow-lg border border-white/20">
                    <HeartPulse className="w-4 h-4 text-[var(--warm-light)]" />
                    Care You Can Trust
                  </span>
                </div>
                <div className="absolute bottom-0 inset-x-0 z-10 p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-extrabold text-white mb-2">
                    Trusted Care, Close To Home
                  </h3>
                  <p className="text-white/75 text-sm leading-relaxed max-w-md">
                    Our teams bring HIV prevention, testing, and treatment directly to
                    every community — compassionate, professional, and always there when you need us.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="flex-1"
              >
                <TiltCard maxTilt={4} scale={1.01}>
                  <div className="group relative rounded-2xl overflow-hidden bg-white border border-[var(--border)] shadow-sm shadow-[var(--primary)]/5 hover:shadow-xl hover:shadow-[var(--primary)]/10 transition-all duration-500">
                    <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-[var(--primary)] via-[var(--primary-light)] to-[var(--warm)]" />
                    <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[var(--primary)]/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative flex items-start gap-4 p-5">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center shrink-0 shadow-lg shadow-[var(--primary)]/20 group-hover:-translate-y-0.5 group-hover:rotate-3 transition-transform duration-300">
                        <reason.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-[var(--dark-text)] text-base">{reason.title}</h4>
                          <CheckCircle className="w-4 h-4 text-[var(--warm)] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <p className="text-sm text-[var(--body-text)] leading-relaxed">{reason.desc}</p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
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
