'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

const stats = [
  { number: '12+', label: 'Projects Completed' },
  { number: '3+', label: 'Startups (MVP Stage)' },
  { number: '50K+', label: 'YouTube Views' },
]

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (titleRef.current && statsRef.current) {
      const tl = gsap.timeline()

      tl.fromTo(
        titleRef.current.children || [],
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }
      )
      .fromTo(
        statsRef.current.children || [],
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out' },
        '-=0.5'
      )
    }
  }, [])

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center pt-20 lg:pt-0">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-12">
            {/* Main Title */}
            <div ref={titleRef} className="space-y-4">
              <motion.h1 
                className="text-6xl lg:text-7xl xl:text-8xl font-bold text-primary leading-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <span className="block overflow-hidden">
                  <span className="inline-block">Hello</span>
                </span>
              </motion.h1>
              
              <div className="space-y-2">
                <p className="text-xl lg:text-2xl text-secondary font-medium">
                  It&apos;s <span className="text-primary font-semibold">Achyut Pandey</span>,
                </p>
                <p className="text-xl lg:text-2xl text-secondary font-medium">
                  an <span className="text-primary font-semibold">AI-Powered Web Developer</span>
                </p>
                <p className="text-xl lg:text-2xl text-secondary font-medium">
                  & <span className="text-primary font-semibold">UI/UX Designer</span>
                </p>
              </div>
              
              <div className="max-w-2xl">
                <p className="text-lg lg:text-xl text-secondary leading-relaxed">
                  Building modern web apps, SaaS MVPs, and AI-powered solutions with design precision and scalable code.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-3 gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center lg:text-left"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl lg:text-4xl font-bold text-primary">
                    {stat.number}
                  </div>
                  <div className="text-sm lg:text-base text-secondary font-medium mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a href="/portfolio" className="btn-primary">
                View My Work
              </a>
              <a
                href="/resume/Achyut_Pandey_Resume.pdf"
                className="btn-secondary"
                download="/resume/Achyut_Pandey_Resume.pdf"
                target="_blank"
              >
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div 
            className="relative order-first lg:order-last"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              {/* Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-tertiary to-white rounded-full transform rotate-6" />
              
              {/* Profile Image */}
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-full aspect-square flex items-center justify-center text-6xl lg:text-8xl font-bold text-secondary">
                <img
                  src="/images/hero/profile.jpg"
                  alt="Profile"
                  className="object-cover w-full h-full rounded-full"
                  style={{maxWidth: '100%', maxHeight: '100%'}}
                  onError={() => console.error("Failed to load profile image: /images/hero/profile.jpg")}
                  onLoad={() => console.log("Profile image loaded successfully: /images/hero/profile.jpg")}
                />
              </div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-primary text-white p-4 rounded-full text-sm font-medium"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                ✨ AI
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white border border-tertiary p-4 rounded-full text-sm font-medium shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                🎨 Design
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
