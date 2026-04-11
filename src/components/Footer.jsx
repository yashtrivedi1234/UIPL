import { Globe, Mail, Share2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo/Logo.jpeg'
import ccLogo from '../assets/logo/cc-logo.png'

const footerLinks = {
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Our Leadership', to: '/about' },
    { label: 'Careers', to: '/contact' },
    { label: 'Sustainability', to: '/about' },
  ],
  Sectors: [
    { label: 'Residential', to: '/real-estate' },
    { label: 'Educational Institutions', to: '/education' },
    { label: 'Commercial Plazas', to: '/corporate' },
    { label: 'Healthcare Facilities', to: '/sectors' },
  ],
  Resources: [
    { label: 'Project Brochure', to: '/projects' },
    { label: 'Privacy Policy', to: '/contact' },
    { label: 'Terms of Service', to: '/contact' },
    { label: 'Help Center', to: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="w-full pt-14 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 text-white bg-[linear-gradient(135deg,_#00263f_0%,_#0a2540_100%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">

          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1 space-y-4 sm:space-y-5">
            <img
              src={logo}
              alt="UIPL logo"
              className="h-10 sm:h-12 w-auto object-contain"
            />
            <p
              className="text-slate-400 leading-relaxed max-w-xs"
              style={{ fontFamily: "'Noto Sans', sans-serif", fontSize: 'clamp(0.75rem, 0.7rem + 0.1vw, 0.875rem)' }}
            >
              United Infracity Private Limited is dedicated to creating integrated living
              ecosystems that define the next generation of urban development.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Globe, href: '/' },
                { icon: Mail, href: 'mailto:contact@uipl.com' },
                { icon: Share2, href: '/contact' },
              ].map(({ icon: Icon, href }) => (
<a
                  key={href}
                  href={href}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#fe9824] transition-colors"
                >
                  {Icon && <Icon size={15} className="sm:w-4 sm:h-4" />}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="col-span-1">
              <h6
                className="mb-3 sm:mb-5 text-orange-400"
              >
                {heading}
              </h6>
              <ul className="space-y-2 sm:space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block leading-snug"
                      style={{ fontFamily: "'Noto Sans', sans-serif", fontSize: 'clamp(0.75rem, 0.7rem + 0.1vw, 0.875rem)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 sm:mt-14 lg:mt-16 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p
            className="text-slate-500 text-center sm:text-left"
            style={{ fontFamily: "'Noto Sans', sans-serif", fontSize: 'clamp(0.75rem, 0.7rem + 0.1vw, 0.875rem)' }}
          >
            © {new Date().getFullYear()} United Infracity Private Limited. All rights reserved.
          </p>
          <div className="group inline-flex items-center gap-3 rounded-full border border-[#fe9824]/25 bg-white/5 px-4 py-2 shadow-[0_0_0_1px_rgba(254,152,36,0.08)] transition-all duration-300 hover:border-[#fe9824]/60 hover:bg-white/10 hover:shadow-[0_0_24px_rgba(254,152,36,0.18)]">
            <span
              className="uppercase tracking-[0.22em] text-[#fe9824]"
              style={{ fontFamily: "'Noto Sans', sans-serif", fontSize: 'clamp(0.625rem, 0.6rem + 0.05vw, 0.6875rem)' }}
            >
              Designed and developed by
            </span>
            <img
              src={ccLogo}
              alt="Code Crafter"
              className="h-7 sm:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_10px_rgba(254,152,36,0.45)]"
            />
          </div>
        </div>

      </div>
    </footer>
  )
}