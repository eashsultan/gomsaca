"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { SectionHeader } from "@/components/ui/section-header"
import { galleryImages } from "@/lib/data"

const categories = ["All", ...new Set(galleryImages.map((img) => img.category))]

export function Gallery() {
  const [active, setActive] = useState("All")

  const filtered = active === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === active)

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Gallery"
          title="Moments Across Gombe State"
          description="A visual journey through our programs, people, and impact."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? "bg-[var(--primary)] text-white shadow-md"
                  : "bg-zinc-100 text-[var(--body-text)] hover:bg-zinc-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((img, i) => (
            <motion.div
              key={`${img.src}-${img.alt}`}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="relative group rounded-xl overflow-hidden aspect-[4/3]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-sm font-medium">{img.alt}</p>
                <span className="text-white/70 text-xs">{img.category}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
