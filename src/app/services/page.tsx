'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import ScarcityBar from '@/components/ui/ScarcityBar'
import Link from 'next/link'

// Launch Special Service
const launchSpecial = {
  id: 'launch-special',
  name: '🚀 Launch Special - Portfolio Website',
  tagline: 'Limited Time',
  description: 'Professional portfolio website that showcases your work and attracts clients - delivered in 4-7 days!',
  originalPrice: { usd: 499, inr: 9999 },
  currentPrice: { usd: 59, inr: 499 },
  savings: { usd: 440, inr: 9500 },
  timeline: '4-7 days',
  ideal: 'Developers, designers, freelancers, students',
  features: [
    'Modern responsive design with animations',
    'Portfolio showcase with project filtering', 
    'About me & skills sections',
    'Contact form with email integration',
    'SEO optimization',
    'Mobile-first responsive design',
    'Free hosting setup & deployment',
    'Source code ownership',
    '30-day post-launch support',
    'Money-back guarantee'
  ],
  outcomes: [
    'Professional online presence in under a week',
    'Attract high-quality clients and opportunities', 
    'Stand out from competition with modern design',
    'Increase your perceived value and rates'
  ],
  examples: [
    'Developer: Showcase coding projects with live demos and GitHub links',
    'Designer: Display design portfolio with case studies and process',
    'Freelancer: Professional landing page that converts visitors to clients'
  ],
  guarantee: '100% Money-back guarantee if not delivered within 7 days',
  spotsLeft: 8
}

const services = [
  {
    id: 'portfolio-website',
    name: 'Portfolio Website',
    tagline: 'Personal Brand',
    description: 'Professional portfolio website that showcases your work and attracts clients in just 4-7 days',
    originalPrice: { usd: 799, inr: 15999 },
    currentPrice: { usd: 499, inr: 9999 },
    savings: { usd: 300, inr: 6000 },
    timeline: '4-7 days',
    ideal: 'Developers, designers, freelancers, students',
    features: [
      'Modern responsive design with animations',
      'Portfolio showcase with project filtering',
      'About me & skills sections',
      'Contact form with email integration',
      'Blog section (optional)',
      'SEO optimization',
      'Mobile-first responsive design',
      'Free hosting setup & deployment',
      'Source code ownership',
      '30-day post-launch support'
    ],
    outcomes: [
      'Professional online presence in under a week',
      'Attract high-quality clients and opportunities',
      'Stand out from competition with modern design',
      'Increase your perceived value and rates'
    ],
    examples: [
      'Developer: Showcase coding projects with live demos and GitHub links',
      'Designer: Display design portfolio with case studies and process',
      'Freelancer: Professional landing page that converts visitors to clients'
    ],
    guarantee: '100% Money-back guarantee if not delivered within 7 days'
  },
  {
    id: 'ai-integration',
    name: 'AI Integration Package',
    tagline: 'Smart Start',
    description: 'Transform your business with AI-powered automation that works 24/7',
    originalPrice: { usd: 2999, inr: 249999 },
    currentPrice: { usd: 1999, inr: 159999 },
    savings: { usd: 1000, inr: 90000 },
    timeline: '2-3 weeks',
    ideal: 'Small businesses, local services, consultants',
    features: [
      'Smart chatbot for customer support',
      'Automated content generation (blogs, emails, social posts)',
      'Customer inquiry auto-responses',
      'Lead qualification & scoring system',
      'Basic analytics dashboard',
      'Mobile-responsive design',
      'Free training & handover session'
    ],
    outcomes: [
      'Save 20+ hours/week on repetitive tasks',
      'Never miss a customer inquiry again',
      'Generate content 10x faster',
      'Improve response time by 90%'
    ],
    examples: [
      'Restaurant: Auto-generate menu descriptions & respond to reviews',
      'Real Estate: Property description writer & lead qualifier',
      'Consultant: Automated email responses & appointment booking'
    ]
  },
  {
    id: 'saas-mvp',
    name: 'SaaS MVP Development',
    tagline: 'Launch Ready',
    description: 'From idea to market in 6 weeks with AI-powered features that wow users',
    originalPrice: { usd: 5999, inr: 499999 },
    currentPrice: { usd: 3999, inr: 329999 },
    savings: { usd: 2000, inr: 170000 },
    timeline: '4-6 weeks',
    ideal: 'Entrepreneurs, startups, product managers',
    features: [
      'Complete web application (frontend + backend)',
      'User authentication & management',
      'AI-powered core features',
      'Payment integration (Stripe/PayPal)',
      'Admin dashboard',
      'Responsive design for all devices',
      'Basic SEO optimization',
      'Deployment & hosting setup'
    ],
    outcomes: [
      'Launch your product in weeks, not months',
      'Validate your idea with real users',
      'Start generating revenue immediately',
      'Professional-grade application'
    ],
    examples: [
      'Content creation tool like FirePost (social media management)',
      'AI writing assistant for specific industries',
      'Smart quiz/survey platform with insights'
    ]
  },
  {
    id: 'custom-platform',
    name: 'Custom AI Platform',
    tagline: 'Enterprise',
    description: 'Complex AI-driven solutions tailored to your unique business needs',
    originalPrice: { usd: 9999, inr: 849999 },
    currentPrice: { usd: 6999, inr: 579999 },
    savings: { usd: 3000, inr: 270000 },
    timeline: '8-12 weeks',
    ideal: 'Growing companies, agencies, enterprises',
    features: [
      'Multi-user platform with role management',
      'Advanced AI integrations (multiple models)',
      'Custom workflows & automation',
      'Third-party integrations (CRM, email tools)',
      'Advanced analytics & reporting',
      'API development for integrations',
      'Scalable cloud architecture',
      '3 months post-launch support'
    ],
    outcomes: [
      'Automate complex business processes',
      'Scale operations without hiring',
      'Create competitive advantages',
      'Generate new revenue streams'
    ],
    examples: [
      'Multi-tenant SaaS platform with AI features',
      'Internal workflow automation system',
      'Customer data analysis & insights platform'
    ]
  }
]

const faqs = [
  {
    question: "Is the ₹499 portfolio website offer real?",
    answer: "Absolutely! This is my launch special to build my client base quickly. You get the same professional quality as my regular ₹9,999 service, but at this introductory price. Only 10 spots available at this rate."
  },
  {
    question: "Can you really deliver a portfolio website in 4-7 days?",
    answer: "Yes! Portfolio websites are my specialty. I have optimized templates and processes that allow rapid customization while maintaining high quality. You'll see daily progress updates and can request revisions throughout."
  },
  {
    question: "What happens after the 10 launch special spots are filled?",
    answer: "The price will increase to ₹2,999 for the next 20 spots, then to regular pricing at ₹9,999. This is a genuine limited-time offer to establish my portfolio business."
  },
  {
    question: "What's the difference between USD and INR pricing?",
    answer: "USD pricing is for international clients and includes additional support for global hosting, domain setup, and international business features. INR pricing is optimized for the Indian market."
  },
  {
    question: "What if I'm not satisfied with the result?",
    answer: "I offer unlimited revisions during development and a 7-day money-back guarantee after delivery. For portfolio websites, I guarantee delivery within 7 days or your money back."
  }
]

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [currency, setCurrency] = useState<'usd' | 'inr'>('inr') // Default to INR for the special

  const formatPrice = (price: { usd: number; inr: number }) => {
    if (currency === 'usd') {
      return `$${price.usd.toLocaleString()}`
    } else {
      return `₹${price.inr.toLocaleString()}`
    }
  }

  const formatLaunchPrice = (price: { usd: number; inr: number }) => {
    if (currency === 'usd') {
      return `$${price.usd}`
    } else {
      return `₹${price.inr}`
    }
  }

  return (
    <main className="pt-20">
      {/* Launch Special Banner */}
      <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white py-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10">
          <p className="font-bold text-lg">
            🔥 INSANE LAUNCH OFFER: Professional Portfolio Website for just ₹499! 
            <span className="text-yellow-200 ml-2">Only {launchSpecial.spotsLeft} spots left!</span>
          </p>
          <p className="text-sm opacity-90">
            Regular Price: ₹9,999 | You Save: ₹9,500 | Offer ends when spots filled
          </p>
        </div>
      </div>

      {/* Launch Special Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
              🚀 Launch Week Special
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Professional portfolio websites at unbelievable prices to kickstart my freelance career
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-gradient-to-r from-red-400 to-pink-500">
            <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white p-8 text-center relative">
              <div className="absolute top-4 right-4 bg-yellow-400 text-red-900 px-4 py-2 rounded-full font-bold text-sm">
                🔥 95% OFF
              </div>
              <h3 className="text-3xl font-bold mb-2">{launchSpecial.name}</h3>
              <div className="flex justify-center items-center gap-4 mb-4">
                <span className="text-6xl font-bold">{formatLaunchPrice(launchSpecial.currentPrice)}</span>
                <div>
                  <span className="text-2xl line-through opacity-70">{formatLaunchPrice(launchSpecial.originalPrice)}</span>
                  <p className="text-yellow-300 font-medium">Save {formatLaunchPrice(launchSpecial.savings)}</p>
                </div>
              </div>
              <p className="text-lg opacity-90">{launchSpecial.timeline} delivery guaranteed</p>
              <div className="mt-4 inline-block bg-green-500 text-white px-6 py-2 rounded-full text-sm font-medium">
                ⚡ {launchSpecial.guarantee}
              </div>
            </div>

            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left Column */}
                <div className="space-y-8">
                  <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                    <h4 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                      🎯 Limited Time Offer
                    </h4>
                    <p className="text-red-600 font-medium">
                      Only <span className="text-2xl font-bold">{launchSpecial.spotsLeft}</span> spots remaining at ₹499!
                    </p>
                    <p className="text-sm text-red-500 mt-2">
                      After this, price increases to ₹2,999, then ₹9,999
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-primary mb-4">What You Get:</h4>
                    <div className="space-y-3">
                      {launchSpecial.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className="text-green-500 mt-1">✅</span>
                          <span className="text-secondary">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-4">Why This Crazy Price?</h4>
                    <div className="bg-blue-50 p-6 rounded-xl">
                      <p className="text-secondary mb-4">
                        I'm launching my freelance career and need <strong>10 portfolio projects</strong> to build my reputation. 
                        Instead of doing them for free, I'm offering them at cost price.
                      </p>
                      <p className="text-secondary font-medium">
                        You get premium quality, I get testimonials and case studies. Win-win! 🎉
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-primary mb-4">Perfect For:</h4>
                    <p className="text-secondary mb-4">{launchSpecial.ideal}</p>
                    
                    <h4 className="text-lg font-semibold text-primary mb-3">What Happens Next:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs">1</span>
                        <span>Next 10 spots: ₹999 each</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs">2</span>
                        <span>After that: ₹2,999 each</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-xs">3</span>
                        <span>Regular price: ₹9,999 each</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-16 py-6 rounded-full font-bold text-xl hover:from-red-600 hover:to-pink-700 transition-all duration-200 hover:scale-105 shadow-2xl"
                >
                  🚀 Grab This Deal Now - ₹499 Only!
                </Link>
                <p className="text-sm text-red-600 mt-4 font-medium">
                  ⚡ Hurry! Only {launchSpecial.spotsLeft} spots left at this price
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-tertiary to-white">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl lg:text-6xl font-bold text-primary mb-6"
          >
            Turn Ideas Into Profitable
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Digital Solutions</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl lg:text-2xl text-secondary mb-8 max-w-3xl mx-auto"
          >
            From lightning-fast portfolios at ₹499 to enterprise AI solutions. 
            Quality development with guaranteed delivery times.
          </motion.p>

          {/* Currency Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mb-8"
          >
            <div className="bg-white rounded-full p-1 shadow-sm border border-gray-200">
              <button
                onClick={() => setCurrency('usd')}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  currency === 'usd'
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-secondary hover:text-primary'
                }`}
              >
                USD ($)
              </button>
              <button
                onClick={() => setCurrency('inr')}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  currency === 'inr'
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-secondary hover:text-primary'
                }`}
              >
                INR (₹)
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link href="#launch-special" className="bg-red-500 text-white px-8 py-4 rounded-full font-bold hover:bg-red-600 transition-all duration-200">
              🔥 See ₹499 Launch Offer
            </Link>
            <Link href="/contact" className="btn-secondary">
              Book Free Strategy Call
            </Link>
          </motion.div>

          {/* Social Proof */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
            <div>
              <p className="text-3xl font-bold text-primary">₹499</p>
              <p className="text-secondary">Launch Special</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">4-7 Days</p>
              <p className="text-secondary">Delivery Time</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">{launchSpecial.spotsLeft}</p>
              <p className="text-secondary">Spots Remaining</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of your existing sections remain the same... */}
      {/* Scarcity Section */}
      <section className="py-12">
        <div className="container-custom">
          <ScarcityBar totalSpots={12} filledSpots={4} />
        </div>
      </section>

      {/* Regular Services Section */}
      <section id="pricing" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Regular Service Packages
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              After the launch special, these are my standard offerings
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeService === index
                    ? 'bg-primary text-white'
                    : 'bg-tertiary text-secondary hover:bg-primary hover:text-white'
                }`}
              >
                {service.name}
              </button>
            ))}
          </div>

          {/* Active Service Details */}
          <div className="max-w-6xl mx-auto">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 text-center">
                <h3 className="text-3xl font-bold mb-2">{services[activeService].name}</h3>
                <p className="text-xl opacity-90 mb-4">{services[activeService].tagline}</p>
                <div className="flex justify-center items-center gap-4">
                  <span className="text-5xl font-bold">{formatPrice(services[activeService].currentPrice)}</span>
                  <div>
                    <span className="text-xl line-through opacity-70">{formatPrice(services[activeService].originalPrice)}</span>
                    <p className="text-green-300 font-medium">Save {formatPrice(services[activeService].savings)}</p>
                  </div>
                </div>
                <p className="text-lg opacity-90 mt-4">{services[activeService].timeline} delivery</p>
                
                {services[activeService].guarantee && (
                  <div className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    ⚡ {services[activeService].guarantee}
                  </div>
                )}
              </div>

              <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-4">What You Get:</h4>
                      <div className="space-y-3">
                        {services[activeService].features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <span className="text-green-500 mt-1">✅</span>
                            <span className="text-secondary">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-primary mb-4">Perfect For:</h4>
                      <p className="text-secondary">{services[activeService].ideal}</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-4">Business Outcomes:</h4>
                      <div className="space-y-3">
                        {services[activeService].outcomes.map((outcome, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <span className="text-blue-500 mt-1">🚀</span>
                            <span className="text-secondary font-medium">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-primary mb-4">Real Examples:</h4>
                      <div className="space-y-2">
                        {services[activeService].examples.map((example, index) => (
                          <p key={index} className="text-secondary text-sm bg-tertiary p-3 rounded-lg">
                            {example}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <Link
                    href="/contact"
                    className="btn-primary text-lg px-12 py-4"
                  >
                    Claim This Package
                  </Link>
                  <p className="text-sm text-secondary mt-4">
                    ⚡ Limited time: Price increases after 8 more bookings
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left hover:bg-tertiary transition-colors duration-200"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-primary">{faq.question}</h3>
                    <span className="text-2xl text-secondary">
                      {openFaq === index ? '−' : '+'}
                    </span>
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-secondary leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-red-500 to-pink-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Don't Miss This Launch Special!
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Professional portfolio websites at ₹499 - only {launchSpecial.spotsLeft} spots remaining!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-red-600 px-12 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105"
            >
              🚀 Get My ₹499 Portfolio Now!
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all duration-200"
            >
              View My Work
            </Link>
          </div>
          <p className="text-sm opacity-75 mt-6">
            ⚡ After {launchSpecial.spotsLeft} more sales, price increases to ₹2,999
          </p>
        </div>
      </section>
    </main>
  )
}
