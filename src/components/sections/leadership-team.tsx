"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Globe, AtSign, Mail } from "lucide-react"
import { leadership } from "@/lib/data"

export function LeadershipTeam() {
  const [ceo, ...team] = leadership

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-12">
        {/* Executive Director Section - Highlighted */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="card bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-[var(--border)]"
        >
          <div className="md:w-1/3 relative h-80 md:h-auto md:min-h-[380px] bg-[var(--primary-bg)]">
            <Image
              src={ceo.image}
              alt={ceo.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
            <div className="uppercase tracking-widest text-sm font-bold text-[var(--primary)] mb-2">Executive Leadership</div>
            <h2 className="text-3xl font-bold text-[var(--dark-text)] mb-2">{ceo.name}</h2>
            <h3 className="text-xl text-[var(--muted)] mb-6">{ceo.title}</h3>
            <p className="text-[var(--body-text)] text-lg leading-relaxed mb-8">
              &ldquo;{ceo.message}&rdquo;
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[var(--gray-light)] flex items-center justify-center text-[var(--body-text)] hover:bg-[var(--primary)] hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[var(--gray-light)] flex items-center justify-center text-[var(--body-text)] hover:bg-[var(--primary)] hover:text-white transition-colors">
                <AtSign className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[var(--gray-light)] flex items-center justify-center text-[var(--body-text)] hover:bg-[var(--primary)] hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Other Directors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((person, index) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="card bg-white rounded-3xl shadow-md overflow-hidden flex flex-col border border-[var(--border)] hover:shadow-xl hover:border-[var(--primary)]/20 transition-all duration-300"
            >
              <div className="relative h-64 bg-[var(--primary-bg)]">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-[var(--dark-text)] mb-1">{person.name}</h3>
                <h4 className="text-md text-[var(--primary)] font-semibold mb-4">{person.title}</h4>
                <p className="text-[var(--body-text)] leading-relaxed flex-1">
                  {person.message}
                </p>
                <div className="flex gap-3 mt-6">
                  <a href="#" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors"><Globe className="w-5 h-5" /></a>
                  <a href="#" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors"><Mail className="w-5 h-5" /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
