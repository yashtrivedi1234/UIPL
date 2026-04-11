export default function CTABanner() {
  return (
    <section className="py-8 relative overflow-hidden bg-[linear-gradient(135deg,_#00263f_0%,_#0b3c5d_100%)]">
      {/* Decorative rings */}
      <div className="absolute -left-20 -bottom-20 w-80 h-80 border-4 border-white/5 rounded-full" />
      <div className="absolute right-10 top-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
      <div className="absolute right-40 bottom-0 w-60 h-60 bg-orange-400/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <span
          className="text-xs uppercase text-orange-400 tracking-widest block mb-4"
          style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 900 }}
        >
          Your Future Starts Here
        </span>

        <h2 className="text-white mb-7 leading-tight">
          Join the Future with UIPL
        </h2>

        <p className="text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you are looking for a home, an investment, or a partnership in nation-building,
          UIPL is your trusted partner.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            className="bg-[#fe9824] text-white px-10 py-5 rounded-xl text-base hover:scale-105 transition-transform shadow-lg"
            style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 900 }}
          >
            Inquire Now
          </button>
          <button
            className="border-2 border-white/30 text-white px-10 py-5 rounded-xl hover:bg-white/10 transition-colors"
            style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 700 }}
          >
            Download App
          </button>
        </div>
      </div>
    </section>
  )
}