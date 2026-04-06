import { Globe, Mail, Share2 } from 'lucide-react'
import logo from '../assets/logo/Logo.jpeg'

const footerLinks = {
  Company: ['About Us', 'Our Leadership', 'Careers', 'Sustainability'],
  Sectors: ['Residential', 'Educational Institutions', 'Commercial Plazas', 'Healthcare Facilities'],
  Resources: ['Project Brochure', 'Privacy Policy', 'Terms of Service', 'Help Center'],
}

export default function Footer() {
  return (
    <footer
      className="w-full pt-14 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 text-white"
      style={{ background: 'linear-gradient(135deg, #00263f 0%, #0a2540 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main grid — brand full-width on mobile, 2-col on sm, 4-col on lg */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">

          {/* Brand — spans full width on mobile only */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1 space-y-4 sm:space-y-5">
            <img
              src={logo}
              alt="UIPL logo"
              className="h-10 sm:h-12 w-auto object-contain"
            />
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xs">
              United Infracity Private Limited is dedicated to creating integrated living
              ecosystems that define the next generation of urban development.
            </p>
            <div className="flex gap-3">
              {[Globe, Mail, Share2].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#fe9824] transition-colors"
                >
                  <Icon size={15} className="sm:w-4 sm:h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns — each takes 1 col, wraps naturally on mobile into 2-col grid */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="col-span-1">
              <h4 className="text-sm sm:text-base font-black mb-3 sm:mb-5 text-orange-400">
                {heading}
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white text-xs sm:text-sm transition-colors hover:translate-x-1 inline-block leading-snug"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 sm:mt-14 lg:mt-16 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-slate-500 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} United Infracity Private Limited. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-slate-500">
            {['Lucknow', 'Noida', 'Delhi'].map((city) => (
              <a key={city} href="#" className="hover:text-white transition-colors">
                {city}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}