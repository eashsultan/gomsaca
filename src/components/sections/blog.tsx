"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, ArrowRight } from "lucide-react"
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
