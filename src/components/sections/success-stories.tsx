"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, ArrowRight } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { successStories } from "@/lib/data"

export function SuccessStories() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Success Stories"
          title="Real Impact, Real Lives"
          description="Stories of transformation, hope, and community resilience from across Gombe State."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {successStories.map((story, i) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card hover className="h-full overflow-hidden p-0 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-[var(--primary)]">
                      <Award className="w-3 h-3" />
                      Success Story
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[var(--dark-text)] mb-2 leading-snug">
                    {story.name}
                  </h3>
                  <p className="text-sm text-[var(--body-text)] leading-relaxed mb-4">
                    {story.summary}
                  </p>
                  <div className="bg-[var(--primary-bg)] rounded-lg p-3">
                    <p className="text-xs font-semibold text-[var(--primary)]">
                      {story.outcome}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Button variant="primary" size="lg">
            View All Stories
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
