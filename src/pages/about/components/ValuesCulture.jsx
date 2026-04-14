import { Heart, Users, TrendingUp, Leaf, Shield, Lightbulb } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We maintain unwavering ethical standards in every decision, transaction, and relationship. Trust is our foundation.',
    color: 'text-red-500',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork. Our diverse team of experts works seamlessly to deliver exceptional results.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    icon: TrendingUp,
    title: 'Excellence',
    description: 'We constantly raise the bar. Every project is an opportunity to surpass expectations and set new industry standards.',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200'
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'We prioritize environmental responsibility. Green initiatives are core to our business strategy, not an afterthought.',
    color: 'text-green-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200'
  },
  {
    icon: Shield,
    title: 'Accountability',
    description: 'We stand behind our work. Transparency and responsibility guide our interactions with clients, partners, and stakeholders.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace change and challenge the status quo. Creative thinking and forward-looking solutions define our approach.',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200'
  }
]

export default function ValuesCulture() {
  return (
    <section className="py-8 sm:py-12 bg-gradient-to-b from-white to-[#f8fafb]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="mb-10 sm:mb-14 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#00263f] mb-4">Our Values & Culture</h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Our core values define who we are and guide every decision we make. They're not just words—they're the principles we live by every single day.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <div
                key={value.title}
                className={`${value.bgColor} border-2 ${value.borderColor} p-6 sm:p-8 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-white flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`${value.color}`} size={28} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-[#00263f] pt-1">
                    {value.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Culture Highlights */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-[#e5eaf5] shadow-sm">
          <h3 className="text-xl sm:text-2xl font-black text-[#00263f] mb-8">Our Work Culture</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            
            {/* Column 1 */}
            <div className="space-y-6">
              <div>
                <h4 className="font-black text-[#fe9824] mb-2 text-sm uppercase tracking-wider">Diversity & Inclusion</h4>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  We celebrate diverse perspectives and backgrounds. Our team represents 25+ nationalities, bringing rich cultural insights and innovative thinking to every project.
                </p>
              </div>
              
              <div>
                <h4 className="font-black text-[#88d982] mb-2 text-sm uppercase tracking-wider">Continuous Learning</h4>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  We invest in our people. Annual training programs, certifications, and skill development workshops ensure our team stays at the cutting edge of industry advancements.
                </p>
              </div>

              <div>
                <h4 className="font-black text-[#fe9824] mb-2 text-sm uppercase tracking-wider">Work-Life Balance</h4>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  We believe happy employees create exceptional work. Flexible schedules, wellness programs, and mental health support are priorities for us.
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              <div>
                <h4 className="font-black text-[#88d982] mb-2 text-sm uppercase tracking-wider">Mentorship Programs</h4>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Senior experts mentor junior professionals, fostering knowledge transfer and creating career pathways for ambitious team members.
                </p>
              </div>
              
              <div>
                <h4 className="font-black text-[#fe9824] mb-2 text-sm uppercase tracking-wider">Community Engagement</h4>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  We give back to society through CSR initiatives, environmental projects, and community development programs across regions we operate.
                </p>
              </div>

              <div>
                <h4 className="font-black text-[#88d982] mb-2 text-sm uppercase tracking-wider">Recognition & Rewards</h4>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Excellence is celebrated. We recognize outstanding contributions through awards, bonuses, and career advancement opportunities.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
