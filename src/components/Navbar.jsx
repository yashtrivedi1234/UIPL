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
  const [mobileOpen, setMobileOpen] = useState(false)
  const [enquiryOpen, setEnquiryOpen] = useState(false)
  const [enquirySubmitted, setEnquirySubmitted] = useState(false)
  const [enquiryData, setEnquiryData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
  })
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen || enquiryOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen, enquiryOpen])

  const handleEnquiryChange = (event) => {
    const { name, value } = event.target
    setEnquiryData((prev) => ({ ...prev, [name]: value }))
  }

  const closeEnquiryModal = () => {
    setEnquiryOpen(false)
    setEnquirySubmitted(false)
  }

  const handleEnquirySubmit = (event) => {
    event.preventDefault()
    console.log('Basic enquiry submitted:', {
      ...enquiryData,
      submittedAt: new Date().toISOString(),
    })
    setEnquirySubmitted(true)
  }

  return (
    <>
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-xl shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" aria-label="UIPL home" className="shrink-0">
            <img
              src={logo}
              alt="UIPL logo"
              className="h-9 sm:h-11 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav Links
              font-family comes from Noto Sans — already imported in index.css
              <p> tag sets it globally; nav links inherit or we use [font-family:var(--font-body)] */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `text-sm tracking-wide transition-colors whitespace-nowrap font-semibold [font-family:var(--font-body)] ${
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

          {/* Desktop CTA — Noto Sans via --font-body */}
          <button
            onClick={() => setEnquiryOpen(true)}
            className="hidden lg:block bg-[#0b3c5d] text-white px-5 xl:px-6 py-2.5 rounded-lg text-sm font-bold hover:scale-105 transition-transform duration-200 shadow-md whitespace-nowrap [font-family:var(--font-body)]"
          >
            Get Started
          </button>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-sky-900 p-1 rounded-md hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
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
                  `text-sm py-3 px-3 rounded-lg transition-colors font-semibold [font-family:var(--font-body)] ${
                    isActive
                      ? 'text-sky-900 bg-sky-50 border-l-4 border-orange-500 pl-2'
                      : 'text-slate-700 hover:text-sky-800 hover:bg-slate-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false)
                setEnquiryOpen(true)
              }}
              className="mt-3 bg-[#0b3c5d] text-white px-6 py-3 rounded-lg text-sm w-full font-bold hover:bg-[#0f4d78] transition-colors [font-family:var(--font-body)]"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Enquiry Modal */}
      {enquiryOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
          <button
            className="absolute inset-0 bg-black/45"
            onClick={closeEnquiryModal}
            aria-label="Close enquiry modal"
          />
          <div className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl p-6 sm:p-7">
            <button
              onClick={closeEnquiryModal}
              className="absolute top-3 right-3 rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {!enquirySubmitted ? (
              <>
                {/* Modal heading — Germania One via --font-heading
                    h3 tag already gets it from @layer base in index.css */}
                <h3 className="text-2xl text-sky-900">
                  Basic Enquiry
                </h3>

                {/* Subtitle — Noto Sans via <p> global rule in index.css */}
                <p className="mt-1 text-sm text-slate-600">
                  Share your details and our team will connect with you shortly.
                </p>

                <form className="mt-5 grid gap-3" onSubmit={handleEnquirySubmit}>
                  <input
                    type="text"
                    name="fullName"
                    value={enquiryData.fullName}
                    onChange={handleEnquiryChange}
                    placeholder="Full Name"
                    required
                    className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-sky-700 [font-family:var(--font-body)]"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={enquiryData.phone}
                    onChange={handleEnquiryChange}
                    placeholder="Phone Number"
                    required
                    className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-sky-700 [font-family:var(--font-body)]"
                  />
                  <input
                    type="email"
                    name="email"
                    value={enquiryData.email}
                    onChange={handleEnquiryChange}
                    placeholder="Email Address"
                    required
                    className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-sky-700 [font-family:var(--font-body)]"
                  />
                  <textarea
                    name="message"
                    value={enquiryData.message}
                    onChange={handleEnquiryChange}
                    placeholder="Requirement (optional)"
                    rows={4}
                    className="w-full resize-none rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-sky-700 [font-family:var(--font-body)]"
                  />

                  <button
                    type="submit"
                    className="mt-1 rounded-lg bg-[#0b3c5d] text-white py-2.5 text-sm font-bold hover:bg-[#0f4d78] transition-colors [font-family:var(--font-body)]"
                  >
                    Submit Enquiry
                  </button>
                </form>
              </>
            ) : (
              <div className="py-8 text-center">
                {/* h3 → Germania One from @layer base */}
                <h3 className="text-2xl text-sky-900">
                  Thank you!
                </h3>

                {/* p → Noto Sans from global p rule */}
                <p className="mt-2 text-sm text-slate-600">
                  Your enquiry has been noted. We will contact you soon.
                </p>

                <button
                  onClick={closeEnquiryModal}
                  className="mt-5 rounded-lg bg-[#0b3c5d] text-white px-5 py-2.5 text-sm font-bold hover:bg-[#0f4d78] transition-colors [font-family:var(--font-body)]"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}