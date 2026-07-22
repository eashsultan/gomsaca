"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FileText, Download, Search } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { publications } from "@/lib/data"

const categories = ["All", ...new Set(publications.map((p) => p.category))]

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
    <section id="publications" className="py-20 lg:py-28 bg-[var(--gray-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Resources"
          title="Reports & Publications"
          description="Access our annual reports, strategic plans, policy documents, and research publications."
        />

        <div className="max-w-3xl mx-auto mb-10 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted)]" />
            <Input
              placeholder="Search publications..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  category === cat
                    ? "bg-[var(--primary)] text-white shadow-md"
                    : "bg-white border border-[var(--border)] text-[var(--body-text)] hover:border-[var(--primary)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((pub, i) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Card hover className="h-full flex flex-col group">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--primary-bg)] flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-[var(--primary)]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Badge variant="outline" className="text-[10px]">
                      {pub.category}
                    </Badge>
                  </div>
                </div>
                <h3 className="text-base font-bold text-[var(--dark-text)] mb-2 leading-snug">
                  {pub.title}
                </h3>
                <p className="text-sm text-[var(--body-text)] leading-relaxed flex-1 mb-4">
                  {pub.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                  <span className="text-xs text-[var(--muted)]">
                    {pub.format} &middot; {pub.fileSize}
                  </span>
                  <Button variant="ghost" size="sm" className="gap-1.5">
                    <Download className="w-3.5 h-3.5" />
                    Download
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <FileText className="w-12 h-12 text-[var(--muted)] mx-auto mb-4" />
            <p className="text-[var(--body-text)] font-medium">No publications found</p>
            <p className="text-sm text-[var(--muted)] mt-1">Try adjusting your search or filter</p>
          </div>
        )}
      </div>
    </section>
  )
}
