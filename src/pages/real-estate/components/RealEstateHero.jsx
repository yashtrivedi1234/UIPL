import { useNavigate } from 'react-router-dom'

export default function RealEstateHero() {
  const navigate = useNavigate()

  return (
    <header className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBstpzKW9crKsZTufjOq9zeOFH913nbr8uLzNBXioX--K34hJ9P8lczECRgRhGd_mmQbGdyuNijAHy6fpGiFUlSKy7KEE8HpM4oeF0Zl_tfHGI0bkGOEChfnZnf-NFI9koOJTolXoxQaACtaQ4ZOMYQ4pG1QZo0r8JHgmsh4SpLPb93auLfQLa5aVjEgNc0gYNc59bMW3GPd8DLL2xLiTAExe8YirdWee0y8meRh_uJKW-zm-9VOisC_uVLjtcBfp1CsxO55PtvTAA"
          alt="Luxury high-rise apartment complex at twilight"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#00263f]/65" />
      </div>

      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-orange-400 rounded-full opacity-10 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 -left-20 w-[350px] h-[350px] bg-sky-300 rounded-full opacity-10 blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 w-full flex flex-col items-center text-center gap-6">
        <span className="inline-block px-4 py-1.5 bg-orange-500/20 text-orange-300 border border-orange-400/30 rounded-full text-xs font-black tracking-widest uppercase">
          The Pinnacle of Living
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight">
          Architecting{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(120deg, #90c8f8 0%, #67e8c0 50%, #F7931E 100%)' }}
          >
            The Future.
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl font-light">
          United Infracity Private Limited delivers unparalleled excellence in luxury
          residential and strategic commercial developments across Lucknow's skyline.
        </p>
        <div className="flex flex-row gap-3 sm:gap-4 justify-center">
          <button
            onClick={() => navigate('/projects')}
            className="bg-white text-[#00263f] px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-black text-sm sm:text-base hover:scale-105 transition-all shadow-lg"
          >
            Explore Properties
          </button>
          <button
            onClick={() => navigate('/about')}
            className="bg-white/10 backdrop-blur text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-black text-sm sm:text-base border border-white/30 hover:bg-white/20 transition-colors"
          >
            Our Vision
          </button>
        </div>
      </div>
    </header>
  )
}