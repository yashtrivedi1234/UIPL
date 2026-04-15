import { MapPin } from 'lucide-react'

export default function ContactMap() {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-28">
      <div className="rounded-2xl overflow-hidden h-[500px] relative border border-slate-200/40 shadow-[0_20px_40px_rgba(0,28,55,0.06)]">
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

        {/* Pin overlay */}
       
      </div>
    </section>
  )
}