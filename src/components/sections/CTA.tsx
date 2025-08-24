'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 lg:p-16 text-center text-white"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Build Something Amazing?
          </h2>
          
          <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let&apos;s turn your ideas into AI-powered solutions that drive real results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <Link
    href="/contact"
    className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-200 hover:scale-105"
  >
    Start Your Project
  </Link>
  <Link
    href="/portfolio"
    className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-200"
  >
    View My Work
  </Link>
</div>
        </motion.div>
      </div>
    </section>
  )
}
