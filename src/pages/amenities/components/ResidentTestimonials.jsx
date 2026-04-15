import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    role: 'Business Executive',
    text: 'The amenities here are absolutely world-class. The gym facilities and pool are state-of-the-art, and the security makes me feel completely safe.',
    rating: 5,
    avatar: '👨‍💼',
  },
  {
    id: 2,
    name: 'Priya Desai',
    role: 'Wellness Entrepreneur',
    text: 'What impressed me the most is the attention to detail in every facility. The spa services and yoga studios are exceptional.',
    rating: 5,
    avatar: '👩‍💼',
  },
  {
    id: 3,
    name: 'Vikram Patel',
    role: 'Tech Professional',
    text: 'Living here feels like being part of an elite community. The social clubs and event spaces have let me build meaningful connections.',
    rating: 5,
    avatar: '👨‍💻',
  },
  {
    id: 4,
    name: 'Anjali Verma',
    role: 'Lifestyle Consultant',
    text: 'The amenity management is incredibly professional. Everything is always well-maintained and there\'s something for everyone in the family.',
    rating: 5,
    avatar: '👩‍🎓',
  },
]

export default function ResidentTestimonials() {
  return (
    <section className="py-8 bg-[#f8f9ff]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-[#00263f]">Resident Stories</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Hear from our residents about their experiences with our premium amenities
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg duration-300 border border-[#e0e0e0]"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-[#fe9824] text-[#fe9824]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-700 leading-relaxed mb-6 line-clamp-4">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <span className="text-3xl">{testimonial.avatar}</span>
                <div>
                  <h4 className="text-[#00263f]">{testimonial.name}</h4>
                  <p className="text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-[#0b3c5d] text-white rounded-xl font-black hover:scale-105 duration-300">
            Join Our Community
          </button>
        </div>
      </div>
    </section>
  )
}
