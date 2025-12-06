'use client'

import { useState } from 'react'
import { Menu, X, Search, Phone, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'About us', href: '/about' },
      { name: 'Categories', href: '/categories' },
      { name: 'Magazine Issues', href: '/issues' },
      { name: 'Podcast', href: '/podcast' },
      { name: 'Contact', href: '/contact' },
    ],
    categories: [
      {
        title: 'Persona',
        items: [
          { name: 'Guest Column', href: '/categories/guest-column' },
          { name: 'Exclusive Interview', href: '/categories/exclusive-interview' },
        ]
      },
      {
        title: 'Healthcare',
        items: [
          { name: 'Innovation', href: '/categories/innovation' },
          { name: 'Well Being', href: '/categories/well-being' },
          { name: 'Industry speaks', href: '/categories/industry-speaks' },
          { name: 'Cyber security', href: '/categories/cyber-security' },
          { name: 'Hospitals', href: '/categories/hospitals' },
          { name: 'Providers', href: '/categories/providers' },
        ]
      },
      {
        title: 'Technology',
        items: [
          { name: 'Artificial Intelligence', href: '/categories/ai' },
          { name: 'Telemedicine', href: '/categories/telemedicine' },
        ]
      },
      {
        title: 'Content',
        items: [
          { name: 'In Focus', href: '/categories/in-focus' },
          { name: 'Theme', href: '/categories/theme' },
          { name: 'Newscope', href: '/categories/newscope' },
          { name: 'Research', href: '/categories/research' },
        ]
      },
      {
        title: 'Others',
        items: [
          { name: 'Executive Opinion', href: '/categories/executive-opinion' },
          { name: "Women's Corner", href: '/categories/womens-corner' },
          { name: 'Press Release', href: '/categories/press-release' },
          { name: 'Policy', href: '/categories/policy' },
          { name: 'Book Reviews', href: '/categories/book-reviews' },
        ]
      }
    ],
    quickLinks: [
      { name: 'Healthcare Startup Facilitator', href: '/startup-facilitator' },
      { name: 'Advertise with us', href: '/advertise' },
      { name: 'Subscribe', href: '/subscribe' },
      { name: 'Contribute', href: '/contribute' },
    ],
    social: [
      { name: 'Twitter', href: 'https://twitter.com/madivoices' },
      { name: 'Facebook', href: 'https://facebook.com/madivoices' },
      { name: 'LinkedIn', href: 'https://linkedin.com/company/madivoices' },
      { name: 'YouTube', href: 'https://youtube.com/madivoices' },
      { name: 'Instagram', href: 'https://instagram.com/madivoices' },
    ]
  }

  return (
    <header className="bg-white shadow-sm relative z-50">
      {/* Top Bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center py-1 text-sm gap-2 md:gap-0">
            {/* left side - contact details (show on all viewports) */}
            <div className="flex flex-wrap items-center space-x-3 w-full md:w-auto justify-center md:justify-start">
              <a href="tel:+919711777328" className="flex items-center text-gray-600 hover:text-purple-600 transition-colors text-xs sm:text-sm">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">+918639245016</span>
              </a>
              <a href="mailto:contact@madivoices.com" className="flex items-center text-gray-600 hover:text-purple-600 transition-colors text-xs sm:text-sm">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">medivoicesofficial@gmail.com</span>
              </a>
            </div>
            {/* top quick links - visible on small screens too; allow wrapping so it doesn't overflow */}
            <div className="flex items-center w-full md:w-auto justify-center md:justify-end mt-2 md:mt-0 overflow-x-auto whitespace-nowrap px-2 md:px-0">
              {/* keep links inline and allow horizontal scroll on very narrow screens */}
              {navigation.quickLinks.map((link) => (
                <a key={link.name} href={link.href} className="inline-block text-gray-600 hover:text-purple-600 transition-colors px-3 py-1 text-sm">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-2 gap-3 sm:gap-0">
          {/* Logo */}
          <div className="w-full sm:w-auto flex justify-center sm:justify-start">
            <Link href="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Medi Voices" 
                /* smaller on mobile only, slightly larger on sm/md */
                className="h-10 sm:h-16 md:h-20 w-auto mr-0"
                style={{ maxWidth: 220 }}
              />
            </Link>
          </div>

          {/* Main navigation (visible at all breakpoints) */}
          <nav className="w-full sm:w-auto flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6 text-sm">
            {navigation.main.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="w-full sm:w-auto flex items-center justify-center sm:justify-end space-x-3 mt-2 sm:mt-0">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Mobile menu button (hidden because nav is shown on all sizes) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hidden p-2 text-gray-600 hover:text-purple-600 transition-colors"
              aria-label="Open navigation menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles, topics, or authors..."
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="space-y-4">
              {navigation.main.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-purple-600 font-medium transition-colors py-2"
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile Categories */}
              <div className="pt-4 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Categories
                </h3>
                <div className="space-y-3">
                  {navigation.categories.map((category) => (
                    <div key={category.title}>
                      <h4 className="font-medium text-gray-700 mb-2">{category.title}</h4>
                      <div className="pl-4 space-y-1">
                        {category.items.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block text-sm text-gray-600 hover:text-purple-600 transition-colors py-1"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Social Links */}
              {/* Mobile Quick Links */}
              <div className="pt-4 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Quick Links</h3>
                <div className="space-y-1">
                  {navigation.quickLinks.map((link) => (
                    <a key={link.name} href={link.href} className="block text-sm text-gray-700 hover:text-purple-600 transition-colors py-1">
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex space-x-4">
                  {navigation.social.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
