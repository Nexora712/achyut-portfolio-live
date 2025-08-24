'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const projects = [
  {
    id: '1',
    title: 'FirePost - AI Social Media Manager',
    description: 'A comprehensive AI-powered social media management platform that generates engaging content, schedules posts across multiple platforms, and optimizes social media strategy.',
    category: 'SaaS Platform',
    year: 2025,
    technologies: ['React', 'AI/ML', 'TypeScript', 'Tailwind CSS'],
    status: 'Live'
  },
  {
    id: '2',
    title: 'AI & Development Blog Platform',
    description: 'A modern, responsive blog platform focused on AI development, prompt engineering, and SaaS entrepreneurship with newsletter integration.',
    category: 'Content Platform',
    year: 2025,
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Email Integration'],
    status: 'Live'
  },
  {
    id: '3',
    title: 'Quiz Generator App',
    description: 'An AI-powered quiz generation platform that creates interactive quizzes from any content, perfect for educators and content creators.',
    category: 'AI Tools',
    year: 2024,
    technologies: ['React', 'AI/ML', 'Node.js', 'MongoDB'],
    status: 'Beta'
  }
]

const categories = ['All', 'SaaS Platform', 'Content Platform', 'AI Tools', 'Web Development']

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState('All')
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold text-primary mb-6"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-secondary max-w-2xl mx-auto"
          >
            Showcasing AI-powered solutions, SaaS platforms, and modern web applications
          </motion.p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-tertiary text-secondary hover:bg-primary hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="aspect-video bg-gradient-to-br from-tertiary to-white flex items-center justify-center text-4xl font-bold text-secondary relative overflow-hidden">
                <img
                  src={`/images/portfolio/project${project.id}.jpg`}
                  alt={project.title}
                  className="object-cover w-full h-full"
                  style={{maxWidth: '100%', maxHeight: '100%'}}
                  onError={() => console.error(`Failed to load image: /images/portfolio/project${project.id}.jpg`)}
                  onLoad={() => console.log(`Image loaded successfully: /images/portfolio/project${project.id}.jpg`)}
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Live'
                      ? 'bg-green-100 text-green-600'
                      : 'bg-yellow-100 text-yellow-600'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-secondary bg-tertiary px-2 py-1 rounded">
                    {project.category}
                  </span>
                  <span className="text-xs text-secondary">{project.year}</span>
                </div>

                <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-primary/80 transition-colors">
                  {project.title}
                </h3>

                <p className="text-secondary mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-tertiary text-secondary rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-tertiary text-secondary rounded">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* CTA */}
                <Link
                  href={`/portfolio/${project.id}`}
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  View Project
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-16">
          <Link href="/portfolio" className="btn-secondary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
