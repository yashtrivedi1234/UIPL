import { Leaf, Droplet, Sun, Zap, Trees, Wind } from 'lucide-react'

export default function SustainabilityGreen() {
  const initiatives = [
    {
      icon: Leaf,
      title: 'Green Building Design',
      description: 'LEED-certified construction with sustainable materials, energy-efficient systems, and eco-friendly practices.'
    },
    {
      icon: Droplet,
      title: 'Water Conservation',
      description: 'Advanced rainwater harvesting, wastewater recycling, and smart irrigation systems to reduce water consumption by 40%.'
    },
    {
      icon: Sun,
      title: 'Renewable Energy',
      description: 'Solar panel installations, solar water heaters, and renewable energy integration across all projects.'
    },
    {
      icon: Zap,
      title: 'Energy Efficiency',
      description: 'LED lighting, smart building automation, and efficient HVAC systems reducing energy consumption significantly.'
    },
    {
      icon: Trees,
      title: 'Urban Forestry',
      description: '50,000+ trees planted across UIPL communities creating green spaces and improving air quality.'
    },
    {
      icon: Wind,
      title: 'Air Quality Management',
      description: 'Air purification systems, pollution monitoring, and green buffer zones for healthier living environments.'
    }
  ]

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-gradient-to-br from-green-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[10px] sm:text-xs font-black uppercase text-green-600 tracking-widest block mb-3 sm:mb-4">
            Environmental Commitment
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#00263f] mb-4 sm:mb-6">
            Sustainability & Green Initiatives
          </h2>
          <p className="text-slate-500 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Building sustainable communities that thrive today and protect our planet for tomorrow.
          </p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {initiatives.map((init, index) => {
            const IconComponent = init.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 sm:p-7 lg:p-8 border border-slate-200 hover:border-green-400 hover:shadow-lg transition-all group"
              >
                <div className="bg-green-100 w-14 sm:w-16 h-14 sm:h-16 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-green-200 transition-colors">
                  <IconComponent size={28} className="text-green-700 sm:w-[32px] sm:h-[32px]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#00263f] mb-2 sm:mb-3">
                  {init.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {init.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Impact Stats */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 sm:p-10 lg:p-12 mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-black text-white mb-8 text-center">
            Our Environmental Impact
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '50k+', label: 'Trees Planted' },
              { number: '40%', label: 'Water Saved' },
              { number: '60%', label: 'Energy Reduced' },
              { number: '100%', label: 'Waste Recycled' }
            ].map((impact, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-white mb-2">
                  {impact.number}
                </div>
                <div className="text-green-100 text-sm sm:text-base font-semibold">
                  {impact.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-lg sm:text-xl font-bold text-[#00263f] mb-6 sm:mb-8">
            Industry Certifications & Recognition
          </h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {['LEED Certified', 'ISO 14001', 'Green Building', 'Carbon Neutral', 'Net Zero Energy'].map((cert, idx) => (
              <div
                key={idx}
                className="bg-green-100 text-green-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wide border border-green-300"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
