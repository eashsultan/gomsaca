import { Heart, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
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
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ],
  Partners: [
    { label: "PEPFAR", href: "#" },
    { label: "WHO Nigeria", href: "#" },
    { label: "UNAIDS", href: "#" },
    { label: "NACA", href: "#" },
    { label: "Global Fund", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer id="contact" className="bg-[var(--primary-dark)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[var(--primary)] flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">GOMSACA</span>
            </a>
            <p className="text-white/60 leading-relaxed mb-6 max-w-sm text-sm">
              {siteConfig.description}
            </p>
            <div className="space-y-3">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm">
                <Mail className="w-4 h-4" />
                {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm">
                <Phone className="w-4 h-4" />
                {siteConfig.phoneDisplay}
              </a>
              <div className="flex items-start gap-2 text-white/50 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{siteConfig.address}</span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/90">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="flex items-center gap-1 text-white/50 hover:text-white transition-colors text-sm"
                    >
                      <ArrowRight className="w-3 h-3" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} GOMSACA. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            Designed by Ashalt Worldwide Solution Ltd
          </p>
        </div>
      </div>
    </footer>
  )
}
