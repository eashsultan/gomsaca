"use client"

import { motion } from "framer-motion"
import { Target, Eye, Shield, Heart, Users, Lightbulb, Handshake, Award } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { Card } from "@/components/ui/card"
import { FloatingParticles } from "@/components/ui/floating-elements"
import { StaggerGrid, StaggerItem } from "@/components/ui/animated-section"
import { aboutData } from "@/lib/data"

const principleIcons = [Shield, Heart, Handshake, Lightbulb, Users]

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <FloatingParticles count={6} />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 rounded-full bg-[var(--primary)]/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 rounded-full bg-[var(--accent)]/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          label="About Us"
          title="Gombe State Agency for the Control of AIDS"
          description={aboutData.whoWeAre}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 lg:p-12 text-center" glow>
            <div className="w-16 h-16 rounded-full bg-[#E8F5E9] flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-[#0B6E3A]" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-[var(--dark-text)] mb-5">Our Story</h3>
            <p className="text-[var(--body-text)] leading-relaxed text-lg max-w-3xl mx-auto">
              {aboutData.history}
            </p>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Card className="p-8 h-full" hover glow>
              <div className="w-14 h-14 rounded-2xl bg-[#E8F5E9] flex items-center justify-center mb-5 rotate-12 group-hover:rotate-0 transition-transform">
                <Target className="w-7 h-7 text-[#0B6E3A]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--dark-text)] mb-3">Our Mission</h3>
              <p className="text-[var(--body-text)] leading-relaxed">
                {aboutData.mission}
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Card className="p-8 h-full" hover glow>
              <div className="w-14 h-14 rounded-2xl bg-[#E8F5E9] flex items-center justify-center mb-5">
                <Eye className="w-7 h-7 text-[#0B6E3A]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--dark-text)] mb-3">Our Vision</h3>
              <p className="text-[var(--body-text)] leading-relaxed">
                {aboutData.vision}
              </p>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8F5E9] text-[#0B6E3A] text-sm font-semibold rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0B6E3A]" />
              Leadership Message
            </span>
            <h3 className="text-2xl lg:text-3xl font-bold text-[var(--dark-text)]">{aboutData.pmMessage.heading}</h3>
            <p className="text-[var(--body-text)] mt-2">{aboutData.projectManager.name} — {aboutData.projectManager.role}</p>
          </div>

          <Card className="p-8 lg:p-12 mb-12" glow>
            <p className="text-[var(--body-text)] leading-relaxed text-lg italic">
              &ldquo;{aboutData.pmMessage.message}&rdquo;
            </p>
          </Card>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutData.pmMessage.principles.map((principle, i) => {
              const Icon = principleIcons[i]
              return (
                <StaggerItem key={principle.title}>
                  <Card className="p-6 h-full" hover>
                    <div className="w-10 h-10 rounded-xl bg-[#E8F5E9] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[#0B6E3A]" />
                    </div>
                    <h4 className="font-bold text-[var(--dark-text)] mb-2">{principle.title}</h4>
                    <p className="text-sm text-[var(--body-text)] leading-relaxed">{principle.description}</p>
                  </Card>
                </StaggerItem>
              )
            })}
          </StaggerGrid>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <span className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#E8F5E9] to-[#D0EDD3] text-[var(--primary)] font-semibold shadow-sm">
            <Award className="w-5 h-5" />
            Impact Award to GOMSACA by CIHP.
            <a href="#" className="underline font-bold hover:text-[var(--primary-dark)] transition-colors">Click Here</a>
          </span>
        </motion.div>
      </div>
    </section>
  )
}
