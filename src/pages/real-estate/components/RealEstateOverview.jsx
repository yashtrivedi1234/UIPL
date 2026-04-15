const stats = [
  { value: '15+', label: 'Completed',    color: 'text-[#00263f]' },
  { value: '2M',  label: 'Sq. Ft. Built', color: 'text-[#8d4f00]' },
  { value: '500+', label: 'Families',     color: 'text-[#002a05]' },
]

export default function RealEstateOverview() {
  return (
    <section className="py-8 bg-[#f8f9ff] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Text */}
        <div className="space-y-8">
          <h2 className="text-5xl tracking-tighter text-[#00263f]">
            Urban Innovation Meets{' '}
            <span className="text-[#8d4f00]">Mastery.</span>
          </h2>
          <div className="space-y-5 text-slate-500 text-lg leading-relaxed">
            <p>
              UIPL stands as a beacon of architectural integrity. Our commitment goes beyond
              concrete and steel; we build ecosystems that thrive on innovation, sustainability,
              and human-centric design.
            </p>
            <p>
              With a legacy of redefining Lucknow's topography, every UIPL project is a
              testament to high-quality construction and visionary urban planning.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8 pt-6 border-t border-slate-100">
            {stats.map(({ value, label, color }) => (
              <div key={label}>
                <div className={`text-4xl ${color}`}>{value}</div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#8d4f00]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="rounded-2xl overflow-hidden shadow-2xl relative">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmWApIMAG9UoVOxy-dIepFAg6YwACR9eAwNWRzNHm7x5OYrxS_C7GgCy9t-1VQ0zX7WyfoPX5OrpODf8aanoKcmHhgah7WC9tKBkeMnXYxseJ4-6nyT4uZiT7DRpZvvapiGmPr0-1L4E0Xj3e_gVHTuOcugqpNFXVUpeCRvEjLD-dxnUMSFOvheH_SxMJm5u0yqyu3ipC4kOJhUhkMC6z-aLbOyg7x_m2kQu7rt6SNpoeNduwkMgPsuhAsSbGq6wRSMV5mcuMhP4s"
              alt="Modern glass office building"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-white/70 backdrop-blur-xl border-t border-slate-100 rounded-b-2xl">
              <p className="italic text-[#00263f] font-semibold text-sm">
                "Defining the next generation of urban living through precision and passion."
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}