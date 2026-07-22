"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Heart, Clock, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/data"

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Activities", href: "#blog" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="hidden lg:block bg-[var(--primary-dark)] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 text-white/80">
                <Clock className="w-3.5 h-3.5" />
                Mon - Fri: 08:00am - 09:00pm
              </span>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5" />
                {siteConfig.email}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5" />
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>

      <header className="sticky top-0 lg:top-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[var(--primary)] flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-[var(--dark-text)]">GOMSACA</span>
            </a>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-[var(--body-text)] hover:text-[var(--primary)] transition-colors rounded-lg hover:bg-[var(--primary-bg)]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Button variant="primary" size="sm">
                Contact Us
              </Button>
            </div>

            <button
              className="lg:hidden p-2 rounded-lg hover:bg-zinc-100 transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-[var(--border)] bg-white overflow-hidden"
            >
              <div className="px-4 py-6 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 text-base font-medium text-[var(--body-text)] hover:text-[var(--primary)] hover:bg-[var(--primary-bg)] rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 mt-4 border-t border-[var(--border)]">
                  <Button variant="primary" size="sm" className="w-full">
                    Contact Us
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
