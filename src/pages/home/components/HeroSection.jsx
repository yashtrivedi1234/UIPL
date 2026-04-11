import { ArrowRight, Play } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function HeroSection() {
  const navigate = useNavigate()

  return (
    <section
      id="home"
      className="relative pb-16 pt-24 overflow-hidden min-h-screen flex items-center bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuCps-69B2oCfRfGL1eJNN5zr3q5dgel8ZuF8h-uhnKDVEOajkTxLCaQwl-cpuvNTacmRI9q0SSeuDU6dRacbf8oaeVM5n2C61iZJRnzvOpL58Bq9g8VR-pe0WCKRXto4wwUKle_iZjegdNlkauqRQJoo1gP7VTiKcPozZCovG8R0ioIaB42E0ueoeSV-F6UUREUKQ8TNLg6kMt5nUTrm2RgCOloTDjy_hEmm5KUgd_AzQt4OAhwFsQOMU8GJpXxk7sqsciLK5dx8h8')] bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-[#00263f]/65 z-0" />

      <div className="absolute -top-20 -right-20 sm:-top-32 sm:-right-32 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-orange-400 rounded-full opacity-10 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 -left-20 sm:-left-32 w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px] bg-sky-300 rounded-full opacity-10 blur-3xl pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-8 relative z-10 w-full">

        <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-300 border border-orange-400/30 text-[10px] sm:text-xs uppercase tracking-widest font-black">
          Integrated Ecosystem of Life
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight">
          Architecting{' '}
          <span
            className="bg-[linear-gradient(120deg,_#90c8f8_0%,_#67e8c0_50%,_#F7931E_100%)] bg-clip-text text-transparent"
          >
            Future-Ready
          </span>{' '}
          Civilizations
        </h1>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
          United Infracity Private Limited seamlessly integrates sustainable Education,
          world-class Healthcare, and premium Real Estate into a singular, thriving ecosystem.
        </p>

        {/* CTA Buttons - side by side (row) always */}
        <div className="flex flex-row gap-3 sm:gap-4 justify-center">
          <button
            onClick={() => navigate('/projects')}
            className="bg-white text-[#00263f] px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            Explore Projects <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
          </button>
          <button
            onClick={() => navigate('/about')}
            className="border-2 border-white/40 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-white font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-sm sm:text-base backdrop-blur-sm"
          >
            <Play size={16} className="text-orange-400 fill-orange-400 sm:w-[18px] sm:h-[18px]" />
            Watch Story
          </button>
        </div>

        {/* Stats bar */}
        <div className="flex flex-row justify-center gap-6 sm:gap-12 lg:gap-16 pt-6 border-t border-white/20 w-full flex-wrap">
          {[
            { value: '25+', label: 'Years of Excellence' },
            { value: '10k+', label: 'Families Served' },
            { value: '50+', label: 'Active Projects' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl sm:text-4xl font-black text-orange-400">{value}</div>
              <div className="text-[9px] sm:text-xs font-semibold text-slate-300 uppercase tracking-wide mt-1 whitespace-nowrap">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}