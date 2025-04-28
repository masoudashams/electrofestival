"use client"

import { useEffect, useState } from "react"
import { Navbar } from "./Navbar"
import { ScrollButton } from "./ScrollButton"
import { InfoBox } from "./InfoBox"

export function Hero() {
  // State for animation
  const [isLoaded, setIsLoaded] = useState(false)

  // Animate in on component mount
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background image with overlay */}
      <div
        className={`absolute inset-0 bg-contain bg-center transition-transform duration-1000 hero-background ${
          isLoaded ? "scale-100" : "scale-110"
        }`}
        style={{
          backgroundImage: "url('/images/hero_bg.jpg')",
          transform: isLoaded ? "scale(1)" : "scale(1.1)",
          transitionProperty: "transform",
          transitionDuration: "1s",
        }}
      />

      {/* Color overlay */}
      <div className="absolute inset-0 hero-overlay" style={{ backgroundColor: "rgba(3, 25, 36, 0.7)" }} />

      {/* Navbar at the top */}
      <Navbar />

      {/* Hero content - text on the right side */}
      <div className="relative flex h-full items-center justify-end px-6 md:px-12">
        <div
          className={`max-w-lg text-right transition-all duration-1000 hero-content ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateX(0)" : "translateX(80px)",
            transitionProperty: "opacity, transform",
            transitionDuration: "1s",
          }}
        >
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            2024 <br/> ElECTRO <br/> <span style={{ color: "#a0d8ef" }}>MUSIC</span> <br /> FESTIVAL
          </h1>
        
       
        </div>
      </div>

      {/* Vertical scroll button on the bottom left */}
      <ScrollButton />

      {/* Info box with video beside the scroll button */}
      <InfoBox />
    </div>
  )
}
