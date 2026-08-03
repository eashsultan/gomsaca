"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Heart, ChevronDown, ShieldCheck, Mail, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/data"

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About the Agency", href: "/about", description: "Our mission, vision and mandate" },
      { label: "Core Functions", href: "/functions", description: "Directorates & key responsibilities" },
      { label: "Powers & Duties", href: "/powers", description: "Statutory functions of GomSACA" },
      { label: "Ribbon Leadership", href: "/leadership", description: "Meet our executive team" },
      { label: "Organizational Structure", href: "/organizational-structure", description: "How we are organised" },
    ],
  },
  {
    label: "Programmes",
    href: "/programmes",
    children: [
      { label: "Programmes", href: "/programmes", description: "Our core HIV interventions" },
      { label: "Publications", href: "/publications", description: "Reports & strategy documents" },
      { label: "LACA Network", href: "/laca", description: "Local Action Committees" },
      { label: "Secretariat", href: "/secretariat", description: "Agency secretariat" },
      { label: "Gallery", href: "/gallery", description: "Photos & events" },
    ],
  },
  { label: "News", href: "/news" },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
]

function DropdownNav() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleEnter = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpenIndex(index)
  }
  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenIndex(null), 120)
  }

  return (
    <nav className="hidden lg:flex items-center gap-1" onMouseLeave={handleLeave}>
      {navLinks.map((link, i) => (
        <div key={link.label} className="relative" onMouseEnter={() => handleEnter(i)}>
          <Link
            href={link.href}
            className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-[var(--body-text)] hover:text-[var(--primary)] transition-all duration-200 rounded-lg hover:bg-[var(--primary-bg)] relative after:absolute after:bottom-0.5 after:left-3.5 after:right-3.5 after:h-0.5 after:rounded-full after:bg-gradient-to-r after:from-[var(--primary)] after:to-[var(--primary-lighter)] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-200"
          >
            {link.label}
            {link.children && (
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`} />
            )}
          </Link>

          <AnimatePresence>
            {link.children && openIndex === i && (
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute left-1/2 -translate-x-1/2 pt-3 z-50 w-72"
              >
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-[var(--border)] overflow-hidden p-2.5">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-[var(--gray-light)] group transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[var(--primary-bg)] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[var(--primary)] transition-colors">
                        <span className="w-2 h-2 rounded-full bg-[var(--primary)] group-hover:bg-white transition-colors" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[var(--dark-text)] group-hover:text-[var(--primary)] transition-colors">
                          {child.label}
                        </div>
                        <div className="text-xs text-[var(--muted)] mt-0.5 leading-snug">{child.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </nav>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <div className="hidden lg:block bg-gradient-to-r from-[var(--primary-darker)] via-[var(--primary-dark)] to-[var(--primary)] text-white text-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center gap-6 text-white/80">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 text-[var(--warm-light)]" />
                {siteConfig.email}
              </a>
              <span className="hidden xl:flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[var(--warm-light)]" />
                Mon – Fri, 8:00 AM – 4:00 PM
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                <Phone className="w-3 h-3 text-[var(--warm-light)]" />
              </span>
              <a href={`tel:${siteConfig.phone}`} className="text-white/80 hover:text-white transition-colors">
                Emergency Hotline: {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>

      <header className={`sticky top-0 lg:top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-md" : "bg-white border-b border-[var(--border-light)]"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[4.5rem]">
            <Link href="/" className="flex items-center gap-3 group" aria-label="GomSACA Home">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-lighter)] flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <Heart className="w-5 h-5 text-white" />
                <span className="absolute -right-2 -top-2 w-5 h-5 bg-[var(--accent)] rounded-full opacity-0 group-hover:opacity-90 transition-opacity" />
              </div>
              <div className="leading-tight">
                <span className="block font-extrabold text-xl text-[var(--dark-text)] tracking-tight">GomSACA</span>
                <span className="hidden sm:block text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Gombe State AIDS Agency</span>
              </div>
            </Link>

            <DropdownNav />

            <div className="hidden lg:flex items-center gap-3">
              <Link
                      href="/contact"
                      className="flex items-center gap-2 text-sm text-[var(--body-text)] hover:text-[var(--primary)] transition-colors"
                    >
                      <ShieldCheck className="w-4.5 h-4.5 text-[var(--primary)]" />
                      <span className="font-medium">Find Services</span>
                    </Link>
              <Button
                className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] hover:from-[#c81c40] hover:to-[var(--accent)] text-white shadow-md hover:shadow-lg shadow-[var(--accent-glow)] transition-all duration-300"
                size="sm"
              >
                Get Tested
              </Button>
            </div>

            <button
              className="lg:hidden p-2.5 rounded-xl hover:bg-zinc-100 transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:hidden border-t border-[var(--border-light)] bg-white overflow-hidden shadow-lg"
            >
              <div className="px-4 py-5 space-y-1 max-h-[70vh] overflow-y-auto">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between px-4 py-2.5 text-base font-semibold text-[var(--dark-text)] hover:text-[var(--primary)] hover:bg-[var(--primary-bg)] rounded-xl transition-all duration-200"
                    >
                      {link.label}
                      {link.children && <ChevronDown className="w-4 h-4 text-[var(--muted)]" />}
                    </Link>
                    {link.children && (
                      <div className="pl-4 mt-1 mb-1 border-l-2 border-[var(--primary-bg)] space-y-0.5">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-2 pl-4 py-2 text-sm text-[var(--body-text)] hover:text-[var(--primary)] rounded-lg transition-colors"
                          >
                            <ArrowRight className="w-3.5 h-3.5 text-[var(--primary)]" />
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 mt-4 border-t border-[var(--border-light)] space-y-3">
                  <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 px-4 py-2.5 text-sm text-[var(--body-text)] rounded-xl hover:bg-zinc-50 transition-colors">
                    <Phone className="w-4 h-4 text-[var(--primary)]" />
                    {siteConfig.phoneDisplay}
                  </a>
                  <Button className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] text-white w-full" size="sm">
                    Get Tested
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}