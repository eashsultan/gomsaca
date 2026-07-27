"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SectionHeader } from "@/components/ui/section-header"
import { FloatingParticles } from "@/components/ui/floating-elements"
import { TiltCard } from "@/components/ui/tilt-card"
import { Award } from "lucide-react"

export function Awards() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <FloatingParticles count={4} />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-[var(--accent)]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[var(--primary)]/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          label="Recognition"
          title="Awards & Achievements"
          description="Our commitment to excellence in the fight against HIV/AIDS has been recognized both locally and internationally."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-4xl mx-auto"
        >
          <TiltCard maxTilt={3} scale={1.005}>
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-2xl overflow-hidden shadow-xl shadow-black/5 border border-[var(--border)] bg-gradient-to-b from-[var(--gray-bg)] to-white p-2"
            >
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--primary)]/90 text-white text-xs font-semibold backdrop-blur-sm">
                  <Award className="w-3 h-3" />
                  CIHP Impact Award
                </span>
              </div>
              <Image
                src="/Awarsd.png"
                alt="GOMSACA Awards and Recognition"
                width={800}
                height={500}
                className="w-full h-auto object-contain rounded-xl"
              />
            </motion.div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  )
}
