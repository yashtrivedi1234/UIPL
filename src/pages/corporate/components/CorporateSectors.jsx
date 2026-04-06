const sectors = [
  {
    tag: 'Academic Excellence',
    title: 'Education',
    desc: 'Developing futuristic learning campuses with integrated digital infrastructure and collaborative spaces.',
    cta: 'Explore Institutions',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARg-wEr2Oa8iROSsNTmjfsx2tfywDOzRuRaaLlXHDSErc7ECJkhZs64QhITUc2iVfHofbRMey0thmVCqGhhpTRlfVPnrTR0yiMULDpD4SaYlWBv1DDX111gmaNLfhFZMuVWLsDQ3n6cJgAwClxzThteXOxjlqAb61YlJYUlh9rQvMWyr9izJ9ar1CHBegXkb_rWrUIKobXtMyxrr3MOfnt1atm202lh0GcgM3aO-sSZj8JAGXcOty-bGkNnbugfGzKVrjg3USVTd0',
  },
  {
    tag: 'Advanced Care',
    title: 'Healthcare',
    desc: 'Building state-of-the-art diagnostic centers and hospitals that prioritize patient well-being and tech integration.',
    cta: 'Facility Details',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-gil8nJrN3TrVfGZUm8lCwTZLvfdH42WmKKi84IvDMEfgExUGrMxL4cX1Z6HSsTYno7gpTAvyvspgYODz4-50RTw_K4Xil_yEgFhhxIHlxSLK1Dh3j2N3smbkSe5ili9JWXCWanLE4TE3I6xQR-3ZjpkM1-4PaWKs_JHeSWGdydc2ZBZWDWpjbU-Ivybqh_e4m2IYO_os4GJdPUN64QRqBBmnOTQPmSTVMOo5IZXFyLhVr1ywVk0gUt-wwMy0Y0ro4hh69Ohbx0E',
  },
  {
    tag: 'Luxury Living',
    title: 'Real Estate',
    desc: 'Crafting iconic residential towers and commercial plazas that redefine the skyline of Lucknow.',
    cta: 'View Portfolios',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBD8_EykBcQlXa-lgp6HNVF32vIQ3RtSzKbQtUDh25BAE-aVH6VvnQj2Br0aEsJHIemoulO30qCDmh3Rkm_cGcAp6lF3ypQbth-hgfg46U6yafoW78KHFNlKq06Rn1o2Svdl-Gh1VqMaBi5NRXJ4vNYh8n90pNmYgYFFCI7wrCrhIeUnsoOTN5nGWsvgMeSNJRVpmnIU8F_rNQSh7HS_EJzE356GEVjvhfi4NzU7DhTNX2IMGytaljN9PTZYsUmGmMJjB9QjYtXYvY',
  },
]

export default function CorporateSectors() {
  return (
    <section className="py-24 bg-[#f8f9ff]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-14">
          <div>
            <h2 className="text-4xl font-black text-[#00263f]">Sectors of Excellence</h2>
            <p className="text-slate-500 mt-2 text-sm">Delivering specialized infrastructure solutions.</p>
          </div>
          <button className="text-[#00263f] font-black border-b-2 border-[#00263f] pb-0.5 hover:border-[#fe9824] hover:text-[#fe9824] transition-colors text-sm">
            View All Sectors →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sectors.map(({ tag, title, desc, cta, img }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase text-[#00263f] tracking-wide">
                  {tag}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black text-[#00263f] mb-4">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{desc}</p>
                <button className="w-full py-3 rounded-xl border-2 border-[#0b3c5d] text-[#0b3c5d] font-black hover:bg-[#0b3c5d] hover:text-white transition-all duration-300 text-sm">
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