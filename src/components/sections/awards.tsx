"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import CountUp from "react-countup"
import { Award, Sparkles, Medal, Star, ShieldCheck, TrendingUp } from "lucide-react"
import { TiltCard } from "@/components/ui/tilt-card"
import { FloatingParticles } from "@/components/ui/floating-elements"

const awardImages = [
  { src: "/Award 1.jpg", alt: "GOMSACA Impact Award 1", label: "Excellence in Service" },
  { src: "/Award 2.jpg", alt: "GOMSACA Impact Award 2", label: "Outstanding Contribution" },
  { src: "/Award 3.jpg", alt: "GOMSACA Impact Award 3", label: "Impact Recognition" },
]

export function Awards() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const floatY = useTransform(scrollYProgress, [0, 1], [0, -40])

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#081F3A]">
      <FloatingParticles count={8} />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[560px] h-[560px] rounded-full bg-[var(--primary-light)]/25 blur-3xl" />
        <div className="absolute -bottom-40 right-0 w-[520px] h-[520px] rounded-full bg-[var(--accent)]/15 blur-3xl" />
        <div className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full bg-[var(--warm)]/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-5xl mx-auto text-center mb-16 lg:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-[0.15em] mb-6 shadow-lg border border-white/15"
          >
            <Medal className="w-3.5 h-3.5 text-[var(--warm)]" />
            Recognition
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-6 text-white">
            Awards &{" "}
            <span className="bg-gradient-to-r from-[var(--warm)] to-[var(--warm-light)] bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto text-white/60"
          >
            Our commitment to excellence in the fight against HIV/AIDS has been recognized
            both locally and internationally.
          </motion.p>
        </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
              {awardImages.map((award, i) => (
                <motion.div
                  key={award.src}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className={i === 2 ? "sm:col-span-2" : ""}
                >
                  <TiltCard maxTilt={7} scale={1.03}>
                    <div className="group relative rounded-2xl overflow-hidden ring-1 ring-white/15 shadow-2xl shadow-black/40">
                      <div className="relative aspect-[3/2]">
                        <Image
                          src={award.src}
                          alt={award.alt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#081F3A]/95 via-transparent to-transparent" />
                      </div>
                      <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5">
                        <div className="flex items-center justify-between gap-3">
                          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs font-bold">
                            <Star className="w-3.5 h-3.5 text-[var(--warm)]" />
                            {award.label}
                          </span>
                          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/90 text-[#081F3A] shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Medal className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>

          <motion.div
            style={{ y: floatY }}
            className="lg:col-span-2 relative"
          >
            <div className="absolute -top-8 -right-8 w-40 h-40 rounded-3xl bg-[var(--warm)]/20 blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-[var(--primary-light)]/30 blur-2xl" />
            <div className="relative rounded-[2rem] p-1.5 bg-gradient-to-br from-[var(--warm)]/60 via-white/10 to-[var(--primary-light)]/50 shadow-2xl shadow-black/50">
              <div className="rounded-[1.6rem] bg-[#0B2C4F] p-8 sm:p-10 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[var(--warm)]/10 blur-2xl" />
                </div>
                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[var(--warm)] to-[var(--warm-light)] text-[#081F3A] text-xs font-bold uppercase tracking-wider mb-6 shadow-lg shadow-[var(--warm)]/30">
                    <Sparkles className="w-3.5 h-3.5" />
                    CIHP Impact Award
                  </div>
                  <div className="relative aspect-[3/2] rounded-xl overflow-hidden ring-1 ring-white/10 mb-6">
                    <Image
                      src="/Awarsd.png"
                      alt="CIHP Impact Award presentation"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 90vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081F3A]/60 via-transparent to-transparent" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-[1.1] mb-4">
                    Recognized for{" "}
                    <span className="bg-gradient-to-r from-[var(--warm)] to-[var(--warm-light)] bg-clip-text text-transparent">
                      Excellence
                    </span>
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-8">
                    GOMSACA was honored with the prestigious Impact Award by the
                    Center for Integrated Health Programs (CIHP) in recognition of
                    our outstanding contributions to HIV/AIDS prevention, treatment,
                    and care across Gombe State.
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {[
                      { icon: Star, value: 20, suffix: "+", label: "Years of Service" },
                      { icon: Award, value: 2024, suffix: "", label: "Impact Award" },
                      { icon: ShieldCheck, value: 11, suffix: "", label: "LGAs Covered" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-white/5 rounded-2xl border border-white/10 p-4 text-center backdrop-blur-sm"
                      >
                        <stat.icon className="w-5 h-5 text-[var(--warm)] mx-auto mb-2" />
                        <div className="text-xl sm:text-2xl font-extrabold text-white">
                          <CountUp end={stat.value} duration={2} separator="," />
                          {stat.suffix}
                        </div>
                        <div className="text-[10px] sm:text-xs text-white/50 mt-0.5">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[var(--warm)] to-[var(--warm-light)] text-[#081F3A] text-sm font-bold shadow-xl shadow-[var(--warm)]/30 hover:shadow-2xl hover:shadow-[var(--warm)]/40 transition-shadow duration-300"
                    >
                      <TrendingUp className="w-4 h-4" />
                      View Award Details
                    </motion.a>
                    <span className="inline-flex items-center gap-2 text-white/50 text-sm">
                      <Medal className="w-4 h-4 text-[var(--warm)]" />
                      Proven excellence since 2004
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
