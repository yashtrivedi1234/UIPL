import { Calendar, ArrowRight } from 'lucide-react'

export default function LatestNews() {
  const news = [
    {
      date: 'March 15, 2026',
      category: 'Project Launch',
      title: 'UIPL announces Mega Residential Complex in Mumbai',
      description: 'A new 500-acre integrated community with 50,000+ homes, shopping malls, schools, and healthcare facilities.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop'
    },
    {
      date: 'March 8, 2026',
      category: 'Achievement',
      title: '10,000+ Families Milestone Celebrated',
      description: 'UIPL crosses the historic 10,000 families served mark, reaffirming its commitment to nation-building.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
    },
    {
      date: 'February 28, 2026',
      category: 'Award',
      title: 'UIPL Wins Best Sustainable Development Award',
      description: 'Recognized for excellence in eco-friendly construction and sustainable community planning.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop'
    },
    {
      date: 'February 15, 2026',
      category: 'Partnership',
      title: 'Partnership with Leading International Bank',
      description: 'Collaboration to provide flexible financing options for UIPL property buyers worldwide.',
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=400&fit=crop'
    }
  ]

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[10px] sm:text-xs font-black uppercase text-orange-500 tracking-widest block mb-3 sm:mb-4">
            Stay Updated
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#00263f] mb-4 sm:mb-6">
            Latest News & Updates
          </h2>
          <p className="text-slate-500 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Stay informed about our latest projects, achievements, and exciting developments.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-orange-300 transition-all group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden bg-slate-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-orange-500 text-white text-[10px] sm:text-xs px-3 py-1.5 rounded-full font-bold uppercase tracking-wide">
                  {item.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm mb-3">
                  <Calendar size={14} />
                  {item.date}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#00263f] mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm line-clamp-2 mb-4">
                  {item.description}
                </p>
                <button className="text-orange-600 font-bold text-sm flex items-center gap-2 group/btn">
                  Read More
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="border-2 border-slate-300 text-[#00263f] px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold hover:border-orange-500 hover:text-orange-600 transition-colors text-sm sm:text-base">
            View All News
          </button>
        </div>
      </div>
    </section>
  )
}
