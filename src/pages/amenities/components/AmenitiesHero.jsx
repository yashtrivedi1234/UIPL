import { Link } from 'react-router-dom'

export default function AmenitiesHero() {
  return (
    <header className="relative h-[820px] flex items-center justify-center overflow-hidden pt-20">
      {/* Background image + overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6suApVkGQp7fGXfa56pTb6Ir225kDhrCUg_Ip4tHqqiNMGiXM0aWuiyNGRSDfsVlBOvkpZCXPKK-KULFeMFKOnoeOAqM6LfLkoPCAglAEWbR1l7zQKTZi2HCYZipMevhh3ANy2xkhzaBbPkS5NT1vXRDfshP91q7j7NppRcubd0its4agk2AGLzR0zc9t9iUANOE1xKfsp0U42ZD9Rdr9FKvenNjOoF3D9XEt3XvoV68SEpITil2VADt0oO3PEkAboTGJA7Q_O3k"
          alt="Luxury residential complex with pool"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#00263f]/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#00263f] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#fe9824]/20 text-[#ffdcc0] border border-[#8d4f00]/30 backdrop-blur-md text-xs font-black tracking-widest uppercase mb-6">
          World-Class Excellence
        </span>
        <h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight mb-8">
          Luxury Lifestyle &amp; <br />
          <span className="text-[#ffdcc0]">Secure Living</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto mb-10">
          Crafting environments that harmonize architectural grandeur with the warmth of a
          community. Experience a life of uncompromising comfort and safety.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#amenities"
            className="px-8 py-4 bg-[#0b3c5d] text-white rounded-xl font-black hover:scale-105 transition-all shadow-xl"
          >
            Explore Amenities
          </a>
          <Link
            to="/contact"
            className="px-8 py-4 bg-white/10 backdrop-blur text-white border border-white/20 rounded-xl font-black hover:bg-white/20 transition-all"
          >
            Download Brochure
          </Link>
        </div>
      </div>

      {/* Wave transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-20 fill-[#f8f9ff]">
          <path d="M0,96L80,85.3C160,75,320,53,480,53.3C640,53,800,75,960,85.3C1120,96,1280,96,1360,96L1440,96L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
        </svg>
      </div>
    </header>
  )
}