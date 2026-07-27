"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { quoteData } from "@/lib/data"

export function QuoteSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[var(--primary)] via-[var(--primary-dark)] to-[var(--primary-darker)] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/3 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/5" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:flex lg:col-span-2 justify-center"
          >
            <span className="text-[180px] leading-none font-serif text-white/10 select-none">&ldquo;</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-7"
          >
            <span className="text-[100px] leading-none font-serif text-white/10 select-none lg:hidden block -mb-14">&ldquo;</span>
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed italic font-medium text-white/95">
              {quoteData.text}
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-10 h-0.5 rounded-full bg-[var(--accent)]" />
              <p className="font-bold text-[var(--accent)] text-lg">&mdash; {quoteData.author}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 flex flex-col items-start lg:items-end gap-3"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium backdrop-blur-sm border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              Legacy of Advocacy
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium backdrop-blur-sm border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              End the Stigma
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
