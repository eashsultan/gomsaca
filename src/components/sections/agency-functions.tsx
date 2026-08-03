"use client"

import { motion } from "framer-motion"
import { Layers, CheckCircle, Heart, Network, Lightbulb, Users, ShieldAlert, BarChart } from "lucide-react"

const agencyFunctions = [
  {
    title: "Design & Implement State Action Plans",
    description: "Developing robust strategies to prevent and control the spread of HIV/AIDS in the state.",
    icon: Layers,
    color: "text-[var(--primary)] bg-[var(--primary-bg)]",
  },
  {
    title: "Multi-sectoral Approach",
    description: "Coordinating with various government and private sectors for comprehensive interventions.",
    icon: Network,
    color: "text-[var(--warm)] bg-[var(--warm-bg)]",
  },
  {
    title: "Technical Support",
    description: "Providing expert guidance to health facilities and partner organizations.",
    icon: Lightbulb,
    color: "text-[var(--accent)] bg-[var(--accent-bg)]",
  },
  {
    title: "Stakeholder Support",
    description: "Working closely with international and local development partners.",
    icon: Heart,
    color: "text-[var(--primary-light)] bg-[var(--primary-bg)]",
  },
  {
    title: "Coordination, Monitoring & Research",
    description: "Ensuring all programs are evidence-based and closely monitored for effectiveness.",
    icon: BarChart,
    color: "text-[var(--warm)] bg-[var(--warm-bg)]",
  },
  {
    title: "Collaboration & Advocacy",
    description: "Advocating for better policies and collaborating with community leaders.",
    icon: Users,
    color: "text-[var(--warm)] bg-[var(--warm-bg)]",
  },
  {
    title: "Training & Capacity Building",
    description: "Enhancing the skills of healthcare workers and volunteers.",
    icon: CheckCircle,
    color: "text-[var(--primary-light)] bg-[var(--primary-bg)]",
  },
  {
    title: "Policy Implementation & Reporting",
    description: "Translating national policies into state-level actions and maintaining transparent reporting.",
    icon: ShieldAlert,
    color: "text-[#4338ca] bg-indigo-50",
  },
]

export function AgencyFunctions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {agencyFunctions.map((func, index) => {
        const Icon = func.icon
        return (
          <motion.div
            key={func.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="card bg-white rounded-2xl shadow-sm border border-[var(--border)] p-6 hover:shadow-lg transition-all duration-300"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${func.color}`}>
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[var(--dark-text)] mb-2 leading-tight">{func.title}</h3>
            <p className="text-sm text-[var(--body-text)]">{func.description}</p>
          </motion.div>
        )
      })}
    </div>
  )
}
