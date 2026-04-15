import { Calendar, Clock, MapPin, Users } from 'lucide-react'
import { useState } from 'react'

const events = [
  {
    id: 1,
    title: 'Morning Yoga & Meditation',
    date: 'Every Monday - Friday',
    time: '6:30 AM - 7:30 AM',
    location: 'Wellness Spa, Studio A',
    attendees: 24,
    type: 'Fitness',
    color: 'bg-blue-500'
  },
  {
    id: 2,
    title: 'Zumba Dance Party',
    date: 'Wednesday',
    time: '7:00 PM - 8:00 PM',
    location: 'Event Hall, Ground Floor',
    attendees: 35,
    type: 'Recreation',
    color: 'bg-pink-500'
  },
  {
    id: 3,
    title: 'Pool Aqua Aerobics',
    date: 'Tuesday & Thursday',
    time: '6:00 PM - 7:00 PM',
    location: 'Olympic Swimming Pool',
    attendees: 18,
    type: 'Water Sports',
    color: 'bg-cyan-500'
  },
  {
    id: 4,
    title: 'Networking Dinner',
    date: 'Saturday',
    time: '7:00 PM - 9:00 PM',
    location: 'Event Hall, Banquet Wing',
    attendees: 60,
    type: 'Social',
    color: 'bg-purple-500'
  },
  {
    id: 5,
    title: 'Kids Weekend Activities',
    date: 'Saturday & Sunday',
    time: '10:00 AM - 1:00 PM',
    location: 'Kids Play Zone',
    attendees: 45,
    type: 'Family',
    color: 'bg-green-500'
  },
  {
    id: 6,
    title: 'Advanced Fitness Bootcamp',
    date: 'Monday & Wednesday',
    time: '5:30 PM - 6:30 PM',
    location: 'Gymnasium, Training Area',
    attendees: 28,
    type: 'Fitness',
    color: 'bg-orange-500'
  },
]

export default function CommunityEventsCalendar() {
  const [selectedType, setSelectedType] = useState(null)
  const [selectedEvent, setSelectedEvent] = useState(null)

  const types = ['Fitness', 'Recreation', 'Water Sports', 'Social', 'Family']
  const filteredEvents = selectedType
    ? events.filter(e => e.type === selectedType)
    : events

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-[#00263f]">Community Events</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Join exciting activities and connect with fellow residents
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <button
            onClick={() => setSelectedType(null)}
            className={`px-5 py-2 rounded-full font-bold duration-300 ${
              selectedType === null
                ? 'bg-[#0b3c5d] text-white'
                : 'bg-[#f0f4f8] text-[#00263f] hover:bg-[#e0e8f0]'
            }`}
          >
            All Events
          </button>
          {types.map(type => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-5 py-2 rounded-full font-bold duration-300 ${
                selectedType === type
                  ? 'bg-[#fe9824] text-white'
                  : 'bg-[#f0f4f8] text-[#00263f] hover:bg-[#e0e8f0]'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredEvents.map(event => (
            <button
              key={event.id}
              onClick={() => setSelectedEvent(event.id)}
              className={`p-6 rounded-xl border-2 duration-300 text-left group ${
                selectedEvent === event.id
                  ? `${event.color} text-white border-[#00263f]`
                  : 'bg-white border-[#e0e0e0] hover:border-[#fe9824]'
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`${event.color} text-white px-3 py-1 rounded text-xs font-bold`}>
                  {event.type}
                </div>
                <Users size={18} className={selectedEvent === event.id ? 'text-white' : 'text-slate-400'} />
              </div>

              {/* Title */}
              <h3 className={`mb-4 ${selectedEvent === event.id ? 'text-white' : 'text-[#00263f]'}`}>
                {event.title}
              </h3>

              {/* Details */}
              <div className={`space-y-3 text-sm ${selectedEvent === event.id ? 'text-white/90' : 'text-slate-600'}`}>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{event.location}</span>
                </div>
              </div>

              {/* Attendees */}
              <div className={`mt-4 pt-4 border-t ${selectedEvent === event.id ? 'border-white/20' : 'border-[#e0e0e0]'}`}>
                <p className={`text-xs font-bold ${selectedEvent === event.id ? 'text-white/75' : 'text-slate-500'}`}>
                  {event.attendees} residents attending
                </p>
              </div>

              {/* CTA */}
              {selectedEvent === event.id && (
                <button className="mt-4 w-full bg-white text-[#00263f] font-bold py-2 rounded-lg hover:scale-105 duration-300">
                  Register Now
                </button>
              )}
            </button>
          ))}
        </div>

        {/* Calendar View */}
        {/* Weekly Schedule - improved */}
<div className="bg-gradient-to-br from-[#f0f4f8] to-[#e8eef7] rounded-2xl p-8 border border-[#d0d0d0]">
  <h3 className="text-[#00263f] mb-4">This Week's Schedule</h3>

  {/* Legend */}
  <div className="flex flex-wrap gap-3 mb-6">
    {[
      { type: 'Fitness', color: 'bg-blue-500' },
      { type: 'Recreation', color: 'bg-pink-500' },
      { type: 'Water Sports', color: 'bg-cyan-500' },
      { type: 'Social', color: 'bg-purple-500' },
      { type: 'Family', color: 'bg-green-500' },
    ].map(({ type, color }) => (
      <div key={type} className="flex items-center gap-2 text-xs text-slate-600">
        <span className={`w-2.5 h-2.5 rounded-full ${color}`} />
        {type}
      </div>
    ))}
  </div>

  {/* Grid */}
  <div className="grid grid-cols-7 gap-2">
    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => {
      const dayEvents = events.filter(e => e.date.includes(day) || (e.date.includes('Every') && !['Sat','Sun'].includes(day)));
      return (
        <div key={day} className="flex flex-col gap-2">
          {/* Day header */}
          <div className="text-center bg-white rounded-lg py-2 px-1 border border-[#e0e0e0]">
            <p className="text-xs font-bold text-[#00263f]">{day}</p>
          </div>
          {/* Pills */}
          {dayEvents.length === 0 ? (
            <p className="text-center text-slate-400 text-xs py-2">—</p>
          ) : (
            dayEvents.slice(0, 3).map(e => (
              <div key={e.id} className={`rounded-lg p-2 border-l-4 ${e.color.replace('bg-','border-')} bg-white`}>
                <p className="text-[10px] font-bold text-[#00263f] leading-tight">{e.title}</p>
                <p className="text-[10px] text-slate-400 mt-1">{e.time.split(' - ')[0]}</p>
              </div>
            ))
          )}
        </div>
      );
    })}
  </div>
</div>
      </div>
    </section>
  )
}
