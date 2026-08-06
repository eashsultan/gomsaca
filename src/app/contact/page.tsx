"use client";

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, ShieldAlert, Send } from "lucide-react"
import { siteConfig } from "@/lib/data"
import { PageHeader } from "@/components/ui/page-header"
import Link from "next/link"

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pb-20 bg-[var(--gray-light)] min-h-screen">
        <PageHeader
          label="Contact Us"
          title={<>Get in <span className="text-gradient">Touch</span></>}
          description="We are here to help. Reach out to us for inquiries, support, or emergency assistance regarding HIV/AIDS services in Gombe State."
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="card bg-white p-6 rounded-2xl shadow-sm border border-[var(--border)] flex items-start gap-4"
              >
                <div className="p-3 bg-[var(--primary-bg)] rounded-xl text-[var(--primary)]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--dark-text)] mb-1">Head Office</h3>
                  <p className="text-[var(--body-text)] text-sm">State Secretariat Complex,<br/>Gombe, Gombe State, Nigeria</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="card bg-white p-6 rounded-2xl shadow-sm border border-[var(--border)] flex items-start gap-4"
              >
                <div className="p-3 bg-[var(--primary-bg)] rounded-xl text-[var(--primary)]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--dark-text)] mb-1">Phone</h3>
                  <p className="text-[var(--body-text)] text-sm">{siteConfig.phoneDisplay}</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="card bg-white p-6 rounded-2xl shadow-sm border border-[var(--border)] flex items-start gap-4"
              >
                <div className="p-3 bg-[var(--primary-bg)] rounded-xl text-[var(--primary)]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--dark-text)] mb-1">Email</h3>
                  <p className="text-[var(--body-text)] text-sm">info@gomsaca.gov.ng</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="card bg-white p-6 rounded-2xl shadow-sm border border-[var(--border)] flex items-start gap-4"
              >
                <div className="p-3 bg-[var(--primary-bg)] rounded-xl text-[var(--primary)]">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--dark-text)] mb-1">Office Hours</h3>
                  <p className="text-[var(--body-text)] text-sm">Mon - Fri: 8:00 AM - 4:00 PM</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-red-50 p-6 rounded-2xl border border-red-100 flex items-start gap-4"
              >
                <div className="p-3 bg-red-100 rounded-xl text-red-600">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-red-900 mb-1">Emergency Hotline</h3>
                  <p className="text-red-700 text-sm font-medium">Available 24/7</p>
                  <p className="text-red-800 font-bold mt-1 text-lg">112 / 0800 GomSACA</p>
                </div>
              </motion.div>
            </div>

            {/* Contact Form & Map */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="card bg-white p-8 rounded-3xl shadow-md border border-[var(--border)]"
              >
                <h2 className="text-2xl font-bold text-[var(--dark-text)] mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[var(--body-text)] mb-2">Full Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-[var(--border)] focus:ring-2 focus:ring-[var(--primary)] outline-none bg-[var(--gray-light)]" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--body-text)] mb-2">Email Address</label>
                      <input type="email" className="w-full px-4 py-3 rounded-xl border border-[var(--border)] focus:ring-2 focus:ring-[var(--primary)] outline-none bg-[var(--gray-light)]" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--body-text)] mb-2">Subject</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-[var(--border)] focus:ring-2 focus:ring-[var(--primary)] outline-none bg-[var(--gray-light)]" placeholder="How can we help?" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--body-text)] mb-2">Message</label>
                    <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-[var(--border)] focus:ring-2 focus:ring-[var(--primary)] outline-none bg-[var(--gray-light)] resize-none" placeholder="Write your message here..."></textarea>
                  </div>
                  <button type="button" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-semibold py-3 px-8 rounded-xl transition-colors">
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-full p-8 bg-gradient-to-br from-[#0B3C6D] to-[#061F3A] rounded-3xl overflow-hidden relative border border-[var(--border)] shadow-md text-white flex flex-col justify-between min-h-[280px]"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
                <div>
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-rose-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Interactive HIV Facilities Map</h3>
                  <p className="text-white/80 text-sm leading-relaxed max-w-md">
                    Looking for treatment or testing? Access our interactive map to search, filter by LGA, and find verified ART centres closest to you.
                  </p>
                </div>
                <div className="mt-6">
                  <Link 
                    href="/facilities-map" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0B3C6D] font-bold rounded-xl hover:bg-gray-100 transition-colors text-sm"
                  >
                    View Interactive Map
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
