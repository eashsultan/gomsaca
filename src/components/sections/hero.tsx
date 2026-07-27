"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion"
import { Heart, Handshake, Users, Activity, MapPin, Building2, Sparkles, Shield } from "lucide-react"
import CountUp from "react-countup"
import { Button } from "@/components/ui/button"
import { FloatingParticles } from "@/components/ui/floating-elements"

const floatingCards = [
  {
    icon: Heart,
    title: "Active Programs",
    value: "24",
    subtitle: "Running Projects",
    color: "from-white to-white",
    iconBg: "bg-[var(--primary-bg)]",
    iconColor: "text-[var(--primary)]",
    valueColor: "text-[var(--primary)]",
  },
  {
    icon: Handshake,
    title: "Strategic Partners",
    value: "20+",
    subtitle: "Organizations",
    color: "from-white to-white",
    iconBg: "bg-[var(--primary-bg)]",
    iconColor: "text-[var(--primary)]",
    valueColor: "text-[var(--primary)]",
  },
  {
    icon: Users,
    title: "Community Impact",
    value: "114K+",
    subtitle: "Beneficiaries",
    color: "from-white to-white",
    iconBg: "bg-[var(--primary-bg)]",
    iconColor: "text-[var(--primary)]",
    valueColor: "text-[var(--primary)]",
  },
]

const stats = [
  { value: 114000, suffix: "+", label: "Individuals Reached", icon: Users },
  { value: 50000, suffix: "+", label: "HIV Tests Conducted", icon: Activity },
  { value: 11, suffix: "", label: "LGAs Covered", icon: MapPin },
  { value: 20, suffix: "+", label: "Development Partners", icon: Building2 },
]

const partners = [
  { name: "WHO" },
  { name: "UNICEF" },
  { name: "PEPFAR" },
  { name: "Global Fund" },
  { name: "UNAIDS" },
]

function FloatingCard({ icon: Icon, title, value, subtitle, color, iconBg, iconColor, valueColor, index }: {
  icon: any; title: string; value: string; subtitle: string; color: string; iconBg: string; iconColor: string; valueColor: string; index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.8 + index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="absolute hidden lg:block"
      style={{
        top: `${[12, 38, 64][index]}%`,
        right: `${[0, -15, 0][index]}%`,
        left: index === 2 ? "auto" : `${index === 1 ? "auto" : ""}`,
      }}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut", delay: index * 1.2 }}
        className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-[var(--primary)]/15 border border-[var(--primary)]/20 p-4 w-48"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className={`w-9 h-9 rounded-xl ${iconBg} flex items-center justify-center shadow-sm`}>
            <Icon className={`w-4.5 h-4.5 ${iconColor}`} />
          </div>
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{title}</span>
        </div>
        <div className={`text-2xl font-extrabold ${valueColor} tracking-tight`}>{value}</div>
        <div className="text-xs text-gray-400 mt-0.5 font-medium">{subtitle}</div>
      </motion.div>
    </motion.div>
  )
}

function StatsBar() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="bg-white backdrop-blur-xl rounded-3xl shadow-2xl shadow-[var(--primary)]/10 border border-[var(--primary)]/20 p-10 lg:p-12"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-center relative"
              >
                <div className="relative inline-flex mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary-bg)] to-[var(--primary)]/15 flex items-center justify-center shadow-sm">
                    <Icon className="w-7 h-7 text-[var(--primary)]" />
                  </div>
                  <motion.div
                    animate={isInView ? { scale: [1, 1.3, 1] } : {}}
                    transition={{ duration: 0.5, delay: 1.5 + i * 0.2 }}
                    className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[var(--primary-light)] border-2 border-white"
                  />
                </div>
                <div className="text-3xl lg:text-4xl font-extrabold text-[var(--dark-text)] tracking-tight">
                  {isInView ? (
                    <>
                      <CountUp end={stat.value} duration={2.5} />
                      {stat.suffix}
                    </>
                  ) : (
                    "0"
                  )}
                </div>
                <div className="text-sm text-gray-500 mt-1.5 font-medium">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}

export function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const bgY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 150]), { stiffness: 40, damping: 30 })

  return (
    <section ref={sectionRef} className="relative min-h-screen hero-gradient overflow-hidden">
      <FloatingParticles count={15} />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(11,110,58,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(11,110,58,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,245,233,0.2),transparent_50%)]" />
      </div>

      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: [0, 15, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-48 -right-48 w-[35rem] h-[35rem] rounded-full bg-[var(--primary)]/15 blur-3xl"
        />
        <motion.div
          animate={{ rotate: [0, -15, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-48 -left-48 w-[32rem] h-[32rem] rounded-full bg-[var(--primary-light)]/15 blur-3xl"
        />
        <motion.div
          animate={{ rotate: [0, 10, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-[var(--primary)]/10 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-[var(--primary-lighter)]/10 blur-3xl"
        />
        <motion.div
          animate={{ rotate: [0, 8, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[var(--primary)]/10"
        />
      </motion.div>

      <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 lg:pb-36 relative">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-[45%] pt-8 lg:pt-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white text-sm font-semibold rounded-full shadow-lg shadow-[var(--primary-glow)] mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-white" />
              Gombe State Agency for the Control of AIDS
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[var(--dark-text)] leading-[1.05] tracking-tight mb-4"
            >
              Leading the Fight Against{" "}
              <span className="text-gradient relative">
                HIV<span className="text-[var(--primary)]">/AIDS</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
                    d="M1 6C35 2 96 1 199 6"
                    stroke="url(#line-gradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="line-gradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#0B6E3A" />
                      <stop offset="100%" stopColor="#D4A728" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{" "}
              in Gombe State
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-base lg:text-lg leading-relaxed mb-8 max-w-xl"
            >
              <span className="font-semibold text-[var(--primary)]">GOMSACA</span> <span className="text-[var(--body-text)]">coordinates prevention, treatment, care, advocacy and community interventions to improve health outcomes across Gombe State.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-wrap gap-4 relative"
            >
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-6 bg-gradient-to-r from-[var(--primary)]/5 via-[var(--primary-light)]/5 to-[var(--primary)]/5 rounded-3xl blur-xl -z-10"
              />
              <Button variant="primary" size="lg">
                Explore Programs
              </Button>
              <Button variant="secondary" size="lg">
                View Reports
              </Button>
            </motion.div>
          </div>

          <div className="w-full lg:w-[55%] relative">
            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
            <motion.div
              animate={{ rotate: [0, 4, 0], scale: [1, 1.02, 1] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-4 bg-gradient-to-br from-[var(--primary)]/25 via-[var(--primary-bg)]/60 to-[var(--primary)]/15 rounded-[40px] blur-2xl"
            />

              <div className="relative rounded-[32px] overflow-hidden shadow-2xl shadow-[var(--primary)]/20 border-2 border-[var(--primary)]/30">
                <img
                  src="/hero.jpeg"
                  alt="Healthcare workers engaging with community"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[32px]" />
              </div>

              {floatingCards.map((card, i) => (
                <FloatingCard key={card.title} {...card} index={i} />
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      <StatsBar />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-[var(--primary-darker)] via-[var(--primary-dark)] to-[var(--primary)] mt-16 py-14 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(11,110,58,0.2),transparent_50%)]" />
        <div className="absolute inset-0 shimmer opacity-20" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white/40 text-xs font-bold uppercase tracking-[0.25em] mb-10"
          >
            In Partnership With
          </motion.p>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
            {partners.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative group"
              >
                <div className="px-8 py-4 bg-white/[0.07] backdrop-blur-sm rounded-xl border border-white/[0.08] group-hover:bg-white/[0.12] group-hover:border-white/[0.15] transition-all duration-500">
                  <span className="text-white font-extrabold text-xl tracking-wide">{partner.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-[var(--primary)]/50 flex items-start justify-center pt-2 bg-[var(--primary)]/10 backdrop-blur-sm"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]/80"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
