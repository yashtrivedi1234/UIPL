import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function ProjectsHero() {
  const navigate = useNavigate()

  return (
    <header className="relative pt-40 pb-32 px-6 overflow-hidden bg-[#eff4ff]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <div className="z-10">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#ffdcc0] text-[#2d1600] text-xs font-black tracking-widest uppercase">
            UIPL Portfolio
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] text-[#00263f] tracking-tight mb-8">
            Our Projects: <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(120deg, #0B3C5D 0%, #1E6FB8 40%, #2E7D32 75%, #F7931E 100%)' }}
            >
              Shaping Lucknow's Future
            </span>
          </h1>
          <p className="text-lg text-slate-500 max-w-xl leading-relaxed mb-10">
            From luxury residential towers to state-of-the-art medical facilities, we are
            building the infrastructure that defines tomorrow's skyline.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-[#0b3c5d] text-white px-8 py-4 rounded-xl font-black flex items-center gap-2 hover:scale-105 transition-all shadow-lg"
          >
            Explore Now <ArrowRight size={18} />
          </button>
        </div>

        {/* Image */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#8d4f00] to-[#002a05] opacity-10 blur-3xl rounded-full" />
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXJxhvxPCqvWWo3_3DWDX9FkPO7ZFzIH9_LS5bdVNKUvzt3NnMuIXrE2V26QOK0zkWCTcD2ODUD3-j2nBGecLRyHtX7ufKS6g_buwCnz04Ue_5B16NJaP3ap7zCbk6iuFOpxU8AUh13SeB_qCO4aHHlStQNmPNE2HxPjiGTgEkDaf4vq9C5quSJKD1-IEjOVVCEuWWckT1gFchRsDyKKnj9OU8kiw0D3LhBfNyvZMSHiR6P5dhdBlGEvuAMhV-vMlZiZVaM77uNI4"
              alt="Modern glass skyscraper in Lucknow"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>

      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-20 fill-[#f8f9ff]">
          <path d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </div>
    </header>
  )
}