import { useState } from 'react'
import { MapPin, ArrowUpRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const ALL_PROJECTS = [
  {
    id: 1,
    title: 'Vanguard Imperial Heights',
    location: 'Gomti Nagar, Lucknow',
    status: 'Ongoing',
    sector: 'Real Estate',
    size: 'featured',   // large card
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATsqPPi0TBz1C7pDA9CX36o3ra8yblxbdM4ZfH5hpxp4fQUEps6HXI7Yz3ZDD1Eideyb7LowpGGFQh_dQvd0KSNnLI2-zWp2CNMXCvxNAESEdvT0ughH_0jvgVWCdKKtOBusl2G2W2IKnMLqCq2Za0QMJrhd2G72YmQPba_So3dw2CErwD5INHhvb9jPNGrtNdRrAm39iGtWNkYIIUc5YNwwxWzArm0C_XpFw60nsat2KRkXKYI5pl1e-8CE7yflATAi2Ya5SjbgQ',
  },
  {
    id: 2,
    title: 'City Life Medical Plaza',
    location: 'Hazratganj, Lucknow',
    status: 'Completed',
    sector: 'Healthcare',
    size: 'tall',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwa2WRHwG14P9O6v8wSEu3YSuHSRw3D31Fv00CPlWYU1fRxWSEPMtDcpGBbdTdrw2aCGcn9C-VC8EkL3M4AtwZIyzxhJ8DnjCsUaviNneQvC8EmOXW22C0348G4NRn-9E4GRLsHt5R5Mv-Ac31dw6K-XLjUFxz7g-Izcb0RkKciXUip0DN4g7kGYr3Eglklh6KL0vo9ZYSsDRTe9B1bDcJRHYElxxU69pRSn9xT4urQXoFiCYAyp4q8rDFP7pyMWvYogisDWIdxY0',
  },
  {
    id: 3,
    title: 'Global Learning Hub',
    location: 'Sitapur Road, Lucknow',
    status: 'Upcoming',
    sector: 'Education',
    size: 'normal',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjb1pcrwRouBkOH0f55w5zr391-KFc0L7yaMbeP6H5QSjD5paAg4hbm40t6ixFLDzS-Wr6dpo1eS60-8gWlhc-jve9xlnWUjXRlRgwl22yfFyvdxJRrv0dPzmeHKHgE4eFze2UG4GwhoNq4y0o-AZEUKe_JNTynTa0uG8XX8pJ8im3JOw0fTLDBmsizHFGqJ1_fFMhCWEvRIX60YyUbdYYH8SZduewj0-Bh5fkx4epGR0zIIB4wo6j1W0-OIhralOTJnU7J1wk4zs',
  },
  {
    id: 4,
    title: 'UIPL Corporate Towers',
    location: 'Vibhuti Khand, Lucknow',
    status: 'Completed',
    sector: 'Real Estate',
    size: 'normal',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQd3is3HsgIzgHeGEMXovOn5cNRIxDRY0PRShQNz63I4EmebYnxovB457yFr1UHBcdvFprIPUPBSb8GIrVg0sVcC-DAzn7iVotnLj_lkYdtbbUoV2KfKkEDs3N441lOmj1NFyFnRSPpltgCby68mhxlWZd5Af_Ss1kfz7jSwWnrOk2FTq9IhnxdDRKi9VRW0fht9cwzypSdkUbUZ6lqqfXtdzmAM1BJjUGxLcZ3we6omsVSNYX2mTKqULVOMB0B-hcyTOxYl927gc',
  },
  {
    id: 5,
    title: 'Emerald Signature Villas',
    location: 'Sushant Golf City, Lucknow',
    status: 'Ongoing',
    sector: 'Real Estate',
    size: 'normal',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvtRd22AIa-QCTou6Vk2eYqOI5V-hiGftGNCDuwMlw5WjqAEEzQ0txlUj5kk_VFBft2HoV8XfRt5Rmiph7dUOvYnIX4RxGV6Sxz11oTASby_irzAObJ356ziEuG9mj1LSXzkfw1FwDJDdh6tSAjHTIGU9FtLSgaKTGLLtzPRq0O1_XziLNJybbCwdXlVKKGGTCtogqbXX5X6e6ykVkYiijwAZqVJZESRQ1agOp78xt30FDAcj6tX0eRgyBxnkUcfN2N84PQEpLfS4',
  },
]

const FILTERS = ['All', 'Education', 'Healthcare', 'Real Estate']

const STATUS_COLORS = {
  Ongoing:   'bg-[#8d4f00]',
  Completed: 'bg-[#64b462]',
  Upcoming:  'bg-[#0b3c5d]',
}

export default function ProjectsGrid() {
  const [active, setActive] = useState('All')
  const [visibleCount, setVisibleCount] = useState(3)
  const navigate = useNavigate()

  const filtered = active === 'All'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter((p) => p.sector === active)

  const visibleProjects = filtered.slice(0, visibleCount)
  const canLoadMore = visibleCount < filtered.length

  return (
    <section className="py-8 px-6 bg-[#f8f9ff]">
      <div className="max-w-7xl mx-auto">

        {/* Header + Filters */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-8">
          <div>
            <h2 className="text-3xl font-black text-[#00263f] mb-2">Milestones of Excellence</h2>
            <p className="text-slate-500 text-sm">Filter our portfolio by sector to see how we impact the city.</p>
          </div>
          <div className="flex flex-wrap gap-2 bg-[#eff4ff] p-1.5 rounded-xl border border-slate-200/50">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                  active === f
                    ? 'bg-[#0b3c5d] text-white shadow-md'
                    : 'text-slate-600 hover:bg-[#dce9ff]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {visibleProjects.map((project) => {
            const isFeatured = project.size === 'featured'
            const isTall     = project.size === 'tall'

            return (
              <div
                key={project.id}
                className={`group relative rounded-2xl overflow-hidden bg-white/70 backdrop-blur border border-slate-100 hover:scale-[1.02] transition-all duration-500 shadow-sm hover:shadow-xl
                  ${isFeatured ? 'md:col-span-8' : isTall ? 'md:col-span-4' : 'md:col-span-4'}`}
              >
                {/* Image */}
                <div className={`overflow-hidden ${isFeatured ? 'aspect-video' : isTall ? 'min-h-[400px] h-full' : 'aspect-square'}`}>
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay for featured/tall */}
                {(isFeatured || isTall) && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00263f]/90 via-[#00263f]/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-7 w-full text-white">
                      <div className="flex justify-between items-end">
                        <div>
                          <div className="flex gap-2 mb-3">
                            <span className={`px-3 py-1 ${STATUS_COLORS[project.status]} text-white text-[10px] font-black rounded-full uppercase tracking-widest`}>
                              {project.status}
                            </span>
                            <span className="px-3 py-1 bg-white/20 backdrop-blur text-white text-[10px] font-black rounded-full uppercase tracking-widest">
                              {project.sector}
                            </span>
                          </div>
                          <h3 className={`font-black mb-1 ${isFeatured ? 'text-3xl' : 'text-xl'}`}>{project.title}</h3>
                          <div className="flex items-center gap-1.5 opacity-75 text-sm">
                            <MapPin size={13} /> {project.location}
                          </div>
                        </div>
                        {isFeatured && (
                          <button
                            onClick={() => navigate('/contact')}
                            className="w-11 h-11 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white hover:text-[#00263f] transition-all"
                          >
                            <ArrowUpRight size={18} />
                          </button>
                        )}
                      </div>
                    </div>
                  </>
                )}

                {/* Info panel for normal cards */}
                {!isFeatured && !isTall && (
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-[10px] font-black uppercase tracking-tight text-[#8d4f00]">{project.sector}</span>
                      <span className="px-2 py-0.5 border border-slate-200 rounded text-[10px] text-slate-500 font-bold">{project.status}</span>
                    </div>
                    <h3 className="text-base font-black text-[#00263f] group-hover:text-[#8d4f00] transition-colors">{project.title}</h3>
                    <p className="text-xs text-slate-400 mt-1">{project.location}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Load More */}
        <div className="mt-16 text-center">
          {canLoadMore && (
            <button
              onClick={() => setVisibleCount((prev) => Math.min(prev + 3, filtered.length))}
              className="px-10 py-4 border-2 border-[#00263f] text-[#00263f] font-black rounded-xl hover:bg-[#00263f] hover:text-white transition-all"
            >
              Load More Projects
            </button>
          )}
        </div>

      </div>
    </section>
  )
}