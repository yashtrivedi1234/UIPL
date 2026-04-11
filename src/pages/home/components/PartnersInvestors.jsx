import sbiLogo from '../../../assets/partners/sbi.png'

export default function PartnersInvestors() {
  const partners = [
    { name: 'HDFC Bank', logo: sbiLogo, category: 'Financial Partner' },
    { name: 'ICICI Bank', logo: sbiLogo, category: 'Financial Partner' },
    { name: 'State Bank of India', logo: sbiLogo, category: 'Financial Partner' },
    { name: 'Axis Bank', logo: sbiLogo, category: 'Financial Partner' },
    { name: 'Microsoft', logo: sbiLogo, category: 'Corporate Partner' },
    { name: 'Google', logo: sbiLogo, category: 'Corporate Partner' },
    { name: 'Amazon', logo: sbiLogo, category: 'Corporate Partner' },
    { name: 'TCS', logo: sbiLogo, category: 'Corporate Partner' }
  ]

  const duplicatedPartners = [...partners, ...partners]

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-slate-50 to-white">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
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
          <span
            className="text-[10px] sm:text-xs uppercase text-orange-500 tracking-widest block mb-3 sm:mb-4"
            style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 900 }}
          >
            Trusted Partnerships
          </span>
          <h2 className="text-[#00263f] mb-4 sm:mb-6">
            Partners & Investors
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Collaborating with industry leaders to create exceptional value and sustainable communities.
          </p>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden">
          <div className="marquee-container flex gap-6 sm:gap-8 lg:gap-10">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center hover:shadow-lg hover:border-orange-300 transition-all cursor-pointer shrink-0 w-35 sm:w-40 lg:w-45 min-h-30 sm:min-h-35"
              >
                <div className="w-20 sm:w-24 lg:w-28 h-10 sm:h-12 flex items-center justify-center rounded mb-2">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h6 className="text-center text-[#00263f] mb-1 line-clamp-1">
                  {partner.name}
                </h6>
                <span
                  className="text-center text-[8px] sm:text-xs text-slate-500 uppercase tracking-wide"
                  style={{ fontFamily: "'Noto Sans', sans-serif" }}
                >
                  {partner.category}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}