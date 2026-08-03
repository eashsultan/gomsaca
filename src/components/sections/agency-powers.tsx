"use client"

import { motion } from "framer-motion"
import { Database, FileText, Search, ClipboardList } from "lucide-react"

const powers = [
  {
    title: "Demand and Information Management",
    description: "Authority to demand and obtain relevant information, data, and reports from any organization, institution, or individual regarding HIV/AIDS activities.",
    icon: Database,
    color: "from-[var(--primary)] to-[var(--primary-dark)]",
  },
  {
    title: "Liaising with Relevant Institutions",
    description: "Power to collaborate and liaise with relevant government bodies, non-governmental organizations, and international agencies to achieve the agency's objectives.",
    icon: FileText,
    color: "from-[var(--primary-light)] to-[var(--primary)]",
  },
  {
    title: "Carrying Out Research",
    description: "Mandate to initiate, promote, and carry out research on HIV/AIDS and related issues to inform policy and interventions.",
    icon: Search,
    color: "from-[var(--warm)] to-[var(--warm-light)]",
  },
  {
    title: "Reporting to the State Council",
    description: "Responsibility to prepare and present comprehensive reports to the State Council on HIV/AIDS regarding the state of the epidemic and interventions.",
    icon: ClipboardList,
    color: "from-[var(--accent)] to-[var(--accent-light)]",
  },
]

export function AgencyPowers() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {powers.map((power, index) => {
        const Icon = power.icon
        return (
          <motion.div
            key={power.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="card flex flex-col sm:flex-row bg-white rounded-3xl overflow-hidden shadow-lg border border-[var(--border)] hover:shadow-xl transition-shadow"
          >
            <div className={`w-full sm:w-1/3 bg-gradient-to-br ${power.color} p-8 flex items-center justify-center text-white`}>
              <Icon className="w-16 h-16 opacity-90" />
            </div>
            <div className="w-full sm:w-2/3 p-8 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-[var(--dark-text)] mb-3">{power.title}</h3>
              <p className="text-[var(--body-text)] leading-relaxed">{power.description}</p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
