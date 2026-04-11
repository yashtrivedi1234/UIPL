import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function ProjectsHero() {
  const navigate = useNavigate()

  return (
    <header
      className="relative pt-40 pb-32 px-6 overflow-hidden min-h-screen flex items-center"
      style={{
        backgroundImage:
          'url(https://lh3.googleusercontent.com/aida-public/AB6AXuCXJxhvxPCqvWWo3_3DWDX9FkPO7ZFzIH9_LS5bdVNKUvzt3NnMuIXrE2V26QOK0zkWCTcD2ODUD3-j2nBGecLRyHtX7ufKS6g_buwCnz04Ue_5B16NJaP3ap7zCbk6iuFOpxU8AUh13SeB_qCO4aHHlStQNmPNE2HxPjiGTgEkDaf4vq9C5quSJKD1-IEjOVVCEuWWckT1gFchRsDyKKnj9OU8kiw0D3LhBfNyvZMSHiR6P5dhdBlGEvuAMhV-vMlZiZVaM77uNI4)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#00263f]/65 z-0" />

      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-orange-400 rounded-full opacity-10 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 -left-20 w-[350px] h-[350px] bg-sky-300 rounded-full opacity-10 blur-3xl pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8 relative z-10 w-full">

        <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-300 border border-orange-400/30 text-xs font-black tracking-widest uppercase">
          UIPL Portfolio
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-white tracking-tight">
          Our Projects: <br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(120deg, #90c8f8 0%, #67e8c0 50%, #F7931E 100%)' }}
          >
            Shaping Lucknow's Future
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
          From luxury residential towers to state-of-the-art medical facilities, we are
          building the infrastructure that defines tomorrow's skyline.
        </p>

        <button
          onClick={() => navigate('/contact')}
          className="bg-white text-[#00263f] px-8 py-4 rounded-xl font-black flex items-center gap-2 hover:scale-105 transition-all shadow-lg"
        >
          Explore Now <ArrowRight size={18} />
        </button>

      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-20 fill-[#f8f9ff]">
          <path d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </div>
    </header>
  )
}