'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const skills = [
  { category: 'AI Development', items: ['OpenAI GPT Integration', 'AI Content Generation', 'Prompt Engineering', 'Machine Learning APIs'] },
  { category: 'Frontend', items: ['React/Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'REST APIs', 'Database Design'] },
  { category: 'SaaS Development', items: ['MVP Building', 'User Authentication', 'Payment Integration', 'Deployment'] }
]

const AboutMe: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })

    tl.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
    )

  }, [])

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-tertiary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.h2 
              ref={titleRef}
              className="text-4xl lg:text-5xl font-bold text-primary"
            >
              About Me
            </motion.h2>
            
            <div className="space-y-6 text-lg text-secondary leading-relaxed">
              <p>
                I&apos;m an AI-driven developer passionate about building scalable digital products — from websites and SaaS platforms to creative automation tools.
              </p>
              
              <p>
                I&apos;ve built multiple MVPs and live projects, including tuition platforms, quiz apps, worksheet generators, and my personal blog. My work blends cutting-edge AI with clean design to create experiences that stand out.
              </p>
              
              <p>
                As a first-year college student, I&apos;m already helping developers and entrepreneurs turn AI into profitable applications, sharing insights through my weekly newsletter and building tools that actually solve problems.
              </p>
            </div>

           <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
>
  {/* Simple direct download link */}
  <a
    href="/resume/Achyut_Pandey_Resume.pdf"
    className="btn-primary"
    download="Achyut_Pandey_Resume.pdf"
    target="_blank"
  >
    Download Resume
  </a>
</motion.div>
          </div>

          {/* Right Content - Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-primary mb-8">Skills & Technologies</h3>
            
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <h4 className="font-semibold text-primary mb-3">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-tertiary text-secondary text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
