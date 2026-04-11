import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function CorporateHero() {
  const navigate = useNavigate()

  return (
    <header className="relative pt-32 pb-24 overflow-hidden bg-[#eff4ff]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">

        {/* Text */}
        <div className="flex-1 space-y-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#ffdcc0] text-[#2d1600] text-xs uppercase tracking-widest font-black">
            Integrated Ecosystem of Life
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#00263f] leading-[1.1] tracking-tight">
            Architecting{' '}
            <span
              className="bg-[linear-gradient(120deg,_#0B3C5D_0%,_#1E6FB8_40%,_#2E7D32_75%,_#F7931E_100%)] bg-clip-text text-transparent"
            >
              Future-Ready
            </span>{' '}
            Civilizations
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed max-w-xl">
            United Infracity Private Limited seamlessly integrates sustainable Education,
            world-class Healthcare, and premium Real Estate into a singular, thriving ecosystem.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigate('/projects')}
              className="bg-[#00263f] px-8 py-4 rounded-xl text-white font-black hover:scale-105 transition-all shadow-lg flex items-center gap-2"
            >
              Explore Projects <ArrowRight size={18} />
            </button>
            <button
              onClick={() => navigate('/sectors')}
              className="border-2 border-slate-200 px-8 py-4 rounded-xl text-[#00263f] font-black hover:bg-white transition-all"
            >
              View Our Sectors
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 relative">
          <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-2xl relative z-10 group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCps-69B2oCfRfGL1eJNN5zr3q5dgel8ZuF8h-uhnKDVEOajkTxLCaQwl-cpuvNTacmRI9q0SSeuDU6dRacbf8oaeVM5n2C61iZJRnzvOpL58Bq9g8VR-pe0WCKRXto4wwUKle_iZjegdNlkauqRQJoo1gP7VTiKcPozZCovG8R0ioIaB42E0ueoeSV-F6UUREUKQ8TNLg6kMt5nUTrm2RgCOloTDjy_hEmm5KUgd_AzQt4OAhwFsQOMU8GJpXxk7sqsciLK5dx8h8"
              alt="Sustainable city architecture"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00263f]/60 to-transparent" />
          </div>
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#fe9824] rounded-full opacity-20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#88d982] rounded-full opacity-20 blur-3xl pointer-events-none" />
        </div>

      </div>
    </header>
  )
}