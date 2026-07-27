"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FileText, Download, Search, BookOpen, FileSpreadsheet, Calendar, Clock, ChevronDown } from "lucide-react"
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
  "Annual Reports": "#0B6E3A",
  "Strategic Plans": "#1E3A5F",
  "Policy Documents": "#B8860B",
  "Monitoring Reports": "#6B21A8",
  "Research Publications": "#0D9488",
  Publications: "#64748B",
  Reports: "#DC2626",
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
    <section id="publications" className="relative overflow-hidden">
      <div className="py-20 lg:py-28 bg-white relative">
        <FloatingParticles count={6} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[var(--primary)]/4 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[var(--primary-bg)]/80 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(#e8f5e9_1px,transparent_1px)] [background-size:40px_40px] opacity-30" />
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
              <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
              Resources
            </motion.span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight mb-6">
              <span className="text-[var(--primary)]">Reports</span>{" "}
              <span className="text-[var(--dark-text)]">&</span>{" "}
              <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] bg-clip-text text-transparent">
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
            <div className="bg-gradient-to-br from-[var(--primary-bg)] to-white rounded-2xl border border-[var(--primary)]/10 p-5 shadow-sm">
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted)]" />
                  <Input
                    placeholder="Search publications..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-10 h-11 rounded-xl bg-white border-[var(--border)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      category === cat
                        ? "bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white shadow-lg shadow-[var(--primary)]/20"
                        : "bg-white border border-[var(--primary)]/20 text-[var(--body-text)] hover:border-[var(--primary)] hover:text-[var(--primary)] hover:shadow-md hover:shadow-[var(--primary)]/5"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
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
                      className="group relative bg-white rounded-2xl border border-[var(--border)] overflow-hidden hover:shadow-xl hover:shadow-[var(--primary)]/5 transition-all duration-500 cursor-pointer h-full"
                      onClick={() => toggleExpand(pub.id)}
                      style={{ borderTopColor: accent, borderTopWidth: "4px" }}
                    >
                      <div className="p-6 lg:p-7">
                        <div className="flex items-start gap-5">
                          <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg"
                            style={{ background: `linear-gradient(135deg, ${accent}22, ${accent}44)` }}
                          >
                            <FormatIcon className="w-7 h-7" style={{ color: accent }} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-3">
                              <span
                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider"
                                style={{ background: `${accent}12`, color: accent }}
                              >
                                <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
                                {pub.category}
                              </span>
                              <span className="text-[11px] text-[var(--muted)] font-medium uppercase tracking-wide">
                                {pub.format}
                              </span>
                            </div>
                            <h3 className="text-lg font-bold text-[var(--dark-text)] leading-snug group-hover:text-[var(--primary)] transition-colors mb-2">
                              {pub.title}
                            </h3>
                            <AnimatePresence>
                              {isExpanded && (
                                <motion.p
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.25 }}
                                  className="text-sm text-[var(--body-text)] leading-relaxed overflow-hidden"
                                >
                                  {pub.description}
                                </motion.p>
                              )}
                            </AnimatePresence>
                            <div className="flex items-center gap-4 mt-4 text-xs text-[var(--muted)]">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {new Date(pub.date).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                })}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {pub.fileSize}
                              </span>
                              <span className="flex items-center gap-1 text-[var(--primary)]/60">
                                <ChevronDown
                                  className={`w-3 h-3 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                                />
                                {isExpanded ? "Less" : "More"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="px-6 lg:px-7 pb-5 pt-0">
                        <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                          <span className="text-xs text-[var(--muted)]">
                            Click to {isExpanded ? "collapse" : "expand"} details
                          </span>
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
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[var(--primary-bg)] to-[var(--primary)]/10 flex items-center justify-center mx-auto mb-5 shadow-lg">
                <BookOpen className="w-10 h-10 text-[var(--primary)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--dark-text)] mb-2">No publications found</h3>
              <p className="text-[var(--body-text)]">Try adjusting your search or filter</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
