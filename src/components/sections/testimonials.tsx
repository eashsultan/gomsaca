"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { testimonials } from "@/lib/data"

export function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1))
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1))

  return (
    <section className="py-20 lg:py-28 bg-[var(--gray-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Testimonials"
          title="Patient stories of care and recovery"
          description="Discover inspiring stories of recovery and healing from those we've had the privilege to serve."
        />

        <div className="max-w-3xl mx-auto mt-12">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="relative bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-[var(--border)]"
          >
            <Quote className="absolute top-6 right-6 w-10 h-10 text-[var(--primary)]/10" />
            <div className="flex items-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 text-[var(--accent)] fill-current" />
              ))}
            </div>
            <p className="text-lg text-[var(--body-text)] leading-relaxed italic mb-8">
              &ldquo;{testimonials[active].quote}&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-[var(--primary)]/20">
                <Image
                  src={testimonials[active].image}
                  alt={testimonials[active].name}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div>
                <h4 className="font-bold text-[var(--dark-text)]">{testimonials[active].name}</h4>
                <p className="text-sm text-[var(--body-text)]">{testimonials[active].role}</p>
              </div>
            </div>
          </motion.div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white border border-[var(--border)] flex items-center justify-center hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === active ? "bg-[var(--primary)] w-6" : "bg-zinc-300 hover:bg-zinc-400"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white border border-[var(--border)] flex items-center justify-center hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
