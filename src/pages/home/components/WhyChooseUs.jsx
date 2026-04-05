import { ShieldCheck, TrendingUp, Lightbulb, Leaf, ArrowRight } from 'lucide-react'

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#eff4ff]" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Main Feature Card */}
          <div className="col-span-1 md:col-span-2 bg-white p-10 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-black text-[#00263f] mb-5 leading-tight">
              Built on Foundations of Trust and Innovation
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-8 max-w-lg">
              UIPL isn't just a construction company — we are ecosystem designers. With decades of
              excellence, we've mastered creating spaces where growth is inevitable and security
              is paramount.
            </p>
            <div className="grid grid-cols-3 gap-6 border-t border-slate-100 pt-8">
              {[
                { val: '25+', label: 'Years of Excellence' },
                { val: '10k+', label: 'Families Served' },
                { val: '98%', label: 'On-Time Delivery' },
              ].map(({ val, label }) => (
                <div key={label}>
                  <div className="text-3xl font-black text-[#8d4f00]">{val}</div>
                  <div className="text-xs font-bold text-[#0b3c5d] uppercase tracking-wide mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Card */}
          <div className="bg-[#0b3c5d] p-10 rounded-2xl text-white relative overflow-hidden">
            <ShieldCheck size={36} className="text-orange-400 mb-5" />
            <h3 className="text-2xl font-black mb-3">Unwavering Trust</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Every brick laid by UIPL carries a promise of transparency and structural integrity
              that lasts generations.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-white font-bold text-sm hover:gap-4 transition-all">
              Learn More <ArrowRight size={16} />
            </a>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
          </div>

          {/* Scalable Growth */}
          <div className="bg-[#8d4f00] p-10 rounded-2xl text-white">
            <TrendingUp size={36} className="text-white mb-5" />
            <h3 className="text-2xl font-black mb-3">Scalable Growth</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Our strategic focus in Lucknow ensures your investments grow as rapidly as the
              city's infrastructure.
            </p>
          </div>

          {/* Smart Innovation */}
          <div className="bg-[#002a05] p-10 rounded-2xl text-white">
            <Lightbulb size={36} className="text-white mb-5" />
            <h3 className="text-2xl font-black mb-3">Smart Innovation</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Integrating AI-driven security and IoT-enabled home features in every flagship
              project.
            </p>
          </div>

          {/* Sustainability */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
            <Leaf size={36} className="text-[#0b3c5d] mb-5" />
            <h3 className="text-2xl font-black text-[#00263f] mb-3">Sustainability</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Prioritizing green belts and energy-efficient designs in all our developments.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}