"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Quote, ExternalLink } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { leadership } from "@/lib/data"

const socialLinks = ["#", "#", "#"]

export function Leadership() {
  return (
    <section id="team" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Team Members"
          title="Compassionate experts you can trust"
          description="Our team brings together a wealth of experience, passion, and a dedication to excellence in patient care."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadership.map((person, i) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="rounded-2xl bg-white border border-[var(--border)] overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {socialLinks.map((link, j) => (
                      <a
                        key={j}
                        href={link}
                        className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-bold text-[var(--dark-text)]">{person.name}</h3>
                  <p className="text-sm text-[var(--primary)] font-medium mt-0.5">{person.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
