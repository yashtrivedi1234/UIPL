export default function PartnersInvestors() {
  const partners = [
    {
      name: 'HDFC Bank',
      logo: 'https://via.placeholder.com/150x60?text=HDFC+Bank',
      category: 'Financial Partner'
    },
    {
      name: 'ICICI Bank',
      logo: 'https://via.placeholder.com/150x60?text=ICICI+Bank',
      category: 'Financial Partner'
    },
    {
      name: 'State Bank of India',
      logo: 'https://via.placeholder.com/150x60?text=SBI',
      category: 'Financial Partner'
    },
    {
      name: 'Axis Bank',
      logo: 'https://via.placeholder.com/150x60?text=Axis+Bank',
      category: 'Financial Partner'
    },
    {
      name: 'Microsoft',
      logo: 'https://via.placeholder.com/150x60?text=Microsoft',
      category: 'Corporate Partner'
    },
    {
      name: 'Google',
      logo: 'https://via.placeholder.com/150x60?text=Google',
      category: 'Corporate Partner'
    },
    {
      name: 'Amazon',
      logo: 'https://via.placeholder.com/150x60?text=Amazon',
      category: 'Corporate Partner'
    },
    {
      name: 'TCS',
      logo: 'https://via.placeholder.com/150x60?text=TCS',
      category: 'Corporate Partner'
    }
  ]

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-white">
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-container {
          animation: marquee 30s linear infinite;
        }
        .marquee-container:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[10px] sm:text-xs font-black uppercase text-orange-500 tracking-widest block mb-3 sm:mb-4">
            Trusted Partnerships
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#00263f] mb-4 sm:mb-6">
            Partners & Investors
          </h2>
          <p className="text-slate-500 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Collaborating with industry leaders to create exceptional value and sustainable communities.
          </p>
        </div>

        {/* Marquee Partners */}
        <div className="mb-12 sm:mb-16 overflow-hidden">
          <div className="marquee-container flex gap-6 sm:gap-8 lg:gap-10">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center hover:shadow-lg hover:border-orange-300 transition-all group cursor-pointer min-h-[120px] sm:min-h-[140px] flex-shrink-0 w-[140px] sm:w-[160px] lg:w-[180px]"
              >
                <div className="w-20 sm:w-24 lg:w-28 h-10 sm:h-12 mb-2 sm:mb-3 flex items-center justify-center bg-slate-100 rounded group-hover:bg-slate-200 transition-colors">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="text-center text-xs sm:text-sm font-bold text-[#00263f] mb-1 line-clamp-1">
                  {partner.name}
                </h3>
                <p className="text-center text-[8px] sm:text-xs text-slate-500 uppercase tracking-wide">
                  {partner.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
