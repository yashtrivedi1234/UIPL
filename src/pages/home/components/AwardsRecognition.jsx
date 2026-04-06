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
      description: 'Recognition as one of India\'s most innovative and customer-centric real estate developers.',
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

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .award-card {
          animation: float 3s ease-in-out infinite;
        }
        .award-card:nth-child(2) {
          animation-delay: 0.2s;
        }
        .award-card:nth-child(3) {
          animation-delay: 0.4s;
        }
        .award-card:nth-child(4) {
          animation-delay: 0.6s;
        }
        .award-card:nth-child(5) {
          animation-delay: 0.8s;
        }
        .award-card:nth-child(6) {
          animation-delay: 1s;
        }
        .icon-spin:hover {
          animation: spin-slow 1s ease-in-out;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[10px] sm:text-xs font-black uppercase text-orange-500 tracking-widest block mb-3 sm:mb-4">
            Recognition & Achievements
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#00263f] mb-4 sm:mb-6">
            Awards & Recognition
          </h2>
          <p className="text-slate-500 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Industry recognition for our excellence in development, innovation, and customer satisfaction.
          </p>
        </div>

        {/* Year Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
          {['All', '2025', '2024', '2023', '2022'].map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(selectedYear === year && year !== 'All' ? null : year)}
              className={`px-5 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wide transition-all ${
                selectedYear === year || (!selectedYear && year === 'All')
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg scale-105'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800 border border-slate-200'
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Awards Grid with Unique Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {(selectedYear && selectedYear !== 'All' 
            ? awards.filter(a => a.year === selectedYear)
            : awards).map((award, index) => {
            const IconComponent = award.icon
            return (
              <div
                key={index}
                className="award-card group relative"
              >
                {/* Gradient Background Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${award.color} rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-6 sm:p-8 border-2 border-slate-200 group-hover:border-orange-300 transition-all duration-300 h-full flex flex-col shadow-sm group-hover:shadow-lg">
                  
                  {/* Top Section with Icon and Year */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`bg-gradient-to-br ${award.color} w-16 sm:w-20 h-16 sm:h-20 rounded-xl flex items-center justify-center shadow-md icon-spin text-white`}>
                      <IconComponent size={32} className="sm:w-[40px] sm:h-[40px]" />
                    </div>
                    <div className={`bg-gradient-to-r ${award.color} text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-black tracking-wider shadow-md`}>
                      {award.year}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-black text-[#00263f] mb-2 leading-tight">
                    {award.title}
                  </h3>
                  <p className={`bg-gradient-to-r ${award.color} bg-clip-text text-transparent text-xs sm:text-sm font-bold uppercase tracking-wide mb-4`}>
                    {award.issuer}
                  </p>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed flex-grow mb-4">
                    {award.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className={`h-1 bg-gradient-to-r ${award.color} rounded-full`} />
                </div>
              </div>
            )
          })}
        </div>

        {/* Certifications Section */}
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-2xl p-8 sm:p-10 lg:p-12 ">
          <h3 className="text-2xl sm:text-3xl font-black text-[#00263f] mb-4 sm:mb-5 text-center">
            Quality & Compliance Certifications
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {certifications.map((cert, idx) => (
              <div 
                key={idx} 
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="relative bg-white rounded-xl p-5 sm:p-6 text-center border-2 border-slate-200 group-hover:border-orange-400 transition-all hover:shadow-lg shadow-sm">
                  <div className="text-lg sm:text-2xl font-black bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-2">
                    {cert.name}
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm font-semibold">
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
