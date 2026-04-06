import { Shield, Waves, Dumbbell, TreePine } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const amenities = [
  {
    icon: Shield,
    title: '24/7 Security',
    desc: 'AI-monitored surveillance and elite guard patrols.',
    color: 'text-[#0b3c5d]',
    desktopOffset: 'lg:translate-y-0',
  },
  {
    icon: Waves,
    title: 'Infinity Pools',
    desc: 'Temperature-controlled leisure zones for residents.',
    color: 'text-[#002a05]',
    desktopOffset: 'lg:translate-y-8',
  },
  {
    icon: Dumbbell,
    title: 'Smart Gyms',
    desc: 'Integrated fitness ecosystems with personal AI trainers.',
    color: 'text-[#8d4f00]',
    desktopOffset: 'lg:translate-y-0',
  },
  {
    icon: TreePine,
    title: 'Zen Gardens',
    desc: 'Lush green belts for air purification and tranquility.',
    color: 'text-[#0b3c5d]',
    desktopOffset: 'lg:translate-y-8',
  },
]

export default function AmenitiesSection() {
  const navigate = useNavigate()

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-16 items-center">

          {/* Text Side — comes first on mobile for better reading flow */}
          <div className="lg:w-1/2 text-center lg:text-left order-1 lg:order-2">
            <span className="text-xs font-black uppercase text-[#8d4f00] tracking-widest block mb-3 sm:mb-4">
              Life at UIPL
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#00263f] mb-5 sm:mb-7 leading-tight">
              Elevating Every Aspect of Your Lifestyle
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
              We believe infrastructure should serve humanity, not just house it. Our
              developments feature cutting-edge amenities that prioritize your physical safety
              and mental well-being.
            </p>
            <button
              onClick={() => navigate('/amenities')}
              className="bg-[#00263f] text-white px-7 sm:px-10 py-3.5 sm:py-4 rounded-xl font-black shadow-xl hover:-translate-y-1 transition-transform text-sm sm:text-base w-full sm:w-auto"
            >
              Download Lifestyle Brochure
            </button>
          </div>

          {/* Amenity Cards Grid */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5 order-2 lg:order-1 w-full">
            {amenities.map(({ icon: Icon, title, desc, color, desktopOffset }) => (
              <div
                key={title}
                className={`p-4 sm:p-5 lg:p-7 rounded-2xl bg-[#eff4ff] border border-slate-100 hover:shadow-md transition-shadow ${desktopOffset}`}
              >
                <Icon size={24} className={`${color} mb-3 sm:mb-4 sm:w-8 sm:h-8`} />
                <h4 className="font-black text-[#00263f] mb-1.5 sm:mb-2 text-sm sm:text-base">{title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}