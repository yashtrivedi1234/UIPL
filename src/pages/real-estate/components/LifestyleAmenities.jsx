import { Waves, ShieldCheck, Trees, Users } from 'lucide-react'

const amenities = [
  {
    icon: Waves,
    title: 'Infinity Pools',
    desc: 'Temperature-controlled aquatic spaces designed for relaxation and rejuvenation.',
  },
  {
    icon: ShieldCheck,
    title: '24/7 Security',
    desc: 'Multi-tier surveillance and biometric access systems for absolute peace of mind.',
  },
  {
    icon: Trees,
    title: 'Landscaping',
    desc: 'Thematic gardens and lush green promenades that breathe life into the architecture.',
  },
  {
    icon: Users,
    title: 'Social Clubs',
    desc: 'Exclusive community spaces, banquet halls, and leisure zones for curated networking.',
  },
]

export default function LifestyleAmenities() {
  return (
    <section className="py-8 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10 space-y-4">
          <h2 className="text-5xl tracking-tighter text-[#00263f]">Lifestyle Beyond Luxury</h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Every project is designed with a suite of premium amenities that elevate daily
            living into a resort-like experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {amenities.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-8 rounded-2xl bg-[#eff4ff] hover:bg-white transition-colors duration-300 shadow-sm hover:shadow-xl group"
            >
              <div className="w-16 h-16 bg-[#00263f]/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#00263f] transition-colors duration-300">
                <Icon size={26} className="text-[#00263f] group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-[#00263f] mb-3">{title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}