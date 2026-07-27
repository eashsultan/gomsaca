"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Quote, ChevronLeft, ChevronRight, Star, Sparkles } from "lucide-react"
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
    <section className="relative overflow-hidden">
      <div className="py-20 lg:py-28 bg-white relative">
        <FloatingParticles count={6} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[var(--primary)]/4 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[var(--primary-bg)]/80 blur-3xl" />
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
              <Sparkles className="w-3.5 h-3.5" />
              Testimonials
            </motion.span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight mb-6">
              <span className="text-[var(--primary)]">Stories</span>{" "}
              <span className="text-[var(--dark-text)]">of hope and</span>{" "}
              <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] bg-clip-text text-transparent">
                resilience
              </span>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto text-[var(--body-text)]"
            >
              Discover inspiring stories from individuals and communities whose lives have been touched by our work.
            </motion.p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative bg-gradient-to-br from-[var(--primary-bg)] to-white rounded-3xl border border-[var(--primary)]/20 p-8 lg:p-10 shadow-lg shadow-[var(--primary)]/5"
              >
                <div className="absolute top-6 left-6 lg:top-8 lg:left-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center shadow-lg shadow-[var(--primary)]/20">
                    <Quote className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="flex items-center gap-1 ml-20 mb-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 text-[var(--primary)] fill-current" />
                  ))}
                </div>
                <p className="text-lg lg:text-xl text-[var(--body-text)] leading-relaxed italic mb-8">
                  &ldquo;{testimonials[active].quote}&rdquo;
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-[var(--primary)]/10">
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
                className="w-12 h-12 rounded-full bg-white border border-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[var(--primary)]/20 active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === active
                        ? "bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] w-8 h-2.5 shadow-md shadow-[var(--primary)]/20"
                        : "bg-[var(--primary)]/20 hover:bg-[var(--primary)]/40 w-2.5 h-2.5"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-white border border-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[var(--primary)]/20 active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
