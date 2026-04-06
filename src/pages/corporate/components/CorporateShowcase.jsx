const showcaseProjects = [
  {
    title: 'UIPL Emerald Heights',
    location: 'Gomti Nagar Extension, Lucknow',
    aspect: 'aspect-[4/5]',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCn6joYhDQO8oQMQI46DOeMqOkAxBuCFthI_rvZV0quh1AzkgaHXnydCHWldhVYyizNKFFt7b1PP9GWzePYypBPKKYQrOwIEyqdkUhymbJ-eTRf1y39Kda9k9PYBxQ3QZs6YicuBZ_QrI_-lW3FNrIHxkyuZ8s6SSEbq3mCGbBVDSCc7lGfesIJbk2keW-ks8STRgDTL3l-nh4iZL269aZ29iOtW_BrIwbyj42M5yq344qGgRWb0f1S54I36yKFbJl0bSbKuHJpa_A',
  },
  {
    title: 'UIPL Business Plaza',
    location: 'Hazratganj Financial District',
    aspect: 'aspect-square',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmQ06kWNQku6KMuJxbTyJ8NZk1c44HF1u7UEk95rUcIGOnBNy0H3hr2BNx2QoJO34GWKms6u9JsoWaA9VEWZWeaGAoMZmJovG4SNPHEsv6KXsmyxJGXUr121bY1_rwfY7tjdRoqG-9gcINF7fxu-ebZX0qzIWwZBit8gckCqNAUF41AKB5grr_T0nuqbJkBwQJXdRPK0ab9SHpNHiQSvKk_y5-jMoSOJVHEEJYweGglOxT_e5m6qzTGTq87UZONqZc1Lz2V4MySCc',
  },
  {
    title: 'Lucknow Medical Hub',
    location: 'Shaheed Path, Lucknow',
    aspect: 'aspect-[4/3]',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZujvNxJojpDoWdfbvv6fPs-6rZuq0nivoexEDimBihwQcfGnIpIDQaqiCGPIqpl31CCrvgzhpRzhq07OmFLx61OkLafETk4784zqaRZYuadPDqerjCU3G60r838JudqBq3uSqXKhkd2qJJSnkUjfEUT8qxkgB-5IUOTa2OcHoKZJ6AjykvMj7EjRVrRfhCUEW4_-KoV33HMiFsb6QOdQgUzC3Pw6cXMm7lEcY7-7c00ryfV8aI4j2JtUrUviRBE5gCJ6K7wHxWXE',
  },
  {
    title: 'The Sovereign Villas',
    location: 'Sultanpur Road Corridor',
    aspect: 'aspect-video',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOrHhxqR0gmhsOEndjxJP4a9VwZdW2jz2RlyPYc2sUEMTg2NtfyYra_XLuadx88fau9DWtmWBt-6xl-R5H_NFUn4Aptd4DxOTaZZBd71qNeV_w_jVC3WbMrsBt8WAzJSwwDQqbmOPXv6QW1RXThiP7XkPDpmPQvYmmlvg_GMZcNpJ65xJMFhZ3ovs7sZXMGled5kXLho25Vp3MdH6JYVTarbZtvTzZabt_Deu9jYZ0_qwFi0h_9NtSIDATLmWjHjyAdfbf8mxRRCk',
  },
]

export default function CorporateShowcase() {
  return (
    <section className="py-24 bg-[#00263f] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#fe9824]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-black mb-4">Pioneering Lucknow's Skyline</h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base leading-relaxed">
            Discover our landmark projects setting new benchmarks for luxury and sustainability
            in the heart of Uttar Pradesh.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-2 gap-6 space-y-6">
          {showcaseProjects.map(({ title, location, aspect, img }) => (
            <div key={title} className={`relative rounded-2xl overflow-hidden group ${aspect} break-inside-avoid`}>
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00263f]/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-7 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-xl font-black">{title}</h4>
                <p className="text-sm text-slate-300 mt-1">{location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}