"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, ArrowRight, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TiltCard } from "@/components/ui/tilt-card"
import { StaggerGrid, StaggerItem } from "@/components/ui/animated-section"
import { FloatingParticles } from "@/components/ui/floating-elements"
import { blogPosts } from "@/lib/data"

export function Blog() {
  return (
    <section id="blog" className="relative overflow-hidden">
      <div className="py-20 lg:py-28 bg-white relative">
        <FloatingParticles count={6} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[var(--primary)]/4 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[var(--primary-bg)]/80 blur-3xl" />
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
              Activities
            </motion.span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight mb-6">
              <span className="text-[var(--primary)]">All GOMSACA</span>{" "}
              <span className="text-[var(--dark-text)]">Activities &</span>{" "}
              <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] bg-clip-text text-transparent">
                Events
              </span>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto text-[var(--body-text)]"
            >
              Stay updated with the latest activities, events, and news from GOMSACA.
            </motion.p>
          </motion.div>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <StaggerItem key={post.id}>
                <TiltCard maxTilt={4} scale={1.01}>
                  <article className="group rounded-3xl bg-gradient-to-br from-[var(--primary-bg)] to-white border border-[var(--primary)]/20 overflow-hidden hover:shadow-xl hover:shadow-[var(--primary)]/5 transition-all duration-500 h-full">
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <Badge variant="default" className="shadow-lg">{post.category}</Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="w-3.5 h-3.5 text-[var(--muted)]" />
                        <span className="text-xs text-[var(--body-text)]">
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <p className="text-xs text-[var(--muted)] mb-2">by {post.author}</p>
                      <h3 className="text-base font-bold text-[var(--dark-text)] leading-snug group-hover:text-[var(--primary)] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <a
                        href="#"
                        className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors group/link"
                      >
                        read more
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </a>
                    </div>
                  </article>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerGrid>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Button variant="primary" size="lg">
              Older Entries
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
