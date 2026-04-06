import { useNavigate } from 'react-router-dom'

export default function CTABanner() {
  const navigate = useNavigate()

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #00263f 0%, #0b3c5d 100%)' }}
    >
      {/* Decorative rings */}
      <div className="absolute -left-10 sm:-left-20 -bottom-10 sm:-bottom-20 w-48 sm:w-80 h-48 sm:h-80 border-4 border-white/5 rounded-full" />
      <div className="absolute right-4 sm:right-10 top-4 sm:top-10 w-24 sm:w-40 h-24 sm:h-40 bg-white/5 rounded-full blur-2xl" />
      <div className="absolute right-16 sm:right-40 bottom-0 w-36 sm:w-60 h-36 sm:h-60 bg-orange-400/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="text-[10px] sm:text-xs font-black uppercase text-orange-400 tracking-widest block mb-3 sm:mb-4">
          Your Future Starts Here
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 sm:mb-7 leading-tight">
          Join the Future with UIPL
        </h2>

        <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          Whether you are looking for a home, an investment, or a partnership in nation-building,
          UIPL is your trusted partner.
        </p>

        <div className="flex flex-col xs:flex-row justify-center gap-3 sm:gap-4">
          <button
            onClick={() => navigate('/contact')}
            className="bg-[#fe9824] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-black text-sm sm:text-base hover:scale-105 transition-transform shadow-lg w-full xs:w-auto"
          >
            Inquire Now
          </button>
          <button
            onClick={() => navigate('/projects')}
            className="border-2 border-white/30 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold hover:bg-white/10 transition-colors text-sm sm:text-base w-full xs:w-auto"
          >
            Download App
          </button>
        </div>
      </div>
    </section>
  )
}