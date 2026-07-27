"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { quoteData } from "@/lib/data"

export function QuoteSection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-[var(--primary)] via-[var(--primary-dark)] to-[var(--primary-darker)] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-[var(--accent)]/10 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Quote className="w-14 h-14 text-[var(--accent)]/30 mx-auto mb-8" />
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed italic font-medium text-white/95 max-w-3xl mx-auto">
            &ldquo;{quoteData.text}&rdquo;
          </p>
          <div className="mt-10 pt-8 border-t border-white/10 inline-block px-12">
            <p className="font-bold text-[var(--accent)] text-lg">— {quoteData.author}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
