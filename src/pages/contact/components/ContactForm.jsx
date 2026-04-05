import { useState } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', phone: '', email: '', message: '',
  })

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass =
    'w-full bg-[#e5eeff] border-none rounded-xl p-4 text-sm text-[#001c37] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b3c5d] transition-all'

  const labelClass = 'text-[10px] font-black uppercase tracking-wider text-slate-400 ml-1 block mb-1.5'

  return (
    <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-10 border border-slate-200/40 shadow-[0_20px_40px_rgba(0,28,55,0.06)]">
      {submitted ? (
        <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
          <CheckCircle size={56} className="text-[#002a05]" />
          <h3 className="text-2xl font-black text-[#00263f]">Message Sent!</h3>
          <p className="text-slate-500 max-w-sm">
            Thank you for reaching out. Our team will get back to you within 24 hours.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', message: '' }) }}
            className="mt-2 px-8 py-3 border-2 border-[#00263f] text-[#00263f] rounded-xl font-black text-sm hover:bg-[#00263f] hover:text-white transition-all"
          >
            Send Another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Full Name</label>
              <input
                name="name"
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </div>
            <div>
              <label className={labelClass}>Phone Number</label>
              <input
                name="phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={form.phone}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>Email Address</label>
            <input
              name="email"
              type="email"
              placeholder="john@company.com"
              value={form.email}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          <div>
            <label className={labelClass}>Project Inquiry Message</label>
            <textarea
              name="message"
              rows={5}
              placeholder="How can our infrastructure expertise assist you?"
              value={form.message}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          <button
            type="submit"
            className="group w-full bg-[#0b3c5d] text-white font-black py-5 rounded-xl hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center gap-2 shadow-lg"
          >
            Send Message
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      )}
    </div>
  )
}