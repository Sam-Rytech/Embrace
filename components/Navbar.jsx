'use client'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import image from 'next/image'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
        <Image href="/Logo.png"></Image>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a href="#how-it-works" className="hover:text-blue-600">
            How it Works
          </a>
          <a href="#our-work" className="hover:text-blue-600">
            Our Work
          </a>
          <a href="#pricing" className="hover:text-blue-600">
            Pricing
          </a>
          <a href="#about" className="hover:text-blue-600">
            About Us
          </a>
          <a
            href="#contact"
            className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
          >
            Book a Call
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col p-4 space-y-4">
            <a href="#how-it-works" className="hover:text-blue-600">
              How it Works
            </a>
            <a href="#our-work" className="hover:text-blue-600">
              Our Work
            </a>
            <a href="#pricing" className="hover:text-blue-600">
              Pricing
            </a>
            <a href="#about" className="hover:text-blue-600">
              About Us
            </a>
            <a
              href="#contact"
              className="bg-blue-600 text-white text-center px-4 py-2 rounded-full hover:bg-blue-700"
            >
              Book a Call
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
