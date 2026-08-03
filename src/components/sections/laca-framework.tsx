"use client"

import { motion } from "framer-motion"
import { Shield, GitMerge, Target, MapPin } from "lucide-react"

export function LacaFramework() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--dark-text)] mb-6 tracking-tight">
            Local Action Committee on AIDS (LACA)
          </h1>
          <p className="text-lg text-[var(--body-text)]">
            LACA serves as the critical community-level implementation arm of GomSACA, translating state-level policies into grassroots action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "What is LACA?",
              desc: "A decentralized body at the local government level coordinating HIV/AIDS programs.",
              icon: MapPin,
            },
            {
              title: "Why it exists",
              desc: "To ensure interventions reach the grassroots and are culturally appropriate.",
              icon: Target,
            },
            {
              title: "Role within GomSACA",
              desc: "Acts as the operational linkage between state-level strategies and local implementation.",
              icon: GitMerge,
            },
            {
              title: "Community Implementation",
              desc: "Drives local awareness, testing drives, and community support systems.",
              icon: Shield,
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 border border-[var(--border)] text-center"
            >
              <div className="w-14 h-14 mx-auto bg-[var(--warm-bg)] text-[var(--warm)] rounded-full flex items-center justify-center mb-4">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[var(--dark-text)] mb-2">{item.title}</h3>
              <p className="text-[var(--body-text)] text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
