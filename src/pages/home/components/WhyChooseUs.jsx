import { ShieldCheck, TrendingUp, Lightbulb, Leaf, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#eff4ff]" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">

          {/* Main Feature Card — full width on mobile, spans 2 cols on lg */}
          <div className="col-span-1 sm:col-span-2 bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#00263f] mb-4 sm:mb-5 leading-tight">
              Built on Foundations of Trust and Innovation
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-lg">
              UIPL isn't just a construction company — we are ecosystem designers. With decades of
              excellence, we've mastered creating spaces where growth is inevitable and security
              is paramount.
            </p>
            <div className="grid grid-cols-3 gap-3 sm:gap-6 border-t border-slate-100 pt-6 sm:pt-8">
              {[
                { val: '25+', label: 'Years of Excellence' },
                { val: '10k+', label: 'Families Served' },
                { val: '98%', label: 'On-Time Delivery' },
              ].map(({ val, label }) => (
                <div key={label}>
                  <div className="text-2xl sm:text-3xl font-black text-[#8d4f00]">{val}</div>
                  <div className="text-[10px] sm:text-xs font-bold text-[#0b3c5d] uppercase tracking-wide mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Card */}
          <div className="col-span-1 bg-[#0b3c5d] p-6 sm:p-8 lg:p-10 rounded-2xl text-white relative overflow-hidden">
            <ShieldCheck size={32} className="text-orange-400 mb-4 sm:mb-5 sm:w-9 sm:h-9" />
            <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3">Unwavering Trust</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-5 sm:mb-6">
              Every brick laid by UIPL carries a promise of transparency and structural integrity
              that lasts generations.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-white font-bold text-sm hover:gap-4 transition-all">
              Learn More <ArrowRight size={16} />
            </Link>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          </div>

          {/* Scalable Growth */}
          <div className="col-span-1 bg-[#8d4f00] p-6 sm:p-8 lg:p-10 rounded-2xl text-white">
            <TrendingUp size={32} className="text-white mb-4 sm:mb-5 sm:w-9 sm:h-9" />
            <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3">Scalable Growth</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Our strategic focus in Lucknow ensures your investments grow as rapidly as the
              city's infrastructure.
            </p>
          </div>

          {/* Smart Innovation */}
          <div className="col-span-1 bg-[#002a05] p-6 sm:p-8 lg:p-10 rounded-2xl text-white">
            <Lightbulb size={32} className="text-white mb-4 sm:mb-5 sm:w-9 sm:h-9" />
            <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3">Smart Innovation</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Integrating AI-driven security and IoT-enabled home features in every flagship
              project.
            </p>
          </div>

          {/* Sustainability */}
          <div className="col-span-1 bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-sm border border-slate-100">
            <Leaf size={32} className="text-[#0b3c5d] mb-4 sm:mb-5 sm:w-9 sm:h-9" />
            <h3 className="text-xl sm:text-2xl font-black text-[#00263f] mb-2 sm:mb-3">Sustainability</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Prioritizing green belts and energy-efficient designs in all our developments.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}