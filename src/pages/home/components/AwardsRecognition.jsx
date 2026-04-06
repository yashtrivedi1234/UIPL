import { Award, Star, Trophy, Zap } from 'lucide-react'

export default function AwardsRecognition() {
  const awards = [
    {
      icon: Trophy,
      year: '2025',
      title: 'Best Integrated Development',
      issuer: 'National Real Estate Awards',
      description: 'Recognition for creating world-class integrated communities combining education, healthcare, and real estate.'
    },
    {
      icon: Award,
      year: '2024',
      title: 'Sustainability Excellence',
      issuer: 'Green Building Forum India',
      description: 'Awarded for exceptional eco-friendly construction practices and environmental commitment.'
    },
    {
      icon: Star,
      year: '2024',
      title: 'Developer of the Year',
      issuer: 'Real Estate Magazine',
      description: 'Recognition as one of India\'s most innovative and customer-centric real estate developers.'
    },
    {
      icon: Zap,
      year: '2023',
      title: 'Innovation in Smart Cities',
      issuer: 'Ministry of Housing',
      description: 'Commendation for pioneering smart city technologies in residential communities.'
    },
    {
      icon: Trophy,
      year: '2023',
      title: 'Customer Satisfaction Award',
      issuer: 'Indian Builder Forum',
      description: 'Award for highest customer satisfaction and after-sales service quality.'
    },
    {
      icon: Award,
      year: '2022',
      title: 'Best Investment Opportunity',
      issuer: 'Investment Council India',
      description: 'Recognition for providing strong returns and secure investment opportunities.'
    }
  ]

  const certifications = [
    { name: 'ISO 9001', desc: 'Quality Management' },
    { name: 'ISO 14001', desc: 'Environmental Care' },
    { name: 'RERA Registered', desc: 'Legal Compliance' },
    { name: 'LEED Certified', desc: 'Green Building' }
  ]

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {awards.map((award, index) => {
            const IconComponent = award.icon
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 sm:p-7 lg:p-8 border-2 border-slate-200 hover:border-orange-400 hover:shadow-lg transition-all group"
              >
                {/* Top Section */}
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-orange-100 w-12 sm:w-14 h-12 sm:h-14 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                    <IconComponent size={24} className="text-orange-600 sm:w-[28px] sm:h-[28px]" />
                  </div>
                  <span className="bg-orange-600 text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold">
                    {award.year}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-black text-[#00263f] mb-1">
                  {award.title}
                </h3>
                <p className="text-orange-600 text-xs sm:text-sm font-bold uppercase tracking-wide mb-3">
                  {award.issuer}
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {award.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8 sm:p-10 lg:p-12 mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-black text-[#00263f] mb-8 text-center">
            Quality & Compliance Certifications
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 sm:p-6 text-center border-2 border-blue-200 hover:border-orange-400 transition-colors">
                <div className="text-xl sm:text-2xl font-black text-blue-600 mb-2">
                  {cert.name}
                </div>
                <p className="text-slate-600 text-xs sm:text-sm font-semibold">
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-12 border-t border-slate-200">
          {[
            { number: '15+', label: 'Major Awards' },
            { number: '50+', label: 'Recognitions' },
            { number: '4', label: 'Key Certifications' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-orange-600 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 text-sm sm:text-base font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
