import { useNavigate } from 'react-router-dom'

export default function EducationCTA() {
  const navigate = useNavigate()

  return (
    <section className="py-24 relative overflow-hidden bg-[#00263f]">
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 opacity-10 bg-[linear-gradient(120deg,_#0B3C5D_0%,_#1E6FB8_40%,_#2E7D32_75%,_#F7931E_100%)]"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-white/70 backdrop-blur-xl border border-slate-100 p-12 md:p-20 rounded-2xl flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-6xl font-black text-[#00263f] mb-8 leading-tight">
            Empower Your <br />
            <span className="text-[#8d4f00]">Child's Future</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mb-12 text-lg leading-relaxed">
            Join the thousands of families who have chosen UIPL institutions for an education
            that goes beyond textbooks.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button
              onClick={() => navigate('/contact')}
              className="bg-[#0b3c5d] text-white px-10 py-5 rounded-xl font-black text-xl shadow-2xl hover:scale-105 transition-transform"
            >
              Contact Us
            </button>
            <button
              onClick={() => navigate('/projects')}
              className="border-2 border-[#00263f]/20 text-[#00263f] px-10 py-5 rounded-xl font-black text-xl hover:bg-[#00263f]/5 transition-all"
            >
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}