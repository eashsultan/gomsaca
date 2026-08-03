"use client"

import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FileText,
  Download,
  Search,
  BookOpen,
  Image as ImageIcon,
  Calendar,
  Clock,
  ChevronDown,
  Files,
  Layers,
  FileDown,
  Sparkles,
} from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageHeader } from "@/components/ui/page-header"
import { publications } from "@/lib/data"

const categories = ["All", ...new Set(publications.map((p) => p.category))]

const formatIcons: Record<string, React.ElementType> = {
  PDF: FileText,
  JPEG: ImageIcon,
  PNG: ImageIcon,
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

export default function Page() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [expanded, setExpanded] = useState<number | null>(null)

  const stats = useMemo(() => {
    const total = publications.length
    const cats = new Set(publications.map((p) => p.category)).size
    const formats = new Set(publications.map((p) => p.format)).size
    const latest = publications.reduce(
      (max, p) => (p.date > max ? p.date : max),
      publications[0].date,
    )
    return { total, cats, formats, latest }
  }, [])

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
    <>
      <Header />
      <main className="pb-20 bg-white min-h-screen">
        <PageHeader
          label="Resources"
          title="Publications & Reports"
          description="Access our annual reports, strategic plans, policy documents, and research publications."
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          {/* Stats boxes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-10"
          >
            {[
              { icon: Files, label: "Total Documents", value: stats.total },
              { icon: Layers, label: "Categories", value: stats.cats },
              { icon: FileDown, label: "Formats", value: stats.formats },
              {
                icon: Calendar,
                label: "Latest Update",
                value: new Date(stats.latest).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                }),
              },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                className="card bg-white rounded-2xl border border-[var(--border)] p-5 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary-bg)] to-[var(--primary)]/10 flex items-center justify-center shrink-0">
                  <stat.icon className="w-6 h-6 text-[var(--primary)]" />
                </div>
                <div className="min-w-0">
                  <div className="text-xl lg:text-2xl font-extrabold text-[var(--dark-text)] leading-none mb-1 truncate">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[var(--muted)] font-medium truncate">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Search & filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="border-gradient rounded-2xl p-5 lg:p-6 mb-10"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted)]" />
              <input
                placeholder="Search publications..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-12 pl-11 pr-4 rounded-xl bg-white border border-[var(--border)] text-sm text-[var(--dark-text)] placeholder:text-[var(--muted)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10 outline-none transition-all duration-300"
              />
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    category === cat
                      ? "bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white shadow-lg shadow-[var(--primary)]/20"
                      : "bg-white border border-[var(--border)] text-[var(--body-text)] hover:border-[var(--primary)] hover:text-[var(--primary)] hover:shadow-md hover:shadow-[var(--primary)]/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Publications grid */}
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
                      className="card group relative bg-white rounded-2xl border border-[var(--border)] overflow-hidden hover:shadow-xl hover:shadow-[var(--primary)]/5 transition-all duration-500 cursor-pointer h-full"
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
                          <button
                            className="inline-flex items-center gap-2 rounded-xl px-3 py-1.5 text-sm font-semibold transition-all duration-300 hover:opacity-80"
                            style={{ color: accent }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Download className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
                            Download
                          </button>
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-14 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white p-8 lg:p-10 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[var(--accent)]/10 blur-3xl" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-xs font-bold uppercase tracking-[0.15em] mb-5">
                <Sparkles className="w-3.5 h-3.5" />
                Need a document?
              </span>
              <h3 className="text-2xl lg:text-3xl font-extrabold mb-3">
                Can&apos;t find what you&apos;re looking for?
              </h3>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">
                Contact our records and documentation unit and we will help you locate the report or
                publication you need.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-white text-[var(--primary)] font-bold hover:bg-[var(--primary-bg)] transition-colors shadow-lg shadow-black/20"
              >
                Request a Document
              </a>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
