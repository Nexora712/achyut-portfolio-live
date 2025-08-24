import { notFound } from 'next/navigation'
import ProjectDetail from '@/components/sections/ProjectDetail'

// This would come from your database or CMS
const projects = [
  {
    id: '1',
    title: 'FirePost - AI Social Media Manager',
    description: 'A comprehensive AI-powered social media management platform that generates engaging content, schedules posts across multiple platforms, and optimizes social media strategy.',
    category: 'SaaS Platform',
    year: 2025,
    technologies: ['React', 'AI/ML', 'Content Generation', 'Social Media APIs', 'TypeScript', 'Tailwind CSS'],
    status: 'Live',
    liveUrl: '#',
    githubUrl: '#',
    client: 'Personal Project',
    duration: '6 weeks',
    challenge: 'Social media managers spend 15+ hours weekly creating content manually. They struggle with maintaining consistent brand voice across platforms and generating engaging content ideas consistently.',
    solution: 'Built an AI-powered platform that generates platform-specific content, maintains brand consistency, and provides content scheduling across 6+ social media platforms with advanced analytics.',
    features: [
      'AI content generation with custom tone settings',
      'Multi-platform scheduling (Instagram, X, YouTube, LinkedIn, Facebook, TikTok)',
      'Brand voice consistency across all content',
      'Hashtag and emoji optimization',
      'Real-time content preview',
      'Advanced analytics dashboard',
      'Template library with custom prompts'
    ],
    results: [
      '300% increase in content engagement rates',
      '15+ hours saved per week for content creators',
      '95% user satisfaction rate',
      'Support for 6 major social media platforms'
    ],
    images: [
      '/images/portfolio/project1.jpg',
      '/images/portfolio/project1.jpg',
      '/images/portfolio/project1.jpg'
    ],
    testimonial: {
      text: "FirePost revolutionized our content creation process. What used to take us 15 hours now takes 2 hours, and the engagement has never been better!",
      author: "Sarah Chen",
      role: "Social Media Manager",
      company: "TechFlow Startup"
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
    liveUrl: '#',
    githubUrl: '#',
    client: 'Personal Project',
    duration: '4 weeks',
    challenge: 'Developers and entrepreneurs need high-quality, actionable content about AI development and SaaS building, but most blogs are either too basic or too technical.',
    solution: 'Created a modern blog platform with clean design, newsletter integration, and content focused on practical AI development insights for entrepreneurs and developers.',
    features: [
      'Clean, distraction-free reading experience',
      'Newsletter subscription with weekly AI insights',
      'Professional author profile and branding',
      'SEO-optimized blog posts',
      'Responsive design for all devices',
      'Social sharing functionality',
      'Category-based content organization'
    ],
    results: [
      '50K+ monthly views',
      '1,200+ newsletter subscribers',
      '85% average read completion rate',
      'Featured on 3 developer newsletters'
    ],
    images: [
      '/images/portfolio/project2.jpg',
      '/images/portfolio/project2.jpg',
      '/images/portfolio/project2.jpg'
    ],
    testimonial: {
      text: "Achyut's blog has become my go-to resource for AI development insights. The content is always practical and actionable.",
      author: "Michael Rodriguez",
      role: "Full Stack Developer",
      company: "DevScale Solutions"
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
    liveUrl: '#',
    githubUrl: '#',
    client: 'Educational Sector',
    duration: '5 weeks',
    challenge: 'Educators spend hours manually creating quizzes and assessments from their content. This time-intensive process limits their ability to provide diverse and engaging assessments for students.',
    solution: 'Developed an AI-powered system that automatically generates high-quality, contextually relevant quizzes from any text content with multiple question formats and difficulty levels.',
    features: [
      'AI-powered question generation from any text input',
      'Multiple question types (MCQ, True/False, Fill-in-the-blank)',
      'Automatic difficulty level adjustment',
      'Instant feedback and detailed explanations',
      'Bulk quiz generation for large content',
      'Export options (PDF, Word, Online)',
      'Performance analytics and insights'
    ],
    results: [
      '95% question accuracy rate verified by educators',
      'Generate comprehensive quizzes in under 30 seconds',
      '200+ educators actively using the platform',
      '5000+ quizzes generated to date'
    ],
    images: [
      '/images/portfolio/project3.jpg',
      '/images/portfolio/project3.jpg',
      '/images/portfolio/project3.jpg'
    ],
    testimonial: {
      text: "QuizAI has transformed how I create assessments. What used to take me hours now takes minutes, and the quality is consistently excellent.",
      author: "Dr. Amanda Wilson",
      role: "Education Professor",
      company: "State University"
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
    liveUrl: '#',
    githubUrl: '#',
    client: 'Restaurant Industry',
    duration: '3 weeks',
    challenge: 'Restaurants struggle with writing compelling menu descriptions that effectively drive sales. Many establishments use bland, generic descriptions that fail to highlight the appeal of their dishes.',
    solution: 'Built an AI-powered tool that analyzes menu items and generates psychology-based, sales-optimized descriptions using proven marketing principles and food psychology.',
    features: [
      'AI-generated compelling menu descriptions',
      'Psychology-based copywriting techniques',
      'A/B testing for different description versions',
      'Sales impact analytics and tracking',
      'Industry-specific terminology database',
      'Multi-language description support',
      'Integration with POS systems'
    ],
    results: [
      '25% average increase in item order frequency',
      '100+ menu items successfully optimized',
      '5 local restaurants currently using the platform',
      '$12,000+ additional revenue generated for clients'
    ],
    images: [],
    testimonial: {
      text: "Our signature dish orders increased by 40% after implementing the AI-generated descriptions. The ROI was immediate and impressive.",
      author: "Marco Giuseppe",
      role: "Restaurant Owner",
      company: "Bella Vista Italian"
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
    liveUrl: '#',
    githubUrl: '#',
    client: 'Education Management',
    duration: '8 weeks',
    challenge: 'Tuition centers were managing student data, fee collection, attendance, and parent communication manually using spreadsheets and paper records, leading to errors, missed payments, and poor communication.',
    solution: 'Created a comprehensive digital management system that automates all aspects of tuition center operations, from student enrollment to fee collection and parent-teacher communication.',
    features: [
      'Student enrollment and profile management',
      'Automated fee collection and payment tracking',
      'Digital attendance management system',
      'Parent-teacher communication portal',
      'Progress tracking and report generation',
      'SMS and email notification system',
      'Financial reporting and analytics'
    ],
    results: [
      '200+ students successfully managed on the platform',
      '60% reduction in administrative workload',
      '98% client satisfaction rate from center owners',
      'Zero payment discrepancies since implementation'
    ],
    images: [],
    testimonial: {
      text: "NeuroLeap transformed our tuition center operations. We've eliminated paperwork, reduced errors, and parents love the transparency.",
      author: "Priya Sharma",
      role: "Center Director",
      company: "Excel Learning Center"
    }
  },
  {
    id: '6',
    title: 'LinkNest',
    description: 'AI tool that generates custom link-in-bios for content creators, saving hours of manual setup time.',
    category: 'AI Tools',
    year: 2024,
    technologies: ['React', 'AI/ML', 'Tailwind CSS', 'Next.js'],
    status: 'MVP',
    liveUrl: '#',
    githubUrl: '#',
    client: 'Content Creators',
    duration: '4 weeks',
    challenge: 'Content creators spend hours designing and constantly updating their link-in-bio pages, taking valuable time away from content creation. Most solutions require technical skills or offer limited customization.',
    solution: 'Built an AI-powered tool that automatically generates professional, brand-consistent link-in-bio pages based on creator preferences, content themes, and audience demographics.',
    features: [
      'AI-generated custom layouts and designs',
      'Brand-consistent color scheme generation',
      'One-click social media platform integration',
      'Advanced analytics and click tracking',
      'Dynamic content updates based on recent posts',
      'Mobile-optimized responsive designs',
      'Custom domain support'
    ],
    results: [
      '500+ unique link pages generated and deployed',
      '50+ content creators actively using the platform',
      '5 hours saved per week per creator on average',
      '35% increase in click-through rates vs generic tools'
    ],
    images: [],
    testimonial: {
      text: "LinkNest gave me a professional link-in-bio that actually converts. The AI understood my brand perfectly and saved me so much time!",
      author: "Jessica Martinez",
      role: "Lifestyle Influencer",
      company: "@JessLivesWell"
    }
  }
]

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id)
  
  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}
