"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Shield, Microscope, HeartPulse, Users, GraduationCap, BarChart3, Megaphone, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { SectionHeader } from "@/components/ui/section-header"
import { Button } from "@/components/ui/button"
import { TiltCard } from "@/components/ui/tilt-card"
import { StaggerGrid, StaggerItem } from "@/components/ui/animated-section"
import { FloatingParticles } from "@/components/ui/floating-elements"
import { programs } from "@/lib/data"

const iconMap: Record<string, React.ElementType> = {
  Shield, Microscope, HeartPulse, Users, GraduationCap, BarChart3, Megaphone,
}

const images = ["/A doctor is checking a patient_.jpeg", "/MEDICAL OUTREACH & HIV_AIDS AWARENESS, SOUTH… (1).jpeg", "/999165867338083734.jpeg", "/8444318045568594.jpeg", "/A doctor is checking a patient_.jpeg", "/MEDICAL OUTREACH & HIV_AIDS AWARENESS, SOUTH… (1).jpeg"]

const colorMap: Record<string, { bg: string; text: string; hover: string }> = {
  green: { bg: "bg-[var(--primary-bg)]", text: "text-[var(--primary)]", hover: "group-hover:bg-[var(--primary)] group-hover:text-white" },
  gold: { bg: "bg-amber-50", text: "text-[var(--accent)]", hover: "group-hover:bg-[var(--accent)] group-hover:text-white" },
}

export function Programs() {
  return (
    <section id="programs" className="py-20 lg:py-28 bg-[var(--gray-bg)] relative overflow-hidden">
      <FloatingParticles count={5} />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary)]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          label="Our Programs"
          title="What Our Agency Offers"
          description="HIV prevention is not a one-size-fits-all approach. Tailoring strategies to the specific needs and risk factors of different populations is essential."
        />

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, i) => {
            const Icon = iconMap[program.icon]
            const colors = colorMap[program.color]
            return (
              <StaggerItem key={program.id}>
                <TiltCard maxTilt={4} scale={1.01}>
                  <div className="group rounded-2xl bg-white border border-[var(--border)] overflow-hidden hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={images[i]}
                        alt={program.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      {Icon && (
                        <div className={cn("w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300", colors.bg, colors.hover)}>
                          <Icon className={cn("w-5.5 h-5.5 transition-colors duration-300", colors.text, "group-hover:text-white")} />
                        </div>
                      )}
                      <h3 className="text-lg font-bold text-[var(--dark-text)] mb-3 leading-snug">{program.title}</h3>
                      <p className="text-sm text-[var(--body-text)] leading-relaxed flex-1">{program.description}</p>
                      <a
                        href={program.link}
                        className={cn(
                          "inline-flex items-center gap-1.5 mt-4 font-semibold text-sm transition-all duration-300 group/link",
                          colors.text,
                        )}
                      >
                        Learn more
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>
            )
          })}
        </StaggerGrid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
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
