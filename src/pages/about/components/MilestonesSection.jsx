import { Trophy, Award, Star, Zap, Target } from 'lucide-react'

const milestones = [
  {
    year: '2005',
    title: 'First International Award',
    description: 'Received recognition for sustainable infrastructure design at the Global Construction Excellence Awards.',
    icon: Trophy,
    color: 'bg-[#fe9824]'
  },
  {
    year: '2010',
    title: '50+ Projects Milestone',
    description: 'Completed our 50th major project, establishing ourselves as a trusted name in premium infrastructure.',
    icon: Target,
    color: 'bg-[#88d982]'
  },
  {
    year: '2012',
    title: 'ISO & Green Certifications',
    description: 'Achieved ISO 9001:2008 and LEED certifications, committing to quality and environmental standards.',
    icon: Award,
    color: 'bg-[#002a05]'
  },
  {
    year: '2015',
    title: 'BIM Technology Pioneer',
    description: 'Pioneered Building Information Modeling adoption in the region, revolutionizing project delivery.',
    icon: Zap,
    color: 'bg-[#fe9824]'
  },
  {
    year: '2018',
    title: '100+ Global Awards',
    description: 'Accumulated 100+ national and international awards for architectural excellence and innovation.',
    icon: Star,
    color: 'bg-[#88d982]'
  },
  {
    year: '2020',
    title: 'Carbon-Neutral Operations',
    description: 'Achieved complete carbon neutrality across all operations through renewable energy and offset programs.',
    icon: Trophy,
    color: 'bg-[#002a05]'
  },
  {
    year: '2022',
    title: '25M+ Sq. Ft Built',
    description: 'Crossed the remarkable milestone of 25 million square feet of premium built space delivered globally.',
    icon: Zap,
    color: 'bg-[#fe9824]'
  },
  {
    year: '2024',
    title: '150+ Projects & Counting',
    description: 'Celebrating our 150th completed project with 500+ dedicated professionals driving industry innovation.',
    icon: Award,
    color: 'bg-[#88d982]'
  }
]

export default function MilestonesSection() {
  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="mb-10 sm:mb-14 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#00263f] mb-4">Key Milestones & Achievements</h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Two decades of transformative growth marked by industry recognition, innovation breakthroughs, and unwavering commitment to excellence.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#fe9824] via-[#88d982] to-[#002a05]" />

          {/* Milestones */}
          <div className="space-y-8 sm:space-y-10">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon
              const isEven = index % 2 === 0

              return (
                <div key={milestone.year} className="relative">
                  {/* Mobile Layout */}
                  <div className="md:hidden">
                    <div className="flex gap-4 sm:gap-6">
                      <div className="flex flex-col items-center pt-1">
                        <div className={`${milestone.color} rounded-full p-3 sm:p-4 text-white flex-shrink-0`}>
                          <Icon size={20} className="sm:hidden" />
                          <Icon size={24} className="hidden sm:block" />
                        </div>
                        {index < milestones.length - 1 && (
                          <div className="w-1 h-12 sm:h-16 bg-gradient-to-b from-slate-300 to-transparent mt-2 sm:mt-3" />
                        )}
                      </div>
                      <div className="pb-8 sm:pb-10 pt-1">
                        <span className="inline-block bg-[#eff4ff] text-[#fe9824] px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-black mb-2">
                          {milestone.year}
                        </span>
                        <h3 className="text-base sm:text-lg font-black text-[#00263f] mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:grid grid-cols-2 gap-8">
                    {/* Left Content (for even items) */}
                    {isEven ? (
                      <>
                        <div className="text-right pt-3">
                          <span className="inline-block bg-[#eff4ff] text-[#fe9824] px-4 py-2 rounded-full text-sm font-black mb-3">
                            {milestone.year}
                          </span>
                          <h3 className="text-xl font-black text-[#00263f] mb-2">
                            {milestone.title}
                          </h3>
                          <p className="text-slate-600 text-base leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                        <div className="flex justify-start">
                          <div className="relative flex items-center justify-start w-full">
                            <div className={`${milestone.color} rounded-full p-4 text-white absolute left-1/2 transform -translate-x-1/2 z-10`}>
                              <Icon size={28} />
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex justify-end">
                          <div className="relative flex items-center justify-end w-full">
                            <div className={`${milestone.color} rounded-full p-4 text-white absolute left-1/2 transform -translate-x-1/2 z-10`}>
                              <Icon size={28} />
                            </div>
                          </div>
                        </div>
                        <div className="text-left pt-3">
                          <span className="inline-block bg-[#f0fde8] text-[#88d982] px-4 py-2 rounded-full text-sm font-black mb-3">
                            {milestone.year}
                          </span>
                          <h3 className="text-xl font-black text-[#00263f] mb-2">
                            {milestone.title}
                          </h3>
                          <p className="text-slate-600 text-base leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Key Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-[#eff4ff] rounded-xl p-6 text-center border-2 border-[#fe9824]">
            <div className="text-2xl sm:text-3xl font-black text-[#fe9824] mb-2">45+</div>
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600">Years Active</div>
          </div>
          <div className="bg-[#f0fde8] rounded-xl p-6 text-center border-2 border-[#88d982]">
            <div className="text-2xl sm:text-3xl font-black text-[#88d982] mb-2">150+</div>
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600">Projects</div>
          </div>
          <div className="bg-[#eff4ff] rounded-xl p-6 text-center border-2 border-[#fe9824]">
            <div className="text-2xl sm:text-3xl font-black text-[#fe9824] mb-2">12+</div>
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600">Global Awards</div>
          </div>
          <div className="bg-[#f0fde8] rounded-xl p-6 text-center border-2 border-[#88d982]">
            <div className="text-2xl sm:text-3xl font-black text-[#88d982] mb-2">500+</div>
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600">Engineers</div>
          </div>
        </div>

      </div>
    </section>
  )
}
