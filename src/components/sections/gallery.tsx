"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { SectionHeader } from "@/components/ui/section-header"
import { TiltCard } from "@/components/ui/tilt-card"
import { FloatingParticles } from "@/components/ui/floating-elements"
import { galleryImages } from "@/lib/data"

const categories = ["All", ...new Set(galleryImages.map((img) => img.category))]

export function Gallery() {
  const [active, setActive] = useState("All")

  const filtered = active === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === active)

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[var(--gray-bg)] relative overflow-hidden">
      <FloatingParticles count={5} />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[var(--accent)]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          label="Gallery"
          title="Moments Across Gombe State"
          description="A visual journey through our programs, people, and impact."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-[var(--primary)] text-white shadow-md shadow-[var(--primary-glow)]"
                  : "bg-white border border-[var(--border)] text-[var(--body-text)] hover:border-[var(--primary)] hover:text-[var(--primary)] shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={`${img.src}-${img.alt}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <TiltCard maxTilt={5} scale={1.01}>
                  <div className="relative group rounded-2xl overflow-hidden aspect-[4/3] shadow-md shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-shadow duration-500">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                      <p className="text-white text-sm font-medium leading-snug">{img.alt}</p>
                      <span className="text-white/60 text-xs mt-1 inline-block">{img.category}</span>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
