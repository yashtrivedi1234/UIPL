import { MapPin, Phone } from 'lucide-react'

export default function CorporateLocation() {
  const mapsDirectionsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=Gomti+Nagar+Lucknow+Uttar+Pradesh'

  return (
    <section className="relative h-[600px] w-full bg-slate-200 overflow-hidden">
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbwOUWnkns7YkB__9B8Iai-jYyU6eV6q3gjYrpR2TAKWMD8gsaKGDYaOeBMgaoJ-ehBU4KGoa6tpOpvIxOcFM3zN6GpkABFETmL4MQrz5lw61oaZI_yM7RjMgQpA9wXu4zOsAMk4yzFVBYID-Zbu8QK3cf2j5dOMK570L3M9A66vMi5WAx2WZMolOead72mqT-CA8dI5p_0DAV_eN8N7Yb1dI5PyWIOMUjrgWEJlLlFa1a2vhJrelV23JkEYRdzvbuJn5beL0H7to"
        alt="Map of Lucknow"
        className="w-full h-full object-cover grayscale opacity-50"
      />

      <div className="absolute inset-0 max-w-7xl mx-auto px-6 flex items-center">
        <div className="bg-white p-9 rounded-2xl shadow-2xl max-w-sm border border-slate-100">
          <h3 className="text-2xl font-black text-[#00263f] mb-3">Visit Our Headquarters</h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            Experience the future of infrastructure. We are located in the heart of
            Lucknow's new commercial corridor.
          </p>
          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <MapPin size={18} className="text-[#00263f] mt-0.5 flex-shrink-0" />
              <p className="text-sm font-medium text-slate-700">
                UIPL Tower, Vibhuti Khand, Gomti Nagar, Lucknow, UP 226010
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <Phone size={18} className="text-[#00263f] flex-shrink-0" />
              <p className="text-sm font-medium text-slate-700">+91 522 456 7890</p>
            </div>
          </div>
          <button
            onClick={() => window.open(mapsDirectionsUrl, '_blank', 'noopener,noreferrer')}
            className="mt-7 w-full py-3.5 bg-[#00263f] text-white rounded-xl font-black hover:bg-[#0b3c5d] transition-colors"
          >
            Get Directions
          </button>
        </div>
      </div>
    </section>
  )
}