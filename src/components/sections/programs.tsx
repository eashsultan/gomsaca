"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Shield, Microscope, HeartPulse, Users, GraduationCap, BarChart3, Megaphone, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { SectionHeader } from "@/components/ui/section-header"
import { Button } from "@/components/ui/button"
import { programs } from "@/lib/data"

const iconMap: Record<string, React.ElementType> = {
  Shield, Microscope, HeartPulse, Users, GraduationCap, BarChart3, Megaphone,
}

const images = ["/facility.jpg", "/community.jpg", "/gombe.jpg", "/market.jpg", "/facility.jpg", "/community.jpg"]

const colorMap: Record<string, { bg: string; text: string }> = {
  green: { bg: "bg-[var(--primary-bg)]", text: "text-[var(--primary)]" },
  gold: { bg: "bg-amber-50", text: "text-[var(--accent)]" },
}

export function Programs() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[var(--gray-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="All GOMSACA Activities"
          title="What Our Agency Offers"
          description="HIV prevention is not a one-size-fits-all approach. Tailoring strategies to the specific needs and risk factors of different populations is essential. Combining these prevention methods, along with ongoing research and innovation, is our best hope for reducing HIV transmission and ultimately achieving a world without AIDS."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, i) => {
            const Icon = iconMap[program.icon]
            const colors = colorMap[program.color]
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="group rounded-2xl bg-white border border-[var(--border)] overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={images[i]}
                      alt={program.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    {Icon && (
                      <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mb-3", colors.bg)}>
                        <Icon className={cn("w-5 h-5", colors.text)} />
                      </div>
                    )}
                    <h3 className="text-lg font-bold text-[var(--dark-text)] mb-2">{program.title}</h3>
                    <p className="text-sm text-[var(--body-text)] leading-relaxed flex-1">{program.description}</p>
                    <a
                      href={program.link}
                      className={cn(
                        "inline-flex items-center gap-1.5 mt-3 font-semibold text-sm transition-colors",
                        colors.text,
                      )}
                    >
                      Learn more
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button variant="primary" size="lg">
            View All Programs
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
