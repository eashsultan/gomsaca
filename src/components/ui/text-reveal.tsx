"use client"

import { motion } from "framer-motion"

export function TextReveal({
  children,
  className,
  delay = 0,
  as: Tag = "span",
}: {
  children: string
  className?: string
  delay?: number
  as?: "span" | "h1" | "h2" | "h3" | "h4" | "p"
}) {
  const words = children.split(" ")

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
          <motion.span
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.04,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}

export function CountUpAnimation({
  value,
  suffix = "",
  isInView,
}: {
  value: number
  suffix?: string
  isInView: boolean
}) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.span
        animate={isInView ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 0.3, delay: 2.2 }}
        className="inline-block"
      >
        {value}
        {suffix}
      </motion.span>
    </motion.span>
  )
}
