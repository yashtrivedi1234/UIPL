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
      className="w-full pt-20 pb-10 text-white"
      style={{ background: 'linear-gradient(135deg, #00263f 0%, #0a2540 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-5">
          <img src={logo} alt="UIPL logo" className="h-12 w-auto object-contain" />
          <p className="text-slate-400 text-sm leading-relaxed">
            United Infracity Private Limited is dedicated to creating integrated living
            ecosystems that define the next generation of urban development.
          </p>
          <div className="flex gap-3">
            {[Globe, Mail, Share2].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#fe9824] transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h4 className="text-base font-black mb-5 text-orange-400">{heading}</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block"
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
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">
          © 2024 United Infracity Private Limited. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-slate-500">
          {['Lucknow', 'Noida', 'Delhi'].map((city) => (
            <a key={city} href="#" className="hover:text-white transition-colors">
              {city}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}