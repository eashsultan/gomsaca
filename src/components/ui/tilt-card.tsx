"use client"

import { useRef, useState, useCallback } from "react"

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  maxTilt?: number
  scale?: number
}

export function TiltCard({ children, className, maxTilt = 6, scale = 1.02 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState({})

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const tiltX = ((y - centerY) / centerY) * -maxTilt
      const tiltY = ((x - centerX) / centerX) * maxTilt
      setStyle({
        transform: `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${scale})`,
        transition: "transform 0.1s ease-out",
      })
    },
    [maxTilt, scale],
  )

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)",
      transition: "transform 0.5s ease-out",
    })
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}
