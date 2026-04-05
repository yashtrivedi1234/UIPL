import { Eye, Rocket } from 'lucide-react'

export default function VisionMission() {
  return (
    <section className="py-28 bg-[#eff4ff]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">

          {/* Vision */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border-b-8 border-[#fe9824] hover:-translate-y-2 transition-transform duration-500">
            <div className="w-14 h-14 bg-orange-100 mb-7 flex items-center justify-center rounded-xl">
              <Eye size={28} className="text-[#8d4f00]" />
            </div>
            <h2 className="text-3xl font-black text-[#00263f] mb-5">Our Vision</h2>
            <p className="text-slate-500 leading-relaxed mb-7">
              To be the bedrock upon which future generations build their dreams, crafting
              environments that harmonize technological advancement with ecological balance.
            </p>
            <div className="flex gap-6">
              <div>
                <span className="text-[#8d4f00] font-black block">Innovation</span>
                <span className="text-xs text-slate-400">Continuous R&D</span>
              </div>
              <div className="w-px bg-slate-200" />
              <div>
                <span className="text-[#8d4f00] font-black block">Integrity</span>
                <span className="text-xs text-slate-400">Zero Compromise</span>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border-b-8 border-[#002a05] hover:-translate-y-2 transition-transform duration-500">
            <div className="w-14 h-14 bg-green-100 mb-7 flex items-center justify-center rounded-xl">
              <Rocket size={28} className="text-[#002a05]" />
            </div>
            <h2 className="text-3xl font-black text-[#00263f] mb-5">Our Mission</h2>
            <p className="text-slate-500 leading-relaxed mb-7">
              Delivering high-precision infrastructure solutions that exceed global standards,
              utilizing cutting-edge materials and a legacy of engineering excellence.
            </p>
            <div className="flex gap-6">
              <div>
                <span className="text-[#002a05] font-black block">Sustainability</span>
                <span className="text-xs text-slate-400">Eco-first logic</span>
              </div>
              <div className="w-px bg-slate-200" />
              <div>
                <span className="text-[#002a05] font-black block">Precision</span>
                <span className="text-xs text-slate-400">Digital modeling</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}