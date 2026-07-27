"use client"

import { motion } from "framer-motion"
import { Heart, Shield, Sparkles } from "lucide-react"
import { missionStatement } from "@/lib/data"

export function MissionSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[var(--primary)] via-[var(--primary-dark)] to-[var(--primary-darker)] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-white/3 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-[var(--accent)] to-amber-400 text-white text-xs font-bold uppercase tracking-[0.15em] mb-6 shadow-lg shadow-black/20"
          >
            <Sparkles className="w-3.5 h-3.5" />
            {missionStatement.headline}
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] max-w-3xl mx-auto">
            <span className="text-[var(--accent)]">The goal is</span>{" "}
            prevention and control.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <p className="text-base lg:text-lg text-white/75 leading-relaxed">
              {missionStatement.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--accent)] to-amber-400 text-white font-bold shadow-lg shadow-black/20">
                <Heart className="w-4 h-4" />
                Together we can end AIDS
              </span>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-white/80 font-medium backdrop-blur-sm border border-white/15">
                <Shield className="w-4 h-4" />
                Prevention is key
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {[
              { value: "284K+", label: "Individuals Reached" },
              { value: "195K+", label: "HIV Tests Conducted" },
              { value: "486+", label: "Communities Reached" },
              { value: "124", label: "Health Facilities" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 p-5 hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-2xl lg:text-3xl font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/60 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
