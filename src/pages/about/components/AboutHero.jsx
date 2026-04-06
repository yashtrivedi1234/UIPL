export default function AboutHero() {
  return (
    <section className="relative h-[600px] lg:h-[750px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJFkyt-Mlzaxe4vlk5NNtrFYRfZCOJr26JXOe8qov8m4m7PDlziux87X7Ag8Ujy74vrtPP1bITifiTrgTowK-TCp_nVrohVA8qYCeZsamThg4_7KLl01R8dgkhP39a4yNOsA9xWvZQ8QHCXLUi37pYL7B3ywNGn0eKs4mgsH3MUfM-5JpYgE-AMHksbo7_MtaX97EO9pbdvWGAamN6xp3dA2_4tGuSnmdlMsvYnZ3AM3V5pXXdoyhuMPGf1EMw6fAGLe4iNmAF81Y"
          alt="UIPL headquarters"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00263f]/85 to-[#00263f]/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 bg-[#8d4f00] text-white text-xs font-black tracking-widest rounded-full mb-6 uppercase">
            Building the Future
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-6 leading-[0.9]">
            About UIPL
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed text-slate-200 max-w-2xl">
            Pioneering global infrastructure through unyielding visionary engineering and
            sophisticated structural integrity.
          </p>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-[calc(100%+1.3px)] h-16 fill-[#f8f9ff]"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  )
}