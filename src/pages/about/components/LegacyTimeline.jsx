const milestones = [
  {
    year: '2010',
    title: 'The Genesis',
    desc: 'UIPL was founded with a single crane and a monumental vision: to redefine the skyline of modern urban centers through sustainable engineering.',
    dotColor: 'bg-[#8d4f00]',
  },
  {
    year: '2015',
    title: 'Sector Diversification',
    desc: 'Expansion into smart-city infrastructure and green energy grids, marking our transition into an integrated infrastructure powerhouse.',
    dotColor: 'bg-[#002a05]',
  },
  {
    year: '2023',
    title: 'The Monolith Era',
    desc: 'Completion of our 100th major project, reaching a valuation of $2B and solidifying our status as a global architectural vanguard.',
    dotColor: 'bg-[#00263f]',
  },
]

export default function LegacyTimeline() {
  return (
    <section className="py-28 px-6 bg-[#f8f9ff]">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-[#00263f] mb-4">Our Legacy</h2>
          <div className="w-20 h-1 bg-[#8d4f00] mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-slate-200 hidden md:block" />

          {milestones.map(({ year, title, desc, dotColor }, i) => {
            const isEven = i % 2 === 0
            return (
              <div
                key={year}
                className={`flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} items-center justify-between mb-20 relative`}
              >
                {/* Card */}
                <div className="md:w-[45%] mb-6 md:mb-0">
                  <div className="bg-white/70 backdrop-blur-xl border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-500">
                    <span className="text-[#8d4f00] font-black text-4xl mb-2 block">{year}</span>
                    <h3 className="text-xl font-black text-[#00263f] mb-3">{title}</h3>
                    <p className="text-slate-500 leading-relaxed text-sm">{desc}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className={`hidden md:block w-4 h-4 ${dotColor} rounded-full absolute left-1/2 -translate-x-1/2 z-10 border-4 border-white shadow-md`} />

                {/* Spacer */}
                <div className="md:w-[45%]" />
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}