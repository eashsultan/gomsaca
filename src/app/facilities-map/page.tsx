"use client"

import { useState, useEffect, useRef } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageHeader } from "@/components/ui/page-header"
import { Search, MapPin, Phone, ShieldCheck, AlertCircle, Compass, RefreshCw } from "lucide-react"

// Real/Representative major health facilities in Gombe state providing HIV/ART treatment services
// with coordinates for Gombe State
const facilitiesData = [
  {
    id: 1,
    name: "Federal Teaching Hospital (FTH), Gombe",
    lga: "Gombe",
    type: "Tertiary Referral Hospital",
    address: "Ashaka Road, Gombe Metropolis",
    lat: 10.3015,
    lng: 11.1685,
    phone: "+234 903 661 3416",
    artAvailable: true,
    pmtctAvailable: true,
    testingAvailable: true,
  },
  {
    id: 2,
    name: "State Specialist Hospital, Gombe",
    lga: "Gombe",
    type: "Specialist Hospital",
    address: "Jekadafari Area, Gombe Metropolis",
    lat: 10.2883,
    lng: 11.1790,
    phone: "+234 800 GOMSACA",
    artAvailable: true,
    pmtctAvailable: true,
    testingAvailable: true,
  },
  {
    id: 3,
    name: "General Hospital, Kumo",
    lga: "Akko",
    type: "General Hospital",
    address: "Kumo Town, Akko LGA",
    lat: 10.0450,
    lng: 11.2120,
    phone: "+234 800 GOMSACA",
    artAvailable: true,
    pmtctAvailable: true,
    testingAvailable: true,
  },
  {
    id: 4,
    name: "General Hospital, Billiri",
    lga: "Billiri",
    type: "General Hospital",
    address: "Billiri Town, Billiri LGA",
    lat: 9.8667,
    lng: 11.2250,
    phone: "+234 800 GOMSACA",
    artAvailable: true,
    pmtctAvailable: true,
    testingAvailable: true,
  },
  {
    id: 5,
    name: "General Hospital, Kaltungo",
    lga: "Kaltungo",
    type: "General Hospital",
    address: "Along Yola Road, Kaltungo Town",
    lat: 9.8150,
    lng: 11.3110,
    phone: "+234 800 GOMSACA",
    artAvailable: true,
    pmtctAvailable: true,
    testingAvailable: true,
  },
  {
    id: 6,
    name: "General Hospital, Bajoga",
    lga: "Funakaye",
    type: "General Hospital",
    address: "Bajoga Town, Funakaye LGA",
    lat: 10.8520,
    lng: 11.4320,
    phone: "+234 800 GOMSACA",
    artAvailable: true,
    pmtctAvailable: true,
    testingAvailable: true,
  },
  {
    id: 7,
    name: "General Hospital, Deba",
    lga: "Yamaltu-Deba",
    type: "General Hospital",
    address: "Deba Town, Yamaltu-Deba LGA",
    lat: 10.2100,
    lng: 11.3850,
    phone: "+234 800 GOMSACA",
    artAvailable: true,
    pmtctAvailable: true,
    testingAvailable: true,
  },
  {
    id: 8,
    name: "General Hospital, Dukku",
    lga: "Dukku",
    type: "General Hospital",
    address: "Dukku Town, Dukku LGA",
    lat: 10.8238,
    lng: 10.7714,
    phone: "+234 800 GOMSACA",
    artAvailable: true,
    pmtctAvailable: true,
    testingAvailable: true,
  },
  {
    id: 9,
    name: "General Hospital, Nafada",
    lga: "Nafada",
    type: "General Hospital",
    address: "Nafada Town, Nafada LGA",
    lat: 11.0960,
    lng: 11.3280,
    phone: "+234 800 GOMSACA",
    artAvailable: true,
    pmtctAvailable: true,
    testingAvailable: true,
  },
  {
    id: 10,
    name: "General Hospital, Kashere",
    lga: "Akko",
    type: "General Hospital",
    address: "Kashere Town, Akko LGA",
    lat: 9.7710,
    lng: 10.9700,
    phone: "+234 800 GOMSACA",
    artAvailable: true,
    pmtctAvailable: true,
    testingAvailable: true,
  },
]

const LGAS = [
  "All",
  "Akko",
  "Balanga",
  "Billiri",
  "Dukku",
  "Funakaye",
  "Gombe",
  "Kaltungo",
  "Kwami",
  "Nafada",
  "Shongom",
  "Yamaltu-Deba",
]

export default function FacilitiesMapPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLga, setSelectedLga] = useState("All")
  const [selectedFacility, setSelectedFacility] = useState<any>(facilitiesData[0])
  const [mapLoaded, setMapLoaded] = useState(false)
  
  // Geolocation states
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null)
  const [locatingUser, setLocatingUser] = useState(false)
  const [routingActive, setRoutingActive] = useState(false)
  const [routingDirections, setRoutingDirections] = useState<string[]>([])

  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const markersRef = useRef<any[]>([])
  const routingControlRef = useRef<any>(null)
  const userMarkerRef = useRef<any>(null)

  // Filter facilities based on search & LGA
  const filteredFacilities = facilitiesData.filter((facility) => {
    const matchesSearch =
      facility.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      facility.address.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLga = selectedLga === "All" || facility.lga === selectedLga
    return matchesSearch && matchesLga
  })

  // Dynamic Leaflet Loading to prevent SSR issue in Next.js
  useEffect(() => {
    if (typeof window === "undefined") return

    let L: any
    const initializeMap = async () => {
      // Import Leaflet dynamically
      const Leaflet = await import("leaflet")
      import("leaflet/dist/leaflet.css")
      L = Leaflet.default

      // Fix marker icon issue in Leaflet
      delete (L.Icon.Default.prototype as any)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
      })

      if (mapContainerRef.current && !mapInstanceRef.current) {
        // Initial center Gombe coordinates (approx center of Gombe city)
        const map = L.map(mapContainerRef.current).setView([10.2883, 11.1790], 12)
        
        // Define Street view (highly detailed standard map style with green terrain and colorful roads) and Satellite view layers
        const streetLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19
        }).addTo(map)

        const satelliteLayer = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
          attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
          maxZoom: 19
        })

        const baseMaps = {
          "Detailed Street Map": streetLayer,
          "Satellite View": satelliteLayer
        }

        L.control.layers(baseMaps).addTo(map)

        mapInstanceRef.current = map
        setMapLoaded(true)
      }
    }

    initializeMap()

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  // Update Markers when filter or loading state changes
  useEffect(() => {
    if (!mapLoaded || !mapInstanceRef.current) return

    const L = (window as any).L || require("leaflet")
    const map = mapInstanceRef.current

    // Clear old markers
    markersRef.current.forEach((marker) => marker.remove())
    markersRef.current = []

    // Add new markers
    filteredFacilities.forEach((facility) => {
      const marker = L.marker([facility.lat, facility.lng])
        .addTo(map)
        .bindPopup(
          `<div class="p-2.5">
            <h4 class="font-bold text-[15px] text-[#061F3A] mb-1">${facility.name}</h4>
            <p class="text-xs text-gray-600 mb-1.5">${facility.address}</p>
            <div class="flex flex-wrap gap-1 mt-2">
              <span class="px-2 py-0.5 bg-rose-50 text-rose-600 rounded text-[10px] font-bold">ART Service</span>
              <button onclick="window.requestFacilityRoute(${facility.lat}, ${facility.lng})" class="px-2 py-0.5 bg-blue-600 text-white rounded text-[10px] font-bold hover:bg-blue-700 transition-colors inline-flex items-center gap-1 cursor-pointer">Find Route Here</button>
            </div>
           </div>`
        )

      marker.on("click", () => {
        setSelectedFacility(facility)
      })

      markersRef.current.push(marker)
    })

    // Expose routing function globally to connect leaflet popup clicks
    if (typeof window !== "undefined") {
      (window as any).requestFacilityRoute = (lat: number, lng: number) => {
        calculateRoute(lat, lng)
      }
    }

    // Adjust map view to fit all markers if any exist upon first load, but don't jump/override zoom if the user is already looking at routes
    if (markersRef.current.length > 0 && !routingActive && !selectedFacility) {
      const group = new L.featureGroup(markersRef.current)
      map.fitBounds(group.getBounds().pad(0.1))
    }
  }, [filteredFacilities, mapLoaded, selectedFacility, routingActive])

  // Locate the user using browser geolocation
  const locateUser = () => {
    if (typeof window === "undefined" || !navigator.geolocation) {
      alert("Geolocation is not supported by your browser.")
      return
    }

    setLocatingUser(true)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        
        // Gombe bounding validation
        const isWithinGombe = latitude >= 9.4 && latitude <= 11.4 && longitude >= 10.4 && longitude <= 11.9
        
        if (!isWithinGombe) {
          alert("Your detected location is outside Gombe State bounds. Resetting default user pin to Central Gombe to show local routing.")
          setUserLocation({ lat: 10.2883, lng: 11.1790 })
          setLocatingUser(false)
          
          const L = (window as any).L || require("leaflet")
          const map = mapInstanceRef.current
          if (map) {
            if (userMarkerRef.current) userMarkerRef.current.remove()
            const userIcon = L.divIcon({
              className: "user-loc-dot",
              html: `<div class="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>`,
              iconSize: [16, 16],
            })
            userMarkerRef.current = L.marker([10.2883, 11.1790], { icon: userIcon })
              .addTo(map)
              .bindPopup("<div class='p-1 font-semibold text-xs text-blue-600'>Gombe Center Point</div>")
              .openPopup()
            map.setView([10.2883, 11.1790], 11)
          }
          return
        }

        setUserLocation({ lat: latitude, lng: longitude })
        setLocatingUser(false)

        const L = (window as any).L || require("leaflet")
        const map = mapInstanceRef.current

        if (map) {
          // Remove old user marker
          if (userMarkerRef.current) {
            userMarkerRef.current.remove()
          }

          // Create a blue dot marker representing the user
          const userIcon = L.divIcon({
            className: "user-loc-dot",
            html: `<div class="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>`,
            iconSize: [16, 16],
          })

          userMarkerRef.current = L.marker([latitude, longitude], { icon: userIcon })
            .addTo(map)
            .bindPopup("<div class='p-1 font-semibold text-xs text-blue-600'>Your Current Location</div>")
            .openPopup()

          map.setView([latitude, longitude], 13)
        }
      },
      (error) => {
        setLocatingUser(false)
        console.error("Geolocation error:", error)
        alert("Unable to retrieve your location. Please check your browser permission settings.")
      },
      { enableHighAccuracy: true, timeout: 8000 }
    )
  }

  // Calculate inline route using Leaflet Routing Machine
  const calculateRoute = async (destLat: number, destLng: number) => {
    // Check and restrict starting coordinates to Gombe State region
    const isWithinGombe = (lat: number, lng: number) => {
      // Gombe state bounding coordinates: Latitude [9.4, 11.4], Longitude [10.4, 11.9]
      return lat >= 9.4 && lat <= 11.4 && lng >= 10.4 && lng <= 11.9
    }

    if (!userLocation) {
      if (typeof window === "undefined" || !navigator.geolocation) {
        alert("Cannot locate you. Routing defaults to Gombe center coordinates.")
        runRoutingEngine(10.2883, 11.1790, destLat, destLng)
        return
      }
      setLocatingUser(true)
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const uLat = position.coords.latitude
          const uLng = position.coords.longitude
          setLocatingUser(false)

          if (!isWithinGombe(uLat, uLng)) {
            alert("Your detected location is outside Gombe State. To ensure security and local routing accuracy, the route starting point has been set to central Gombe.")
            setUserLocation({ lat: 10.2883, lng: 11.1790 })
            runRoutingEngine(10.2883, 11.1790, destLat, destLng)
          } else {
            setUserLocation({ lat: uLat, lng: uLng })
            runRoutingEngine(uLat, uLng, destLat, destLng)
          }
        },
        (err) => {
          setLocatingUser(false)
          alert("Location access denied or unavailable. Setting start point to central Gombe.")
          setUserLocation({ lat: 10.2883, lng: 11.1790 })
          runRoutingEngine(10.2883, 11.1790, destLat, destLng)
        }
      )
    } else {
      if (!isWithinGombe(userLocation.lat, userLocation.lng)) {
        runRoutingEngine(10.2883, 11.1790, destLat, destLng)
      } else {
        runRoutingEngine(userLocation.lat, userLocation.lng, destLat, destLng)
      }
    }
  }

  const runRoutingEngine = async (startLat: number, startLng: number, destLat: number, destLng: number) => {
    const L = (window as any).L || require("leaflet")
    // Dynamically import Leaflet Routing Machine
    await import("leaflet-routing-machine")

    const map = mapInstanceRef.current
    if (!map) return

    // Remove any existing route lines
    if (routingControlRef.current) {
      map.removeControl(routingControlRef.current)
      routingControlRef.current = null
    }

    setRoutingActive(true)

    // Setup Routing Machine instance
    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(startLat, startLng),
        L.latLng(destLat, destLng)
      ],
      routeWhileDragging: false,
      addWaypoints: false,
      fitSelectedRoutes: true,
      show: false, // hide default routing panel overlay
      createMarker: (i: number, waypoint: any, n: number) => {
        // Render professional start/end pin icons instead of plain dots
        const isStart = i === 0
        const markerColor = isStart ? "#3B82F6" : "#E11D48"
        const labelText = isStart 
          ? (userLocation?.lat === 10.2883 && userLocation?.lng === 11.1790 ? "Gombe Center Point (Start)" : "Your Location (Start)")
          : `${selectedFacility?.name || "Hospital Destination"}`

        const iconHtml = `<div class="flex flex-col items-center">
          <div class="w-8 h-8 rounded-full bg-white shadow-lg border-2 flex items-center justify-center" style="border-color: ${markerColor}">
            <div class="w-4.5 h-4.5 rounded-full" style="background-color: ${markerColor}"></div>
          </div>
          <div class="w-1.5 h-3 shadow-md" style="background-color: ${markerColor}; clip-path: polygon(50% 100%, 0 0, 100% 0);"></div>
        </div>`
        
        return L.marker(waypoint.latLng, {
          icon: L.divIcon({
            className: 'custom-routing-pin',
            html: iconHtml,
            iconSize: [32, 42],
            iconAnchor: [16, 42]
          })
        }).bindPopup(`<div class="p-1 text-center font-bold text-xs text-[var(--dark-text)]">${labelText}</div>`).openPopup()
      },
      lineOptions: {
        styles: [
          { color: "#1E3A8A", weight: 9, opacity: 0.4 }, // Thick semi-transparent outer glow path
          { color: "#3B82F6", weight: 6, opacity: 0.9 }, // Main blue navigation route line
          { color: "#93C5FD", weight: 2, opacity: 0.95 } // Light blue center stripe highlights
        ]
      }
    }).addTo(map)

    // Handle routing server connection failures gracefully
    routingControl.on("routingerror", (err: any) => {
      console.warn("Routing engine server failed or timed out. Falling back to direct path representation.", err)
      
      // Fallback: draw a straight path line between points
      const fallbackLine = L.polyline([
        [startLat, startLng],
        [destLat, destLng]
      ], {
        color: "#3B82F6",
        weight: 5,
        dashArray: "10, 10",
        opacity: 0.8
      }).addTo(map)

      // Calculate straight line distance (Haversine formula approximation)
      const R = 6371 // Radius of Earth in km
      const dLat = (destLat - startLat) * Math.PI / 180
      const dLng = (destLng - startLng) * Math.PI / 180
      const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(startLat * Math.PI / 180) * Math.cos(destLat * Math.PI / 180) *
                Math.sin(dLng/2) * Math.sin(dLng/2)
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
      const distanceText = (R * c).toFixed(1) + " km (direct distance)"

      setRoutingDirections([
        `Total Distance: ${distanceText}`,
        `Estimated Travel Time: Route calculations server is currently offline. Direct path displayed.`,
        "Follow local road pathways towards the destination coordinates shown on the map indicator."
      ])

      // Store fallback line in control ref so it can be cleared safely
      routingControlRef.current = {
        remove: () => {
          try {
            fallbackLine.remove()
            map.removeControl(routingControl)
          } catch (e) {
            console.warn("Error during fallback routing control removal:", e)
          }
        }
      }
    })

    routingControl.on("routesfound", (e: any) => {
      const routes = e.routes
      const summary = routes[0].summary
      const instructions = routes[0].instructions.map((inst: any) => inst.text)
      
      const distanceText = (summary.totalDistance / 1000).toFixed(1) + " km"
      const durationText = Math.round(summary.totalTime / 60) + " mins"

      setRoutingDirections([
        `Total Distance: ${distanceText}`,
        `Estimated Travel Time: ${durationText}`,
        ...instructions
      ])
    })

    routingControlRef.current = routingControl
  }

  const clearRoute = () => {
    const map = mapInstanceRef.current
    if (map && routingControlRef.current) {
      try {
        if (typeof routingControlRef.current.remove === 'function') {
          routingControlRef.current.remove()
        } else {
          map.removeControl(routingControlRef.current)
        }
      } catch (e) {
        console.warn("Routing control removal handled safely:", e)
      }
      routingControlRef.current = null
    }
    setRoutingActive(false)
    setRoutingDirections([])
  }

  // Center map on selected facility (zoom level 16 closer to the ground showing streets clearly)
  const handleSelectFacility = (facility: any) => {
    setSelectedFacility(facility)
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setView([facility.lat, facility.lng], 16)
      // Find matching marker and open its popup
      const index = filteredFacilities.findIndex((f) => f.id === facility.id)
      if (index !== -1 && markersRef.current[index]) {
        markersRef.current[index].openPopup()
      }
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--gray-light)] pb-24">
        <PageHeader
          label="HIV/AIDS Resources"
          title={<>HIV Treatment <span className="text-gradient">Facilities Map</span></>}
          description="Find antiretroviral therapy (ART), counseling, and testing centres supported by GomSACA across Gombe State."
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          {/* Info Notice Banner */}
          <div className="mb-8 flex items-start gap-4 p-5 rounded-2xl bg-[#0B3C6D]/5 border border-[#0B3C6D]/10 text-[#0B3C6D]">
            <AlertCircle className="w-6 h-6 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-base mb-1">Confidential & Fully Supported Care</h3>
              <p className="text-sm leading-relaxed opacity-90">
                All listed facilities provide antiretroviral therapy (ART), mother-to-child transmission prevention (PMTCT), and counseling completely free of charge. Services are strictly confidential.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Search and Filters List (Col span 5) */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              {/* User Location Trigger Controls */}
              <div className="bg-white p-6 rounded-3xl border border-[var(--border)] shadow-sm space-y-4">
                <h3 className="font-bold text-[var(--dark-text)] text-sm sm:text-base mb-2">Location & Navigation Services</h3>
                <div className="flex flex-wrap gap-2.5">
                  <button
                    onClick={locateUser}
                    disabled={locatingUser}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[var(--primary)] hover:bg-[#061F3A] text-white font-semibold rounded-xl text-sm transition-colors cursor-pointer disabled:opacity-50"
                  >
                    {locatingUser ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Compass className="w-4 h-4" />}
                    <span>{userLocation ? "Location Verified" : "Pin My Location"}</span>
                  </button>
                  {routingActive && (
                    <button
                      onClick={clearRoute}
                      className="flex-none px-4 py-3 border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold rounded-xl text-sm transition-colors cursor-pointer"
                    >
                      Clear Route
                    </button>
                  )}
                </div>
                {userLocation && (
                  <p className="text-xs text-emerald-600 font-medium flex items-center gap-1">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full inline-block animate-pulse"></span>
                    Coordinates identified. Select a hospital and tap "Find Route Here" or "Get Inline Directions".
                  </p>
                )}
              </div>

              <div className="bg-white p-6 rounded-3xl border border-[var(--border)] shadow-sm space-y-4">
                <div className="relative">
                  <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by facility name or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-2xl border border-[var(--border)] focus:ring-2 focus:ring-[var(--primary)] outline-none bg-[var(--gray-light)] transition-all text-sm"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="w-full">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Filter by LGA</label>
                    <div className="relative">
                      <select
                        value={selectedLga}
                        onChange={(e) => setSelectedLga(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-[var(--border)] outline-none bg-[var(--gray-light)] text-sm focus:ring-2 focus:ring-[var(--primary)]"
                      >
                        {LGAS.map((lga) => (
                          <option key={lga} value={lga}>
                            {lga} {lga !== "All" ? "LGA" : ""}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Facilities List View */}
              <div className="bg-white rounded-3xl border border-[var(--border)] shadow-sm overflow-hidden flex flex-col max-h-[500px] lg:max-h-[600px]">
                <div className="p-5 border-b border-[var(--border-light)] bg-gray-50 flex items-center justify-between">
                  <span className="font-bold text-[var(--dark-text)]">
                    Facilities ({filteredFacilities.length})
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-[var(--primary-bg)] text-[var(--primary)] rounded-full">
                    Gombe State
                  </span>
                </div>

                <div className="overflow-y-auto divide-y divide-[var(--border-light)] flex-1">
                  {filteredFacilities.length === 0 ? (
                    <div className="p-8 text-center text-gray-400">
                      No facilities found matching criteria.
                    </div>
                  ) : (
                    filteredFacilities.map((facility) => (
                      <button
                        key={facility.id}
                        onClick={() => handleSelectFacility(facility)}
                        className={`w-full text-left p-5 transition-all flex items-start gap-4 hover:bg-[var(--primary-bg)]/30 ${
                          selectedFacility?.id === facility.id ? "bg-[var(--primary-bg)] border-l-4 border-[var(--primary)]" : ""
                        }`}
                      >
                        <div className="p-2.5 bg-rose-50 text-rose-600 rounded-xl mt-1 shrink-0">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-[var(--dark-text)] leading-tight mb-1 text-sm sm:text-base">
                            {facility.name}
                          </h4>
                          <p className="text-xs text-[var(--muted)] mb-2.5">{facility.address}</p>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100">
                              LGA: {facility.lga}
                            </span>
                            {facility.artAvailable && (
                              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-rose-50 text-rose-700 rounded-full border border-rose-100">
                                ART Centre
                              </span>
                            )}
                          </div>
                        </div>
                      </button>
                    ))
                  )}
                </div>
              </div>
            </div>

             {/* Map Canvas & Selected Facility Profile Details (Col span 7) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Map Title Header Indicator */}
              <div className="flex items-center justify-between bg-white px-6 py-4 rounded-2xl border border-[var(--border)] shadow-sm">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500 animate-pulse"></span>
                  <h3 className="font-extrabold text-[var(--dark-text)] text-sm sm:text-base tracking-tight uppercase">
                    Interactive Routing Map & Directions
                  </h3>
                </div>
                <span className="text-xs font-bold text-[var(--primary)] bg-[var(--primary-bg)] px-3 py-1 rounded-full uppercase tracking-wider">
                  Live Navigation
                </span>
              </div>

              {/* Map Canvas */}
              <div className="bg-gradient-to-br from-[#061F3A] to-[#0B3C6D] p-3 rounded-[32px] border-4 border-[#0B3C6D] shadow-xl overflow-hidden relative">
                <div
                  ref={mapContainerRef}
                  className="w-full h-[400px] lg:h-[480px] rounded-2xl overflow-hidden z-10"
                  style={{ minHeight: "350px" }}
                >
                  {!mapLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500 font-medium">
                      Loading interactive map...
                    </div>
                  )}
                </div>
              </div>

              {/* Turn-by-Turn Navigation Routing Steps (Inline) */}
              {routingDirections.length > 0 && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-[var(--primary)] shadow-lg animate-in">
                  <h3 className="text-lg font-bold text-[var(--primary)] flex items-center gap-2 mb-6">
                    <Compass className="w-6 h-6 animate-pulse" />
                    Inline Navigation Route Information
                  </h3>

                  {/* High-visibility Route Details Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Starting From</p>
                      <p className="text-sm font-bold text-slate-700">
                        {userLocation?.lat === 10.2883 && userLocation?.lng === 11.1790 
                          ? "Gombe Center Point (Fallback)" 
                          : "Your Verified GPS Location"}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100/50">
                      <p className="text-xs font-bold text-rose-500 uppercase tracking-wider mb-1">Heading To</p>
                      <p className="text-sm font-bold text-rose-900">{selectedFacility?.name || "Selected Hospital"}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-center">
                      <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Total Distance</p>
                      <p className="text-xl sm:text-2xl font-extrabold text-emerald-800">{routingDirections[0].replace("Total Distance: ", "")}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-100 text-center">
                      <p className="text-xs font-bold text-cyan-600 uppercase tracking-wider mb-1">Estimated Time</p>
                      <p className="text-xl sm:text-2xl font-extrabold text-cyan-800">{routingDirections[1].replace("Estimated Travel Time: ", "")}</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-6">
                    <h4 className="font-bold text-slate-700 text-sm mb-3">Step-by-Step Directions</h4>
                    <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-gray-600">
                      {routingDirections.slice(2).map((step, idx) => (
                        <li key={idx} className="leading-relaxed pl-1">{step}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              )}

              {/* Selected Facility Profile details */}
              {selectedFacility && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[var(--border)] shadow-sm">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-bold uppercase tracking-wide mb-4">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Facility
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--dark-text)] mb-2">
                    {selectedFacility.name}
                  </h3>
                  <p className="text-[var(--body-text)] text-sm sm:text-base flex items-start gap-2 mb-6">
                    <MapPin className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                    <span>{selectedFacility.address}, {selectedFacility.lga} LGA, Gombe State</span>
                  </p>

                  <div className="border-t border-[var(--border-light)] pt-6">
                    <h4 className="font-bold text-gray-600 uppercase text-xs tracking-wider mb-4">Services Provided</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                        <div>
                          <p className="text-xs font-bold text-gray-500">HIV Testing</p>
                          <p className="text-sm font-semibold text-[var(--dark-text)]">Free & Confid.</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0" />
                        <div>
                          <p className="text-xs font-bold text-gray-500">ART Therapy</p>
                          <p className="text-sm font-semibold text-[var(--dark-text)]">Available</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                        <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 shrink-0" />
                        <div>
                          <p className="text-xs font-bold text-gray-500">PMTCT Care</p>
                          <p className="text-sm font-semibold text-[var(--dark-text)]">Available</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 pt-6 border-t border-[var(--border-light)]">
                    <a
                      href={`tel:${selectedFacility.phone}`}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#0B3C6D] hover:bg-[#061F3A] text-white font-semibold py-3 px-6 rounded-xl transition-colors text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Contact Hotline</span>
                    </a>
                    <button
                      onClick={() => calculateRoute(selectedFacility.lat, selectedFacility.lng)}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors text-sm cursor-pointer"
                    >
                      <Compass className="w-4 h-4" />
                      <span>Get Inline Directions</span>
                    </button>
                    <span className="text-xs text-gray-400">
                      Confidential services. Routes calculated inline.
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
