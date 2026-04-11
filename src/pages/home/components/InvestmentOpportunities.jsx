import { TrendingUp, Zap, Shield, DollarSign } from 'lucide-react'

export default function InvestmentOpportunities() {
  const opportunities = [
    {
      icon: TrendingUp,
      title: 'Strong ROI',
      description: 'Average 8-12% annual appreciation on prime locations with proven track record over 25+ years',
      highlight: '12%+',
      highlight_label: 'Annual Returns'
    },
    {
      icon: Zap,
      title: 'Flexible Payment Plans',
      description: 'Multiple payment options including installments during construction, post-possession schemes, and corporate arrangements',
      highlight: '24',
      highlight_label: 'Months Flexible'
    },
    {
      icon: Shield,
      title: 'Secure Investment',
      description: 'RERA registered projects with transparent documentation, legal compliance, and buyer protection at every step',
      highlight: '100%',
      highlight_label: 'RERA Compliant'
    },
    {
      icon: DollarSign,
      title: 'Multiple Assets',
      description: 'Diversify across residential, commercial, education, and healthcare properties within integrated ecosystems',
      highlight: '50+',
      highlight_label: 'Active Projects'
    }
  ]

  const paymentPlans = [
    {
      name: 'During Construction',
      details: [
        '20% on booking',
        '40% at foundation',
        '25% at superstructure',
        '15% at possession'
      ]
    },
    {
      name: 'Possession Scheme',
      details: [
        '70% on booking',
        '20% at possession',
        '10% post-possession'
      ]
    },
    {
      name: 'Institutional Finance',
      details: [
        'Bank-linked schemes',
        'NRI-friendly options',
        'Corporate packages',
        'Bulk buyer benefits'
      ]
    }
  ]

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <span
            className="text-[10px] sm:text-xs uppercase text-orange-500 tracking-widest block mb-3 sm:mb-4"
            style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 900 }}
          >
            Smart Investing
          </span>
          <h2 className="text-[#00263f] mb-4 sm:mb-6">
            Investment Opportunities
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Grow your wealth with UIPL's proven investment opportunities across integrated communities.
          </p>
        </div>

        {/* Investment Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10 lg:mb-12">
          {opportunities.map((opp, index) => {
            const IconComponent = opp.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-5 sm:p-6 lg:p-7 border border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all group"
              >
                <div className="bg-orange-100 w-12 sm:w-14 h-12 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-orange-200 transition-colors">
                  <IconComponent size={24} className="text-orange-600 sm:w-[28px] sm:h-[28px]" />
                </div>

                <h5 className="text-[#00263f] mb-2 sm:mb-3">
                  {opp.title}
                </h5>

                <p className="text-slate-500 mb-4 leading-relaxed">
                  {opp.description}
                </p>

                <div className="pt-3 sm:pt-4 border-t border-slate-100">
                  <div
                    className="text-2xl sm:text-3xl text-orange-600"
                    style={{ fontFamily: "'Germania One', system-ui", fontWeight: 400 }}
                  >
                    {opp.highlight}
                  </div>
                  <span
                    className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wide"
                    style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 600 }}
                  >
                    {opp.highlight_label}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Payment Plans */}
        <div>
          <h3 className="text-[#00263f] mb-8 sm:mb-10 text-center">
            Flexible Payment Plans
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {paymentPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 sm:p-7 lg:p-8 border-2 border-slate-200 hover:border-orange-400 transition-colors relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />

                <h4 className="text-[#00263f] mb-4 sm:mb-6">
                  {plan.name}
                </h4>

                <ul className="space-y-2 sm:space-y-3">
                  {plan.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                      <span
                        className="text-slate-600"
                        style={{ fontFamily: "'Noto Sans', sans-serif", fontSize: 'clamp(0.9rem, 0.85rem + 0.15vw, 1rem)' }}
                      >
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}