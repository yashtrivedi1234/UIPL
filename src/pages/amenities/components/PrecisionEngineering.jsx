import { Dumbbell, Sparkles, Sun, Droplets, Flame, Video } from 'lucide-react'

const specs = [
  {
    col: 'Lifestyle',
    items: [
      {
        icon: Dumbbell,
        iconColor: 'text-[#ffdcc0]',
        title: 'Pro-Grade Gyms',
        desc: 'Equipped with the latest cardio and strength training tech from leading global brands.',
      },
      {
        icon: Sparkles,
        iconColor: 'text-[#ffdcc0]',
        title: 'Wellness Spas',
        desc: 'Holistic treatment centers including hydrotherapy and private massage suites.',
      },
    ],
  },
  {
    col: 'Infrastructure',
    items: [
      {
        icon: Sun,
        iconColor: 'text-[#88d982]',
        title: 'Solar Smart Grid',
        desc: 'Sustainable energy harvesting powering all common areas and external lighting.',
      },
      {
        icon: Droplets,
        iconColor: 'text-[#88d982]',
        title: 'Advanced Filtration',
        desc: 'Centralized water purification systems ensuring 24/7 potable water supply.',
      },
    ],
  },
  {
    col: 'Security',
    items: [
      {
        icon: Flame,
        iconColor: 'text-red-400',
        title: 'Fire Suppression',
        desc: 'Next-gen heat-sensing sprinkler systems and dedicated emergency exits.',
      },
      {
        icon: Video,
        iconColor: 'text-[#7fa7cd]',
        title: 'Perimeter Control',
        desc: 'Lidar-based movement detection across the entire project perimeter.',
      },
    ],
  },
]

export default function PrecisionEngineering() {
  return (
    <section className="py-24 bg-[#00263f] text-white relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full opacity-10 blur-[120px] pointer-events-none bg-[linear-gradient(120deg,_#0B3C5D_0%,_#1E6FB8_40%,_#2E7D32_75%,_#F7931E_100%)]"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black mb-4">Precision Engineering</h2>
          <p className="text-[#a3cbf2] text-lg max-w-2xl mx-auto">
            Behind the luxury lies a world of technical excellence and meticulous planning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {specs.map(({ col, items }) => (
            <div key={col} className="space-y-10">
              {items.map(({ icon: Icon, iconColor, title, desc }) => (
                <div key={title} className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                    <Icon size={22} className={iconColor} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black mb-2">{title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}