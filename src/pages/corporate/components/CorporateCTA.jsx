import { useNavigate } from 'react-router-dom'

export default function CorporateCTA() {
  const navigate = useNavigate()

  return (
    <section
      className="py-24 relative overflow-hidden bg-[linear-gradient(to_right,_#00263f,_#0b3c5d)]"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl lg:text-6xl font-black text-white mb-8">
          Join the Future with UIPL
        </h2>
        <p className="text-slate-300 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you are looking for a home, an investment, or a partnership in
          nation-building, UIPL is your trusted partner.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate('/contact')}
            className="bg-[#fe9824] text-white px-10 py-5 rounded-xl font-black text-lg hover:scale-105 transition-transform shadow-lg"
          >
            Inquire Now
          </button>
          <button
            onClick={() => navigate('/projects')}
            className="border-2 border-white/30 text-white px-10 py-5 rounded-xl font-black hover:bg-white/10 transition-colors"
          >
            Download App
          </button>
        </div>
      </div>

      {/* Decorative */}
      <div className="absolute -left-20 -bottom-20 w-80 h-80 border-4 border-white/5 rounded-full pointer-events-none" />
      <div className="absolute right-10 top-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />
    </section>
  )
}