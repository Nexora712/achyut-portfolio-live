'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const projects = [
  {
    id: '1',
    title: 'FirePost - AI Social Media Manager',
    description: 'A comprehensive AI-powered social media management platform that generates engaging content, schedules posts across multiple platforms, and optimizes social media strategy.',
    category: 'SaaS Platform',
    year: 2025,
    technologies: ['React', 'AI/ML', 'Content Generation', 'Social Media APIs', 'TypeScript', 'Tailwind CSS'],
    status: 'Live',
    image: '/images/portfolio/firepost.jpg',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    results: {
      userGrowth: '300% increase in content engagement',
      timeSaved: '15+ hours saved per week',
      platforms: '6 social media platforms supported'
    }
  },
  {
    id: '2',
    title: 'AI & Development Blog Platform',
    description: 'A modern, responsive blog platform focused on AI development, prompt engineering, and SaaS entrepreneurship with newsletter integration.',
    category: 'Content Platform',
    year: 2025,
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Content Management', 'Email Integration'],
    status: 'Live',
    image: '/images/portfolio/blog.jpg',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    results: {
      traffic: '50K+ monthly views',
      subscribers: '1,200+ newsletter subscribers',
      engagement: '85% average read completion'
    }
  },
  {
    id: '3',
    title: 'QuizAI - Smart Quiz Platform',
    description: 'An AI-powered quiz generation platform that creates interactive quizzes from any content, perfect for educators and content creators.',
    category: 'AI Tools',
    year: 2024,
    technologies: ['React', 'AI/ML', 'Node.js', 'MongoDB', 'OpenAI API'],
    status: 'Beta',
    image: '/images/portfolio/quiz.jpg',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    results: {
      accuracy: '95% question accuracy rate',
      speed: 'Generate quizzes in under 30 seconds',
      formats: 'Support for 5+ question types'
    }
  },
  {
    id: '4',
    title: 'Restaurant Menu Optimizer',
    description: 'AI-powered tool that analyzes menu items and generates optimized descriptions to increase sales and customer engagement.',
    category: 'AI Tools',
    year: 2024,
    technologies: ['React', 'OpenAI API', 'Stripe', 'Firebase'],
    status: 'MVP',
    image: '/images/portfolio/menu.jpg',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    results: {
      sales: '25% increase in item orders',
      descriptions: '100+ menu items optimized',
      restaurants: '5 local restaurants using it'
    }
  },
  {
    id: '5',
    title: 'NeuroLeap',
    description: 'Complete management platform for tuition centers with student tracking, fee management, and automated notifications.',
    category: 'Web Development',
    year: 2024,
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    status: 'Live',
    image: '/images/portfolio/tuition.jpg',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    results: {
      students: '200+ students managed',
      efficiency: '60% reduction in admin work',
      satisfaction: '98% client satisfaction rate'
    }
  },
  {
    id: '6',
    title: 'LinkNest',
    description: 'AI tool that generates custom link-in-bios for content creators using AI, saving hours of manual preparation time.',
    category: 'AI Tools',
    year: 2024,
    technologies: ['React', 'AI/ML', 'PDF Generation', 'Tailwind CSS'],
    status: 'MVP',
    image: '/images/portfolio/project6.jpg',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    results: {
      worksheets: '1,000+ worksheets generated',
      teachers: '50+ teachers using it',
      time: '5 hours saved per week per teacher'
    }
  }
]

const categories = ['All', 'SaaS Platform', 'AI Tools', 'Content Platform', 'Web Development']

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  const featuredProjects = projects.filter(project => project.featured)

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-tertiary to-white">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl lg:text-6xl font-bold text-primary mb-6"
          >
            My Portfolio
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl lg:text-2xl text-secondary mb-8 max-w-3xl mx-auto"
          >
            Real AI-powered solutions that drive business results. 
            From MVPs to full-scale platforms, each project solves actual problems.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: '12+', label: 'Projects Completed' },
              { number: '3', label: 'Live Products' },
              { number: '50K+', label: 'Users Impacted' },
              { number: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-primary">{stat.number}</p>
                <p className="text-secondary">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Featured Projects</h2>
            <p className="text-xl text-secondary">My most impactful AI-powered solutions</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="relative aspect-video bg-gradient-to-br from-tertiary to-gray-100 overflow-hidden">
                  {/* Placeholder for project image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {project.id === '1' || project.id === '2' || project.id === '3' ? (
                      <img
                        src={`/images/portfolio/project${project.id}.jpg`}
                        alt={project.title}
                        className="object-cover w-full h-full"
                        style={{maxWidth: '100%', maxHeight: '100%'}}
                        onError={() => console.error(`Failed to load image: /images/portfolio/project${project.id}.jpg`)}
                        onLoad={() => console.log(`Image loaded successfully: /images/portfolio/project${project.id}.jpg`)}
                      />
                                        ) : project.id === '5' ? (
                      <img
                        src={`/images/portfolio/project4.jpg`}
                        alt={project.title}
                        className="object-cover w-full h-full"
                        style={{maxWidth: '100%', maxHeight: '100%'}}
                        onError={() => console.error(`Failed to load image: /images/portfolio/project4.jpg`)}
                        onLoad={() => console.log(`Image loaded successfully: /images/portfolio/project4.jpg`)}
                      />
                    ) : project.id === '6' ? (
                      <img
                        src={`/images/portfolio/project6.jpg`}
                        alt={project.title}
                        className="object-cover w-full h-full"
                        style={{maxWidth: '100%', maxHeight: '100%'}}
                        onError={() => console.error(`Failed to load image: /images/portfolio/project6.jpg`)}
                        onLoad={() => console.log(`Image loaded successfully: /images/portfolio/project6.jpg`)}
                      />
                    ) : (
                      <div className="w-24 h-24 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 text-3xl font-bold">
                        &nbsp;
                        {(() => {
                          console.log(`Skipping image load for project ${project.id}`);
                          return null;
                        })()}
                      </div>
                    )}

                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                      project.status === 'Live' 
                        ? 'bg-green-100 text-green-700' 
                        : project.status === 'Beta'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  {hoveredProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-primary/90 flex items-center justify-center gap-4"
                    >
                      <Link
                        href={project.liveUrl}
                        className="bg-white text-primary px-6 py-2 rounded-full font-medium hover:scale-105 transition-transform"
                      >
                        Live Demo
                      </Link>
                      <Link
                        href={`/portfolio/${project.id}`}
                        className="border-2 border-white text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-primary transition-all"
                      >
                        View Details
                      </Link>
                    </motion.div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-secondary bg-tertiary px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-sm text-secondary">{project.year}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-secondary mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Results */}
                  <div className="space-y-2 mb-6">
                    {Object.entries(project.results).map(([key, value]) => (
                      <div key={key} className="flex items-center gap-2">
                        <span className="text-green-500">📈</span>
                        <span className="text-sm text-secondary font-medium">{value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-tertiary text-secondary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs px-3 py-1 bg-tertiary text-secondary rounded-full">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/portfolio/${project.id}`}
                    className="inline-flex items-center text-primary font-semibold hover:text-blue-600 transition-colors group"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">All Projects</h2>
            <p className="text-xl text-secondary">Explore my complete portfolio of AI-powered solutions</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-white text-secondary hover:bg-primary hover:text-white shadow-sm'
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
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-tertiary to-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {project.id === '1' || project.id === '2' || project.id === '3' ? (
                      <img
                        src={`/images/portfolio/project${project.id}.jpg`}
                        alt={project.title}
                        className="object-cover w-full h-full"
                        style={{maxWidth: '100%', maxHeight: '100%'}}
                        onError={() => console.error(`Failed to load image: /images/portfolio/project${project.id}.jpg`)}
                        onLoad={() => console.log(`Image loaded successfully: /images/portfolio/project${project.id}.jpg`)}
                      />
                    ) : project.id === '5' ? (
                      <img
                        src={`/images/portfolio/project4.jpg`}
                        alt={project.title}
                        className="object-cover w-full h-full"
                        style={{maxWidth: '100%', maxHeight: '100%'}}
                        onError={() => console.error(`Failed to load image: /images/portfolio/project4.jpg`)}
                        onLoad={() => console.log(`Image loaded successfully: /images/portfolio/project4.jpg`)}
                      />
                    ) : project.id === '6' ? (
                      <img
                        src={`/images/portfolio/project6.jpg`}
                        alt={project.title}
                        className="object-cover w-full h-full"
                        style={{maxWidth: '100%', maxHeight: '100%'}}
                        onError={() => console.error(`Failed to load image: /images/portfolio/project6.jpg`)}
                        onLoad={() => console.log(`Image loaded successfully: /images/portfolio/project6.jpg`)}
                      />
                    ) : (
                      <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                        {project.title.charAt(0)}
                      </div>
                    )}
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Live'
                        ? 'bg-green-100 text-green-600'
                        : project.status === 'Beta'
                        ? 'bg-blue-100 text-blue-600'
                        : 'bg-yellow-100 text-yellow-600'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-secondary bg-tertiary px-2 py-1 rounded">
                      {project.category}
                    </span>
                    <span className="text-xs text-secondary">{project.year}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-primary mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-secondary text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
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
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/portfolio/${project.id}`}
                      className="text-primary font-medium text-sm hover:underline"
                    >
                      View Project →
                    </Link>
                    <div className="flex gap-2">
                      <Link
                        href={project.liveUrl}
                        className="text-green-600 hover:text-green-700 text-sm"
                        title="Live Demo"
                      >
                        🔗
                      </Link>
                      <Link
                        href={project.githubUrl}
                        className="text-gray-600 hover:text-gray-700 text-sm"
                        title="Source Code"
                      >
                        📁
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 lg:p-16 text-center text-white"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Build Your Next Project?
            </h2>
            
            <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's create an AI-powered solution that drives real results for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-200 hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-200"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

