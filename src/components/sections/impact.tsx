"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import CountUp from "react-countup"
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
} from "recharts"
import { HeartPulse, Shield, Building2, Baby, MapPin, Stethoscope } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { Card } from "@/components/ui/card"
import { impactData, impactStats, lgas } from "@/lib/data"

const iconMap: Record<string, React.ElementType> = {
  HeartPulse, Shield: Shield, Microscope: Stethoscope,
  Building2, Baby, MapPin, Stethoscope,
}

const chartColors = ["#1E3A5F", "#2D5A8E", "#C9A227", "#E8C547", "#0B1D3A", "#E8EFF8"]

const lgaChartData = lgas.map((l) => ({
  name: l.name,
  beneficiaries: l.beneficiaries,
  facilities: l.facilities,
}))

const programData = [
  { name: "Prevention", value: 35 },
  { name: "Testing", value: 25 },
  { name: "Treatment", value: 20 },
  { name: "Outreach", value: 12 },
  { name: "Other", value: 8 },
]

export function Impact() {
  const [chartView, setChartView] = useState<"beneficiaries" | "facilities">("beneficiaries")

  return (
    <section id="impact" className="py-20 lg:py-28 bg-[var(--gray-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Dashboard"
          title="Impact at a Glance"
          description="Real-time data visualization of our HIV/AIDS response across Gombe State."
        />

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
          {impactStats.map((stat, i) => {
            const Icon = iconMap[stat.icon] || Shield
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Card className="text-center p-5">
                  <div className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: `${stat.color}15` }}>
                    <Icon className="w-5 h-5" style={{ color: stat.color }} />
                  </div>
                  <div className="text-2xl font-bold" style={{ color: stat.color }}>
                    <ImpactCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-xs text-[var(--body-text)] mt-1 leading-tight">
                    {stat.label}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-[var(--dark-text)]">
                  LGA Coverage & Impact
                </h3>
                <div className="flex gap-1 bg-zinc-100 rounded-lg p-1">
                  <button
                    onClick={() => setChartView("beneficiaries")}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                      chartView === "beneficiaries"
                        ? "bg-white text-[var(--primary)] shadow-sm"
                        : "text-[var(--body-text)] hover:text-[var(--dark-text)]"
                    }`}
                  >
                    Beneficiaries
                  </button>
                  <button
                    onClick={() => setChartView("facilities")}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                      chartView === "facilities"
                        ? "bg-white text-[var(--primary)] shadow-sm"
                        : "text-[var(--body-text)] hover:text-[var(--dark-text)]"
                    }`}
                  >
                    Facilities
                  </button>
                </div>
              </div>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={lgaChartData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                    <XAxis dataKey="name" tick={{ fontSize: 11 }} interval={0} angle={-45} textAnchor="end" />
                    <YAxis tick={{ fontSize: 11 }} />
                    <Tooltip
                      contentStyle={{
                        borderRadius: "12px",
                        border: "1px solid #E2E8F0",
                        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                      }}
                    />
                    <Bar
                      dataKey={chartView}
                      fill="var(--primary)"
                      radius={[4, 4, 0, 0]}
                      maxBarSize={40}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Card className="p-6 lg:p-8 h-full">
              <h3 className="text-lg font-bold text-[var(--dark-text)] mb-6">
                Program Distribution
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={programData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {programData.map((_, i) => (
                        <Cell key={`cell-${i}`} fill={chartColors[i % chartColors.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        borderRadius: "12px",
                        border: "1px solid #E2E8F0",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {programData.map((d, i) => (
                  <div key={d.name} className="flex items-center gap-2 text-xs">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: chartColors[i % chartColors.length] }}
                    />
                    <span className="text-[var(--body-text)]">{d.name}</span>
                    <span className="font-semibold text-[var(--dark-text)] ml-auto">{d.value}%</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        <div className="grid gap-4">
          {impactData.map((item, i) => (
            <motion.div
              key={item.metric}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Card className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-[var(--body-text)]">
                    {item.metric}
                  </span>
                  <span className="text-sm text-[var(--body-text)]">
                    <span className="font-bold text-[var(--primary)]">
                      <ImpactCounter value={item.value} suffix="" />
                    </span>
                    {" / "}
                    {item.target.toLocaleString()} {item.unit}
                  </span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-zinc-100 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${Math.min((item.value / item.target) * 100, 100)}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)]"
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ImpactCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <span ref={ref}>
      {inView ? <CountUp end={value} duration={2} separator="," /> : "0"}
      {suffix}
    </span>
  )
}
