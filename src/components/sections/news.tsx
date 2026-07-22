"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, ArrowRight } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { news } from "@/lib/data"

export function News() {
  return (
    <section id="news" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Latest News"
          title="Health updates you need to know"
          description="Get the latest information on health topics, wellness tips, and advancements in patient care."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {news.slice(0, 3).map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl bg-white border border-[var(--border)] overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="success">{article.category}</Badge>
                  <span className="flex items-center gap-1 text-xs text-[var(--body-text)]">
                    <Calendar className="w-3 h-3" />
                    {new Date(article.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[var(--dark-text)] leading-snug mb-3 group-hover:text-[var(--primary)] transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-[var(--body-text)] leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
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
            View All News
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
