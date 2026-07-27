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

export function About() {
  return (
    <section id="about" className="relative overflow-hidden">
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
              About Us
            </motion.span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight mb-6 whitespace-nowrap">
              <span className="text-[var(--primary)]">Gombe State</span>{" "}
              <span className="text-[var(--dark-text)]">Agency for the</span>{" "}
              <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] bg-clip-text text-transparent">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="relative h-full">
                <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-[var(--primary)]/10 -z-10" />
                <div className="bg-gradient-to-br from-[var(--primary-bg)] to-white rounded-3xl border border-[var(--primary)]/20 p-8 lg:p-10 h-full shadow-lg shadow-[var(--primary)]/5">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center shadow-lg shadow-[var(--primary)]/20">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[var(--dark-text)]">Our Story</h3>
                      <p className="text-sm text-[var(--primary)] font-medium">Since 2002</p>
                    </div>
                  </div>
                  <p className="text-[var(--body-text)] leading-relaxed text-base">
                    {aboutData.history}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-white to-[var(--primary-bg)] rounded-3xl border border-[var(--primary)]/20 p-8 shadow-lg shadow-[var(--primary)]/5">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center shadow-lg shrink-0">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-semibold mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                      Our Mission
                    </div>
                    <p className="text-[var(--body-text)] leading-relaxed text-sm">
                      {aboutData.mission}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-[var(--primary-bg)] rounded-3xl border border-[var(--primary)]/20 p-8 shadow-lg shadow-[var(--primary)]/5">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center shadow-lg shrink-0">
                    <Eye className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-semibold mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
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
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 text-white text-sm font-semibold backdrop-blur-sm mb-5">
              <Award className="w-4 h-4" />
              Leadership
            </span>
          </motion.div>

          <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              <div className="lg:col-span-2 relative h-[350px] lg:h-full min-h-[350px]">
                <Image
                  src={leadership[0].image}
                  alt={leadership[0].name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/40 via-transparent to-transparent" />
              </div>
              <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--accent)]/20 text-[var(--accent-light)] text-xs font-semibold rounded-full mb-4 w-fit">
                  <Quote className="w-3 h-3" />
                  {leadership[0].title}
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  {leadership[0].name}
                </h3>
                <p className="text-white/80 leading-relaxed text-base lg:text-lg">
                  &ldquo;{leadership[0].message}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 lg:py-28 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(11,110,58,0.08),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,245,233,0.15),transparent_50%)]" />
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
              <h3 className="text-3xl lg:text-4xl font-extrabold leading-[1.05] tracking-tight mb-4">
                <span className="text-[var(--primary)]">Core</span>{" "}
                <span className="text-[var(--dark-text)]">Responsibilities</span>
              </h3>
              <p className="text-[var(--body-text)] mt-3 max-w-2xl mx-auto">
                Our mandate drives every action we take in the fight against HIV/AIDS across Gombe State.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {aboutData.mandate.map((item) => {
                const Icon = mandateIcons[item.icon]
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="group bg-white rounded-2xl border border-[var(--border)] p-6 h-full hover:border-[var(--primary)]/30 hover:shadow-lg hover:shadow-[var(--primary)]/5 transition-all duration-300">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--primary-bg)] to-[var(--primary)]/10 flex items-center justify-center mb-5 group-hover:from-[var(--primary)]/10 group-hover:to-[var(--primary-bg)] group-hover:scale-110 transition-all duration-300">
                        {Icon && <Icon className="w-7 h-7 text-[var(--primary)]" />}
                      </div>
                      <h4 className="font-bold text-[var(--dark-text)] text-lg mb-3">{item.title}</h4>
                      <p className="text-sm text-[var(--body-text)] leading-relaxed">{item.description}</p>
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
