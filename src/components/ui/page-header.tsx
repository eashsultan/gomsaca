"use client"

import { motion } from "framer-motion"

interface PageHeaderProps {
  label: string
  title: React.ReactNode
  description?: string
  align?: "center" | "left"
}

export function PageHeader({ label, title, description, align = "center" }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden hero-gradient border-b border-[var(--border)]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--primary)]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[var(--primary-bg)]/70 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(11,60,109,0.06),transparent_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
        >
          <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white text-xs font-bold uppercase tracking-[0.15em] mb-6 shadow-lg shadow-[var(--primary)]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
            {label}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight mb-6 text-[var(--dark-text)]">
            {title}
          </h1>
          {description && (
            <p className="text-lg lg:text-xl leading-relaxed text-[var(--body-text)] max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
