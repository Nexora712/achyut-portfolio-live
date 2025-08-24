'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface ScarcityBarProps {
  totalSpots?: number
  filledSpots?: number
}

export default function ScarcityBar({ totalSpots = 12, filledSpots = 4 }: ScarcityBarProps) {
  const [currentSpots, setCurrentSpots] = useState(filledSpots)
  
  const progress = (currentSpots / totalSpots) * 100
  const spotsRemaining = totalSpots - currentSpots
  
  // Determine current tier and pricing
  const getCurrentTier = () => {
    if (currentSpots <= 4) return { tier: 1, name: "Super Early Bird", discount: "33%" }
    if (currentSpots <= 8) return { tier: 2, name: "Early Bird", discount: "17%" }
    return { tier: 3, name: "Standard", discount: "0%" }
  }
  
  const getNextTierInfo = () => {
    if (currentSpots <= 4) return { price: "$4,999", spotsLeft: 4 - (currentSpots - 0) }
    if (currentSpots <= 8) return { price: "$5,999", spotsLeft: 8 - (currentSpots - 4) }
    return { price: "Full Price", spotsLeft: 0 }
  }
  
  const currentTier = getCurrentTier()
  const nextTier = getNextTierInfo()
  
  // Fake social proof notifications
  const [showNotification, setShowNotification] = useState(false)
  const notifications = [
    "🎉 Sarah from TechFlow just secured her spot!",
    "⚡ Michael from DevScale booked AI Integration!",
    "🚀 Emily from EduTech reserved her SaaS MVP!"
  ]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 3000)
    }, 8000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      {/* Social Proof Notification */}
      {showNotification && (
        <motion.div
          initial={{ opacity: 0, y: -20, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: -20, x: '-50%' }}
          className="absolute -top-16 left-1/2 transform bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg z-10"
        >
          {notifications[Math.floor(Math.random() * notifications.length)]}
        </motion.div>
      )}

      <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-6 mb-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔥</span>
            <div>
              <h3 className="font-bold text-red-700">Launch Week Special - Limited Time!</h3>
              <p className="text-sm text-red-600">Current: {currentTier.name} Pricing ({currentTier.discount} OFF)</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-red-700">{spotsRemaining}</p>
            <p className="text-sm text-red-600">spots left</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative mb-4">
          <div className="w-full bg-red-200 rounded-full h-4">
            <motion.div 
              className="bg-gradient-to-r from-red-500 to-orange-500 h-4 rounded-full relative overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </motion.div>
          </div>
          
          {/* Milestone markers */}
          <div className="absolute top-0 left-1/3 w-0.5 h-4 bg-white"></div>
          <div className="absolute top-0 left-2/3 w-0.5 h-4 bg-white"></div>
          
          {/* Labels */}
          <div className="flex justify-between text-xs text-red-600 mt-1">
            <span>Super Early</span>
            <span>Early Bird</span>
            <span>Standard</span>
          </div>
        </div>

        {/* Urgency Message */}
        {nextTier.spotsLeft > 0 && (
          <div className="bg-red-100 border border-red-300 rounded-lg p-3">
            <p className="text-red-800 font-medium text-center">
              ⚡ <strong>Price Alert:</strong> Only {nextTier.spotsLeft} more bookings until prices increase to {nextTier.price}!
            </p>
          </div>
        )}

        {/* Bonus Features */}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
            ✅ Free Strategy Session ($300 value)
          </span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
            ✅ 6-Month Priority Support
          </span>
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
            ✅ Portfolio Case Study Feature
          </span>
        </div>
      </div>
    </div>
  )
}
