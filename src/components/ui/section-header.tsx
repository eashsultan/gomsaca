"use client"

import { motion } from "framer-motion"

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  dark?: boolean
  align?: "center" | "left"
}

export function SectionHeader({ label, title, description, dark, align = "center" }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} mb-12`}
    >
      {label && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${dark ? "bg-white/10 text-white" : "bg-[var(--primary-bg)] text-[var(--primary)]"}`}>
          {label}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold leading-tight ${dark ? "text-white" : "text-[var(--dark-text)]"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-white/70" : "text-[var(--body-text)]"}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
