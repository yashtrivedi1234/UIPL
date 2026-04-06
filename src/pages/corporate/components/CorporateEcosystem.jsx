import { Building2, GraduationCap, HeartPulse } from 'lucide-react'

const nodes = [
  {
    icon: Building2,
    title: 'Real Estate',
    desc: 'Premium residential & commercial hubs designed for modern life.',
    bg: 'bg-[#0b3c5d]',
    offset: '-translate-y-20',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    desc: 'World-class institutions fostering the leaders of tomorrow.',
    bg: 'bg-[#fe9824]',
    offset: 'translate-y-20',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    desc: 'Integrated medical facilities prioritizing wellness and access.',
    bg: 'bg-[#88d982]',
    offset: '-translate-y-20',
  },
]

export default function CorporateEcosystem() {
  return (
    <section className="py-24 bg-[#f8f9ff] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-black text-[#00263f] mb-4">The UIPL Synthesis</h2>
        <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Our holistic approach ensures that every project contributes to a balanced,
          sustainable, and high-quality lifestyle for our residents and partners.
        </p>
      </div>

      <div className="relative flex justify-center items-center py-20">
        {/* Orbiting ring */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full border-4 border-dashed border-slate-200 animate-spin pointer-events-none"
          style={{ animationDuration: '30s' }}
        />

        {/* Center core */}
        <div className="z-20 w-40 h-40 bg-white rounded-full shadow-2xl flex items-center justify-center border-8 border-[#eff4ff]">
          <span className="text-3xl font-black text-[#00263f]">UIPL</span>
        </div>

        {/* Nodes */}
        <div className="absolute w-full max-w-4xl flex justify-between px-10">
          {nodes.map(({ icon: Icon, title, desc, bg, offset }) => (
            <div
              key={title}
              className={`bg-white/80 backdrop-blur p-6 rounded-2xl shadow-xl border border-slate-100 text-center w-56 ${offset} hover:scale-105 transition-transform duration-300`}
            >
              <div className={`w-12 h-12 ${bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <Icon size={20} className="text-white" />
              </div>
              <h3 className="font-black text-lg text-[#00263f] mb-2">{title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}