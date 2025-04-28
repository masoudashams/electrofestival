"use client"

import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

export function ScrollButton() {
  // State for animation
  const [isVisible, setIsVisible] = useState(false)

  // Animate in on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Function to smoothly scroll down one viewport height
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <button
      onClick={scrollToContent}
      
      className={`group absolute bottom-12 left-12 flex  cursor-pointer items-center gap-2 text-white hover:text-sky-200 transition-all duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      } scroll-button`}
      style={{
        writingMode: "vertical-rl",
        textOrientation: "mixed",
        transform: isVisible ? "rotate(180deg)" : "rotate(180deg) translateY(20px)",
        transitionProperty: "opacity, transform",
        transitionDuration: "0.5s",
      }}
    >
      
      <ChevronDown className="h-5 w-5 mt-2  rotate-x-180" />
      <span className="tracking-wider font-light">Scroll down</span>
    </button>
  )
}
