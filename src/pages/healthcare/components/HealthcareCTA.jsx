import { useNavigate } from 'react-router-dom'

export default function HealthcareCTA() {
  const navigate = useNavigate()

  return (
    <section className="py-28 relative flex justify-center items-center px-6 bg-white">
      <div className="relative z-10 max-w-5xl w-full mx-auto text-center">
        <div className="bg-[#f6fbff] p-16 rounded-[3rem] shadow-2xl border border-slate-100 space-y-10">
          <h2 className="text-5xl font-black tracking-tighter text-[#00263f]">
            Let Us Build Your Next Healthcare Landmark
          </h2>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Partner with UIPL to create future-ready hospitals and care centers that combine
            operational excellence with compassionate design.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button
              onClick={() => navigate('/contact')}
              className="bg-[#00263f] text-white px-10 py-5 rounded-2xl text-base font-black shadow-xl hover:scale-105 transition-all"
            >
              Talk To Healthcare Team
            </button>
            <button
              onClick={() => navigate('/projects')}
              className="bg-white text-[#00263f] border border-[#00263f]/10 px-10 py-5 rounded-2xl text-base font-black shadow-md hover:bg-[#eff4ff] transition-colors"
            >
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
