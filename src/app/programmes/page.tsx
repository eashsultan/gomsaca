"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Users,
  HeartPulse,
  Microscope,
  Shield,
  Megaphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
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

export default function ProgrammesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pb-20">
        <PageHeader
          label="Programmes"
          title={<>Our <span className="text-gradient">Programmes</span></>}
          description="Strategic, evidence-based interventions led by GomSACA to combat HIV/AIDS and support affected communities across Gombe State."
        />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {programData.map((prog, index) => {
              const Icon = iconMap[prog.icon] || Sparkles
              const accent = accentMap[prog.color as "green" | "gold"] || accentMap.green
              return (
                <motion.div
                  key={prog.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                >
                  <Link
                    href={prog.link}
                    className="group relative flex flex-col h-full bg-white rounded-3xl border border-[var(--border)] p-8 overflow-hidden hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[var(--primary)]/10 hover:border-[var(--primary)]/25 transition-all duration-300"
                  >
                    <div className={`absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br ${accent} opacity-[0.06] group-hover:opacity-[0.12] group-hover:scale-125 transition-all duration-500`} />
                    <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                    <div
                      className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${accent} text-white flex items-center justify-center shadow-md shadow-[var(--primary-glow)] mb-5 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg transition-all duration-300`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>

                    <h2 className="relative text-lg font-bold text-[var(--dark-text)] mb-3 group-hover:text-[var(--primary)] transition-colors">
                      {prog.title}
                    </h2>
                    <p className="relative text-sm text-[var(--body-text)] leading-relaxed flex-1">
                      {prog.description}
                    </p>

                    <span className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)]">
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}