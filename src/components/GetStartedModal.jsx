import { useState, useEffect } from 'react'
import { X, ArrowRight, CheckCircle } from 'lucide-react'

export default function GetStartedModal() {
  const [isOpen, setIsOpen] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  // Auto-close after 5 seconds if form is not filled
  useEffect(() => {
    if (!isOpen || isSubmitted || hasInteracted) return

    const timer = setTimeout(() => {
      setIsOpen(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [isOpen, isSubmitted, hasInteracted])

  const handleChange = (e) => {
    setHasInteracted(true)
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Get Started form submitted:', {
      ...form,
      submittedAt: new Date().toISOString(),
    })
    setIsSubmitted(true)
    
    // Close modal after 3 seconds on success
    setTimeout(() => {
      setIsOpen(false)
    }, 3000)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl p-5 animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 transition-colors p-1"
            aria-label="Close"
          >
            <X size={18} />
          </button>

          {isSubmitted ? (
            // Success State
            <div className="text-center py-3">
              <div className="flex justify-center mb-2">
                <div className="w-12 h-12 bg-[#88d982] rounded-full flex items-center justify-center">
                  <CheckCircle size={28} className="text-white" />
                </div>
              </div>
              <h3 className="text-lg font-black text-[#00263f] mb-1">Thank You!</h3>
              <p className="text-slate-600 text-xs">
                Our team will contact you shortly.
              </p>
            </div>
          ) : (
            // Form State
            <>
              <div className="mb-3">
                <h2 className="text-lg font-black text-[#00263f]">Get Started</h2>
                <p className="text-slate-600 text-xs mt-0.5">
                  Share your details to explore premium solutions.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-2">
                {/* Name */}
                <div>
                  <label className="text-[9px] font-black uppercase tracking-wider text-slate-400 ml-1 block mb-0.5">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full bg-[#e5eeff] border-none rounded-lg p-2 text-xs text-[#001c37] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b3c5d] transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-[9px] font-black uppercase tracking-wider text-slate-400 ml-1 block mb-0.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-[#e5eeff] border-none rounded-lg p-2 text-xs text-[#001c37] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b3c5d] transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-[9px] font-black uppercase tracking-wider text-slate-400 ml-1 block mb-0.5">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-[#e5eeff] border-none rounded-lg p-2 text-xs text-[#001c37] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b3c5d] transition-all"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#0b3c5d] text-white font-black py-2 rounded-lg hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center gap-1.5 shadow-lg mt-3 text-sm"
                >
                  Get Started
                  <ArrowRight size={14} />
                </button>

                {/* Close Alternative */}
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full text-slate-600 font-bold py-1.5 rounded-lg hover:bg-slate-100 transition-colors text-xs"
                >
                  Maybe Later
                </button>
              </form>

             
            </>
          )}
        </div>
      </div>
    </>
  )
}
