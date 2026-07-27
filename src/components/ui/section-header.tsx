"use client"

import { motion } from "framer-motion"
import { TextReveal } from "@/components/ui/text-reveal"

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  dark?: boolean
  align?: "center" | "left"
  animate?: boolean
}

export function SectionHeader({ label, title, description, dark, align = "center", animate = true }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} mb-14 lg:mb-16`}
    >
      {label && (
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-5 tracking-wide ${dark ? "bg-white/10 text-white" : "bg-[var(--primary-bg)] text-[var(--primary)]"}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${dark ? "bg-white/60" : "bg-[var(--primary)]"}`} />
          {label}
        </motion.span>
      )}
      {animate ? (
        <TextReveal
          as="h2"
          className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight ${dark ? "text-white" : "text-[var(--dark-text)]"}`}
        >
          {title}
        </TextReveal>
      ) : (
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight ${dark ? "text-white" : "text-[var(--dark-text)]"}`}>
          {title}
        </h2>
      )}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`mt-5 text-lg lg:text-xl leading-relaxed max-w-2xl ${align === "center" ? "mx-auto" : ""} ${dark ? "text-white/70" : "text-[var(--body-text)]"}`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}
