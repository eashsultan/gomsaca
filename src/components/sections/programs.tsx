"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Shield, Microscope, HeartPulse, Users, GraduationCap, BarChart3, Megaphone, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { programs } from "@/lib/data"

const iconMap: Record<string, React.ElementType> = {
  Shield, Microscope, HeartPulse, Users, GraduationCap, BarChart3, Megaphone,
}

const images = [
  "/MEDICAL OUTREACH & HIV_AIDS AWARENESS, SOUTH… (1).jpeg",
  "/999165867338083734.jpeg",
  "/A doctor is checking a patient_.jpeg",
  "/8444318045568594.jpeg",
  "/Could Lessons From The Early Fight Against AIDS Inform The Coronavirus Response_.jpeg",
  "/Apple\u2019s (RED) work raises $270m to fight AIDS,_.jpeg",
]

export function Programs() {
  return (
    <section id="programs" className="py-20 lg:py-28 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(11,110,58,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,245,233,0.15),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[var(--primary)]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[var(--primary-bg)]/80 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-3xl mx-auto text-center mb-14 lg:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white text-xs font-bold uppercase tracking-[0.15em] mb-6 shadow-lg shadow-[var(--primary)]/20"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Our Programs
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight mb-4">
            <span className="text-[var(--primary)]">What Our</span>{" "}
            <span className="text-[var(--dark-text)]">Agency Offers</span>
          </h2>
          <p className="text-lg text-[var(--body-text)] leading-relaxed max-w-2xl mx-auto">
            HIV prevention is not a one-size-fits-all approach. Tailoring strategies to the specific needs and risk factors of different populations is essential.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, i) => {
            const Icon = iconMap[program.icon]
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="group bg-white rounded-2xl border border-[var(--border)] overflow-hidden hover:shadow-xl hover:shadow-[var(--primary)]/5 hover:border-[var(--primary)]/20 transition-all duration-500 h-full flex flex-col">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={images[i]}
                      alt={program.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-[var(--primary)] shadow-sm">
                        {program.title}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    {Icon && (
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--primary-bg)] to-[var(--primary)]/10 flex items-center justify-center mb-4 group-hover:from-[var(--primary)]/10 group-hover:to-[var(--primary-bg)] transition-all duration-300">
                        <Icon className="w-6 h-6 text-[var(--primary)]" />
                      </div>
                    )}
                    <p className="text-sm text-[var(--body-text)] leading-relaxed flex-1">{program.description}</p>
                    <a
                      href={program.link}
                      className="inline-flex items-center gap-1.5 mt-5 font-semibold text-sm text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors group/link"
                    >
                      Learn more
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Button variant="primary" size="lg">
            View All Programs
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
