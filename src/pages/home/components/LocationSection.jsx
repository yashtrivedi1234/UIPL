import { MapPin, Phone } from 'lucide-react'

export default function LocationSection() {
  return (
    <section id="contact" className="relative w-full bg-slate-200 overflow-hidden">
      {/* Map — fixed height on mobile, taller on larger screens */}
      <div className="relative h-[420px] sm:h-[500px] lg:h-[580px] w-full">
        <iframe
          title="UIPL Headquarters Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0!2d80.9910!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sGomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(1) opacity(0.55)' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full"
        />

        {/* Overlay card — centred on mobile, left-aligned on lg+ */}
        <div className="absolute inset-0 flex items-center justify-center lg:justify-start lg:items-center max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 sm:p-8 lg:p-9 rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-sm border border-slate-100">
            <h3 className="text-xl sm:text-2xl font-black text-[#00263f] mb-2 sm:mb-3">
              Visit Our Headquarters
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
              Experience the future of infrastructure. We are located in the heart of Lucknow's
              new commercial corridor.
            </p>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin size={16} className="text-[#00263f] mt-0.5 shrink-0 sm:w-[18px] sm:h-[18px]" />
                <p className="text-xs sm:text-sm font-medium text-slate-700">
                  Vibhuti Khand, Gomti Nagar,<br />Lucknow, Uttar Pradesh – 226010
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={16} className="text-[#00263f] shrink-0 sm:w-[18px] sm:h-[18px]" />
                <p className="text-xs sm:text-sm font-medium text-slate-700">+91 522 456 7890</p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Gomti+Nagar+Lucknow+Uttar+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 sm:mt-7 block w-full py-3 sm:py-3.5 bg-[#00263f] text-white rounded-xl font-black hover:bg-[#0b3c5d] transition-colors text-center text-sm"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}