"use client";

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { motion } from "framer-motion"
import { useState } from "react"
import { Play, Maximize2, X } from "lucide-react"
import { PageHeader } from "@/components/ui/page-header"

const categories = ["All", "Photos", "Videos", "Campaigns", "Events"]

const galleryItems = [
  { id: 1, type: "Photos", title: "World AIDS Day", src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80", span: "col-span-1 row-span-2" },
  { id: 2, type: "Events", title: "Community Outreach", src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80", span: "col-span-1 row-span-1" },
  { id: 3, type: "Campaigns", title: "Youth Awareness", src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80", span: "col-span-2 row-span-1" },
  { id: 4, type: "Videos", title: "Director's Address", src: "https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?w=800&q=80", span: "col-span-1 row-span-1" },
  { id: 5, type: "Photos", title: "Healthcare Training", src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80", span: "col-span-1 row-span-2" },
  { id: 6, type: "Events", title: "Stakeholder Meeting", src: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=800&q=80", span: "col-span-2 row-span-1" },
]

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("All")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<any>(null)

  const filteredItems = activeTab === "All" ? galleryItems : galleryItems.filter(item => item.type === activeTab)

  return (
    <>
      <Header />
      <main className="pb-20 bg-gray-50 min-h-screen">
        <PageHeader
          label="Gallery"
          title={<>Media <span className="text-gradient">Gallery</span></>}
          description="Explore our recent events, campaigns, and outreach programs aimed at controlling and preventing HIV/AIDS in Gombe State."
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === category 
                    ? "bg-[var(--primary)] text-white shadow-md" 
                    : "bg-white text-[var(--body-text)] hover:bg-[var(--gray-light)] border border-[var(--border)]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-4">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer bg-[var(--gray-light)] ${item.span}`}
                onClick={() => { setSelectedItem(item); setLightboxOpen(true); }}
              >
                <img src={item.src} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[var(--accent)] text-xs font-bold uppercase tracking-wider mb-1">{item.type}</span>
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                </div>
                {item.type === "Videos" && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                )}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {lightboxOpen && selectedItem && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8">
            <button 
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="w-full max-w-5xl max-h-full flex flex-col items-center">
              <img src={selectedItem.src} alt={selectedItem.title} className="max-w-full max-h-[80vh] object-contain rounded-lg" />
              <div className="mt-6 text-center">
                <span className="text-[var(--accent)] text-sm font-bold uppercase tracking-wider">{selectedItem.type}</span>
                <h2 className="text-white text-2xl font-semibold mt-2">{selectedItem.title}</h2>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
