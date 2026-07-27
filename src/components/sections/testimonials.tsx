"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { FloatingParticles } from "@/components/ui/floating-elements"
import { testimonials } from "@/lib/data"

export function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = useCallback(() => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1)), [])
  const next = useCallback(() => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1)), [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-[var(--gray-bg)] to-white relative overflow-hidden">
      <FloatingParticles count={5} />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          label="Testimonials"
          title="Stories of hope and resilience"
          description="Discover inspiring stories from individuals and communities whose lives have been touched by our work."
        />

        <div className="max-w-3xl mx-auto mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-lg shadow-black/5 border border-[var(--border)]"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-[var(--primary)]/8" />
              <div className="flex items-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-[var(--accent)] fill-current" />
                ))}
              </div>
              <p className="text-lg lg:text-xl text-[var(--body-text)] leading-relaxed italic mb-8">
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-[var(--border-light)]">
                <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-[var(--primary)]/20 ring-offset-2">
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
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white border border-[var(--border)] flex items-center justify-center hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === active ? "bg-[var(--primary)] w-8 h-2.5" : "bg-zinc-300 hover:bg-zinc-400 w-2.5 h-2.5"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white border border-[var(--border)] flex items-center justify-center hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
