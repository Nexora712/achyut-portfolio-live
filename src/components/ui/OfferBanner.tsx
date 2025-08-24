'use client'

import { useState } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

export default function OfferBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-red-500 to-pink-600 text-white py-3 px-4 z-50 shadow-lg">
      <div className="container-custom flex items-center justify-between">
        <div className="flex-1 text-center">
          <p className="font-bold text-sm sm:text-base">
            🔥 <span className="text-yellow-300">LAUNCH SPECIAL:</span> Professional Portfolio Website for just <span className="text-2xl font-extrabold text-yellow-300">₹499</span>! 
            <span className="text-yellow-200 ml-2">(Only 8 spots left!)</span>
          </p>
          <p className="text-xs sm:text-sm opacity-90 mt-1">
            Regular Price: ₹9,999 | You Save: ₹9,500 | Limited Time Offer
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <Link 
            href="/services" 
            className="bg-yellow-400 text-red-700 px-4 py-2 rounded-full font-bold text-sm hover:bg-yellow-300 transition-all duration-200 hover:scale-105 shadow-md"
          >
            Grab Now →
          </Link>
          
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-yellow-200 transition-colors duration-200 p-1"
            aria-label="Close offer banner"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
