const metrics = [
  { value: '99.9%', label: 'Power Uptime Target' },
  { value: '24x7', label: 'Critical Systems Monitoring' },
  { value: '360°', label: 'Infection Control Planning' },
  { value: 'A+', label: 'Patient Comfort Design Standard' },
]

export default function ClinicalExcellence() {
  return (
    <section className="py-24 px-6 bg-[#00263f] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-10">
          <p className="text-cyan-300 text-sm font-black tracking-[0.18em] uppercase mb-3">Performance Backbone</p>
          <h3 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            Clinical Spaces Backed By Engineering Precision
          </h3>
          <p className="text-slate-300 text-lg leading-relaxed">
            From redundancy planning to indoor air quality controls, our healthcare assets are
            engineered to perform at peak standards without compromising patient dignity.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((item) => (
            <div key={item.label} className="bg-white/5 border border-white/15 rounded-2xl p-6">
              <p className="text-4xl font-black text-cyan-200 mb-2">{item.value}</p>
              <p className="text-slate-300">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
