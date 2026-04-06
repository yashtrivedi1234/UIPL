import { ArrowRight, Play } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function HeroSection() {
  const navigate = useNavigate()

  return (
    <section
      id="home"
      className="relative pb-10 overflow-hidden bg-[#eff4ff] mt-19"
    >
      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 sm:-top-32 sm:-right-32 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-orange-200 rounded-full opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 sm:-left-32 w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px] bg-sky-200 rounded-full opacity-25 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-16 relative z-10">

        {/* Text Content */}
        <div className="flex-1 space-y-5 sm:space-y-6 lg:space-y-7 text-center lg:text-left w-full">

          <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-[10px] sm:text-xs uppercase tracking-widest font-black">
            Integrated Ecosystem of Life
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#00263f] leading-[1.05] tracking-tight">
            Architecting{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(120deg, #0B3C5D 0%, #1E6FB8 40%, #2E7D32 75%, #F7931E 100%)',
              }}
            >
              Future-Ready
            </span>{' '}
            Civilizations
          </h1>

          <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
            United Infracity Private Limited seamlessly integrates sustainable Education,
            world-class Healthcare, and premium Real Estate into a singular, thriving ecosystem.
          </p>

          <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
            <button
              onClick={() => navigate('/projects')}
              className="bg-[#00263f] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base w-full xs:w-auto"
            >
              Explore Projects <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
            </button>
            <button
              onClick={() => navigate('/about')}
              className="border-2 border-slate-200 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-[#00263f] font-bold hover:bg-white transition-all flex items-center justify-center gap-2 text-sm sm:text-base w-full xs:w-auto"
            >
              <Play size={16} className="text-orange-500 fill-orange-500 sm:w-[18px] sm:h-[18px]" />
              Watch Story
            </button>
          </div>

          {/* Stats bar */}
          <div className="flex flex-row justify-center lg:justify-start gap-3 sm:gap-6 lg:gap-10 pt-4 border-t border-slate-200/60 flex-nowrap overflow-x-auto lg:flex-wrap">
            {[
              { value: '25+', label: 'Years of Excellence' },
              { value: '10k+', label: 'Families Served' },
              { value: '50+', label: 'Active Projects' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center lg:text-left flex-shrink-0 min-w-max sm:min-w-[70px]">
                <div className="text-lg sm:text-3xl font-black text-[#8d4f00]">{value}</div>
                <div className="text-[8px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wide mt-0.5 sm:mt-1 whitespace-nowrap">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none mx-auto mt-6 sm:mt-10">
          <div className="w-full aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative z-10 group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCps-69B2oCfRfGL1eJNN5zr3q5dgel8ZuF8h-uhnKDVEOajkTxLCaQwl-cpuvNTacmRI9q0SSeuDU6dRacbf8oaeVM5n2C61iZJRnzvOpL58Bq9g8VR-pe0WCKRXto4wwUKle_iZjegdNlkauqRQJoo1gP7VTiKcPozZCovG8R0ioIaB42E0ueoeSV-F6UUREUKQ8TNLg6kMt5nUTrm2RgCOloTDjy_hEmm5KUgd_AzQt4OAhwFsQOMU8GJpXxk7sqsciLK5dx8h8"
              alt="Modern sustainable city architecture"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00263f]/60 to-transparent" />
          </div>

          {/* Decorative blobs behind image */}
          <div className="absolute -top-6 sm:-top-10 -right-6 sm:-right-10 w-28 sm:w-44 h-28 sm:h-44 bg-orange-300 rounded-full opacity-20 blur-3xl" />
          <div className="absolute -bottom-6 sm:-bottom-10 -left-6 sm:-left-10 w-36 sm:w-60 h-36 sm:h-60 bg-green-300 rounded-full opacity-20 blur-3xl" />
        </div>
      </div>
    </section>
  )
}