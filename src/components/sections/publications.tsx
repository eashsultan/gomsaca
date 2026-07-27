"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FileText, Download, Search, BookOpen, FileSpreadsheet, FileBarChart } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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

export function Publications() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")

  const filtered = publications.filter((p) => {
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
    const matchCategory = category === "All" || p.category === category
    return matchSearch && matchCategory
  })

  return (
    <section id="publications" className="py-20 lg:py-28 bg-[var(--gray-bg)] relative overflow-hidden">
      <FloatingParticles count={4} />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--primary)]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          label="Resources"
          title="Reports & Publications"
          description="Access our annual reports, strategic plans, policy documents, and research publications."
        />

        <div className="max-w-2xl mx-auto mb-12 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted)]" />
            <Input
              placeholder="Search publications..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 h-12 rounded-xl border-[var(--border)] focus:border-[var(--primary)] transition-colors"
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  category === cat
                    ? "bg-[var(--primary)] text-white shadow-md shadow-[var(--primary-glow)]"
                    : "bg-white border border-[var(--border)] text-[var(--body-text)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((pub, i) => {
              const FormatIcon = formatIcons[pub.format] || FileText
              return (
                <motion.div
                  key={pub.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                >
                  <Card hover className="h-full flex flex-col group">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--primary-bg)] to-[#D0EDD3] flex items-center justify-center shrink-0">
                        <FormatIcon className="w-5.5 h-5.5 text-[var(--primary)]" />
                      </div>
                      <div className="flex-1 min-w-0 flex items-start justify-between gap-2">
                        <Badge variant="outline" className="text-[10px] uppercase tracking-wider">
                          {pub.category}
                        </Badge>
                        <span className="text-[10px] text-[var(--muted)] shrink-0">
                          {pub.format}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-[var(--dark-text)] mb-2 leading-snug line-clamp-2">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-[var(--body-text)] leading-relaxed flex-1 mb-4 line-clamp-2">
                      {pub.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-[var(--border)] mt-auto">
                      <span className="text-xs text-[var(--muted)] flex items-center gap-1">
                        <FileBarChart className="w-3 h-3" />
                        {pub.fileSize}
                      </span>
                      <Button variant="ghost" size="sm" className="gap-1.5 group/btn">
                        <Download className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:-translate-y-0.5" />
                        Download
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-16 h-16 rounded-2xl bg-zinc-100 flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-[var(--muted)]" />
            </div>
            <p className="text-[var(--body-text)] font-medium">No publications found</p>
            <p className="text-sm text-[var(--muted)] mt-1">Try adjusting your search or filter</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
