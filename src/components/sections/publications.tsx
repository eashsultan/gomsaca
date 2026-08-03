"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FileText, Download, Search, BookOpen, FileSpreadsheet, Calendar, Clock, ChevronDown, Sparkles } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FloatingParticles } from "@/components/ui/floating-elements"
import { publications } from "@/lib/data"

const categories = ["All", ...new Set(publications.map((p) => p.category))]

const formatIcons: Record<string, React.ElementType> = {
  PDF: FileText,
  JPEG: FileSpreadsheet,
  PNG: FileSpreadsheet,
}

const categoryAccents: Record<string, string> = {
  "Annual Reports": "#0B3C6D",
  "Strategic Plans": "#2563EB",
  "Policy Documents": "#0891B2",
  "Monitoring Reports": "#E11D48",
  "Research Publications": "#22C55E",
  Publications: "#64748B",
  Reports: "#C026D3",
}

export function Publications() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [expanded, setExpanded] = useState<number | null>(null)

  const filtered = publications.filter((p) => {
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
    const matchCategory = category === "All" || p.category === category
    return matchSearch && matchCategory
  })

  const toggleExpand = (id: number) => {
    setExpanded(expanded === id ? null : id)
  }

  return (
    <section id="publications" className="relative overflow-hidden hero-gradient">
      <FloatingParticles count={6} />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(11,60,109,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(11,60,109,0.08),transparent_50%)]" />
        <div className="absolute -top-32 -right-32 w-[560px] h-[560px] rounded-full bg-[var(--primary)]/8 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 w-[520px] h-[520px] rounded-full bg-[var(--primary-bg)] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
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
            <Sparkles className="w-3.5 h-3.5 text-white/90" />
            Resources
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-6">
            <span className="text-[var(--primary)]">Reports</span>{" "}
            <span className="text-[var(--dark-text)]">&</span>{" "}
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--warm)] bg-clip-text text-transparent">
              Publications
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto text-[var(--body-text)]"
          >
            Access our annual reports, strategic plans, policy documents, and research publications.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-4xl mx-auto mb-14"
        >
          <div className="relative rounded-3xl p-1 bg-gradient-to-br from-[var(--primary)]/15 via-[var(--warm)]/10 to-[var(--primary-light)]/15 shadow-xl shadow-[var(--primary)]/5">
            <div className="rounded-[1.4rem] bg-white/80 backdrop-blur-md p-5 sm:p-6">
              <div className="relative mb-5">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted)]" />
                <Input
                  placeholder="Search publications..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10 h-12 rounded-xl bg-[var(--gray-subtle)] border-[var(--border)] text-[var(--dark-text)] placeholder:text-[var(--muted)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10 transition-all duration-300"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => {
                  const accent = categoryAccents[cat] || "var(--primary)"
                  const active = category === cat
                  return (
                    <button
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                        active
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

        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((pub, i) => {
              const FormatIcon = formatIcons[pub.format] || FileText
              const accent = categoryAccents[pub.category] || "var(--primary)"
              const isExpanded = expanded === pub.id
              return (
                <motion.div
                  key={pub.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                >
                  <div
                    className="group relative h-full rounded-2xl overflow-hidden cursor-pointer bg-white border border-[var(--border)] shadow-sm shadow-[var(--primary)]/5 hover:shadow-xl hover:shadow-[var(--primary)]/10 transition-all duration-500"
                    onClick={() => toggleExpand(pub.id)}
                  >
                    <div className="relative p-6 lg:p-7 bg-gradient-to-br from-[#061F3A] via-[#0B3C6D] to-[#1e4f9c] overflow-hidden">
                      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
                      <div className="absolute top-1/2 right-6 w-24 h-24 rounded-full border border-white/10" />
                      <div
                        className="absolute bottom-0 left-0 h-px w-full"
                        style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
                      />
                      <div className="relative flex items-start gap-5">
                        <div className="relative shrink-0">
                          <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg bg-white/10 backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-3"
                            style={{ background: `linear-gradient(135deg, ${accent}40, ${accent}66)` }}
                          >
                            <FormatIcon className="w-7 h-7" style={{ color: "#fff" }} />
                          </div>
                          <div
                            className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-[#0B3C6D]"
                            style={{ background: accent }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-3">
                            <span
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm"
                              style={{ color: "#fff" }}
                            >
                              <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
                              {pub.category}
                            </span>
                            <span className="text-[11px] text-white/50 font-medium uppercase tracking-wide">
                              {pub.format}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-white leading-snug transition-colors mb-1">
                            {pub.title}
                          </h3>
                          <span className="text-xs text-white/60">
                            <Calendar className="inline w-3 h-3 mr-1 -mt-0.5" />
                            {new Date(pub.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="relative p-6 lg:p-7 bg-white">
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.p
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="text-sm text-[var(--body-text)] leading-relaxed overflow-hidden mb-4"
                          >
                            {pub.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-[var(--muted)]">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {pub.fileSize}
                          </span>
                          <span className="flex items-center gap-1" style={{ color: accent }}>
                            <ChevronDown
                              className={`w-3 h-3 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                            />
                            {isExpanded ? "Less" : "More"}
                          </span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="gap-2 rounded-xl font-semibold transition-all duration-300"
                          style={{ color: accent }}
                          onClick={(e) => {
                            e.stopPropagation()
                          }}
                        >
                          <Download className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[var(--primary-bg)] to-[var(--warm-bg)] flex items-center justify-center mx-auto mb-5 shadow-lg">
              <BookOpen className="w-10 h-10 text-[var(--primary)]" />
            </div>
            <h3 className="text-xl font-bold text-[var(--dark-text)] mb-2">No publications found</h3>
            <p className="text-[var(--body-text)]">Try adjusting your search or filter</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
