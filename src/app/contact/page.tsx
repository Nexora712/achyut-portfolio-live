'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ChevronDown } from 'lucide-react'
import emailjs from '@emailjs/browser'

// Initialize EmailJS
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!)

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    details: 'achyut@example.com', // Replace with your email
    subtitle: 'I respond within 2 hours'
  },
  {
    icon: Phone,
    title: 'Phone',
    details: '+91 XXXXX XXXXX', // Replace with your phone
    subtitle: 'Available Mon-Fri, 9 AM - 6 PM IST'
  },
  {
    icon: MapPin,
    title: 'Location',
    details: 'India',
    subtitle: 'Working with clients globally'
  },
  {
    icon: Clock,
    title: 'Response Time',
    details: '< 2 Hours',
    subtitle: 'Quick turnaround guaranteed'
  }
]

const projectTypes = [
  { 
    value: 'portfolio-499', 
    label: '🚀 Portfolio Website - ₹499 (Launch Special)', 
    popular: true 
  },
  { 
    value: 'portfolio-regular', 
    label: 'Portfolio Website - ₹9,999 (Regular)', 
    popular: false 
  },
  { 
    value: 'ai-integration', 
    label: 'AI Integration Package - $1,999', 
    popular: false 
  },
  { 
    value: 'saas-mvp', 
    label: 'SaaS MVP Development - $3,999', 
    popular: false 
  },
  { 
    value: 'custom-platform', 
    label: 'Custom AI Platform - $6,999', 
    popular: false 
  },
  { 
    value: 'consultation', 
    label: 'Free Strategy Consultation - $0', 
    popular: false 
  },
  { 
    value: 'other', 
    label: 'Other - Let\'s discuss', 
    popular: false 
  }
]

const budgetRanges = [
  { value: 'under-1k', label: 'Under ₹1,000 (Portfolio Special)' },
  { value: '1k-5k', label: '₹1,000 - ₹5,000' },
  { value: '5k-25k', label: '₹5,000 - ₹25,000' },
  { value: '25k-50k', label: '₹25,000 - ₹50,000' },
  { value: '50k-100k', label: '₹50,000 - ₹1,00,000' },
  { value: '100k-plus', label: '₹1,00,000+' },
  { value: 'consultation', label: 'Need consultation first' }
]

const timelineOptions = [
  { value: 'asap', label: 'ASAP (Rush delivery available)' },
  { value: '1-week', label: '1 Week' },
  { value: '2-weeks', label: '2-3 Weeks' },
  { value: '1-month', label: '1 Month' },
  { value: '2-months', label: '2+ Months' },
  { value: 'flexible', label: 'Flexible timeline' }
]

const hearAboutOptions = [
  { value: 'google', label: 'Google Search' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'twitter', label: 'Twitter/X' },
  { value: 'youtube', label: 'YouTube' },
  { value: 'referral', label: 'Friend/Colleague Referral' },
  { value: 'portfolio', label: 'Found your portfolio' },
  { value: 'other', label: 'Other' }
]

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    hearAbout: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.projectType) newErrors.projectType = 'Please select a project type'
    if (!formData.message.trim()) newErrors.message = 'Please describe your project'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm() || !formRef.current) return

    setIsSubmitting(true)
    
    try {
      // Send email via EmailJS
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current
      )
      
      console.log('Email sent successfully:', result.text)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
        hearAbout: ''
      })
    } catch (error) {
      console.error('EmailJS Error:', error)
      alert('Sorry, there was an error sending your message. Please try again or email me directly at achyut@example.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-tertiary to-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-block bg-red-100 text-red-700 px-6 py-2 rounded-full font-bold text-sm mb-6">
              🔥 Portfolio Special: ₹499 only!
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl lg:text-6xl font-bold text-primary mb-6"
          >
            Let's Build Something
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Amazing Together</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl lg:text-2xl text-secondary mb-8 max-w-3xl mx-auto"
          >
            Ready for your dream portfolio at ₹499? Or planning a bigger AI project? 
            Let's discuss your vision and create something extraordinary.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: '< 2hrs', label: 'Response Time' },
              { number: '₹499', label: 'Portfolio Special' },
              { number: '4-7 days', label: 'Quick Delivery' },
              { number: '100%', label: 'Satisfaction' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl lg:text-3xl font-bold text-primary">{stat.number}</p>
                <p className="text-secondary">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">Book Your Free Strategy Call</h2>
                <p className="text-lg text-secondary leading-relaxed">
                  Whether you want the ₹499 portfolio special or a custom AI solution, 
                  I'm here to help. Fill out the form and I'll get back to you within 2 hours!
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{info.title}</h3>
                      <p className="text-primary font-medium">{info.details}</p>
                      <p className="text-sm text-secondary">{info.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Why Choose Me */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200">
                <h3 className="font-bold text-primary mb-4">Why Work With Me?</h3>
                <div className="space-y-3">
                  {[
                    'Lightning fast delivery (4-7 days for portfolios)',
                    'Affordable pricing with premium quality',
                    'AI expertise with practical business focus',
                    'Full source code ownership',
                    '100% satisfaction guarantee'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-secondary">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Enhanced Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Message Sent Successfully!</h3>
                  <p className="text-secondary mb-6">
                    Thank you for reaching out! I'll get back to you within 2 hours with next steps 
                    and details about your project.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-primary mb-2">Start Your Project</h2>
                    <p className="text-secondary">Tell me about your vision and let's make it reality</p>
                  </div>

                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                            errors.name 
                              ? 'border-red-300 focus:border-red-500' 
                              : 'border-gray-300 focus:border-primary'
                          } focus:outline-none focus:ring-2 focus:ring-primary/20`}
                          placeholder="Your full name"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                            errors.email 
                              ? 'border-red-300 focus:border-red-500' 
                              : 'border-gray-300 focus:border-primary'
                          } focus:outline-none focus:ring-2 focus:ring-primary/20`}
                          placeholder="your@email.com"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Phone & Company */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors duration-200"
                          placeholder="+91 XXXXX XXXXX"
                        />
                        <p className="text-xs text-gray-500 mt-1">For quick calls about urgent projects</p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">
                          Company/Organization
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors duration-200"
                          placeholder="Your company (optional)"
                        />
                      </div>
                    </div>

                    {/* Project Type - Enhanced Dropdown */}
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        What can I help you with? *
                      </label>
                      <div className="relative">
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border appearance-none bg-white transition-colors duration-200 ${
                            errors.projectType 
                              ? 'border-red-300 focus:border-red-500' 
                              : 'border-gray-300 focus:border-primary'
                          } focus:outline-none focus:ring-2 focus:ring-primary/20`}
                        >
                          <option value="">Choose your project type...</option>
                          {projectTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                      {errors.projectType && <p className="text-red-500 text-sm mt-1">{errors.projectType}</p>}
                      <p className="text-xs text-gray-500 mt-1">🔥 Portfolio special at ₹499 - limited time!</p>
                    </div>

                    {/* Budget & Timeline */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">
                          Budget Range
                        </label>
                        <div className="relative">
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors duration-200 appearance-none bg-white"
                          >
                            <option value="">Select budget range...</option>
                            {budgetRanges.map((range) => (
                              <option key={range.value} value={range.value}>
                                {range.label}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">
                          When do you need this?
                        </label>
                        <div className="relative">
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors duration-200 appearance-none bg-white"
                          >
                            <option value="">Select timeline...</option>
                            {timelineOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* How did you hear about me */}
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        How did you hear about me?
                      </label>
                      <div className="relative">
                        <select
                          name="hearAbout"
                          value={formData.hearAbout}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors duration-200 appearance-none bg-white"
                        >
                          <option value="">How did you find me?</option>
                          {hearAboutOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    {/* Project Details - Enhanced Textarea */}
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Tell me about your project *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 resize-none ${
                          errors.message 
                            ? 'border-red-300 focus:border-red-500' 
                            : 'border-gray-300 focus:border-primary'
                        } focus:outline-none focus:ring-2 focus:ring-primary/20`}
                        placeholder="Describe your project vision, goals, specific requirements, or any questions you have. The more details you provide, the better I can help you!"
                      />
                      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                      <p className="text-xs text-gray-500 mt-1">
                        Pro tip: Mention if you're interested in the ₹499 portfolio special!
                      </p>
                    </div>

                    {/* Enhanced Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2 ${
                        isSubmitting
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-gradient-to-r from-primary to-blue-600 text-white hover:from-blue-600 hover:to-primary hover:scale-105 shadow-lg hover:shadow-xl'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                          Sending Your Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message & Get Free Quote
                        </>
                      )}
                    </button>

                    {/* Security Note */}
                    <div className="text-center pt-4 border-t border-gray-100">
                      <p className="text-sm text-secondary">
                        🔒 Your information is secure and will never be shared<br/>
                        ⚡ I typically respond within 2 hours<br/>
                        💬 Prefer WhatsApp? <span className="text-primary font-medium">+91 XXXXX XXXXX</span>
                      </p>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Quick Answers</h2>
            <p className="text-xl text-secondary">Common questions about working together</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Is the ₹499 portfolio offer real?",
                answer: "Absolutely! This is my launch special to build my portfolio. You get the same quality as my ₹9,999 service. Only 8 spots left at this price!"
              },
              {
                question: "How quickly will you respond to my message?",
                answer: "I respond to all inquiries within 2 hours during business hours (9 AM - 9 PM IST). For urgent projects, you can also WhatsApp me directly."
              },
              {
                question: "Do you work with international clients?",
                answer: "Yes! I work with clients globally. I'm comfortable with different time zones and offer video calls at convenient times for both parties."
              },
              {
                question: "What if I'm not sure about my project requirements?",
                answer: "No problem! I offer free strategy consultations to help you clarify your vision and recommend the best solution for your goals and budget."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="font-semibold text-primary mb-3">{faq.question}</h3>
                <p className="text-secondary">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
