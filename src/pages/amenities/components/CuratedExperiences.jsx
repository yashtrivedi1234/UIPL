import { Shield, CheckCircle, Zap, ParkingCircle } from 'lucide-react'

const securityPoints = [
  '24/7 AI Surveillance',
  'Biometric Access Control',
  'Fire Safety Network',
]

export default function CuratedExperiences() {
  return (
    <section className="py-24 bg-[#f8f9ff]" id="amenities">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black text-[#00263f] mb-4">Curated Experiences</h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Every detail is engineered to enhance your daily life, from advanced security
              protocols to world-class social hubs.
            </p>
          </div>
          <div
            className="h-1 w-24 rounded-full flex-shrink-0"
            style={{ background: 'linear-gradient(120deg, #0B3C5D 0%, #1E6FB8 40%, #2E7D32 75%, #F7931E 100%)' }}
          />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

          {/* Elite Lifestyle — large card with image */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-2xl h-[500px]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUGXC5Ckp16kTwoOZH4Vo6H7BDW1uq0PW2fwIFqESJ0_WqdNOAQ0rSqZXg4KWrCKgHUZ_Ian7_n4HuLn7cRsAEwrENcviFUbcXVjZstZ3UNO7IlZsBgL9fpLWtENRrJhH50Pb-MfC9_iMlUQUsKWCWYn7S09arVzIqiqf0pwP2m2B2W3dEOLKgZT8RZR_b_JYJM5tkY9R3sMsNSZBGjhz_ne0TYAvzvLQDMomMqAcTzV9gmIg1M7FqQkxiCozP1l81SJLh8r-qCLs"
              alt="Indoor infinity pool overlooking city"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00263f]/90 via-[#00263f]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-10 w-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🏊</span>
                <h3 className="text-3xl font-black text-white">Elite Lifestyle</h3>
              </div>
              <p className="text-slate-200 max-w-lg mb-6 text-sm leading-relaxed">
                Designed for those who seek the extraordinary. Our social clubs and leisure spaces
                provide the perfect backdrop for networking and relaxation.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Infinity Pools', 'Global Gyms', 'Social Clubs'].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-white/10 backdrop-blur rounded-full text-sm text-white border border-white/10 font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Security — glass card */}
          <div className="md:col-span-4 bg-white/70 backdrop-blur-xl p-10 flex flex-col justify-between border border-slate-200/40 rounded-2xl">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-[#0b3c5d] flex items-center justify-center mb-8 shadow-lg">
                <Shield size={28} className="text-white fill-white" />
              </div>
              <h3 className="text-2xl font-black text-[#00263f] mb-4">Uncompromised Security</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                Safety is our bedrock. We employ multi-layered surveillance and elite
                rapid-response systems to ensure total peace of mind for every resident.
              </p>
            </div>
            <ul className="space-y-4 mt-8">
              {securityPoints.map((point) => (
                <li key={point} className="flex items-center gap-3 text-[#00263f] font-semibold text-sm">
                  <CheckCircle size={18} className="text-[#002a05] flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Smart Infrastructure */}
          <div className="md:col-span-4 bg-[#eff4ff] p-10 border border-slate-100 rounded-2xl">
            <Zap size={44} className="text-[#a3cbf2] mb-6" />
            <h3 className="text-2xl font-black text-[#00263f] mb-4">Smart Infrastructure</h3>
            <p className="text-slate-500 mb-6 text-sm leading-relaxed">
              The invisible systems that make life seamless. From underground automated parking
              to sustainable water harvesting systems.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl shadow-sm">
                <Zap size={22} className="text-[#8d4f00] mb-2" />
                <span className="text-sm font-black text-[#00263f]">EV Charging</span>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-sm">
                <ParkingCircle size={22} className="text-[#8d4f00] mb-2" />
                <span className="text-sm font-black text-[#00263f]">Valet Tech</span>
              </div>
            </div>
          </div>

          {/* Green Lung — image card */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-2xl aspect-video">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfxTUV0XiMZt9KrFT3yvJOoG6RdbVR9s6c3OaKkKHV8NcymHZCt1q-Uf_HTwvokU9SNNjnDXvp5Hm9_fhvVA_gqcUe2VTE-Tvu08NpXIDKAZUz2bp9GeWz2k4F6k8YhG6MjjUxJhwzdr76qBY7HPuDwgM2JZIWO0o6SZS_PDh0iGV7CG1hTUCUQnc9zp0TwcoF2-BeHoJMmTrr7gihaYohbFWdRwjkVzEjVaIIoDtBqIoYQKL7XYI_Rs8B6lpa0mLEOHXzZOdoCt0"
              alt="Lush landscaped tropical garden"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[#00263f]/30 group-hover:bg-[#00263f]/20 transition-colors" />
            <div className="absolute top-8 left-8">
              <span className="px-6 py-2 bg-white/10 backdrop-blur text-white rounded-full font-black border border-white/20">
                The Green Lung
              </span>
            </div>
            <div className="absolute bottom-8 right-8 text-right text-white">
              <h4 className="text-3xl font-black mb-2">40% Green Coverage</h4>
              <p className="text-slate-100 text-sm max-w-xs ml-auto">
                Biophilic designs integrated into urban infrastructure for wellness.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}