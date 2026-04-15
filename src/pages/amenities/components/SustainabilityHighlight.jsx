import { Leaf, Zap, Droplet, Wind, Recycle, Lightbulb } from 'lucide-react'

const ecoFeatures = [
  {
    icon: Zap,
    title: 'Solar Smart Grid',
    description: 'Advanced solar panels generate 60% of power for common areas, reducing carbon footprint by 200 tons annually.',
    stat: '60%',
    statLabel: 'Power Generated'
  },
  {
    icon: Droplet,
    title: 'Water Conservation',
    description: 'Rainwater harvesting and advanced filtration systems reduce water consumption by 40% compared to standard facilities.',
    stat: '40%',
    statLabel: 'Water Saved'
  },
  {
    icon: Leaf,
    title: 'Green Spaces',
    description: 'Over 2 acres of landscaped gardens and vertical green walls enhance air quality and create serene environments.',
    stat: '2+',
    statLabel: 'Acres Green'
  },
  {
    icon: Wind,
    title: 'Air Quality',
    description: 'HEPA filtration systems throughout amenities maintain WHO-standard air quality in all indoor spaces.',
    stat: '99%',
    statLabel: 'Pollutant Removal'
  },
  {
    icon: Recycle,
    title: 'Waste Management',
    description: 'Comprehensive recycling program diverts 85% of waste from landfills through community participation.',
    stat: '85%',
    statLabel: 'Waste Recycled'
  },
  {
    icon: Lightbulb,
    title: 'Smart Lighting',
    description: 'Motion-sensor LED systems automatically adjust brightness, cutting energy usage by 50% in common areas.',
    stat: '50%',
    statLabel: 'Energy Saved'
  },
]

export default function SustainabilityHighlight() {
  return (
    <section className="py-8 bg-gradient-to-br from-[#0b3c5d] to-[#00263f] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          
          <h2 className="">Sustainability First</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Our amenities are designed with environmental responsibility at the core, ensuring a legacy for future generations
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {ecoFeatures.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 hover:bg-white/20 duration-300 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-green-500/20 rounded-lg group-hover:bg-green-500/40 duration-300">
                    <Icon size={28} className="text-green-400" />
                  </div>
                  <span className="text-3xl font-black text-green-400">{feature.stat}</span>
                </div>
                <h3 className="mb-3">{feature.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">{feature.description}</p>
                <p className="text-xs font-bold text-green-400 uppercase tracking-wide">{feature.statLabel}</p>
              </div>
            )
          })}
        </div>

        {/* Impact Stats */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-12">
          <h3 className="mb-10 text-center">Our Environmental Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-black text-green-400 mb-2">200</div>
              <p className="text-slate-300 text-sm">CO₂ Tons Saved</p>
              <p className="text-xs text-slate-400 mt-2">Annually</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-green-400 mb-2">2M+</div>
              <p className="text-slate-300 text-sm">Water Liters Saved</p>
              <p className="text-xs text-slate-400 mt-2">Yearly</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-green-400 mb-2">500+</div>
              <p className="text-slate-300 text-sm">Plants & Trees</p>
              <p className="text-xs text-slate-400 mt-2">On Campus</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-green-400 mb-2">LEED</div>
              <p className="text-slate-300 text-sm">Certified Green</p>
              <p className="text-xs text-slate-400 mt-2">Platinum</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-300 mb-6">Join us in creating a sustainable future</p>
          <button className="px-8 py-3 bg-green-500 text-[#00263f] rounded-xl font-black hover:scale-105 duration-300 hover:bg-green-400">
            Learn More About Our Initiatives
          </button>
        </div>
      </div>
    </section>
  )
}
