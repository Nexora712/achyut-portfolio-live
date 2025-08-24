'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function LaunchSpecialBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-red-500 via-pink-600 to-red-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <div className="bg-yellow-400 text-red-800 px-6 py-2 rounded-full font-bold text-sm mb-6 shadow-lg">
              🔥 LIMITED TIME LAUNCH SPECIAL 🔥
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold mb-4"
          >
            Professional Portfolio Websites
          </motion.h2>

          {/* Price Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <div className="flex items-center justify-center gap-4 mb-2">
              <span className="text-7xl lg:text-8xl font-extrabold text-yellow-300">₹499</span>
              <div className="text-left">
                <span className="text-2xl lg:text-3xl line-through opacity-70">₹9,999</span>
                <div className="bg-green-400 text-green-900 px-3 py-1 rounded-full text-sm font-bold">
                  SAVE ₹9,500!
                </div>
              </div>
            </div>
            <p className="text-xl lg:text-2xl opacity-90">
              That's <span className="font-bold text-yellow-300">95% OFF</span> the regular price!
            </p>
          </motion.div>

          {/* Features Quick List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-6 mb-8 text-left"
          >
            {[
              { icon: '⚡', title: '4-7 Days Delivery', desc: 'Lightning fast turnaround' },
              { icon: '✨', title: 'Modern Design', desc: 'Responsive & animated' },
              { icon: '🎯', title: 'Full Ownership', desc: 'Complete source code' }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl mb-2">{feature.icon}</div>
                <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                <p className="text-sm opacity-90">{feature.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* Urgency Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <p className="text-yellow-200 font-semibold text-lg mb-2">
              ⚠️ Only 8 spots remaining at this price!
            </p>
            <p className="text-white/80">
              After this, price increases to ₹2,999, then ₹9,999
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link
              href="/services"
              className="inline-block bg-yellow-400 text-red-700 px-12 py-6 rounded-full font-bold text-xl hover:bg-yellow-300 transition-all duration-300 hover:scale-110 shadow-2xl"
            >
              🚀 Claim My ₹499 Portfolio Now!
            </Link>
            <p className="text-sm text-white/70 mt-4">
              💳 No hidden fees • 🔒 100% secure • ⚡ 7-day money-back guarantee
            </p>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <p className="text-white/80 text-sm mb-4">
              🎯 <strong>Why this crazy price?</strong> I'm launching my freelance career and need 10 portfolio projects for testimonials!
            </p>
            <div className="flex justify-center items-center gap-8 text-sm">
              <div>✅ Same quality as ₹9,999 service</div>
              <div>✅ Full source code ownership</div>
              <div>✅ 30-day support included</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
