"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart, Mail, Phone, MapPin, ArrowUp, ChevronRight, Send, ShieldCheck } from "lucide-react"
import { siteConfig } from "@/lib/data"

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.09 5.66 21.29 10.44 22v-7.03H7.9v-2.9h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34V22C18.34 21.29 22 17.09 22 12.06z" />
    </svg>
  )
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82L5 21.75H1.68l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 01-1.38-.9 3.72 3.72 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38A5.88 5.88 0 00.63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13.67.66 1.34 1.08 2.13 1.38.76.3 1.64.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 002.13-1.38 5.88 5.88 0 001.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 00-1.38-2.13A5.88 5.88 0 0019.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 105.84 12 6.16 6.16 0 0012 5.84zm0 10.16A4 4 0 1116 12a4 4 0 01-4 4zm6.41-11.85a1.44 1.44 0 11-1.44 1.44 1.44 1.44 0 011.44-1.44z" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  )
}

const footerLinks = {
  "Quick Links": [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Leadership", href: "/leadership" },
    { label: "Organizational Structure", href: "/organizational-structure" },
    { label: "News & Activities", href: "/news" },
    { label: "Contact", href: "/contact" },
  ],
  Programmes: [
    { label: "Our Programmes", href: "/programmes" },
    { label: "Education & Awareness", href: "/programs/education-awareness" },
    { label: "HIV Testing", href: "/programs/hiv-testing" },
    { label: "Treatment & Care", href: "/programs/treatment-care" },
    { label: "Community Engagement", href: "/programs/community-engagement" },
    { label: "LACA Network", href: "/laca" },
  ],
  Resources: [
    { label: "Publications", href: "/publications" },
    { label: "Gallery", href: "/gallery" },
    { label: "Partners", href: "/partners" },
    { label: "Core Functions", href: "/functions" },
    { label: "Powers & Duties", href: "/powers" },
    { label: "Secretariat", href: "/secretariat" },
  ],
}

const socials = [
  { label: "Facebook", icon: FacebookIcon, href: "#" },
  { label: "Twitter", icon: TwitterIcon, href: "#" },
  { label: "Instagram", icon: InstagramIcon, href: "#" },
  { label: "LinkedIn", icon: LinkedinIcon, href: "#" },
]

export function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) setSubscribed(true)
  }

  const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <footer id="contact" className="bg-gradient-to-b from-[var(--primary-darker)] via-[#07182e] to-[#050f1f] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-[var(--primary)]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[var(--accent)]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-0 w-64 h-64 bg-[var(--warm)]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
<Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-lighter)] flex items-center justify-center shadow-lg shadow-black/30 relative overflow-hidden">
                <Heart className="w-6 h-6 text-white" />
                <span className="absolute -right-1.5 -top-1.5 w-5 h-5 bg-[var(--accent)] rounded-full" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight">GomSACA</span>
            </Link>
            <p className="text-white/55 leading-relaxed mb-6 text-sm">
              The Gombe State Agency for the Control of AIDS coordinates a unified, multi-sectoral response to HIV/AIDS — leading prevention, treatment, care, advocacy and partnerships across all 11 LGAs.
            </p>
            <div className="space-y-3">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-white/55 hover:text-white transition-colors text-sm group">
                <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[var(--primary)] transition-colors">
                  <Mail className="w-4 h-4" />
                </span>
                {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 text-white/55 hover:text-white transition-colors text-sm group">
                <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[var(--primary)] transition-colors">
                  <Phone className="w-4 h-4" />
                </span>
                {siteConfig.phoneDisplay}
              </a>
              <div className="flex items-start gap-3 text-white/55 text-sm">
                <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </span>
                <span className="pt-1.5">{siteConfig.address}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-gradient-to-br hover:from-[var(--primary)] hover:to-[var(--primary-lighter)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-2">
              <h4 className="font-bold text-sm uppercase tracking-[0.12em] mb-5 text-white/85 border-b border-white/10 pb-3">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-white/50 hover:text-white transition-all duration-200 text-sm group"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-[var(--primary-lighter)] transition-transform duration-200 group-hover:translate-x-1" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-2">
            <h4 className="font-bold text-sm uppercase tracking-[0.12em] mb-5 text-white/85 border-b border-white/10 pb-3">
              Stay Updated
            </h4>
            <p className="text-white/50 text-sm mb-4 leading-relaxed">
              Get the latest on HIV prevention and GomSACA updates in your inbox.
            </p>
            {subscribed ? (
              <div className="flex items-start gap-3 rounded-2xl bg-[var(--warm)]/15 border border-[var(--warm)]/30 p-4">
                <ShieldCheck className="w-5 h-5 text-[var(--warm-light)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--warm-light)]">Subscribed!</p>
                  <p className="text-xs text-white/60 mt-1">Thank you for joining our newsletter.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="flex items-center rounded-xl bg-white/5 border border-white/10 focus-within:border-[var(--primary-lighter)] transition-colors overflow-hidden">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    aria-label="Email address"
                    className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="px-3.5 h-full flex items-center justify-center self-stretch bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] hover:from-[var(--primary-lighter)] transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
            <div className="mt-6 flex items-center gap-2 text-white/40 text-xs leading-relaxed">
              <ShieldCheck className="w-4 h-4 text-[var(--warm-light)] shrink-0" />
              Your data is safe. We never share your details.
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/35 text-sm">
            &copy; {new Date().getFullYear()} Gombe State Agency for the Control of AIDS (GomSACA).
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-white/35 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <span className="text-white/20">|</span>
            <a href="#" className="text-white/35 hover:text-white text-sm transition-colors">Accessibility</a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white/35 text-sm">Designed by Ashalt Worldwide Solution Ltd</span>
            <button
              onClick={backToTop}
              aria-label="Back to top"
              className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-[var(--accent)] hover:to-[var(--accent-light)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}