"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion"
import { Heart, Handshake, Users, MapPin, Building2, CheckCircle2, type LucideIcon } from "lucide-react"
import Image from "next/image"
import CountUp from "react-countup"
import { Button } from "@/components/ui/button"
import { FloatingParticles } from "@/components/ui/floating-elements"

const floatingCards = [
  {
    icon: Heart,
    title: "Active Programs",
    value: "24",
    subtitle: "Running Projects",
    accent: "from-[#BE123C] to-[#F43F5E]",
    chip: "#F43F5E",
  },
  {
    icon: Handshake,
    title: "Strategic Partners",
    value: "20+",
    subtitle: "Organizations",
    accent: "from-[#0B3C6D] to-[#2563EB]",
    chip: "#2563EB",
  },
  {
    icon: Users,
    title: "Community Impact",
    value: "114K+",
    subtitle: "Beneficiaries",
    accent: "from-[#15803D] to-[#22C55E]",
    chip: "#16A34A",
  },
]

const stats = [
  { value: 284000, suffix: "+", label: "People Reached", icon: Users },
  { value: 486, suffix: "+", label: "Communities Covered", icon: MapPin },
  { value: 124, suffix: "+", label: "Health Facilities", icon: Building2 },
  { value: 22, suffix: "+", label: "Development Partners", icon: Handshake },
]

const partners = [
  { name: "WHO" },
  { name: "UNICEF" },
  { name: "PEPFAR" },
  { name: "Global Fund" },
  { name: "UNAIDS" },
]

function FloatingCard({ icon: Icon, title, value, subtitle, accent, chip, index }: {
  icon: LucideIcon; title: string; value: string; subtitle: string; accent: string; chip: string; index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.8 + index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="absolute hidden lg:block"
      style={{
        top: `${[10, 36, 62][index]}%`,
        right: `${[0, -15, 0][index]}%`,
        left: index === 2 ? "auto" : `${index === 1 ? "auto" : ""}`,
      }}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut", delay: index * 1.2 }}
        className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-white/90 via-white/60 to-white/30 shadow-2xl shadow-[var(--primary)]/15"
      >
        <div className="rounded-[calc(1rem-1.5px)] bg-white/95 backdrop-blur-xl p-4 w-48">
          <div className="flex items-center gap-3 mb-3">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${accent} flex items-center justify-center shadow-lg shadow-black/10`}>
              <Icon className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{title}</span>
          </div>
          <div className="text-2xl font-extrabold text-[var(--dark-text)] tracking-tight">{value}</div>
          <div className="text-xs text-gray-400 mt-0.5 font-medium">{subtitle}</div>
          <div className="absolute top-3 right-3 w-2 h-2 rounded-full" style={{ background: chip, boxShadow: `0 0 10px ${chip}` }} />
        </div>
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
        className="relative rounded-[2rem] p-[2px] bg-gradient-to-br from-[var(--primary)]/40 via-[var(--warm)]/25 to-[var(--primary-light)]/40 shadow-2xl shadow-[var(--primary)]/10"
      >
        <div className="rounded-[calc(2rem-2px)] bg-white/95 backdrop-blur-xl p-8 lg:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
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
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center shadow-lg shadow-[var(--primary)]/20">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <motion.div
                      animate={isInView ? { scale: [1, 1.3, 1] } : {}}
                      transition={{ duration: 0.5, delay: 1.5 + i * 0.2 }}
                      className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[var(--warm)] border-2 border-white"
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

  return (
    <section ref={sectionRef} className="relative min-h-screen hero-gradient overflow-hidden">
      <FloatingParticles count={15} />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(11,60,109,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(11,60,109,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,241,251,0.2),transparent_50%)]" />
      </div>

      <motion.div style={{ y: useSpring(useTransform(scrollYProgress, [0, 1], [0, 150]), { stiffness: 40, damping: 30 }) }} className="absolute inset-0 pointer-events-none">
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
              className="inline-flex items-center gap-2.5 px-5 py-2 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-lighter)] text-white text-sm font-semibold rounded-full shadow-lg shadow-[var(--primary-glow)] mb-6"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                <path d="M12 2.7l1.1 2.6 2.8.2 2.1 1.8 2.4 1.4-.8 2.7 1 2.7-2.2 1.7-.5 2.8-2.3 1.7-2.1-1.9-2.9-.1L8.3 22l-2-1.9-2.2-1.5-.5-2.8-2.8-1.4.8-2.7-1-2.7 2.6-1.3 2-1.8 2.8-.2L12 2.7z" />
                <path d="M12 6.5v11" stroke="#fff" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity=".85" />
                <path d="M8.5 19.5c1.1-.7 1.7-1.1 3.5-1.1s2.4.4 3.5 1.1" stroke="#fff" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity=".85" />
              </svg>
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
                HIV<span className="text-[var(--accent)]">/AIDS</span>
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
                      <stop offset="0%" stopColor="#0B3C6D" />
                      <stop offset="100%" stopColor="#E11D48" />
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
              <span className="text-[var(--body-text)]">GOMSACA is the state agency responsible for coordinating HIV/AIDS prevention, partnerships, community interventions, monitoring, advocacy, and support programmes.</span>
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
                Latest News
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-8"
            >
              {["Certified facilities", "Confidential testing", "Stigma-free care"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--body-text)]">
                  <CheckCircle2 className="w-4 h-4 text-[var(--warm)]" />
                  {item}
                </span>
              ))}
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

              <div className="relative rounded-[32px] p-[2px] bg-gradient-to-br from-[var(--primary)]/50 via-[var(--warm)]/30 to-[var(--primary-light)]/50 shadow-2xl shadow-[var(--primary)]/20">
                <div className="relative rounded-[30px] overflow-hidden h-[500px] lg:h-[600px]">
                  <Image
                    src="/hero.jpeg"
                    alt="Healthcare workers engaging with community"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />
                  <div className="absolute top-5 left-5">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider shadow-lg border border-white/20">
                      <Heart className="w-3.5 h-3.5 text-[var(--warm-light)]" />
                      Committed to an AIDS-Free Gombe
                    </span>
                  </div>
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[30px]" />
                </div>
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(11,60,109,0.2),transparent_50%)]" />
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
