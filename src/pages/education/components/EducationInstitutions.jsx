import { MapPin, Users, ArrowRight } from 'lucide-react'

const institutions = [
  {
    tag: 'K-12',
    name: 'UIPL Global Academy',
    desc: 'International curriculum focusing on early childhood development and foundational excellence.',
    location: 'London, UK',
    students: '2,500+ Students',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmb3Oq4JjcrP5h3LXjSSUy4Upq1Xd26g762Tup76EByeWAucXtS5zaUTVyDui2-WCgoWc6L-WXZkkpXkzHl_LUaoHpbwbx-CbVIhD8gztMi8HtQIktNkK46yjyhJkjKeFhky-UPgFNq9oaR9j-EZQlcssu4ykYhtAdT9-6Q0p9sqoPEMQEYibpKD1NC28ufjwJ4Da-MXKcTHtAC7opzAfLTZQXRqkb0JsLvb6FqXIioB28MOBxesr6Svhcc7grehZ0iXQs2HQDgVs',
  },
  {
    tag: 'Technical',
    name: 'Vanguard Institute of Tech',
    desc: 'Vocational training and engineering excellence for the next industrial revolution.',
    location: 'Mumbai, IN',
    students: '1,200+ Students',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVtV1-D0i_VwIGNb9F6AB6mwJtcwb_8JjFrc2y7KDHeRIgWtBy20mBTR9FDqHoqxmyj9Hi4frRkpJVpwL6_cV8AiPKKTyneQ35maGzJxVdpS-fRPn2tMgv1LC36kft5V_U_JqOjrVHR5e07mtYEe_ODSy5QQLDPQL0T25pfgrkyNfvZmeIe-rWWy0IA3xhZiy4ktFG2XLe-MNVvATXi5myzJIRkaQoywvIOIm3FnQmlEtBKgMTSvnPVG3V_p_ZsEBDjUHPo_mTptM',
  },
  {
    tag: 'University',
    name: 'United Research University',
    desc: 'Post-graduate research facility dedicated to sustainable infrastructure and urban planning.',
    location: 'Dubai, UAE',
    students: '800+ Researchers',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEX_GeeiYiIK9YHe7AsZg1oGHcz0HVjfyH6GsflJTgDGjdbc3xcCohYhPz1SRty1Xmr5_Mc_TTieST_e2SARaTO0mvTgHe-wv00_UJj9A4o1fdOm-P7Rz52GH3oegbR691kCv2mDW4VxGes7CCRTQPb2MlLBEUcp5JtClEd3YjkLpm8xF5QUJ327Fy4UFX_oKjkrWUnNHMwvZwgPW_S69wVMXpifhmVqqdil-KwNUt4lnYRnm9TTk0SNbLH9xNg_G4zNJ4CPdDejw',
  },
]

export default function EducationInstitutions() {
  return (
    <section className="py-24 bg-[#f8f9ff]" id="institutions">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black text-[#00263f] mb-4">Our Institutions</h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              A diverse network of learning environments tailored to different stages of
              academic journeys.
            </p>
          </div>
          <button className="flex items-center gap-2 font-black text-[#8d4f00] group hover:gap-4 transition-all text-sm">
            View All Branches <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {institutions.map(({ tag, name, desc, location, students, img }) => (
            <div
              key={name}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="h-64 relative overflow-hidden">
                <img
                  src={img}
                  alt={name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest text-[#00263f]">
                  {tag}
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-black text-[#00263f] mb-3">{name}</h4>
                <p className="text-slate-500 mb-6 text-sm leading-relaxed">{desc}</p>
                <div className="flex items-center gap-4 text-xs font-black text-[#00263f]/50 border-t border-slate-100 pt-6">
                  <span className="flex items-center gap-1">
                    <MapPin size={13} /> {location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={13} /> {students}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}