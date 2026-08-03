"use client"

import { motion } from "framer-motion"
import { Users, Shield, Stethoscope, LineChart, Building2 } from "lucide-react"

const directorates = [
  {
    title: "Prevention and Behavioural Change",
    icon: Shield,
    color: "bg-[var(--primary-bg)] text-[var(--primary)] border-[var(--primary)]/20",
  },
  {
    title: "Diagnostic, Treatment and Care Support",
    icon: Stethoscope,
    color: "bg-[var(--primary-bg)]/50 text-[var(--primary-light)] border-[var(--primary)]/20",
  },
  {
    title: "Planning, Research, M&E",
    icon: LineChart,
    color: "bg-[var(--warm-bg)] text-[var(--warm)] border-[var(--warm)]/20",
  },
  {
    title: "Administration and Finance",
    icon: Building2,
    color: "bg-[var(--accent-bg)] text-[var(--accent)] border-[var(--accent)]/20",
  },
  {
    title: "Community Mobilization",
    icon: Users,
    color: "bg-[var(--accent-bg)]/60 text-[var(--accent)] border-[var(--accent)]/25",
  },
]

export function OrgChart() {
  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto py-10">
      {/* Executive Director */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="z-10"
      >
        <div className="bg-white rounded-2xl shadow-lg border-2 border-[var(--primary)] p-6 text-center w-72">
          <h3 className="text-lg font-bold text-[var(--dark-text)] mb-1">Executive Director / Chief Executive</h3>
          <p className="text-sm text-[var(--muted)]">Overall Leadership & Strategy</p>
        </div>
      </motion.div>

      {/* Connecting Line */}
      <div className="w-0.5 h-12 bg-[var(--border)]"></div>

      {/* Horizontal Line for Branches */}
      <div className="w-full max-w-4xl h-0.5 bg-[var(--border)]"></div>

      {/* Directorates */}
      <div className="flex flex-wrap justify-center gap-6 mt-6 w-full">
        {directorates.map((dir, index) => {
          const Icon = dir.icon
          return (
            <motion.div
              key={dir.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className={`flex flex-col items-center bg-white rounded-xl shadow-md border p-6 w-64 text-center hover:shadow-xl transition-shadow ${dir.color}`}
            >
              <div className="mb-4">
                <Icon className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-[var(--dark-text)]">{dir.title}</h4>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
