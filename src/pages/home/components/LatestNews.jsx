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
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <style>{`
        .flip-card {
          background-color: transparent;
          width: 100%;
          height: 100%;
          perspective: 1000px;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }

        .flip-card-front {
          background-color: transparent;
          color: black;
        }

        .flip-card-back {
          background: linear-gradient(135deg, #00263f 0%, #0b3c5d 100%);
          color: white;
          transform: rotateY(180deg);
        }
      `}</style>

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
            Hover over cards to flip and discover more details
          </p>
        </div>

        {/* 3D Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10">
          {news.map((item, index) => (
            <div
              key={index}
              className="h-80 sm:h-96 lg:h-80 cursor-pointer"
            >
              <div className="flip-card w-full h-full">
                <div className="flip-card-inner w-full h-full">
                  {/* Front of card */}
                  <div className="flip-card-front rounded-xl overflow-hidden border border-slate-200 shadow-lg">
                    {/* Image */}
                    <div className="relative w-full h-full overflow-hidden bg-slate-200">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Title at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                        <div className="absolute top-3 left-3 bg-orange-500 text-white text-[10px] sm:text-xs px-3 py-1.5 rounded-full font-bold uppercase tracking-wide">
                          {item.category}
                        </div>
                        <h3 className="text-base sm:text-lg font-black text-white line-clamp-2">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className="flip-card-back rounded-xl overflow-hidden border border-orange-400 p-5 sm:p-6 flex flex-col justify-between shadow-lg">
                    <div className="text-left">
                      <div className="inline-block bg-orange-500 text-white text-[10px] sm:text-xs px-3 py-1.5 rounded-full font-bold uppercase tracking-wide mb-4">
                        {item.category}
                      </div>
                      <h3 className="text-base sm:text-lg font-black text-white mb-3 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-white/90 text-xs sm:text-sm line-clamp-3 mb-4">
                        {item.description}
                      </p>
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-2 text-orange-300 text-xs sm:text-sm mb-4">
                        <Calendar size={14} />
                        {item.date}
                      </div>
                      <button className="text-orange-400 font-bold text-sm flex items-center gap-2 hover:text-orange-300 transition-colors">
                        Read More
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
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
