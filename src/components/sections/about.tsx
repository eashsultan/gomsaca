"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Target, Eye, Shield, Heart, Users, Lightbulb, Handshake, Award, FileText, Activity, BarChart3, Megaphone, TrendingUp, Building, CheckCircle, Quote, Building2 } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { FloatingParticles } from "@/components/ui/floating-elements"
import { aboutData, leadership } from "@/lib/data"

const mandateIcons: Record<string, React.ElementType> = {
  FileText, Activity, Handshake, BarChart3, TrendingUp, Megaphone,
}

const mandateColors = [
  { gradient: "from-[#0B3C6D] to-[#2563EB]", chip: "#2563EB" },
  { gradient: "from-[#15803D] to-[#22C55E]", chip: "#16A34A" },
  { gradient: "from-[#BE123C] to-[#F43F5E]", chip: "#E11D48" },
  { gradient: "from-[#9333EA] to-[#A855F7]", chip: "#9333EA" },
  { gradient: "from-[#B45309] to-[#F59E0B]", chip: "#D97706" },
  { gradient: "from-[#0E7490] to-[#06B6D4]", chip: "#0891B2" },
]

export function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="py-20 lg:py-28 hero-gradient relative">
        <FloatingParticles count={6} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(11,60,109,0.10),transparent_60%)]" />
          <div className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full bg-[var(--primary)]/6 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-[480px] h-[480px] rounded-full bg-[var(--warm)]/8 blur-3xl" />
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
              About Us
            </motion.span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-6">
              <span className="text-[var(--primary)]">Gombe State</span>{" "}
              <span className="text-[var(--dark-text)]">Agency for the</span>{" "}
              <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--warm)] bg-clip-text text-transparent">
                Control of AIDS
              </span>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto text-[var(--body-text)]"
            >
              {aboutData.whoWeAre}
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="relative h-full">
                <div className="relative rounded-[2rem] p-[2px] bg-gradient-to-br from-[var(--primary)]/50 via-[var(--warm)]/30 to-[var(--primary-light)]/50 h-full">
                  <div className="rounded-[calc(2rem-2px)] bg-white/90 backdrop-blur-sm overflow-hidden h-full">
                    <div className="relative p-8 lg:p-10 bg-gradient-to-br from-[#061F3A] via-[#0B3C6D] to-[#1e4f9c] overflow-hidden">
                      <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-white/10 blur-2xl" />
                      <div className="absolute bottom-0 left-1/2 w-56 h-px bg-gradient-to-r from-transparent via-[var(--warm)] to-transparent" />
                      <div className="relative flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--warm)] to-[var(--warm-light)] flex items-center justify-center shadow-xl shadow-[var(--warm)]/30">
                          <Heart className="w-8 h-8 text-[#061F3A]" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-extrabold text-white">Our Story</h3>
                          <p className="text-sm text-white/60 font-medium">Since 2002</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-8 lg:p-10">
                      <p className="text-[var(--body-text)] leading-relaxed text-base">
                        {aboutData.history}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/8 text-[var(--primary)] text-sm font-semibold border border-[var(--primary)]/15">
                          <TrendingUp className="w-4 h-4" />
                          Since 2002
                        </span>
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--warm)]/10 text-[#16A34A] text-sm font-semibold border border-[var(--warm)]/25">
                          <Building2 className="w-4 h-4" />
                          11 LACA Offices
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col gap-6"
            >
              <div className="group relative rounded-3xl overflow-hidden bg-white border border-[var(--border)] shadow-sm shadow-[var(--primary)]/5 hover:shadow-xl hover:shadow-[var(--primary)]/10 transition-all duration-500 hover:-translate-y-1">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0B3C6D] to-[#2563EB] opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-[#2563EB]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-start gap-5 p-7 lg:p-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0B3C6D] to-[#2563EB] flex items-center justify-center shadow-lg shadow-[#2563EB]/25 shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/10 text-[#2563EB] text-xs font-semibold mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                      Our Mission
                    </div>
                    <p className="text-[var(--body-text)] leading-relaxed text-sm">
                      {aboutData.mission}
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative rounded-3xl overflow-hidden bg-white border border-[var(--border)] shadow-sm shadow-[var(--primary)]/5 hover:shadow-xl hover:shadow-[var(--primary)]/10 transition-all duration-500 hover:-translate-y-1">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#15803D] to-[#4ADE80] opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-[#22C55E]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-start gap-5 p-7 lg:p-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#15803D] to-[#22C55E] flex items-center justify-center shadow-lg shadow-[#22C55E]/25 shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                    <Eye className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22C55E]/10 text-[#16A34A] text-xs font-semibold mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                      Our Vision
                    </div>
                    <p className="text-[var(--body-text)] leading-relaxed text-sm">
                      {aboutData.vision}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="py-20 lg:py-28 bg-gradient-to-br from-[var(--primary)] via-[var(--primary-dark)] to-[var(--primary-darker)] relative overflow-hidden">
        <FloatingParticles count={6} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[var(--primary-light)]/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/5" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-[0.15em] mb-6 shadow-lg border border-white/15"
            >
              <Award className="w-3.5 h-3.5 text-[var(--accent-light)]" />
              Leadership
            </motion.span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white leading-[1.05] tracking-tight">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] bg-clip-text text-transparent">
                Leadership
              </span>
            </h2>
            <p className="text-white/70 mt-4 text-lg">The team guiding Gombe State&apos;s HIV/AIDS response.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-5xl mx-auto mb-16"
          >
            <div className="relative rounded-[2rem] p-[2px] bg-gradient-to-br from-[var(--accent)]/60 via-white/10 to-[var(--primary-light)]/50 shadow-2xl shadow-black/30">
              <div className="rounded-[calc(2rem-2px)] bg-[#0B2C4F]/60 backdrop-blur-sm overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  <div className="lg:col-span-2 relative h-[380px] lg:h-full min-h-[380px]">
                    <Image
                      src={leadership[0].image}
                      alt={leadership[0].name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0B2C4F]/80 via-transparent to-transparent" />
                    <div className="absolute top-5 left-5">
                      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider shadow-lg border border-white/20">
                        <Quote className="w-3 h-3 text-[var(--accent-light)]" />
                        Chief Executive Director
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-3xl lg:text-4xl font-extrabold text-white mb-2">
                      {leadership[0].name}
                    </h3>
                    <div className="w-14 h-1 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] mb-6" />
                    <p className="text-white/80 leading-relaxed text-base lg:text-lg">
                      &ldquo;{leadership[0].message}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {leadership.slice(1).map((person, i) => (
              <motion.div
                key={person.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-b from-white/15 to-transparent overflow-hidden transition-all duration-300 hover:bg-gradient-to-b hover:from-[var(--accent)]/50 hover:to-white/10 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/30">
                  <div className="relative rounded-[calc(1rem-1.5px)] bg-[#0B2C4F]/70 backdrop-blur-sm overflow-hidden">
                    <div className="relative h-60 overflow-hidden">
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C4F] via-transparent to-transparent" />
                    </div>
                    <div className="absolute bottom-0 inset-x-0 p-4 text-center">
                      <h4 className="font-bold text-white leading-snug">{person.name}</h4>
                      <p className="text-xs text-[var(--accent-light)] font-medium mt-1">{person.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 lg:py-28 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(11,60,109,0.08),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,241,251,0.15),transparent_50%)]" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--primary)]/4 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[var(--primary-bg)]/80 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white text-xs font-bold uppercase tracking-[0.15em] mb-6 shadow-lg shadow-[var(--primary)]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
                Our Mandate
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight mb-4">
                <span className="text-[var(--primary)]">Core</span>{" "}
                <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--warm)] bg-clip-text text-transparent">
                  Responsibilities
                </span>
              </h3>
              <p className="text-[var(--body-text)] mt-3 max-w-2xl mx-auto">
                Our mandate drives every action we take in the fight against HIV/AIDS across Gombe State.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {aboutData.mandate.map((item, i) => {
                const Icon = mandateIcons[item.icon]
                const c = mandateColors[i % mandateColors.length]
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="h-full"
                  >
                    <div className="group relative flex flex-col h-full overflow-hidden rounded-3xl bg-white border border-[var(--border)] hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[var(--primary)]/10 transition-all duration-300">
                      <div className="relative p-6 bg-gradient-to-br from-[#061F3A] via-[#0B3C6D] to-[#1e4f9c] overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/10 blur-2xl" />
                        <div className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full bg-white/5 blur-2xl" />
                        <div
                          className="absolute bottom-0 left-0 right-0 h-px"
                          style={{ background: `linear-gradient(90deg, transparent, ${c.chip}, transparent)` }}
                        />
                        <div className="relative flex items-center justify-between">
                          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.gradient} flex items-center justify-center shadow-xl shadow-black/30 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300`}>
                            {Icon && <Icon className="w-7 h-7 text-white" />}
                          </div>
                          <span
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white border border-white/15"
                          >
                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: c.chip }} />
                            Pillar {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <h4 className="relative font-bold text-white text-lg mt-5 mb-2">{item.title}</h4>
                        <p className="relative text-xs text-white/60 leading-relaxed">{item.description}</p>
                      </div>
                      <div className="p-5 mt-auto bg-white">
                        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider" style={{ color: c.chip }}>
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${c.gradient}`} />
                          Core Responsibility
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-14 text-center"
          >
            <div className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-[var(--primary-bg)] to-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] font-semibold shadow-lg shadow-[var(--primary)]/5">
              <Award className="w-6 h-6" />
              <span>Impact Award to GOMSACA by CIHP.</span>
              <a href="#" className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[var(--primary)] text-white text-sm font-bold hover:bg-[var(--primary-dark)] transition-colors">
                View Award
                <CheckCircle className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
