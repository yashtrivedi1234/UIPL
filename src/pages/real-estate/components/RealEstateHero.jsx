export default function RealEstateHero() {
  return (
    <header className="relative h-[921px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBstpzKW9crKsZTufjOq9zeOFH913nbr8uLzNBXioX--K34hJ9P8lczECRgRhGd_mmQbGdyuNijAHy6fpGiFUlSKy7KEE8HpM4oeF0Zl_tfHGI0bkGOEChfnZnf-NFI9koOJTolXoxQaACtaQ4ZOMYQ4pG1QZo0r8JHgmsh4SpLPb93auLfQLa5aVjEgNc0gYNc59bMW3GPd8DLL2xLiTAExe8YirdWee0y8meRh_uJKW-zm-9VOisC_uVLjtcBfp1CsxO55PtvTAA"
          alt="Luxury high-rise apartment complex at twilight"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00263f]/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-2xl space-y-6">
          <span className="inline-block px-4 py-1.5 bg-[#fe9824] text-[#663800] rounded-full text-xs font-black tracking-widest uppercase">
            The Pinnacle of Living
          </span>
          <h1 className="text-white text-6xl md:text-8xl font-black leading-[1.1] tracking-tighter">
            Architecting <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(120deg, #0B3C5D 0%, #1E6FB8 40%, #2E7D32 75%, #F7931E 100%)' }}
            >
              The Future.
            </span>
          </h1>
          <p className="text-[#dce9ff] text-xl leading-relaxed font-light max-w-lg">
            United Infracity Private Limited delivers unparalleled excellence in luxury
            residential and strategic commercial developments across Lucknow's skyline.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-[#fe9824] text-[#663800] px-8 py-4 rounded-xl font-black hover:scale-105 transition-transform shadow-lg">
              Explore Properties
            </button>
            <button className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-xl font-black border border-white/20 hover:bg-white/20 transition-colors">
              Our Vision
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}