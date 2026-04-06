export default function EducationHero() {
  return (
    <header className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#00263f]">
      {/* Background image */}
      <div className="absolute inset-0 opacity-40">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuADmef5Gro2jnBr4YhRmvenWfVAoX0IMfRk9xTfCDQR7zz-XjV8vwD3KcauFbH4DNi7bawsB9stQImprFe9L1-CtTlfa6zuQXeWMKL3caVK8TMEfdSMQSN0AGrAIGCBPsq4q1IXTYRY-MoqX5wdHPE0ZNjSwQqVLWBBbJpOvYk7YvSs08XAekFqr7XSBCMpXWX8zMe2m3RpF3Z3Lmz7RgLPcIjiiZYOPr5UoXB7f9wjqvDMza5JIHSZWBMBrzsHL342OWQJLAgojbQ"
          alt="Modern university campus"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#00263f] via-[#00263f]/80 to-transparent" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-black tracking-[0.2em] text-[#ffdcc0] bg-[#8d4f00]/20 rounded-full border border-[#8d4f00]/30 uppercase">
            Architecting Knowledge
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-8">
            Defining the{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(120deg, #0B3C5D 0%, #1E6FB8 40%, #2E7D32 75%, #F7931E 100%)' }}
            >
              Future of Global
            </span>{' '}
            Education.
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-xl">
            United Infracity Private Limited bridges the gap between infrastructure and intellect,
            creating world-class academic ecosystems that inspire the next generation of leaders.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#institutions"
              className="bg-[#fe9824] text-[#663800] px-8 py-4 rounded-xl font-black text-lg hover:scale-105 transition-all shadow-xl"
            >
              Explore Institutions
            </a>
            <a
              href="#overview"
              className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-xl font-black text-lg hover:bg-white/20 transition-all border border-white/20"
            >
              Learn Our Vision
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2">
        <span className="text-[10px] font-black tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </header>
  )
}