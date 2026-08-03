"use client";

import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck } from "lucide-react";
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageHeader } from "@/components/ui/page-header"

const aboutCards = [
  {
    title: "Our Mission",
    description: "To lead, coordinate, and regulate the comprehensive multi-sectoral response to HIV/AIDS in Gombe State, ensuring equitable access to prevention, treatment, care, and support services.",
    icon: Target,
    accent: "text-[#0B3C6D]",
    bg: "bg-[#0B3C6D]/10",
  },
  {
    title: "Our Vision",
    description: "A Gombe State free of new HIV infections, where everyone living with HIV/AIDS has access to quality care and support without stigma or discrimination.",
    icon: Eye,
    accent: "text-[#E11D48]",
    bg: "bg-[#E11D48]/10",
  },
  {
    title: "Our Mandate",
    description: "Empowered by the state government to formulate policies, mobilize resources, and oversee all HIV/AIDS interventions, ensuring accountability and maximizing impact.",
    icon: ShieldCheck,
    accent: "text-[var(--primary)]",
    bg: "bg-[var(--primary)]/10",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pb-16">
        {/* Hero Section */}
        <PageHeader
          label="About Us"
          title={<>About <span className="text-gradient">GomSACA</span></>}
          description="The Gombe State Agency for the Control of AIDS (GomSACA) is the principal government body coordinating the state's multi-sectoral response to the HIV/AIDS epidemic. We work tirelessly to ensure a healthy, stigma-free society."
        />
        <section className="px-6 lg:px-8 max-w-7xl mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card bg-white rounded-2xl p-8 shadow-sm border border-[var(--border)] hover:shadow-lg transition-all duration-300 card-hover"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${card.bg}`}>
                  <card.icon className={`w-7 h-7 ${card.accent}`} />
                </div>
                <h3 className="text-2xl font-bold text-[var(--dark-text)] mb-4">{card.title}</h3>
                <p className="text-[var(--body-text)] leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
