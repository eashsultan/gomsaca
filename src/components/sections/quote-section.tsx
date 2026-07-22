"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { quoteData } from "@/lib/data"

export function QuoteSection() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--primary)] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Quote className="w-12 h-12 text-[var(--accent)]/50 mx-auto mb-6" />
          <p className="text-xl md:text-2xl leading-relaxed italic font-medium text-white/90">
            &ldquo;{quoteData.text}&rdquo;
          </p>
          <div className="mt-8 pt-6 border-t border-white/10 inline-block px-8">
            <p className="font-bold text-[var(--accent)]">— {quoteData.author}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
