import { Award, Star, Trophy, Zap } from 'lucide-react'
import { useState } from 'react'

export default function AwardsRecognition() {
  const [selectedYear, setSelectedYear] = useState(null)

  const awards = [
    {
      icon: Trophy,
      year: '2025',
      title: 'Best Integrated Development',
      issuer: 'National Real Estate Awards',
      description: 'Recognition for creating world-class integrated communities combining education, healthcare, and real estate.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      year: '2024',
      title: 'Sustainability Excellence',
      issuer: 'Green Building Forum India',
      description: 'Awarded for exceptional eco-friendly construction practices and environmental commitment.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Star,
      year: '2024',
      title: 'Developer of the Year',
      issuer: 'Real Estate Magazine',
      description: "Recognition as one of India's most innovative and customer-centric real estate developers.",
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Zap,
      year: '2023',
      title: 'Innovation in Smart Cities',
      issuer: 'Ministry of Housing',
      description: 'Commendation for pioneering smart city technologies in residential communities.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Trophy,
      year: '2023',
      title: 'Customer Satisfaction Award',
      issuer: 'Indian Builder Forum',
      description: 'Award for highest customer satisfaction and after-sales service quality.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Award,
      year: '2022',
      title: 'Best Investment Opportunity',
      issuer: 'Investment Council India',
      description: 'Recognition for providing strong returns and secure investment opportunities.',
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  const certifications = [
    { name: 'ISO 9001', desc: 'Quality Management' },
    { name: 'ISO 14001', desc: 'Environmental Care' },
    { name: 'RERA Registered', desc: 'Legal Compliance' },
    { name: 'LEED Certified', desc: 'Green Building' }
  ]

  const filtered = selectedYear && selectedYear !== 'All'
    ? awards.filter(a => a.year === selectedYear)
    : awards

  return (
    <section className="py-8 sm:py-16 lg:py-20 bg-white">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Only float on devices that can handle it comfortably */
        @media (min-width: 640px) and (prefers-reduced-motion: no-preference) {
          .award-card { animation: float 3s ease-in-out infinite; }
          .award-card:nth-child(2) { animation-delay: 0.2s; }
          .award-card:nth-child(3) { animation-delay: 0.4s; }
          .award-card:nth-child(4) { animation-delay: 0.6s; }
          .award-card:nth-child(5) { animation-delay: 0.8s; }
          .award-card:nth-child(6) { animation-delay: 1s; }
        }

        .icon-spin:hover { animation: spin-slow 1s ease-in-out; }

        /* Scrollable pill row on mobile — no wrapping */
        .year-filter-scroll {
          display: flex;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scroll-snap-type: x mandatory;
          gap: 0.5rem;
          padding-bottom: 0.5rem;
          /* hide scrollbar visually */
          scrollbar-width: none;
        }
        .year-filter-scroll::-webkit-scrollbar { display: none; }
        .year-filter-scroll button { scroll-snap-align: start; flex-shrink: 0; }

        @media (min-width: 640px) {
          .year-filter-scroll {
            flex-wrap: wrap;
            overflow-x: visible;
            justify-content: center;
            gap: 0.75rem;
            padding-bottom: 0;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <span
            className="text-[10px] sm:text-xs uppercase text-orange-500 tracking-widest block"
            style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 900 }}
          >
            Recognition & Achievements
          </span>
          <h2 className="text-[#00263f]">
            Awards & Recognition
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base">
            Industry recognition for our excellence in development, innovation, and customer satisfaction.
          </p>
        </div>

        {/* Year Filter — horizontally scrollable on mobile, wrapping on sm+ */}
        <div className="year-filter-scroll mb-8 sm:mb-12">
          {['All', '2025', '2024', '2023', '2022'].map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(selectedYear === year && year !== 'All' ? null : year)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm uppercase tracking-wide transition-all ${
                selectedYear === year || (!selectedYear && year === 'All')
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg scale-105'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800 border border-slate-200'
              }`}
              style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 700 }}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Awards Grid - 3x3 on desktop
            - 1 col  on mobile
            - 2 cols on sm
            - 3 cols on lg+
        */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20"
        >
          {filtered.map((award, index) => {
            const IconComponent = award.icon
            return (
              <div key={index} className="award-card group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${award.color} rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                <div className="relative bg-white rounded-2xl p-5 sm:p-7 border-2 border-slate-200 group-hover:border-orange-300 transition-all duration-300 h-full flex flex-col shadow-sm group-hover:shadow-lg">

                  {/* Top: Icon + Year */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`bg-gradient-to-br ${award.color} w-14 sm:w-18 h-14 sm:h-18 rounded-xl flex items-center justify-center shadow-md icon-spin text-white shrink-0`}
                      style={{ width: 'clamp(3rem, 4vw + 2rem, 5rem)', height: 'clamp(3rem, 4vw + 2rem, 5rem)' }}
                    >
                      <IconComponent size={28} />
                    </div>
                    <div
                      className={`bg-gradient-to-r ${award.color} text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm tracking-wider shadow-md`}
                      style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 900 }}
                    >
                      {award.year}
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-[#00263f] mb-2 leading-tight text-base sm:text-lg">
                    {award.title}
                  </h4>

                  {/* Issuer */}
                  <p
                    className={`bg-gradient-to-r ${award.color} bg-clip-text text-transparent text-xs uppercase tracking-wide mb-3`}
                    style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 700 }}
                  >
                    {award.issuer}
                  </p>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed flex-grow mb-4 text-sm sm:text-base">
                    {award.description}
                  </p>

                  {/* Bottom accent */}
                  <div className={`h-1 bg-gradient-to-r ${award.color} rounded-full`} />
                </div>
              </div>
            )
          })}
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-2xl p-6 sm:p-10 lg:p-12">
          <h3 className="text-[#00263f] mb-5 sm:mb-6 text-center text-lg sm:text-xl lg:text-2xl">
            Quality & Compliance Certifications
          </h3>

          {/* 1-col on tiny phones, 2-col on sm, 4-col on md+ */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="relative bg-white rounded-xl p-4 sm:p-5 text-center border-2 border-slate-200 group-hover:border-orange-400 transition-all hover:shadow-lg shadow-sm">
                  <div
                    className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-1"
                    style={{
                      fontFamily: "'Germania One', system-ui",
                      fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.3rem)',
                      fontWeight: 400
                    }}
                  >
                    {cert.name}
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm" style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 600 }}>
                    {cert.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}