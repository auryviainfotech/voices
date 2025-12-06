import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube, Instagram, Rss } from 'lucide-react'

const Footer = () => {
  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Advisory & Editorial Boards', href: '/boards' },
        { name: 'Healthcare Startup Facilitator', href: '/startup-facilitator' },
        { name: 'Advertise with us', href: '/advertise' },
        { name: 'Subscribe', href: '/subscribe' },
        { name: 'Contact', href: '/contact' },
      ]
    },
    {
      title: 'Categories',
      links: [
        { name: 'Innovation', href: '/categories/innovation' },
        { name: 'Well Being', href: '/categories/well-being' },
        { name: 'Industry speaks', href: '/categories/industry-speaks' },
        { name: 'Artificial Intelligence', href: '/categories/ai' },
        { name: 'Telemedicine', href: '/categories/telemedicine' },
        { name: 'Research', href: '/categories/research' },
      ]
    },
    {
      title: 'Magazine Volumes',
      links: [
        { name: 'Volume 1 - Year 2025', href: '/magazine-1' },
        { name: 'Volume 2 - coming soon..', href: '/volumes/volume-9' },
        { name: 'Volume 3 - coming sonn..', href: '/volumes/volume-8' },
        { name: 'Archive', href: '/archive' },
      ]
    },
    {
      title: 'Contact Info',
      links: [
        { 
          name: '+91 8639245016', 
          href: 'tel:+918639245016',
          icon: Phone
        },
        { 
          name: 'medivoicesofficial@gmail.com', 
          href: 'mailto:medivoicesofficial@gmail.com',
          icon: Mail
        },
        { 
          name: '3-6-8 RK Hospitals\nManchiriyal Chowrasta\nKarimnagar', 
          href: '#',
          icon: MapPin
        },
      ]
    }
  ]

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/madivoices', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/medivoices', icon: Facebook },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/medivoices', icon: Linkedin },
    { name: 'YouTube', href: 'https://youtube.com/medivoices', icon: Youtube },
    { name: 'Instagram', href: 'https://instagram.com/medivoices', icon: Instagram },
    { name: 'RSS', href: '/feed', icon: Rss },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold gradient-text mb-4">Medi Voices</h3>
            <p className="text-gray-300 mb-6">
              A quarterly healthcare magazine focused on innovations, insights, and inspiring stories in the healthcare industry. 
              Bringing you the latest in medical technology, research, and patient care advancements.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-2 bg-gray-800 rounded-lg hover:bg-purple-600 transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => {
                  const hasIcon = 'icon' in link
                  const IconComponent = hasIcon ? link.icon : null
                  return (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-purple-400 transition-colors flex items-center"
                      >
                        {IconComponent && <IconComponent className="w-4 h-4 mr-2 shrink-0" />}
                        <span className="text-sm">{link.name}</span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Medi Voices. All rights reserved. A unit of Medi Healthcare Innovations.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy-policy" className="text-gray-400 hover:text-purple-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-use" className="text-gray-400 hover:text-purple-400 transition-colors">
                Terms of Use
              </a>
              <a href="/sitemap" className="text-gray-400 hover:text-purple-400 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
