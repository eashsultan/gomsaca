"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SectionHeader } from "@/components/ui/section-header"

const steps = [
  { number: "01", title: "Reach Out", image: "/MEDICAL OUTREACH & HIV_AIDS AWARENESS, SOUTH… (1).jpeg", desc: "Contact GomSACA through our hotline or visit any of our health facilities." },
  { number: "02", title: "Get Tested", image: "/999165867338083734.jpeg", desc: "Access free confidential HIV testing and counseling services." },
  { number: "03", title: "Access Care", image: "/A doctor is checking a patient_.jpeg", desc: "Connect with treatment, prevention, and support services tailored to you." },
  { number: "04", title: "Stay Healthy", image: "/8444318045568594.jpeg", desc: "Ongoing support, adherence counseling, and community follow-up." },
]

export function HowWeWork() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--gray-bg)] to-white pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          label="How We Work"
          title="Our approach to HIV/AIDS care"
          description="We are committed to improving health outcomes through personalized care, innovative treatments, and a focus on prevention."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center group"
            >
              <div className="card-image relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 shadow-lg shadow-black/5 group-hover:shadow-xl transition-shadow duration-500">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-black/20">
                  {step.number}
                </div>
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
              </div>
              <h4 className="font-bold text-[var(--dark-text)] text-lg">{step.title}</h4>
              <p className="text-sm text-[var(--body-text)] mt-1.5 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
