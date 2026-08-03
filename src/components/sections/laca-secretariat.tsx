"use client"

import { motion } from "framer-motion"
import { Briefcase, Users, FileBarChart, ShoppingCart, Calculator, Keyboard } from "lucide-react"

const roles = [
  { title: "LACA Manager", icon: Briefcase, desc: "Oversees overall operations and coordinates interventions at the LGA level." },
  { title: "Community Mobilization Officer", icon: Users, desc: "Engages local communities and drives grassroots awareness campaigns." },
  { title: "Monitoring & Evaluation Officer", icon: FileBarChart, desc: "Tracks program progress, collects data, and ensures targets are met." },
  { title: "Procurement Officer", icon: ShoppingCart, desc: "Manages the acquisition of necessary supplies and services." },
  { title: "Accountant", icon: Calculator, desc: "Handles financial management and ensures transparent use of funds." },
  { title: "Administrative Support", icon: Keyboard, desc: "Provides day-to-day administrative and clerical support." },
]

export function LacaSecretariat() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-[var(--dark-text)] mb-4">LACA Secretariat Structure</h2>
          <p className="text-lg text-[var(--body-text)]">The dedicated team responsible for executing LACA&apos;s mandate daily.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role, index) => {
            const Icon = role.icon
            return (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card bg-white rounded-2xl shadow-lg border border-[var(--border)] p-8 flex flex-col items-center text-center relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-[var(--primary)] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="w-16 h-16 rounded-full bg-[var(--primary-bg)] text-[var(--primary)] flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[var(--dark-text)] mb-3">{role.title}</h3>
                <p className="text-[var(--body-text)] text-sm leading-relaxed">{role.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
