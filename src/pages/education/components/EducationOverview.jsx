import { Leaf, Bot } from 'lucide-react'

export default function EducationOverview() {
  return (
    <section className="py-24 bg-[#f8f9ff] relative overflow-hidden" id="overview">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* Image side */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#8d4f00]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl -rotate-2">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2qIEYpcGHwl9kgq8X6CmVPH1-2p5_eAxxCDXqMgya-VwuwC8h55SLGoD2eipW5i1G694b8bVW2G4Flqc2ZlYaEgcY5gEiKDPdNZoPnpCFBjl9ZKdvGTjFcTbSWedWoe1WNYohwmueSfVsI_6sKdQOPtHzFvgsSBS5jyp7cHX1ec6ImOBmTzdT9lmQoTFrskz5gvj3QK5045RCKf0GKM_pA1rjJM5qMVM5u7r3gK5sstUbBUl_2zeUekMbQmwQhHxTgV8SBSyswS4"
                alt="Students collaborating in modern library"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            {/* Stat badge */}
            <div className="absolute -bottom-8 -right-8 w-64 h-auto bg-white/70 backdrop-blur-xl border border-slate-100 p-8 rounded-2xl shadow-xl hidden md:block">
              <div className="text-[#8d4f00] text-4xl font-black mb-2">15+</div>
              <div className="text-slate-500 text-xs font-black uppercase tracking-widest leading-tight">
                State-of-the-art Institutions Globally
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-[#00263f] leading-tight">
              A Vision Beyond <br />
              <span className="text-[#8d4f00]">Classroom Walls</span>
            </h2>
            <div
              className="w-20 h-1.5 rounded-full"
              style={{ background: 'linear-gradient(120deg, #0B3C5D 0%, #1E6FB8 40%, #2E7D32 75%, #F7931E 100%)' }}
            />
            <p className="text-lg text-slate-500 leading-relaxed">
              UIPL views education as the cornerstone of societal advancement. Our approach
              integrates sustainable infrastructure with cutting-edge pedagogical tools to foster
              an environment where curiosity meets capability.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed">
              From primary schools to specialized research universities, we design spaces that
              encourage cross-disciplinary interaction, mental well-being, and technological fluency.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-center gap-3">
                <Leaf size={28} className="text-[#8d4f00] flex-shrink-0" />
                <span className="font-black text-[#00263f] text-sm">Sustainable Design</span>
              </div>
              <div className="flex items-center gap-3">
                <Bot size={28} className="text-[#8d4f00] flex-shrink-0" />
                <span className="font-black text-[#00263f] text-sm">AI-Integrated Labs</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}