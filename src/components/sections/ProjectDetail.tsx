'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'

interface Project {
  id: string
  title: string
  description: string
  category: string
  year: number
  technologies: string[]
  status: string
  liveUrl: string
  githubUrl: string
  client: string
  duration: string
  challenge: string
  solution: string
  features: string[]
  results: string[]
  images: string[]
  testimonial: {
    text: string
    author: string
    role: string
    company: string
  }
}

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <main className="pt-20">
      {/* Breadcrumb */}
      <section className="py-8 bg-tertiary">
        <div className="container-custom">
          <Link 
            href="/portfolio" 
            className="inline-flex items-center text-secondary hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  project.status === 'Live' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {project.status}
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-primary">
                {project.title}
              </h1>

              <p className="text-xl text-secondary leading-relaxed">
                {project.description}
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-secondary mb-1">Client</p>
                  <p className="text-primary font-semibold">{project.client}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-secondary mb-1">Duration</p>
                  <p className="text-primary font-semibold">{project.duration}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-secondary mb-1">Year</p>
                  <p className="text-primary font-semibold">{project.year}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-secondary mb-1">Status</p>
                  <p className="text-primary font-semibold">{project.status}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Link
                  href={project.liveUrl}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Link>
                <Link
                  href={project.githubUrl}
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </Link>
              </div>
            </motion.div>

            {/* Right Content - Project Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video bg-gradient-to-br from-tertiary to-gray-100 rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center text-white text-4xl font-bold">
                  {project.title.charAt(0)}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">The Challenge</h2>
              <p className="text-secondary leading-relaxed text-lg">
                {project.challenge}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">The Solution</h2>
              <p className="text-secondary leading-relaxed text-lg">
                {project.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-6">Key Features</h2>
            <p className="text-xl text-secondary">Powerful functionality that drives real results</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <p className="text-secondary font-medium">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-primary mb-12">Technologies Used</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {project.technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white px-6 py-3 rounded-full font-medium text-primary shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-6">Project Results</h2>
            <p className="text-xl text-secondary">Measurable impact and success metrics</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {project.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl border border-green-200"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">📈</span>
                  <p className="text-lg font-semibold text-primary">{result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="section-padding bg-primary text-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <blockquote className="text-2xl lg:text-3xl font-light leading-relaxed mb-8">
                "{project.testimonial.text}"
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
                  {project.testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-lg">{project.testimonial.author}</p>
                  <p className="opacity-90">{project.testimonial.role} at {project.testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-secondary to-primary rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Build Something Like This?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's create an AI-powered solution that delivers real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-200"
              >
                Start Your Project
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-200"
              >
                View More Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
