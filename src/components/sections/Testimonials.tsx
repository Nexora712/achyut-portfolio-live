'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Startup Founder',
    company: 'TechFlow AI',
    content: 'Achyut built our MVP from concept to launch in just 6 weeks. His AI integration expertise helped us achieve 40% better user engagement than initially projected.',
    avatar: 'SC'
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'CTO',
    company: 'DevScale Solutions',
    content: 'Working with Achyut was a game-changer. He not only delivered a beautiful UI but also implemented smart AI features that gave us a competitive edge.',
    avatar: 'MR'
  },
  {
    id: 3,
    name: 'Emily Watson',
    role: 'Product Manager',
    company: 'EduTech Innovations',
    content: 'Achyut\'s ability to translate complex AI concepts into user-friendly interfaces is remarkable. Our platform\'s usability scores increased by 60%.',
    avatar: 'EW'
  }
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-tertiary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold text-primary mb-6"
          >
            Client Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-secondary max-w-2xl mx-auto"
          >
            What clients say about working with me on their AI-powered projects
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-secondary">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="text-secondary leading-relaxed">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
