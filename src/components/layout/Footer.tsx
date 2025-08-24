import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Achyut Pandey</h3>
            <p className="text-white/80 mb-6 max-w-md">
              AI-Powered Web Developer & UI/UX Designer building modern web apps, 
              SaaS MVPs, and AI-powered solutions with design precision.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                GitHub
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                LinkedIn
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                Twitter
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/#about" className="block text-white/80 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/portfolio" className="block text-white/80 hover:text-white transition-colors">
                Portfolio
              </Link>
              <Link href="/services" className="block text-white/80 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/contact" className="block text-white/80 hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="https://my-blogs-dun.vercel.app/" className="block text-white/80 hover:text-white transition-colors">
                Blog
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <div className="space-y-2 text-sm text-white/80">
              <p>AI Integration</p>
              <p>SaaS Development</p>
              <p>UI/UX Design</p>
              <p>MVP Building</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/80">
          <p>&copy; {currentYear} Achyut Pandey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
