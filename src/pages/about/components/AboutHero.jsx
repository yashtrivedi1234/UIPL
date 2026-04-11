export default function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJFkyt-Mlzaxe4vlk5NNtrFYRfZCOJr26JXOe8qov8m4m7PDlziux87X7Ag8Ujy74vrtPP1bITifiTrgTowK-TCp_nVrohVA8qYCeZsamThg4_7KLl01R8dgkhP39a4yNOsA9xWvZQ8QHCXLUi37pYL7B3ywNGn0eKs4mgsH3MUfM-5JpYgE-AMHksbo7_MtaX97EO9pbdvWGAamN6xp3dA2_4tGuSnmdlMsvYnZ3AM3V5pXXdoyhuMPGf1EMw6fAGLe4iNmAF81Y"
          alt="UIPL headquarters"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#00263f]/65" />
      </div>

      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-orange-400 rounded-full opacity-10 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 -left-20 w-[350px] h-[350px] bg-sky-300 rounded-full opacity-10 blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-white flex flex-col items-center text-center gap-6">
        <span className="inline-block px-4 py-1.5 bg-orange-500/20 text-orange-300 border border-orange-400/30 text-xs font-black tracking-widest rounded-full uppercase">
          Building the Future
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
          About{' '}
          <span
            className="bg-[linear-gradient(120deg,_#90c8f8_0%,_#67e8c0_50%,_#F7931E_100%)] bg-clip-text text-transparent"
          >
            UIPL
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-slate-300 max-w-2xl">
          Pioneering global infrastructure through unyielding visionary engineering and
          sophisticated structural integrity.
        </p>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-[calc(100%+1.3px)] h-10 sm:h-14 lg:h-16 fill-[#f8f9ff]"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  )
}