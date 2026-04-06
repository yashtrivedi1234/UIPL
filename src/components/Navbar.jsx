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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? 'bg-white/90 backdrop-blur-xl shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" aria-label="UIPL home" className="shrink-0">
            <img
              src={logo}
              alt="UIPL logo"
              className="h-9 sm:h-11 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `font-semibold text-sm tracking-wide transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-sky-900 border-b-2 border-orange-500 pb-0.5'
                      : 'text-slate-600 hover:text-sky-800'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <button className="hidden lg:block bg-[#0b3c5d] text-white px-5 xl:px-6 py-2.5 rounded-lg font-bold text-sm hover:scale-105 transition-transform duration-200 shadow-md whitespace-nowrap">
            Get Started
          </button>

          {/* Mobile / Tablet Hamburger */}
          <button
            className="lg:hidden text-sky-900 p-1 rounded-md hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile / Tablet Dropdown Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-xl border-t border-slate-100 px-4 sm:px-6 py-5 flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `font-semibold text-sm py-3 px-3 rounded-lg transition-colors ${
                    isActive
                      ? 'text-sky-900 bg-sky-50 border-l-4 border-orange-500 pl-2'
                      : 'text-slate-700 hover:text-sky-800 hover:bg-slate-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <button className="mt-3 bg-[#0b3c5d] text-white px-6 py-3 rounded-lg font-bold text-sm w-full hover:bg-[#0f4d78] transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop overlay for mobile — closes menu on outside tap */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}