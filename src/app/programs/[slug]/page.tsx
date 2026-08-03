"use client"

import { useParams, notFound } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, GraduationCap, Users, HeartPulse, Microscope, Shield, Megaphone, Sparkles, CheckCircle2, type LucideIcon } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageHeader } from "@/components/ui/page-header"
import { programs as programData } from "@/lib/data"

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Users,
  HeartPulse,
  Microscope,
  Shield,
  Megaphone,
}

const accentMap: Record<"green" | "gold", string> = {
  green: "from-[var(--primary)] to-[var(--primary-lighter)]",
  gold: "from-[var(--accent)] to-[var(--accent-light)]",
}

const highlights: Record<string, string[]> = {
  "education-awareness": [
    "Comprehensive sex education in schools",
    "Community outreach to dispel HIV myths",
    "Stigma reduction through accurate information",
  ],
  "community-engagement": [
    "Community-led advocacy and support groups",
    "Grassroots outreach and mobilisation",
    "Local partnerships for sustained awareness",
  ],
  contraception: [
    "Access to condoms and other barrier methods",
    "Prevention of unintended pregnancies",
    "Reduced risk of mother-to-child transmission",
  ],
  "hiv-testing": [
    "Community-based and facility-based testing",
    "Rapid test kits and mobile testing units",
    "Integrated pre- and post-test counselling",
  ],
  "treatment-care": [
    "Antiretroviral therapy (ART) services",
    "Viral load monitoring and adherence support",
    "Comprehensive care across 120+ facilities",
  ],
  "awareness-campaigns": [
    "Mass media and community-level campaigns",
    "Stigma reduction and testing promotion",
    "Public education on prevention methods",
  ],
}

export default function ProgramPage() {
  const params = useParams<{ slug: string }>()
  const slug = params?.slug

  const program = programData.find((p) => p.link.split("/").pop() === slug)

  if (!program) {
    notFound()
  }

  const Icon = iconMap[program.icon] || Sparkles
  const accent = accentMap[program.color as "green" | "gold"] || accentMap.green
  const points = highlights[slug] || []

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--gray-light)] pb-20">
        <PageHeader
          label="Programme"
          title={program.title}
          description={program.description}
        />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <Link
            href="/programmes"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all programmes
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl border border-[var(--border)] p-8 lg:p-10 shadow-sm"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${accent} text-white flex items-center justify-center shadow-md mb-6`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-[var(--dark-text)] mb-4">About this programme</h2>
                <p className="text-[var(--body-text)] leading-relaxed text-lg">
                  {program.description}
                </p>
              </motion.div>

              {points.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white rounded-3xl border border-[var(--border)] p-8 lg:p-10 shadow-sm"
                >
                  <h2 className="text-2xl font-bold text-[var(--dark-text)] mb-6">Key components</h2>
                  <ul className="space-y-4">
                    {points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[var(--primary)] mt-0.5 shrink-0" />
                        <span className="text-[var(--body-text)]">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] rounded-3xl p-8 text-white shadow-lg shadow-[var(--primary)]/20"
              >
                <h3 className="text-xl font-bold mb-3">Get involved</h3>
                <p className="text-white/85 text-sm leading-relaxed mb-6">
                  Learn more about how GOMSACA is driving HIV prevention and control across Gombe State.
                </p>
                <Link
                  href="/programmes"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[var(--primary)] font-bold hover:bg-[var(--gray-light)] transition-colors"
                >
                  Explore all programmes
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-3xl border border-[var(--border)] p-8 shadow-sm"
              >
                <h3 className="text-lg font-bold text-[var(--dark-text)] mb-5">Other programmes</h3>
                <div className="space-y-3">
                  {programData
                    .filter((p) => p.id !== program.id)
                    .map((p) => {
                      const PIcon = iconMap[p.icon] || Sparkles
                      return (
                        <Link
                          key={p.id}
                          href={p.link}
                          className="flex items-center gap-3 p-3 rounded-2xl hover:bg-[var(--primary-bg)] hover:text-[var(--primary)] transition-colors"
                        >
                          <span className="w-10 h-10 rounded-xl bg-[var(--primary-bg)] text-[var(--primary)] flex items-center justify-center shrink-0">
                            <PIcon className="w-5 h-5" />
                          </span>
                          <span className="text-sm font-semibold text-[var(--dark-text)]">{p.title}</span>
                        </Link>
                      )
                    })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
