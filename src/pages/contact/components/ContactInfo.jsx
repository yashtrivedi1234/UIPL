import { MapPin, Phone, Mail, Globe, Share2, AtSign } from 'lucide-react'

const details = [
  {
    icon: MapPin,
    title: 'Corporate Office',
    lines: [
      'Level 12, Monolith Tower',
      'Vibhuti Khand, Gomti Nagar',
      'Lucknow, Uttar Pradesh',
    ],
  },
  {
    icon: Phone,
    title: 'Phone Support',
    lines: ['+91 11 2345 6789', 'Mon–Sat, 9:00 AM – 6:00 PM'],
  },
  {
    icon: Mail,
    title: 'Digital Correspondence',
    lines: ['contact@uipl.com'],
  },
]

const socials = [
  { icon: Globe, href: '/', label: 'Website' },
  { icon: Share2, href: '/contact', label: 'Share' },
  { icon: AtSign, href: 'mailto:contact@uipl.com', label: 'Email' },
]

export default function ContactInfo() {
  return (
    <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-10 border border-slate-200/40 shadow-[0_20px_40px_rgba(0,28,55,0.06)] relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#8d4f00]/10 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative space-y-10">
        <div>
          <p className="text-xs font-black text-[#fe9824] tracking-widest uppercase mb-3">
            Corporate Presence
          </p>
          <h2 className="text-3xl font-black text-[#00263f]">
            Let's build something extraordinary
          </h2>
        </div>

        <div className="space-y-8">
          {details.map(({ icon: Icon, title, lines }) => (
            <div key={title} className="flex items-start gap-5">
              <div className="w-12 h-12 bg-[#0b3c5d]/10 flex items-center justify-center rounded-xl flex-shrink-0">
                <Icon size={20} className="text-[#0b3c5d]" />
              </div>
              <div>
                <h4 className="font-black text-[#00263f]">{title}</h4>
                {lines.map((line, i) => (
                  <p key={i} className={`mt-0.5 ${i === 0 ? 'text-slate-600' : 'text-slate-400 text-sm'}`}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-200/60 flex gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_self'}
              className="w-10 h-10 rounded-full bg-[#0b3c5d] text-white flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}