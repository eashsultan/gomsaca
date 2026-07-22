"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, ChevronDown, CheckCircle } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { Card } from "@/components/ui/card"
import { lgas } from "@/lib/data"

export function LGAsSection() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <section id="lgas" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Coverage Areas"
          title="Serving All 11 Local Government Areas"
          description="Our programs reach every corner of Gombe State, from Akko to Yamaltu-Deba."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {lgas.map((lga, i) => (
            <motion.div
              key={lga.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Card
                hover
                className={`cursor-pointer ${expanded === lga.id ? "ring-2 ring-[var(--primary)]" : ""}`}
                onClick={() => setExpanded(expanded === lga.id ? null : lga.id)}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[var(--primary)]" />
                    <h3 className="font-bold text-[var(--dark-text)]">{lga.name}</h3>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-[var(--body-text)] transition-transform duration-200 ${
                      expanded === lga.id ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <div className="flex items-center gap-3 text-sm text-[var(--body-text)]">
                  <span className="font-semibold text-[var(--primary)]">
                    {lga.beneficiaries.toLocaleString()} Beneficiaries
                  </span>
                  <span className="w-1 h-1 rounded-full bg-zinc-300" />
                  <span>{lga.facilities} Facilities</span>
                </div>

                <AnimatePresence>
                  {expanded === lga.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-[var(--border)]">
                        <p className="text-xs font-semibold text-[var(--body-text)] uppercase tracking-wider mb-2">
                          Initiatives
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {lga.initiatives.map((init) => (
                            <span
                              key={init}
                              className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-[var(--primary-bg)] text-[var(--primary)] text-xs font-medium"
                            >
                              <CheckCircle className="w-3 h-3" />
                              {init}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
