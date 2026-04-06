import { ArrowRight, Play } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function HeroSection() {
  const navigate = useNavigate()

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 overflow-hidden bg-[#eff4ff]">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-orange-200 rounded-full opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] bg-sky-200 rounded-full opacity-25 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        {/* Text Content */}
        <div className="flex-1 space-y-7">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs uppercase tracking-widest font-black">
            Integrated Ecosystem of Life
          </span>

          <h1 className="text-5xl lg:text-7xl font-black text-[#00263f] leading-[1.05] tracking-tight">
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

          <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
            United Infracity Private Limited seamlessly integrates sustainable Education,
            world-class Healthcare, and premium Real Estate into a singular, thriving ecosystem.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigate('/projects')}
              className="bg-[#00263f] text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-lg flex items-center gap-2"
            >
              Explore Projects <ArrowRight size={18} />
            </button>
            <button
              onClick={() => navigate('/about')}
              className="border-2 border-slate-200 px-8 py-4 rounded-xl text-[#00263f] font-bold hover:bg-white transition-all flex items-center gap-2"
            >
              <Play size={18} className="text-orange-500 fill-orange-500" /> Watch Story
            </button>
          </div>

          {/* Stats bar */}
          <div className="flex gap-10 pt-4 border-t border-slate-200/60">
            {[
              { value: '25+', label: 'Years of Excellence' },
              { value: '10k+', label: 'Families Served' },
              { value: '50+', label: 'Active Projects' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-3xl font-black text-[#8d4f00]">{value}</div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 relative">
          <div className="w-full aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10 group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCps-69B2oCfRfGL1eJNN5zr3q5dgel8ZuF8h-uhnKDVEOajkTxLCaQwl-cpuvNTacmRI9q0SSeuDU6dRacbf8oaeVM5n2C61iZJRnzvOpL58Bq9g8VR-pe0WCKRXto4wwUKle_iZjegdNlkauqRQJoo1gP7VTiKcPozZCovG8R0ioIaB42E0ueoeSV-F6UUREUKQ8TNLg6kMt5nUTrm2RgCOloTDjy_hEmm5KUgd_AzQt4OAhwFsQOMU8GJpXxk7sqsciLK5dx8h8"
              alt="Modern sustainable city architecture"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00263f]/60 to-transparent" />
          </div>
          <div className="absolute -top-10 -right-10 w-44 h-44 bg-orange-300 rounded-full opacity-20 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-green-300 rounded-full opacity-20 blur-3xl" />
        </div>
      </div>
    </section>
  )
}