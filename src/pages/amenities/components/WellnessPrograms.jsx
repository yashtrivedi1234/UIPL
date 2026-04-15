import { Activity, Target, Award, TrendingUp, Users, Heart } from 'lucide-react'
import { useState } from 'react'

const programs = [
  {
    id: 1,
    icon: Activity,
    title: '30-Day Fitness Challenge',
    description: 'Transform your body in 30 days with guided workouts and nutritionist support',
    duration: '4 weeks',
    level: 'All Levels',
    members: 142,
    progress: 65,
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 2,
    icon: Heart,
    title: 'Mindfulness & Wellness',
    description: 'Daily meditation and stress management sessions for mental peace',
    duration: 'Ongoing',
    level: 'Beginner',
    members: 89,
    progress: 45,
    color: 'from-pink-500 to-pink-600'
  },
  {
    id: 3,
    icon: Target,
    title: 'Weight Loss Program',
    description: 'Personalized diet plans and fitness routines with expert guidance',
    duration: '12 weeks',
    level: 'All Levels',
    members: 267,
    progress: 78,
    color: 'from-orange-500 to-orange-600'
  },
  {
    id: 4,
    icon: TrendingUp,
    title: 'Muscle Building Mastery',
    description: 'Advanced strength training program with certified trainers',
    duration: '8 weeks',
    level: 'Advanced',
    members: 95,
    progress: 52,
    color: 'from-red-500 to-red-600'
  },
  {
    id: 5,
    icon: Award,
    title: 'Yoga & Flexibility',
    description: 'Improve flexibility and core strength through daily yoga sessions',
    duration: 'Ongoing',
    level: 'All Levels',
    members: 156,
    progress: 88,
    color: 'from-green-500 to-green-600'
  },
  {
    id: 6,
    icon: Users,
    title: 'Community Sports League',
    description: 'Weekly basketball, badminton, and tennis tournaments',
    duration: 'Monthly',
    level: 'All Levels',
    members: 203,
    progress: 60,
    color: 'from-purple-500 to-purple-600'
  },
]

export default function WellnessPrograms() {
  const [selectedProgram, setSelectedProgram] = useState(1)
  const [joinedPrograms, setJoinedPrograms] = useState([])

  const active = programs.find(p => p.id === selectedProgram)
  const Icon = active?.icon

  const toggleJoin = (id) => {
    setJoinedPrograms(prev =>
      prev.includes(id)
        ? prev.filter(p => p !== id)
        : [...prev, id]
    )
  }

  return (
    <section className="py-8 bg-gradient-to-br from-[#f8f9ff] to-[#f0f4f8]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-[#00263f]">Wellness Programs</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Personalized fitness and wellness initiatives designed for holistic health
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Program List */}
          <div className="lg:col-span-1">
            <div className="space-y-3">
              {programs.map(program => (
                <button
                  key={program.id}
                  onClick={() => setSelectedProgram(program.id)}
                  className={`w-full p-4 rounded-xl duration-300 text-left border-2 group ${
                    selectedProgram === program.id
                      ? 'bg-white border-[#fe9824] shadow-lg'
                      : 'bg-white/50 border-[#e0e0e0] hover:border-[#fe9824] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${program.color} text-white`}>
                      <program.icon size={18} />
                    </div>
                    <div className="flex-1 text-left">
                      <h4 className=" text-[#00263f]">{program.title}</h4>
                      <p className=" text-slate-500">{program.members} members</p>
                    </div>
                  </div>
                  {selectedProgram === program.id && (
                    <div className="ml-11 h-1 bg-gradient-to-r from-[#fe9824] to-transparent rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Program Details */}
          {active && (
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#e0e0e0]">
                {/* Hero Section */}
                <div className={`bg-gradient-to-br ${active.color} h-40 flex items-center justify-center`}>
                  <Icon className="text-white" size={64} />
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Title */}
                  <h3 className="text-[#00263f] mb-2">{active.title}</h3>
                  <p className="text-slate-600 mb-6 text-lg leading-relaxed">{active.description}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-[#e0e0e0]">
                    <div>
                      <p className=" text-slate-500 font-bold uppercase mb-1">Duration</p>
                      <p className="font-black text-[#00263f] text-lg">{active.duration}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase mb-1">Level</p>
                      <p className="text-[#00263f]">​{active.level}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase mb-1">Members</p>
                      <p className="text-[#00263f]">{active.members}</p>
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="mb-8">
                    <div className="flex justify-between mb-2">
                      <p className="text-sm font-bold text-[#00263f]">Community Progress</p>
                      <p className="text-sm font-black text-[#fe9824]">{active.progress}%</p>
                    </div>
                    <div className="w-full bg-[#f0f4f8] rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${active.color} duration-500`}
                        style={{ width: `${active.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h4 className="text-[#00263f] mb-4">Program Benefits</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-start gap-2">
                        <span className="text-[#fe9824] font-bold">✓</span>
                        <p className="text-sm text-slate-600">Expert Guidance</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#fe9824] font-bold">✓</span>
                        <p className="text-sm text-slate-600">Personalized Plans</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#fe9824] font-bold">✓</span>
                        <p className="text-sm text-slate-600">Community Support</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#fe9824] font-bold">✓</span>
                        <p className="text-sm text-slate-600">Progress Tracking</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => toggleJoin(active.id)}
                    className={`w-full py-3 rounded-xl font-black duration-300 text-lg ${
                      joinedPrograms.includes(active.id)
                        ? 'bg-[#e8eef7] text-[#0b3c5d] border-2 border-[#0b3c5d]'
                        : `bg-gradient-to-r ${active.color} text-white hover:scale-105`
                    }`}
                  >
                    {joinedPrograms.includes(active.id) ? '✓ Already Joined' : 'Join Program'}
                  </button>
                </div>
              </div>

              {/* Program Schedule */}
              <div className="mt-6 bg-white rounded-xl p-6 border border-[#e0e0e0]">
                <h4 className="text-[#00263f] mb-4">This Week's Sessions</h4>
                <div className="space-y-2">
                  {['Monday 6:00 AM', 'Wednesday 5:30 PM', 'Friday 7:00 AM', 'Saturday 9:00 AM'].map((session, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-[#f8f9ff] p-3 rounded-lg">
                      <span className="text-sm font-bold text-[#00263f]">{session}</span>
                      <button className="text-xs bg-[#fe9824] text-white px-3 py-1 rounded font-bold hover:scale-105 duration-300">
                        Book
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
