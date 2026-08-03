"use client"

import React from "react"
import { motion } from "framer-motion"
import { Search, Calendar, ArrowRight, ChevronRight, Filter } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { PageHeader } from "@/components/ui/page-header"

const categories = ["All News", "Press Releases", "Health Updates", "Community Events", "Announcements"]

const featuredArticle = {
  title: "GOMSACA Launches New Statewide Health Initiative for 2026",
  date: "July 28, 2026",
  category: "Press Releases",
  excerpt: "In a groundbreaking move to improve public health outcomes, the Gombe State Agency for Community Action has unveiled a comprehensive new program targeting grassroots health awareness and intervention.",
  image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000",
}

const newsArticles = [
  {
    id: 1,
    title: "Annual Community Outreach Program Achieves Record Participation",
    date: "July 15, 2026",
    category: "Community Events",
    excerpt: "Thousands of residents across Gombe State participated in this year's community health outreach, receiving vital screenings and health education.",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "New Guidelines Released for Local Health Practitioners",
    date: "July 02, 2026",
    category: "Health Updates",
    excerpt: "Updated protocols and best practices have been published to ensure the highest standard of care across all community health centers.",
    image: "https://images.unsplash.com/photo-1551076805-e1869043e560?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "GOMSACA Partners with International Health Organizations",
    date: "June 20, 2026",
    category: "Announcements",
    excerpt: "A new strategic partnership aims to bring advanced medical resources and training programs to healthcare workers in Gombe State.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Statewide Vaccination Drive Kicks Off Next Week",
    date: "June 10, 2026",
    category: "Press Releases",
    excerpt: "The agency prepares for a massive immunization campaign to protect vulnerable populations against seasonal and preventable diseases.",
    image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=800",
  },
]

export default function NewsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--gray-light)] pb-20">
        {/* Page Header */}
        <PageHeader
          align="left"
          label="Latest Updates"
          title="News & Updates"
          description="Stay informed with the latest developments, initiatives, and announcements from the Gombe State Agency for Community Action."
        />

        <div className="container mx-auto px-4 mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Content Area */}
            <div className="lg:col-span-8">
              {/* Featured Article */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="card group bg-white rounded-3xl overflow-hidden shadow-sm border border-[var(--border)] hover:shadow-xl hover:shadow-[var(--primary)]/5 transition-all duration-300 mb-12"
              >
                <div className="relative h-[400px] w-full overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                  <img src={featuredArticle.image} alt={featuredArticle.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-6 left-6 z-20">
                    <span className="px-4 py-1.5 rounded-full bg-[var(--primary)] text-white text-sm font-semibold shadow-lg">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-4 text-sm text-[var(--muted)] mb-4">
                    <span className="font-medium text-[var(--primary)]">{featuredArticle.category}</span>
                    <span className="w-1 h-1 rounded-full bg-[var(--border)]" />
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {featuredArticle.date}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[var(--dark-text)] mb-4 group-hover:text-[var(--primary)] transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-[var(--body-text)] text-lg leading-relaxed mb-6">
                    {featuredArticle.excerpt}
                  </p>
                  <Link href="#" className="inline-flex items-center gap-2 font-semibold text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors">
                    Read Full Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              {/* Latest News Grid */}
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-[var(--dark-text)]">Latest News</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {newsArticles.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="card group bg-white rounded-2xl overflow-hidden border border-[var(--border)] hover:border-[var(--primary)]/20 shadow-sm hover:shadow-lg transition-all"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between text-xs text-[var(--muted)] mb-3">
                        <span className="font-semibold text-[var(--primary)] bg-[var(--primary-bg)] px-2.5 py-1 rounded-md">{article.category}</span>
                        <span>{article.date}</span>
                      </div>
                      <h4 className="text-lg font-bold text-[var(--dark-text)] mb-3 group-hover:text-[var(--primary)] transition-colors line-clamp-2">
                        {article.title}
                      </h4>
                      <p className="text-[var(--body-text)] text-sm mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <Link href="#" className="inline-flex items-center text-sm font-semibold text-[var(--primary)] hover:text-[var(--primary-dark)]">
                        Read More <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12 flex justify-center">
                <button className="px-8 py-3 rounded-full border-2 border-[var(--primary)] text-[var(--primary)] font-semibold hover:bg-[var(--primary)] hover:text-white transition-all shadow-md">
                  Load More News
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              {/* Search Widget */}
              <div className="card bg-white p-6 rounded-2xl border border-[var(--border)] shadow-sm">
                <h3 className="text-lg font-bold text-[var(--dark-text)] mb-4 flex items-center gap-2">
                  <Search className="w-5 h-5 text-[var(--primary)]" />
                  Search News
                </h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search articles, keywords..." 
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[var(--gray-light)] border border-[var(--border)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all"
                  />
                  <Search className="absolute left-3.5 top-3.5 w-5 h-5 text-[var(--muted)]" />
                </div>
              </div>

              {/* Categories Widget */}
              <div className="card bg-white p-6 rounded-2xl border border-[var(--border)] shadow-sm">
                <h3 className="text-lg font-bold text-[var(--dark-text)] mb-4 flex items-center gap-2">
                  <Filter className="w-5 h-5 text-[var(--primary)]" />
                  Categories
                </h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${index === 0 ? 'bg-[var(--primary)] text-white' : 'text-[var(--body-text)] hover:bg-[var(--primary-bg)] hover:text-[var(--primary)]'}`}>
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter Widget */}
              <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] p-8 rounded-2xl text-white shadow-lg shadow-[var(--primary)]/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <h3 className="text-xl font-bold mb-3 relative z-10">Stay Updated</h3>
                <p className="text-white/80 text-sm mb-6 relative z-10">Subscribe to our newsletter to receive the latest news and updates directly in your inbox.</p>
                <div className="relative z-10 space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-white outline-none"
                  />
                  <button className="w-full px-4 py-3 rounded-xl bg-white text-[var(--primary)] font-bold hover:bg-[var(--gray-light)] transition-colors">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
