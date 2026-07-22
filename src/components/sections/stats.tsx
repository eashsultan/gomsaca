"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import CountUp from "react-countup"
import { Users, MapPin, Briefcase, Handshake } from "lucide-react"
import { stats } from "@/lib/data"

const iconMap: Record<string, React.ElementType> = {
  Users,
  MapPin,
  Briefcase,
  Handshake,
}

export function Stats() {
  return (
    <section className="relative -mt-20 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden shadow-xl bg-[var(--border)]"
        >
          {stats.map((stat) => {
            const Icon = iconMap[stat.icon]
            return (
              <div
                key={stat.label}
                className="bg-white p-8 lg:p-10 text-center flex flex-col items-center justify-center"
              >
                {Icon && (
                  <div className="w-12 h-12 rounded-xl bg-[var(--primary-bg)] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[var(--primary)]" />
                  </div>
                )}
                <StatCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-sm font-medium text-[var(--body-text)] mt-1.5">
                  {stat.label}
                </p>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

function StatCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <span ref={ref} className="text-3xl lg:text-4xl font-bold text-[var(--primary)]">
      {inView ? (
        <CountUp end={value} duration={2.5} separator="," />
      ) : (
        "0"
      )}
      {suffix}
    </span>
  )
}
