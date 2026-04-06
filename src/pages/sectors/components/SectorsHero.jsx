export default function SectorsHero() {
  return (
    <header className="relative pt-36 pb-24 px-6 overflow-hidden bg-[#f8f9ff]">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="w-full md:w-2/3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#0b3c5d]/10 text-[#00263f] font-black text-xs uppercase tracking-widest mb-6">
            World Class Standards
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#00263f] tracking-tighter leading-tight mb-8">
            Our Sectors of {""}
            <span className="text-[#fe9824]">Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed">
            UIPL stands at the intersection of vision and utility, shaping the fundamental
            pillars of society through precision engineering and sustainable development.
          </p>
        </div>
      </div>

      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#cee5ff]/20 to-transparent -z-10 blur-3xl rounded-full translate-x-1/4 -translate-y-1/4" />
    </header>
  )
}