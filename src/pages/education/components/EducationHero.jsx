export default function EducationHero() {
  return (
    <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuADmef5Gro2jnBr4YhRmvenWfVAoX0IMfRk9xTfCDQR7zz-XjV8vwD3KcauFbH4DNi7bawsB9stQImprFe9L1-CtTlfa6zuQXeWMKL3caVK8TMEfdSMQSN0AGrAIGCBPsq4q1IXTYRY-MoqX5wdHPE0ZNjSwQqVLWBBbJpOvYk7YvSs08XAekFqr7XSBCMpXWX8zMe2m3RpF3Z3Lmz7RgLPcIjiiZYOPr5UoXB7f9wjqvDMza5JIHSZWBMBrzsHL342OWQJLAgojbQ"
          alt="Modern university campus"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#00263f]/65" />
      </div>

      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-orange-400 rounded-full opacity-10 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 -left-20 w-[350px] h-[350px] bg-sky-300 rounded-full opacity-10 blur-3xl pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 w-full flex flex-col items-center text-center gap-6">
        <span className="inline-block px-4 py-1.5 text-xs font-black tracking-[0.2em] text-orange-300 bg-orange-500/20 rounded-full border border-orange-400/30 uppercase">
          Architecting Knowledge
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight">
          Defining the{' '}
          <span
            className="bg-[linear-gradient(120deg,_#90c8f8_0%,_#67e8c0_50%,_#F7931E_100%)] bg-clip-text text-transparent"
          >
            Future of Global
          </span>{' '}
          Education.
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
          United Infracity Private Limited bridges the gap between infrastructure and intellect,
          creating world-class academic ecosystems that inspire the next generation of leaders.
        </p>
        <div className="flex flex-row gap-3 sm:gap-4 justify-center">
          <a
            href="#institutions"
            className="bg-white text-[#00263f] px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-black text-sm sm:text-base hover:scale-105 duration-300 shadow-xl"
          >
            Explore Institutions
          </a>
          <a
            href="#overview"
            className="bg-white/10 backdrop-blur text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-black text-sm sm:text-base hover:bg-white/20 duration-300 border border-white/30"
          >
            Learn Our Vision
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
     
    </header>
  )
}