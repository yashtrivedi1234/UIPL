import { useNavigate } from 'react-router-dom'

export default function RealEstateCTA() {
  const navigate = useNavigate()

  return (
    <section className="py-28 relative flex justify-center items-center px-6">
      <div className="absolute inset-0 bg-[#f8f9ff]" />
      <div className="relative z-10 max-w-5xl w-full mx-auto text-center">
        <div className="bg-white/70 backdrop-blur-xl p-16 rounded-[3rem] shadow-2xl border border-slate-100 space-y-10">
          <h2 className="text-5xl font-black tracking-tighter text-[#00263f]">
            Elevate Your Lifestyle
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Discover the perfect blend of modern sophistication and timeless elegance in
            our latest developments.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button
              onClick={() => navigate('/projects')}
              className="bg-[#00263f] text-white px-10 py-5 rounded-2xl text-base font-black shadow-xl hover:scale-105 transition-all"
            >
              Browse Properties
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-[#00263f] border border-[#00263f]/10 px-10 py-5 rounded-2xl text-base font-black shadow-md hover:bg-[#eff4ff] transition-colors"
            >
              Contact Expert Advisor
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}