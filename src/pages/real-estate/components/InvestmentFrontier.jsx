import { CheckCircle } from 'lucide-react'

const metrics = [
  { label: 'Residential Demand', value: '+12.5% YoY' },
  { label: 'Rental Yield',        value: '4.8% Average' },
  { label: 'Commercial Occupancy', value: '92%' },
]

const points = [
  'Fastest growing tier-2 city with rising property valuation.',
  'Expansion of metro and expressway networks connecting major hubs.',
  'Hub for new-age technology and luxury lifestyle brands.',
]

const barHeights = ['h-12', 'h-16', 'h-24', 'h-28']
const barColors  = ['bg-[#fe9824]', 'bg-[#fe9824]', 'bg-[#fe9824]', 'bg-orange-400']

export default function InvestmentFrontier() {
  return (
    <section className="py-24 bg-[#00263f] text-white relative overflow-hidden">
      {/* Background city image */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhS7Quh-FV4xWNXpJCrfCfxTNyi0Ry3LXdEqXmKfhTKnqxPXPUjEfu9yjArqoJg8nTf5juamIC0dZYLRaSDZRLMoIzvi49n0JVZw_vSCWMYnUqoKCRsloc7Mt2bROl6XI6n1h8OKQsfLXJZTUPyAFnSBeHJylhuYUJ6k5f0A6sJKDauHL5cj8GlBgHbMpkkqXT_ueBryhx0pzbmLZa5iT3TZAI2SOv8PE6IfXjCMnIpd3oz9pysSu7a5_8s7xUCJj0kFSWsNWuXSY"
          alt="Aerial city at night"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left text */}
          <div className="space-y-8">
            <span className="text-[#fe9824] font-black tracking-widest text-sm uppercase">
              Growth Potential
            </span>
            <h2 className="text-5xl font-black tracking-tighter">
              Lucknow: The Next{' '}
              <span className="text-[#fe9824]">Investment Frontier</span>
            </h2>
            <div className="space-y-6 text-[#7fa7cd] leading-relaxed text-lg">
              <p>
                With massive infrastructure pushes like the IT City and world-class road
                connectivity, Lucknow is rapidly becoming the commercial heart of North India.
              </p>
              <ul className="space-y-4">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[#fe9824] flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Market snapshot card */}
          <div className="bg-[#0b3c5d] p-10 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-black mb-8">Current Market Snapshot</h3>
            <div className="space-y-5">
              {metrics.map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-slate-300 text-sm">{label}</span>
                  <span className="text-[#fe9824] font-black text-xl">{value}</span>
                </div>
              ))}

              {/* Bar chart */}
              <div className="pt-4">
                <div className="h-32 w-full bg-white/5 rounded-xl flex items-end px-4 gap-2 pb-2">
                  {barHeights.map((h, i) => (
                    <div key={i} className={`flex-1 ${h} ${barColors[i]} rounded-t`} />
                  ))}
                </div>
                <p className="text-[10px] text-center mt-3 opacity-50 uppercase tracking-widest">
                  Projected Growth 2024–2028
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}