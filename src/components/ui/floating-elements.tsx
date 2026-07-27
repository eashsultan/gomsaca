"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

export function FloatingOrbs() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 60])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -40])

  const springY1 = useSpring(y1, { stiffness: 30, damping: 20 })
  const springY2 = useSpring(y2, { stiffness: 25, damping: 15 })
  const springY3 = useSpring(y3, { stiffness: 35, damping: 25 })

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      <motion.div
        style={{ y: springY1 }}
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[var(--primary)]/5 blur-3xl"
      />
      <motion.div
        style={{ y: springY2 }}
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[var(--accent)]/5 blur-3xl"
      />
      <motion.div
        style={{ y: springY3 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[var(--primary)]/3 blur-3xl"
      />
    </div>
  )
}

export function FloatingParticles({ count = 6 }: { count?: number }) {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 2,
    duration: Math.random() * 6 + 4,
    delay: Math.random() * 3,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[var(--primary)]/20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
