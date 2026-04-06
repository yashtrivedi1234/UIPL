import { useNavigate } from 'react-router-dom'

const sectors = [
  {
    tag: 'Academic Excellence',
    title: 'Education',
    desc: 'Developing futuristic learning campuses with integrated digital infrastructure and collaborative spaces.',
    cta: 'Explore Institutions',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARg-wEr2Oa8iROSsNTmjfsx2tfywDOzRuRaaLlXHDSErc7ECJkhZs64QhITUc2iVfHofbRMey0thmVCqGhhpTRlfVPnrTR0yiMULDpD4SaYlWBv1DDX111gmaNLfhFZMuVWLsDQ3n6cJgAwClxzThteXOxjlqAb61YlJYUlh9rQvMWyr9izJ9ar1CHBegXkb_rWrUIKobXtMyxrr3MOfnt1atm202lh0GcgM3aO-sSZj8JAGXcOty-bGkNnbugfGzKVrjg3USVTd0',
    alt: 'University campus with green lawns',
  },
  {
    tag: 'Advanced Care',
    title: 'Healthcare',
    desc: 'Building state-of-the-art diagnostic centers and hospitals that prioritize patient well-being and tech integration.',
    cta: 'Facility Details',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-gil8nJrN3TrVfGZUm8lCwTZLvfdH42WmKKi84IvDMEfgExUGrMxL4cX1Z6HSsTYno7gpTAvyvspgYODz4-50RTw_K4Xil_yEgFhhxIHlxSLK1Dh3j2N3smbkSe5ili9JWXCWanLE4TE3I6xQR-3ZjpkM1-4PaWKs_JHeSWGdydc2ZBZWDWpjbU-Ivybqh_e4m2IYO_os4GJdPUN64QRqBBmnOTQPmSTVMOo5IZXFyLhVr1ywVk0gUt-wwMy0Y0ro4hh69Ohbx0E',
    alt: 'Modern medical clinic interior',
  },
  {
    tag: 'Luxury Living',
    title: 'Real Estate',
    desc: 'Crafting iconic residential towers and commercial plazas that redefine the skyline of Lucknow.',
    cta: 'View Portfolios',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBD8_EykBcQlXa-lgp6HNVF32vIQ3RtSzKbQtUDh25BAE-aVH6VvnQj2Br0aEsJHIemoulO30qCDmh3Rkm_cGcAp6lF3ypQbth-hgfg46U6yafoW78KHFNlKq06Rn1o2Svdl-Gh1VqMaBi5NRXJ4vNYh8n90pNmYgYFFCI7wrCrhIeUnsoOTN5nGWsvgMeSNJRVpmnIU8F_rNQSh7HS_EJzE356GEVjvhfi4NzU7DhTNX2IMGytaljN9PTZYsUmGmMJjB9QjYtXYvY',
    alt: 'Luxury apartment complex',
  },
]

export default function SectorHighlights() {
  const navigate = useNavigate()
  const sectorRouteMap = {
    Education: '/education',
    Healthcare: '/sectors',
    'Real Estate': '/real-estate',
  }

  return (
    <section id="amenities" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header row — stacks on mobile, side-by-side on sm+ */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 sm:gap-6 mb-10 sm:mb-12 lg:mb-14">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#00263f]">Sectors of Excellence</h2>
            <p className="text-slate-500 mt-2 text-sm sm:text-base">Delivering specialized infrastructure solutions.</p>
          </div>
          <button
            onClick={() => navigate('/sectors')}
            className="self-start sm:self-auto text-[#00263f] font-bold border-b-2 border-[#00263f] pb-0.5 hover:border-orange-500 hover:text-orange-600 transition-colors text-sm whitespace-nowrap"
          >
            View All Sectors →
          </button>
        </div>

        {/* Cards grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {sectors.map(({ tag, title, desc, cta, img, alt }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              {/* Image */}
              <div className="h-48 sm:h-52 lg:h-60 overflow-hidden relative flex-shrink-0">
                <img
                  src={img}
                  alt={alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase text-[#00263f] tracking-wide">
                  {tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 lg:p-7 flex flex-col flex-1">
                <h3 className="text-xl sm:text-2xl font-black text-[#00263f] mb-2 sm:mb-3">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5 sm:mb-6 flex-1">{desc}</p>
                <button
                  onClick={() => navigate(sectorRouteMap[title] || '/sectors')}
                  className="w-full py-2.5 sm:py-3 rounded-lg border-2 border-[#0b3c5d] text-[#0b3c5d] font-bold text-sm hover:bg-[#0b3c5d] hover:text-white transition-all duration-300"
                >
                  {cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}