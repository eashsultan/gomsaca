"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SectionHeader } from "@/components/ui/section-header"

const steps = [
  { number: "01", title: "Reach Out", image: "/community.jpg", desc: "Contact GOMSACA through our hotline or visit any of our health facilities." },
  { number: "02", title: "Get Tested", image: "/gombe.jpg", desc: "Access free confidential HIV testing and counseling services." },
  { number: "03", title: "Access Care", image: "/facility.jpg", desc: "Connect with treatment, prevention, and support services tailored to you." },
  { number: "04", title: "Stay Healthy", image: "/market.jpg", desc: "Ongoing support, adherence counseling, and community follow-up." },
]

export function HowWeWork() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--gray-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="How We Work"
          title="Our approach to HIV/AIDS care"
          description="We are committed to improving health outcomes through personalized care, innovative treatments, and a focus on prevention."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-[var(--primary)] text-white flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
              </div>
              <h4 className="font-bold text-[var(--dark-text)]">{step.title}</h4>
              <p className="text-sm text-[var(--body-text)] mt-1">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
