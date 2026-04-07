import { useNavigate } from 'react-router-dom'

export default function SectorsCTA() {
  const navigate = useNavigate()

  return (
    <section className="py-8 px-6 bg-[#f8f9ff] overflow-hidden relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-black text-[#00263f] tracking-tight mb-6">
          Ready to Partner with the Leaders?
        </h2>
        <p className="text-slate-500 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Whether it's building a school, a hospital, or your next home, UIPL delivers
          infrastructure that lasts lifetimes.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button
            onClick={() => navigate('/contact')}
            className="w-full sm:w-auto bg-[#00263f] text-white px-10 py-4 rounded-xl font-black text-base hover:scale-105 transition-all shadow-xl"
          >
            Get in Touch
          </button>
          <button
            onClick={() => navigate('/projects')}
            className="w-full sm:w-auto border-2 border-[#00263f]/20 text-[#00263f] px-10 py-4 rounded-xl font-black text-base hover:bg-[#00263f] hover:text-white transition-all"
          >
            Download Corporate Brochure
          </button>
        </div>
      </div>

      {/* Decorative blob */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#fe9824]/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  )
}