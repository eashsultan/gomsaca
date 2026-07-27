import { Heart, Mail, Phone, MapPin, ArrowRight, ExternalLink } from "lucide-react"
import { siteConfig } from "@/lib/data"

const footerLinks = {
  Programs: [
    { label: "Education & Awareness", href: "/programs/education-awareness" },
    { label: "Community Engagement", href: "/programs/community-engagement" },
    { label: "Promoting Contraception", href: "/programs/contraception" },
    { label: "HIV Testing", href: "/programs/hiv-testing" },
    { label: "Treatment & Care", href: "/programs/treatment-care" },
  ],
  "Quick Links": [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#about" },
    { label: "Activities", href: "#blog" },
    { label: "Publications", href: "#publications" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ],
  Partners: [
    { label: "PEPFAR", href: "#" },
    { label: "WHO", href: "#" },
    { label: "UNAIDS", href: "#" },
    { label: "UNICEF", href: "#" },
    { label: "Global Fund", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-b from-[var(--primary-dark)] to-[var(--primary-darker)] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[var(--primary)]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[var(--accent)]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-[var(--primary)] flex items-center justify-center shadow-lg shadow-black/20">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-2xl tracking-tight">GOMSACA</span>
            </a>
            <p className="text-white/50 leading-relaxed mb-6 max-w-sm text-sm">
              {siteConfig.description}
            </p>
            <div className="space-y-3.5">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-white/50 hover:text-white transition-colors text-sm group">
                <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Mail className="w-4 h-4" />
                </span>
                {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 text-white/50 hover:text-white transition-colors text-sm group">
                <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Phone className="w-4 h-4" />
                </span>
                {siteConfig.phoneDisplay}
              </a>
              <div className="flex items-start gap-3 text-white/50 text-sm">
                <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </span>
                <span className="pt-1.5">{siteConfig.address}</span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm uppercase tracking-[0.1em] mb-5 text-white/80">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="flex items-center gap-2 text-white/40 hover:text-white transition-all duration-200 text-sm group"
                    >
                      <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} GOMSACA. All rights reserved.
          </p>
          <p className="text-white/30 text-sm flex items-center gap-1">
            Designed by Ashalt Worldwide Solution Ltd
            <ExternalLink className="w-3 h-3 inline" />
          </p>
        </div>
      </div>
    </footer>
  )
}
