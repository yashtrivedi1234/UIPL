import { Building2, GraduationCap, HeartPulse } from 'lucide-react'

const nodes = [
  {
    icon: Building2,
    title: 'Real Estate',
    desc: 'Premium residential & commercial hubs designed for modern life.',
    color: 'bg-[#0b3c5d]',
    textColor: 'text-[#0b3c5d]',
    // Desktop orbital offset (applied only on lg+)
    desktopPosition: '-translate-y-20',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    desc: 'World-class institutions fostering the leaders of tomorrow.',
    color: 'bg-[#8d4f00]',
    textColor: 'text-[#8d4f00]',
    desktopPosition: 'translate-y-20',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    desc: 'Integrated medical facilities prioritizing wellness and access.',
    color: 'bg-[#002a05]',
    textColor: 'text-[#002a05]',
    desktopPosition: '-translate-y-20',
  },
]

export default function EcosystemFlow() {
  return (
    <section id="sectors" className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-14 lg:mb-16">
        <h2 className="text-3xl sm:text-4xl font-black text-[#00263f] mb-4">The UIPL Synthesis</h2>
        <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
          Our holistic approach ensures every project contributes to a balanced, sustainable,
          and high-quality lifestyle for residents and partners.
        </p>
      </div>

      {/* ── MOBILE / TABLET: vertical stack with connecting line ── */}
      <div className="lg:hidden max-w-sm mx-auto px-4 sm:px-6 flex flex-col items-center gap-0">
        {/* Center core — top */}
        <div className="z-20 w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-full shadow-2xl flex items-center justify-center border-8 border-[#eff4ff] mb-0">
          <span className="text-xl sm:text-2xl font-black text-[#00263f]">UIPL</span>
        </div>

        {/* Vertical connector line */}
        <div className="w-0.5 h-6 bg-dashed bg-slate-200" style={{ background: 'repeating-linear-gradient(to bottom, #cbd5e1 0px, #cbd5e1 6px, transparent 6px, transparent 12px)' }} />

        {/* Cards stacked vertically */}
        <div className="flex flex-col items-center gap-0 w-full">
          {nodes.map(({ icon: Icon, title, desc, color, textColor }, i) => (
            <div key={title} className="flex flex-col items-center w-full">
              <div className="bg-white/90 backdrop-blur p-5 sm:p-6 rounded-2xl shadow-lg border border-slate-100 text-center w-full hover:scale-[1.02] transition-transform duration-300">
                <div className={`w-11 h-11 sm:w-12 sm:h-12 ${color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className={`font-black text-base sm:text-lg mb-1.5 ${textColor}`}>{title}</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
              {/* connector between cards */}
              {i < nodes.length - 1 && (
                <div className="w-0.5 h-5 sm:h-6" style={{ background: 'repeating-linear-gradient(to bottom, #cbd5e1 0px, #cbd5e1 6px, transparent 6px, transparent 12px)' }} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── DESKTOP: original orbital layout ── */}
      <div className="hidden lg:flex relative justify-center items-center py-16">
        {/* Orbiting ring */}
        <div
          className="absolute w-[480px] h-[480px] rounded-full border-4 border-dashed border-slate-200 animate-spin"
          style={{ animationDuration: '30s' }}
        />

        {/* Center Core */}
        <div className="z-20 w-36 h-36 bg-white rounded-full shadow-2xl flex items-center justify-center border-8 border-[#eff4ff]">
          <span className="text-2xl font-black text-[#00263f]">UIPL</span>
        </div>

        {/* Sector Nodes */}
        <div className="absolute w-full max-w-4xl flex justify-between px-10">
          {nodes.map(({ icon: Icon, title, desc, color, textColor, desktopPosition }) => (
            <div
              key={title}
              className={`bg-white/80 backdrop-blur p-6 rounded-2xl shadow-xl border border-slate-100 text-center w-56 ${desktopPosition} hover:scale-105 transition-transform duration-300`}
            >
              <div className={`w-12 h-12 ${color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <Icon size={22} className="text-white" />
              </div>
              <h3 className={`font-black text-lg mb-2 ${textColor}`}>{title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}