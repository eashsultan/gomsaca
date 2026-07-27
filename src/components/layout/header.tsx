"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/data"

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Publications", href: "#publications" },
  { label: "Activities", href: "#blog" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <div className="hidden lg:block bg-gradient-to-r from-[#084C2E] to-[#0B6E3A] text-white text-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end h-10">
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group">
              <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Phone className="w-3 h-3" />
              </span>
              Emergency Hotline: {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <header className={`sticky top-0 lg:top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-sm" : "bg-white border-b border-gray-100/60"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0B6E3A] to-[#0E8A4A] flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-[var(--dark-text)] tracking-tight">GOMSACA</span>
            </a>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3.5 py-2 text-sm font-medium text-[var(--body-text)] hover:text-[#0B6E3A] transition-all duration-200 rounded-lg hover:bg-[#E8F5E9] relative after:absolute after:bottom-0.5 after:left-3.5 after:right-3.5 after:h-0.5 after:rounded-full after:bg-[#0B6E3A] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-5">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 text-sm text-[var(--body-text)] hover:text-[#0B6E3A] transition-colors">
                <Phone className="w-4 h-4 text-[#0B6E3A]" />
                <span className="font-medium">{siteConfig.phoneDisplay}</span>
              </a>
              <Button className="bg-gradient-to-r from-[#0B6E3A] to-[#0E8A4A] hover:from-[#084C2E] hover:to-[#0B6E3A] text-white shadow-md hover:shadow-lg transition-all duration-300" size="sm">
                Get Support
              </Button>
            </div>

            <button
              className="lg:hidden p-2.5 rounded-xl hover:bg-zinc-100 transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
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
              className="lg:hidden border-t border-gray-100 bg-white overflow-hidden shadow-lg"
            >
              <div className="px-4 py-6 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2.5 text-base font-medium text-[var(--body-text)] hover:text-[#0B6E3A] hover:bg-[#E8F5E9] rounded-xl transition-all duration-200"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 mt-4 border-t border-gray-100 space-y-3">
                  <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 px-4 py-2.5 text-sm text-[var(--body-text)] rounded-xl hover:bg-zinc-50 transition-colors">
                    <Phone className="w-4 h-4 text-[#0B6E3A]" />
                    {siteConfig.phoneDisplay}
                  </a>
                  <Button className="bg-gradient-to-r from-[#0B6E3A] to-[#0E8A4A] text-white w-full" size="sm">
                    Get Support
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
