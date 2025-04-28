"use client"
import Link from "next/link"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navbar() {
  // State to control mobile menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // State for navbar animation on scroll
  const [scrolled, setScrolled] = useState(false)



   const menuItems = ["Linup", "News", "Artists", "Explore"]

  return (
    <nav
      className={"absolute top-0 left-0 right-0 z-50 bg-[#0a344c]/80 flex items-center justify-between px-6 py-4 md:px-12 transition-all duration-300"}
      
    >
 
      <div className="flex items-center gap-6">
        <Link href="/" className="text-2xl font-bold text-white relative overflow-hidden group">
          <span className="relative z-10">ELECTROFESTIVAL</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <div className="hidden md:flex md:gap-4">
          <button  className="border-[#78FF5E] border-2 rounded-full px-4 py-1 text-white hover:bg-white/20 transition-all duration-300">
           3-8 july
          </button>
          <button className="border-[#78FF5E] border-2 rounded-full p-2 text-white hover:bg-white/20 transition-all duration-300">
            ZAMARDI,HUNGARY
          </button>
        </div>
      </div>

      
      <div className="flex items-center gap-6">
        <div className="hidden md:flex md:items-center md:gap-6">
        <button className="hidden md:inline-flex bg-[#78FF5E] px-4 rounded-full py-2 text-[#205879] hover:bg-sky-200 transition-all duration-300">
          Tickets
        </button>
          {menuItems.map((item, index) => (
            <Link key={item} href="#" className="text-white hover:text-sky-200 transition-colors relative group">
              <span>{item}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
    

    
        <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <DropdownMenuTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px] bg-[#205879] text-white">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <DropdownMenuItem key={item} className="focus:bg-white/20">
                <Link href="#" className="w-full">
                  {item}
                </Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuItem className="focus:bg-white/20">
              <Button className="w-full bg-white text-[#205879] hover:bg-sky-200">Get Started</Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}
