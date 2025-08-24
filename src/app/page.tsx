import Hero from '@/components/sections/Hero'
import LaunchSpecialBanner from '@/components/sections/LaunchSpecialBanner'
import AboutMe from '@/components/sections/AboutMe'
import PortfolioGrid from '@/components/sections/PortfolioGrid'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'


export default function Home() {
  return (
    <main>
      <Hero />
      <LaunchSpecialBanner />
      <AboutMe />
      <PortfolioGrid />
      <Testimonials />
      <CTA />
    </main>
  )
}
