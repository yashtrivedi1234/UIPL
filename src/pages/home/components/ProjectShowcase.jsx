const projects = [
  {
    title: 'UIPL Emerald Heights',
    location: 'Gomti Nagar Extension, Lucknow',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCn6joYhDQO8oQMQI46DOeMqOkAxBuCFthI_rvZV0quh1AzkgaHXnydCHWldhVYyizNKFFt7b1PP9GWzePYypBPKKYQrOwIEyqdkUhymbJ-eTRf1y39Kda9k9PYBxQ3QZs6YicuBZ_QrI_-lW3FNrIHxkyuZ8s6SSEbq3mCGbBVDSCc7lGfesIJbk2keW-ks8STRgDTL3l-nh4iZL269aZ29iOtW_BrIwbyj42M5yq344qGgRWb0f1S54I36yKFbJl0bSbKuHJpa_A',
    // Desktop aspect ratios for masonry variety
    desktopAspect: 'md:aspect-[4/5]',
  },
  {
    title: 'UIPL Business Plaza',
    location: 'Hazratganj Financial District',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmQ06kWNQku6KMuJxbTyJ8NZk1c44HF1u7UEk95rUcIGOnBNy0H3hr2BNx2QoJO34GWKms6u9JsoWaA9VEWZWeaGAoMZmJovG4SNPHEsv6KXsmyxJGXUr121bY1_rwfY7tjdRoqG-9gcINF7fxu-ebZX0qzIWwZBit8gckCqNAUF41AKB5grr_T0nuqbJkBwQJXdRPK0ab9SHpNHiQSvKk_y5-jMoSOJVHEEJYweGglOxT_e5m6qzTGTq87UZONqZc1Lz2V4MySCc',
    desktopAspect: 'md:aspect-square',
  },
  {
    title: 'Lucknow Medical Hub',
    location: 'Shaheed Path, Lucknow',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZujvNxJojpDoWdfbvv6fPs-6rZuq0nivoexEDimBihwQcfGnIpIDQaqiCGPIqpl31CCrvgzhpRzhq07OmFLx61OkLafETk4784zqaRZYuadPDqerjCU3G60r838JudqBq3uSqXKhkd2qJJSnkUjfEUT8qxkgB-5IUOTa2OcHoKZJ6AjykvMj7EjRVrRfhCUEW4_-KoV33HMiFsb6QOdQgUzC3Pw6cXMm7lEcY7-7c00ryfV8aI4j2JtUrUviRBE5gCJ6K7wHxWXE',
    desktopAspect: 'md:aspect-[4/3]',
  },
  {
    title: 'The Sovereign Villas',
    location: 'Sultanpur Road Corridor',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOrHhxqR0gmhsOEndjxJP4a9VwZdW2jz2RlyPYc2sUEMTg2NtfyYra_XLuadx88fau9DWtmWBt-6xl-R5H_NFUn4Aptd4DxOTaZZBd71qNeV_w_jVC3WbMrsBt8WAzJSwwDQqbmOPXv6QW1RXThiP7XkPDpmPQvYmmlvg_GMZcNpJ65xJMFhZ3ovs7sZXMGled5kXLho25Vp3MdH6JYVTarbZtvTzZabt_Deu9jYZ0_qwFi0h_9NtSIDATLmWjHjyAdfbf8mxRRCk',
    desktopAspect: 'md:aspect-video',
  },
]

export default function ProjectShowcase() {
  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-[#00263f] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 sm:w-1/3 h-1/3 bg-orange-400/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-3 sm:mb-4">
            Pioneering Lucknow's Skyline
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Discover our landmark projects setting new benchmarks for luxury and sustainability
            in the heart of Uttar Pradesh.
          </p>
        </div>

        {/* ── MOBILE: uniform card stack ── */}
        <div className="flex flex-col gap-4 md:hidden">
          {projects.map(({ title, location, img }) => (
            <div key={title} className="relative rounded-2xl overflow-hidden group aspect-video">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00263f]/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <h4 className="text-lg font-black">{title}</h4>
                <p className="text-xs text-slate-300 mt-1">{location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── DESKTOP: masonry columns layout ── */}
        <div className="hidden md:block columns-2 gap-6 space-y-6">
          {projects.map(({ title, location, img, desktopAspect }) => (
            <div
              key={title}
              className={`relative rounded-2xl overflow-hidden group ${desktopAspect} break-inside-avoid`}
            >
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00263f]/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 lg:p-7 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-lg lg:text-xl font-black">{title}</h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">{location}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
} 