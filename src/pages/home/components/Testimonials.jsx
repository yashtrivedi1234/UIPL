import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Moving into a UIPL project changed our definition of luxury. The integration of the school right next to our residence has been a game-changer for our children.',
    name: 'Rajesh Khanna',
    role: 'Resident, Emerald Heights',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfOR4048vl5kUSpjC0yP9IcclKiYT2qV-dx6BKSV_Lf7GartUVvvkfpJnaDK7xWoCI3W74-tTBneojBShvAQ_foYqdQ5abKxmNof5jTCFflzqpqTnpL29aXjseA0rlJPLxNdnJlki1vH_A0QXU0PKvwkBYKhKbnvOCX7qGgDz5p8tnGdbLj7yFP4DPD7WOsU6J72Cf_f_yygcZ4e8vlKTi_U1gGmxs5D9KeZdSpFLw-Logr_bTF6tiJQfxlK1CgxnBVzRPEn0WzAc',
    featured: false,
  },
  {
    quote:
      "UIPL's vision for healthcare infrastructure in Lucknow is unparalleled. Their facilities are designed with international standards of care in mind.",
    name: 'Dr. Amrita Singh',
    role: 'Medical Director, City Care',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8L4jIxZW0eJV2ab0qjJ-v5BQy1gxQvMepK4-o-BARBD10jr6bNhTpYxlobfMXzPAC1T2m0s8Y5-G6r6QfpgNhnllUfG-7m-Rn6MSwv3b7OFPyJfp-V-VvMh0lLVQSCyOrFKMCFzKiXTwMlTHDqCZZg-6b0S2P1H11HOUxnJDPT9zCsCgaCheB2WsL0stgj3o9nAu_m0IVYrb76sJw7_CmOpU0xG4GmJJXLelmWCCBV-7YIqUY43I4OsFmxoY84-Hodrb7rrhCkCI',
    featured: true,
  },
  {
    quote:
      "As an investor, UIPL offers the most reliable ROI in the Lucknow real estate market. Their delivery timelines and quality are consistent.",
    name: 'Vikram Malhotra',
    role: 'Institutional Investor',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGy9ynwMIdaEV752MhLudknhQ7v0f8M3aDcwkmk7CtKW62fsbATIC1hNQz72EV6oRu-7HUo3VSHVm6V6NRk69bzu2hfyaUh9hitrs_N1Ij7X4iIzra0ZfOBuLpi-GUAfvRVO_Tfp1HrIloFfAAqfDU551LzpQdsZKPn7DdZOBFeWbme8NCJFo-nPC0yPo5zf7MfHk6mywkGCW-Uh9S5ntSkfGOhbrt9ELiuU6PDoKDroHeZmkEbluc1k24_40jgGEgBD9s',
    featured: false,
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#eff4ff] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-black text-center mb-14 text-[#00263f]">
          Voices of the Ecosystem
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {testimonials.map(({ quote, name, role, img, featured }) => (
            <div
              key={name}
              className={`rounded-2xl p-8 shadow-lg border transition-transform duration-300 hover:-translate-y-1 ${
                featured
                  ? 'bg-white border-white md:scale-110 z-10 shadow-xl'
                  : 'bg-white/60 backdrop-blur border-white/50'
              }`}
            >
              <Quote size={28} className="text-orange-400 mb-4" />
              <p className="text-slate-600 italic text-sm leading-relaxed mb-6">"{quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={img}
                  alt={name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-slate-100"
                />
                <div>
                  <h5 className="font-black text-[#00263f] text-sm">{name}</h5>
                  <p className="text-xs text-slate-500">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}