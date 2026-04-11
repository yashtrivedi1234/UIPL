import { MapPin, Phone } from 'lucide-react'

export default function LocationSection() {
  return (
    <section id="contact" className="relative w-full bg-slate-200 overflow-hidden">
      {/* Map — fixed height on mobile, taller on larger screens */}
      <div className="relative h-[420px] sm:h-[500px] lg:h-[580px] w-full">
        <iframe
          title="Code Crafter Web Solutions Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.0653415797037!2d81.00946497511869!3d26.83787396330324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd35011967e7%3A0xc4a2515047590d2a!2sCode%20Crafter%20Web%20Solutions%20%7C%20Website%20%26%20Software%20Development%20%7C%20Popular%20IT%20Service%20Providers%20Company%20in%20Lucknow!5e0!3m2!1sen!2sin!4v1775467776481!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full border-0"
        />

    
      
      </div>
    </section>
  )
}