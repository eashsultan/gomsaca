"use client"

import { motion } from "framer-motion"
import { Building, Stethoscope, Wheat, HeartPulse, GraduationCap, Users, Crown, Users2, Rocket, HeartHandshake, BookHeart } from "lucide-react"

const composition = [
  { role: "Local Government", icon: Building },
  { role: "Health", icon: Stethoscope },
  { role: "Agriculture", icon: Wheat },
  { role: "Primary Health Care", icon: HeartPulse },
  { role: "Education", icon: GraduationCap },
  { role: "Social Development", icon: Users },
  { role: "Traditional Rulers", icon: Crown },
  { role: "Women Groups", icon: Users2 },
  { role: "Youth Organizations", icon: Rocket },
  { role: "NGOs/CBOs", icon: HeartHandshake },
  { role: "Religious Groups", icon: BookHeart },
]

export function LacaComposition() {
  return (
    <section className="bg-[var(--gray-bg)] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[var(--dark-text)] mb-4">LACA Composition</h2>
          <p className="text-lg text-[var(--body-text)]">A multi-sectoral representation ensuring diverse community engagement.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {composition.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-sm border border-gray-200 hover:border-[var(--primary)] hover:shadow-md transition-all cursor-default"
              >
                <div className="w-10 h-10 rounded-full bg-[var(--primary-bg)] text-[var(--primary)] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-semibold text-[var(--dark-text)]">{item.role}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
