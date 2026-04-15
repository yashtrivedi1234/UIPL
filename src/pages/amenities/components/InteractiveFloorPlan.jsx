import { MapPin } from 'lucide-react'
import { useState } from 'react'

const amenityLocations = [
  { id: 1, name: 'Olympic Pool', position: '25% 30%', icon: '🏊', color: 'bg-blue-500' },
  { id: 2, name: 'Gymnasium', position: '60% 40%', icon: '💪', color: 'bg-orange-500' },
  { id: 3, name: 'Wellness Spa', position: '70% 60%', icon: '🧖', color: 'bg-pink-500' },
  { id: 4, name: 'Event Hall', position: '35% 70%', icon: '🎉', color: 'bg-purple-500' },
  { id: 5, name: 'Kids Zone', position: '55% 75%', icon: '🎮', color: 'bg-green-500' },
]

export default function InteractiveFloorPlan() {
  const [activeAmenity, setActiveAmenity] = useState(null)

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-[#00263f]">Facility Locations</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Explore the strategic placement of our premium amenities across the complex
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Floor Plan */}
          <div className="lg:col-span-2">
            <div className="relative bg-gradient-to-br from-[#f0f4f8] to-[#e8eef7] rounded-2xl overflow-hidden aspect-video border-2 border-[#d0d0d0]">
              {/* Floor plan SVG-like background */}
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 600">
                <rect x="50" y="50" width="900" height="500" fill="none" stroke="#0b3c5d" strokeWidth="2" />
                <line x1="50" y1="300" x2="950" y2="300" stroke="#0b3c5d" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="500" y1="50" x2="500" y2="550" stroke="#0b3c5d" strokeWidth="1" strokeDasharray="5,5" />
              </svg>

              {/* Amenity Markers */}
              {amenityLocations.map((amenity) => (
                <button
                  key={amenity.id}
                  onClick={() => setActiveAmenity(amenity.id)}
                  style={{ left: amenity.position.split(' ')[0], top: amenity.position.split(' ')[1] }}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 duration-300 group ${
                    activeAmenity === amenity.id ? 'scale-125' : 'scale-100 hover:scale-110'
                  }`}
                >
                  <div className={`${amenity.color} w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg cursor-pointer ring-4 ring-white`}>
                    {amenity.icon}
                  </div>
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#00263f] text-white px-3 py-1 rounded text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {amenity.name}
                  </div>
                </button>
              ))}

              {/* Center Label */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <div className="text-5xl mb-2">🏢</div>
                  <p className="text-[#00263f]">UIPL Complex</p>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
              {amenityLocations.map((amenity) => (
                <button
                  key={amenity.id}
                  onClick={() => setActiveAmenity(amenity.id)}
                  className={`p-4 rounded-lg border-2 duration-300 ${
                    activeAmenity === amenity.id
                      ? `${amenity.color} text-white border-[#00263f]`
                      : 'bg-[#f0f4f8] border-[#d0d0d0] hover:border-[#00263f]'
                  }`}
                >
                  <div className="text-2xl mb-2">{amenity.icon}</div>
                  <p className="font-bold text-sm">{amenity.name}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Details Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 bg-gradient-to-br from-[#0b3c5d] to-[#00263f] rounded-2xl p-8 text-white">
              <h3 className="mb-6">Amenity Details</h3>

              {activeAmenity ? (
                <div className="space-y-6">
                  {amenityLocations
                    .filter((a) => a.id === activeAmenity)
                    .map((amenity) => (
                      <div key={amenity.id}>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-4xl">{amenity.icon}</span>
                          <h4 className="text-lg">{amenity.name}</h4>
                        </div>
                        <p className="text-slate-200 text-sm leading-relaxed mb-4">
                          Premium {amenity.name.toLowerCase()} facility with state-of-the-art equipment and 24/7 access for residents.
                        </p>
                        <div className="space-y-2 text-sm">
                          <p>✓ Open 24/7</p>
                          <p>✓ Professional Staff</p>
                          <p>✓ Free for Residents</p>
                          <p>✓ Book via App</p>
                        </div>
                        <button className="mt-6 w-full bg-[#fe9824] text-[#00263f] font-black py-2 rounded-lg hover:scale-105 duration-300">
                          Book Now
                        </button>
                      </div>
                    ))}
                </div>
              ) : (
                <div className="text-slate-300 text-center py-8">
                  <MapPin size={48} className="mx-auto mb-4 opacity-50" />
                  <p className="text-sm">Click on any amenity to view details</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
