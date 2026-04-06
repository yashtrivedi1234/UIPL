import { GraduationCap, Sparkles, Brain, Leaf, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const tags = [
  { icon: Sparkles, label: 'Smart Classrooms' },
  { icon: Brain,    label: 'Research Hubs'   },
  { icon: Leaf,     label: 'Sustainable Design' },
]

export default function EducationSector() {
  const navigate = useNavigate()

  return (
    <section className="py-24 px-6 bg-[#eff4ff] overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Text */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#00430d] flex items-center justify-center">
                <GraduationCap size={22} className="text-[#a3f69c]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#00263f]">Education</h2>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-[#002a05] mb-6">
              Pioneering Future Leaders
            </h3>
            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              Our educational campuses are designed as catalysts for growth. We integrate smart
              technology with adaptive spaces to create environments that foster curiosity,
              collaboration, and the pursuit of academic brilliance. From primary schools to
              research institutions, we build the foundations for the next generation.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {tags.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="bg-white/70 backdrop-blur border border-slate-200/40 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 text-[#00263f]"
                >
                  <Icon size={15} className="text-[#002a05]" /> {label}
                </span>
              ))}
            </div>

            <button
              onClick={() => navigate('/education')}
              className="group flex items-center gap-3 bg-[#00263f] text-white px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg font-black"
            >
              Explore Education Portfolio
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 group relative">
            <div className="absolute -inset-4 bg-[#002a05]/10 rounded-[2rem] blur-2xl group-hover:bg-[#002a05]/20 transition-all duration-500" />
            <div className="relative overflow-hidden rounded-2xl shadow-2xl h-[480px]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv1mIu8UU7QgMR7h_oWFhWsViSk6WNPb6jJ5vEhp514rrIvzzcxwAWFeVaPSj_YylKmD_NahbF_GJ8AiumizNijcnaW2689k5EfFChxjGSOTUPIqdiidiNAKBpzwWJlFrZXC9x2w_2JSfCCURJt7t2ai5vBQtF9y_7UpmhYFWbH6E0UES8x1AjZM-tf1rwG_kDotwyJKSbXGf3IXuRIok9BbSEF9TZignkOZ94v40VyfH-9titCbKSnqBbTFCoVWNzZa8e4iubYac"
                alt="Modern sustainable university campus"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00263f]/60 to-transparent" />
              <div className="absolute bottom-7 left-7 text-white">
                <p className="font-black text-xl">UIPL Academy Square</p>
                <p className="text-sm opacity-75">Institutional Excellence · 2023</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
          className="relative block w-[calc(100%+1.3px)] h-14 fill-[#f8f9ff]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  )
}