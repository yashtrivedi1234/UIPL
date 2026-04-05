import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo/Logo.jpeg'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Sectors', to: '/sectors' },
  { label: 'Projects', to: '/projects' },
  { label: 'Amenities', to: '/amenities' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" aria-label="UIPL home" className="shrink-0">
          <img src={logo} alt="UIPL logo" className="h-11 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              (link.to === '/' && location.pathname === '/') ||
              (link.to === '/about' && location.pathname === '/about')

            return (
              <NavLink
                key={link.label}
                to={link.to}
                className={`font-semibold text-sm tracking-wide transition-colors ${
                  isActive
                    ? 'text-sky-900 border-b-2 border-orange-500 pb-0.5'
                    : 'text-slate-600 hover:text-sky-800'
                }`}
              >
                {link.label}
              </NavLink>
            )
          })}
        </div>

        {/* CTA */}
        <button className="hidden md:block bg-[#0b3c5d] text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:scale-105 transition-transform duration-200 shadow-md">
          Get Started
        </button>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-sky-900" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 px-6 py-6 flex flex-col gap-4">
          <Link to="/" className="pb-2" onClick={() => setMobileOpen(false)} aria-label="UIPL home">
            <img src={logo} alt="UIPL logo" className="h-10 w-auto object-contain" />
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-slate-700 font-semibold text-sm hover:text-sky-800 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button className="mt-2 bg-[#0b3c5d] text-white px-6 py-3 rounded-lg font-bold text-sm w-full">
            Get Started
          </button>
        </div>
      )}
    </nav>
  )
}