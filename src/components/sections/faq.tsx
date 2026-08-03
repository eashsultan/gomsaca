"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, Phone } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"

const faqs = [
  {
    q: "What services does GomSACA provide?",
    a: "GomSACA coordinates comprehensive HIV/AIDS services including prevention, testing, treatment, care, community outreach, youth engagement, and public awareness campaigns across all 11 LGAs of Gombe State.",
  },
  {
    q: "How can I get tested for HIV?",
    a: "You can visit any of our 124+ health facilities across Gombe State for free confidential HIV testing. We also have mobile testing units that reach communities in all 11 LGAs.",
  },
  {
    q: "Is HIV treatment free?",
    a: "Yes, antiretroviral therapy (ART) is provided free of charge at all GomSACA-supported health facilities. We also provide adherence counseling and viral load monitoring.",
  },
  {
    q: "How can I prevent mother-to-child transmission?",
    a: "GomSACA offers comprehensive PMTCT services including antenatal care, HIV testing during pregnancy, prophylactic treatment, and safe delivery practices to ensure babies are born HIV-free.",
  },
  {
    q: "What should I do if I experience stigma or discrimination?",
    a: "GomSACA has a dedicated team for addressing stigma and discrimination. You can report any incidents through our hotline or visit any of our facilities for support and counseling.",
  },
  {
    q: "How can my community get involved?",
    a: "Communities can partner with GomSACA through our community outreach programs, peer education initiatives, and awareness campaigns. Contact us to learn about volunteer opportunities.",
  },
]

export function FAQ() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              label="Frequently Asked Questions"
              title="Helping you understand HIV/AIDS care"
              description="Here to make your experience as seamless as possible—explore answers to common questions about our services and programs."
              align="left"
            />
            <div className="mt-8 p-6 rounded-2xl bg-[var(--primary)] text-white">
              <p className="text-sm text-white/80">24/7 Helpline</p>
              <a href="tel:+2348000000000" className="text-2xl font-bold mt-1 block hover:text-[var(--accent)] transition-colors">
                +234 800 000 0000
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="rounded-xl border border-[var(--border)] overflow-hidden"
              >
                <button
                  onClick={() => setOpen(open === `faq-${i}` ? null : `faq-${i}`)}
                  className="flex items-center justify-between w-full p-4 text-left hover:bg-[var(--gray-bg)] transition-colors"
                >
                  <span className="font-semibold text-sm text-[var(--dark-text)] pr-4">{faq.q}</span>
                  {open === `faq-${i}` ? (
                    <Minus className="w-4 h-4 text-[var(--primary)] shrink-0" />
                  ) : (
                    <Plus className="w-4 h-4 text-[var(--primary)] shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {open === `faq-${i}` && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 pb-4 text-sm text-[var(--body-text)] leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
