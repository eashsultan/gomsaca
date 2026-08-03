"use client";

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { motion } from "framer-motion"
import { PageHeader } from "@/components/ui/page-header"

const partners = [
  { category: "Government", items: [
    { name: "Federal Ministry of Health", init: "FMH" },
    { name: "NACA", init: "NACA" },
    { name: "Gombe State Government", init: "GSG" },
  ]},
  { category: "International Organisations", items: [
    { name: "WHO", init: "WHO" },
    { name: "UNICEF", init: "UNICEF" },
    { name: "USAID", init: "USAID" },
    { name: "Global Fund", init: "GF" },
  ]},
  { category: "NGOs & Civil Societies", items: [
    { name: "Society for Family Health", init: "SFH" },
    { name: "ActionAid", init: "AA" },
    { name: "Red Cross", init: "RC" },
  ]}
]

export default function PartnersPage() {
  return (
    <>
      <Header />
      <main className="pb-20 bg-white min-h-screen">
        <PageHeader
          label="Partners"
          title={<>Our <span className="text-gradient">Partners</span></>}
          description="Collaborating with government bodies, international organisations, and NGOs to effectively combat HIV/AIDS and improve public health in Gombe State."
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">

          <div className="space-y-20">
            {partners.map((section, idx) => (
              <div key={section.category}>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-2xl font-bold text-[var(--dark-text)]">{section.category}</h2>
                  <div className="h-px bg-[var(--gray-light)] flex-1"></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
                  {section.items.map((partner, pIdx) => (
                    <motion.div
                      key={partner.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: pIdx * 0.1 }}
                      className="group flex flex-col items-center justify-center gap-3 p-8 bg-white rounded-2xl border border-[var(--border)] hover:border-[var(--primary)]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-lighter)] flex items-center justify-center shadow-md shadow-[var(--primary-glow)]">
                        <span className="text-white font-extrabold text-sm tracking-wide">{partner.init}</span>
                      </div>
                      <span className="text-sm font-semibold text-[var(--dark-text)] group-hover:text-[var(--primary)] text-center transition-colors">
                        {partner.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-24 bg-gradient-to-br from-[var(--primary-dark)] to-[var(--primary)] rounded-3xl p-10 text-center text-white shadow-xl relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[var(--accent)]/20 rounded-full blur-3xl"></div>
            <h3 className="text-3xl font-bold mb-4 relative z-10">Become a Partner</h3>
            <p className="text-[var(--primary-bg)] max-w-2xl mx-auto mb-8 relative z-10">
              Join us in our mission to control the spread of HIV/AIDS and support affected individuals in Gombe State. Together, we can make a lasting impact.
            </p>
            <button className="relative z-10 bg-[var(--accent)] hover:bg-[var(--accent-light)] text-white font-semibold py-3 px-8 rounded-full transition-colors shadow-lg hover:shadow-xl">
              Contact Us
            </button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
