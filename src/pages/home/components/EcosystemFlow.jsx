import { Building2, GraduationCap, HeartPulse } from 'lucide-react'

const nodes = [
  {
    icon: Building2,
    title: 'Real Estate',
    desc: 'Premium residential & commercial hubs designed for modern life.',
    color: 'bg-[#0b3c5d]',
    textColor: 'text-[#0b3c5d]',
    position: '-translate-y-20',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    desc: 'World-class institutions fostering the leaders of tomorrow.',
    color: 'bg-[#8d4f00]',
    textColor: 'text-[#8d4f00]',
    position: 'translate-y-20',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    desc: 'Integrated medical facilities prioritizing wellness and access.',
    color: 'bg-[#002a05]',
    textColor: 'text-[#002a05]',
    position: '-translate-y-20',
  },
]

export default function EcosystemFlow() {
  return (
    <section id="sectors" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-black text-[#00263f] mb-4">The UIPL Synthesis</h2>
        <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Our holistic approach ensures every project contributes to a balanced, sustainable,
          and high-quality lifestyle for residents and partners.
        </p>
      </div>

      <div className="relative flex justify-center items-center py-16">
        {/* Orbiting ring */}
        <div className="absolute w-[480px] h-[480px] rounded-full border-4 border-dashed border-slate-200 animate-spin" style={{ animationDuration: '30s' }} />

        {/* Center Core */}
        <div className="z-20 w-36 h-36 bg-white rounded-full shadow-2xl flex items-center justify-center border-8 border-[#eff4ff]">
          <span className="text-2xl font-black text-[#00263f]">UIPL</span>
        </div>

        {/* Sector Nodes */}
        <div className="absolute w-full max-w-4xl flex justify-between px-10">
          {nodes.map(({ icon: Icon, title, desc, color, textColor, position }) => (
            <div
              key={title}
              className={`bg-white/80 backdrop-blur p-6 rounded-2xl shadow-xl border border-slate-100 text-center w-56 ${position} hover:scale-105 transition-transform duration-300`}
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