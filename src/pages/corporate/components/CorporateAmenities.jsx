import { Shield, Waves, Dumbbell, TreePine } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const items = [
  { icon: Shield,   title: '24/7 Security',  desc: 'AI-monitored surveillance and elite guard patrols.',              color: 'text-[#0b3c5d]', offset: '' },
  { icon: Waves,    title: 'Infinity Pools',  desc: 'Temperature-controlled leisure zones for residents.',            color: 'text-[#002a05]', offset: 'translate-y-8' },
  { icon: Dumbbell, title: 'Smart Gyms',      desc: 'Integrated fitness ecosystems with personal AI trainers.',        color: 'text-[#8d4f00]', offset: '' },
  { icon: TreePine, title: 'Zen Gardens',     desc: 'Lush green belts for air purification and tranquility.',         color: 'text-[#0b3c5d]', offset: 'translate-y-8' },
]

export default function CorporateAmenities() {
  const navigate = useNavigate()

  return (
    <section className="py-24 bg-[#f8f9ff]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Grid of amenity cards */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-5">
            {items.map(({ icon: Icon, title, desc, color, offset }) => (
              <div
                key={title}
                className={`p-7 rounded-2xl bg-[#eff4ff] border border-slate-100 hover:shadow-md transition-shadow ${offset}`}
              >
                <Icon size={32} className={`${color} mb-4`} />
                <h4 className="font-black text-[#00263f] mb-2">{title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Text side */}
          <div className="lg:w-1/2">
            <span className="text-xs font-black uppercase text-[#8d4f00] tracking-widest block mb-4">
              Life at UIPL
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-[#00263f] mb-7 leading-tight">
              Elevating Every Aspect of Your Lifestyle
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              We believe infrastructure should serve humanity, not just house it. Our developments
              feature cutting-edge amenities that prioritize your physical safety and mental
              well-being.
            </p>
            <button
              onClick={() => navigate('/amenities')}
              className="bg-[#00263f] text-white px-10 py-4 rounded-xl font-black shadow-xl hover:-translate-y-1 transition-transform"
            >
              Download Lifestyle Brochure
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}