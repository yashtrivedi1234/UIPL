import { ShieldCheck, Activity, Stethoscope, Cpu } from 'lucide-react'

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Patient Safety First',
    description: 'Fire-safe zoning, sterile movement loops, and resilient emergency systems are embedded from day one.',
  },
  {
    icon: Activity,
    title: 'Efficient Clinical Flow',
    description: 'Smart adjacencies between diagnostics, ICUs, OTs, and wards reduce transfer time and improve outcomes.',
  },
  {
    icon: Stethoscope,
    title: 'Human-Centered Healing',
    description: 'Calm interiors, daylight strategies, and family comfort zones support faster recovery and wellbeing.',
  },
  {
    icon: Cpu,
    title: 'Future-Ready Systems',
    description: 'Digital command centers and connected infrastructure support telemedicine and predictive maintenance.',
  },
]

export default function HealthcareOverview() {
  return (
    <section className="py-8 px-6 bg-[#f8fbff]" id="overview">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-10">
          <p className="text-sm font-black tracking-[0.18em] uppercase text-[#0b3c5d] mb-3">Healthcare Vision</p>
          <h2 className="text-4xl md:text-5xl text-[#00263f] leading-tight">
            Designed For Clinical Excellence,
            <span className="text-[#0b3c5d]"> Built For Communities</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Every UIPL healthcare destination balances medical rigor with compassionate design,
            ensuring each facility can serve both daily care and critical response with equal confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map(({ icon: Icon, title, description }) => (
            <article key={title} className="bg-white border border-slate-100 rounded-3xl p-7 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#eff6ff] text-[#0b3c5d] flex items-center justify-center mb-5">
                <Icon size={22} />
              </div>
              <h3 className="text-[#00263f] mb-3">{title}</h3>
              <p className="text-slate-600 leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
