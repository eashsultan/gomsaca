"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Sparkles, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import { FloatingParticles } from "@/components/ui/floating-elements"
import { galleryImages } from "@/lib/data"

const categories = ["All", ...new Set(galleryImages.map((img) => img.category))]

const categoryAccents: Record<string, string> = {
  All: "#2563EB",
  Awareness: "#F43F5E",
  Programs: "#16A34A",
  Outreach: "#D97706",
  Events: "#9333EA",
  Training: "#0891B2",
  Youth: "#E11D48",
  Facilities: "#2563EB",
}

export function Gallery() {
  const [active, setActive] = useState("All")
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = active === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === active)

  const lightboxIndex = lightbox !== null
    ? filtered.findIndex((img) => filtered.indexOf(img) === lightbox)
    : -1

  const close = useCallback(() => setLightbox(null), [])

  const prev = useCallback(() => {
    if (lightboxIndex > 0) {
      const current = galleryImages.indexOf(filtered[lightboxIndex - 1])
      setLightbox(current)
    }
  }, [lightboxIndex, filtered])

  const next = useCallback(() => {
    if (lightboxIndex < filtered.length - 1) {
      const current = galleryImages.indexOf(filtered[lightboxIndex + 1])
      setLightbox(current)
    }
  }, [lightboxIndex, filtered])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightbox === null) return
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [lightbox, close, prev, next])

  return (
    <section id="gallery" className="relative overflow-hidden hero-gradient">
      <FloatingParticles count={6} />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(11,60,109,0.10),transparent_60%)]" />
        <div className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full bg-[var(--primary)]/6 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-[480px] h-[480px] rounded-full bg-[var(--warm)]/8 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-5xl mx-auto text-center mb-12 lg:mb-14"
        >
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white text-xs font-bold uppercase tracking-[0.15em] mb-6 shadow-lg shadow-[var(--primary)]/20"
          >
            <Sparkles className="w-3.5 h-3.5" />
            GOMSACA Activities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight"
          >
            <span className="text-[var(--primary)]">All GOMSACA</span>{" "}
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--warm)] bg-clip-text text-transparent">
              Activities
            </span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="relative rounded-3xl p-1 bg-gradient-to-br from-[var(--primary)]/15 via-[var(--warm)]/10 to-[var(--primary-light)]/15 shadow-xl shadow-[var(--primary)]/5">
            <div className="rounded-[1.4rem] bg-white/80 backdrop-blur-md p-4 sm:p-5">
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((cat) => {
                  const accent = categoryAccents[cat] || "var(--primary)"
                  const isActive = active === cat
                  return (
                    <button
                      key={cat}
                      onClick={() => setActive(cat)}
                      className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white shadow-lg shadow-[var(--primary)]/25"
                          : "bg-white border border-[var(--primary)]/15 text-[var(--body-text)] hover:border-[var(--primary)] hover:text-[var(--primary)] hover:shadow-md hover:shadow-[var(--primary)]/10"
                      }`}
                    >
                      {cat}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => {
              const accent = categoryAccents[img.category] || "var(--primary)"
              return (
                <motion.div
                  key={`${img.src}-${img.alt}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <button
                    onClick={() => setLightbox(i)}
                    className="w-full text-left group"
                  >
                    <div className="relative rounded-3xl p-[2px] bg-gradient-to-br from-white/80 via-[var(--primary)]/20 to-[var(--warm)]/30 shadow-lg shadow-[var(--primary)]/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[var(--primary)]/15">
                      <div className="relative rounded-[calc(1.5rem-2px)] overflow-hidden aspect-[4/3] bg-white">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#061F3A]/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                          <span
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white bg-white/15 backdrop-blur-sm border border-white/20 shadow-lg"
                          >
                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
                            {img.category}
                          </span>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                          <p className="text-white text-sm font-medium leading-snug">{img.alt}</p>
                        </div>
                        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 text-[#061F3A] flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                          <ZoomIn className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </button>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox !== null && filtered[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {lightboxIndex > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); prev() }}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {lightboxIndex < filtered.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); next() }}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden">
                <Image
                  src={filtered[lightbox].src}
                  alt={filtered[lightbox].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              <div className="text-center mt-4">
                <p className="text-white text-lg font-medium">{filtered[lightbox].alt}</p>
                <span className="text-white/60 text-sm">{filtered[lightbox].category}</span>
              </div>
              <div className="text-center mt-2 text-white/40 text-xs">
                {lightboxIndex + 1} / {filtered.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
