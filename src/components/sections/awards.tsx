"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, Sparkles, ChevronRight, Medal, Star } from "lucide-react"
import { FloatingParticles } from "@/components/ui/floating-elements"

export function Awards() {
  return (
    <section className="relative overflow-hidden">
      <div className="py-20 lg:py-28 bg-white relative">
        <FloatingParticles count={6} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[var(--primary)]/4 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--primary)]/5 blur-3xl" />
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
              <Medal className="w-3.5 h-3.5" />
              Recognition
            </motion.span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight mb-6">
              <span className="text-[var(--primary)]">Awards</span>{" "}
              <span className="text-[var(--dark-text)]">&</span>{" "}
              <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto text-[var(--body-text)]"
            >
              Our commitment to excellence in the fight against HIV/AIDS has been recognized
              both locally and internationally.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:col-span-2"
            >
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-semibold mb-4">
                    <Sparkles className="w-3 h-3" />
                    CIHP Impact Award
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-extrabold text-[var(--dark-text)] leading-[1.1] mb-4">
                    Recognized for{" "}
                    <span className="text-[var(--primary)]">Excellence</span>
                  </h3>
                  <p className="text-[var(--body-text)] leading-relaxed">
                    GOMSACA was honored with the prestigious Impact Award by the
                    Center for Integrated Health Programs (CIHP) in recognition of
                    our outstanding contributions to HIV/AIDS prevention, treatment,
                    and care across Gombe State.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Star, label: "Years of Service", value: "20+" },
                    { icon: Award, label: "Award Recognition", value: "2024" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-gradient-to-br from-[var(--primary-bg)] to-white rounded-2xl border border-[var(--primary)]/20 p-5 text-center"
                    >
                      <stat.icon className="w-5 h-5 text-[var(--primary)] mx-auto mb-2" />
                      <div className="text-2xl font-extrabold text-[var(--primary)]">{stat.value}</div>
                      <div className="text-xs text-[var(--body-text)] mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white text-sm font-bold shadow-lg shadow-[var(--primary)]/20 hover:shadow-xl hover:shadow-[var(--primary)]/30 transition-all duration-300"
                >
                  View Award Details
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:col-span-3"
            >
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-32 h-32 rounded-3xl bg-[var(--primary)]/10 -z-10" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-[var(--primary)]/10 -z-10" />
                <div className="relative bg-gradient-to-br from-white to-[var(--primary-bg)] rounded-3xl border border-[var(--primary)]/20 p-3 shadow-xl shadow-[var(--primary)]/5">
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-[var(--primary)] text-xs font-bold shadow-lg border border-[var(--primary)]/10">
                      <Medal className="w-3.5 h-3.5" />
                      Impact Award
                    </span>
                  </div>
                  <div className="rounded-2xl overflow-hidden">
                    <Image
                      src="/Awarsd.png"
                      alt="GOMSACA Awards and Recognition"
                      width={800}
                      height={500}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
