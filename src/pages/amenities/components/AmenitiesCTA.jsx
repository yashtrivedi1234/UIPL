import { useNavigate } from 'react-router-dom'

export default function AmenitiesCTA() {
  const navigate = useNavigate()

  return (
    <section className="py-8 relative px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-[2rem] p-12 md:p-20 text-center">
          {/* Gradient background */}
          <div
            className="absolute inset-0 z-0 opacity-90 bg-[linear-gradient(120deg,_#0B3C5D_0%,_#1E6FB8_40%,_#2E7D32_75%,_#F7931E_100%)]"
          />
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Elevate Your Lifestyle
            </h2>
            <p className="text-white/80 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Join the league of elite homeowners. Schedule a private tour of our facilities
              today and witness the UIPL difference.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button
                onClick={() => navigate('/contact')}
                className="bg-white text-[#00263f] px-10 py-4 rounded-xl font-black text-base hover:scale-105 transition-transform shadow-2xl"
              >
                Contact Us
              </button>
              <button
                onClick={() => navigate('/projects')}
                className="bg-[#00263f] text-white border border-white/20 px-10 py-4 rounded-xl font-black text-base hover:bg-[#00263f]/80 transition-all"
              >
                Download Floorplans
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}