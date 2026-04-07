import { Building2, Gem, Briefcase, Mountain, Shield, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const features = [
  { icon: Gem,       label: 'Luxury Penthouses'  },
  { icon: Briefcase, label: 'Grade-A Offices'     },
  { icon: Mountain,  label: 'Curated Landscapes'  },
  { icon: Shield,    label: 'Elite Security'       },
]

export default function RealEstateSector() {
  const navigate = useNavigate()

  return (
    <section className="py-8 px-6 bg-[#00263f] text-white overflow-hidden relative">

      {/* Wave top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
          className="relative block w-[calc(100%+1.3px)] h-14 fill-[#f8f9ff]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto pt-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Text */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#fe9824] flex items-center justify-center">
                <Building2 size={22} className="text-[#00263f]" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-black">Real Estate</h2>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-black text-[#ffdcc0] mb-6">
              Premium Urban Living
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-10">
              Redefining the skyline with residential and commercial developments that exude
              luxury and functionality. UIPL Real Estate ventures focus on prime locations,
              iconic architecture, and integrated community amenities that provide a lifestyle
              of unparalleled comfort and status.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {features.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-white/5 p-4 rounded-xl border border-white/10"
                >
                  <Icon size={18} className="text-[#fe9824]" />
                  <span className="text-sm font-semibold">{label}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate('/real-estate')}
              className="group flex items-center gap-3 bg-[#fe9824] text-[#00263f] px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-xl font-black"
            >
              Browse Properties
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 group relative">
            <div className="absolute -inset-4 bg-[#fe9824]/10 rounded-[2rem] blur-2xl group-hover:bg-[#fe9824]/20 transition-all duration-500" />
            <div className="relative overflow-hidden rounded-2xl shadow-2xl h-[480px]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOqsmQbj1JnqfcgLej6K3zh2sksqNQ6dgLjpja7LcSvmaioHlO4HOdQ8BdIs6Z4zXIWWaYLveCje2ThU4YKoxRZVmqCK8c0uT8jun-Q0GfHMNryNhP8SNl8gBV9sJphjv5NrAmnxwwwX0movZcHKV2F7mF1E8vZEOXcb3LPJE9HgbUoorQSPS05s7IqZ41BxdPy67XeQ7Z1C0g2kWlHkh3bTJ2uQRTv-08wB023yKVXn5OPj0eOB3EvVflsH0HKEuSv7HV_d6jKwg"
                alt="Luxury residential skyscraper at sunset"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00263f]/80 to-transparent" />
              <div className="absolute bottom-7 left-7 text-white">
                <p className="font-black text-xl">The UIPL Grandeur</p>
                <p className="text-sm opacity-75">Residential Milestone · 2025</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}