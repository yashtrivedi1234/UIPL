import { MapPin, Phone, Mail } from "lucide-react";

const details = [
  {
    icon: MapPin,
    title: "Corporate Office",
    lines: [
      "Level 12, Monolith Tower",
      "Vibhuti Khand, Gomti Nagar",
      "Lucknow, Uttar Pradesh",
    ],
  },
  {
    icon: Phone,
    title: "Phone Support",
    lines: ["+91 11 2345 6789", "Mon–Sat, 9:00 AM – 6:00 PM"],
  },
  {
    icon: Mail,
    title: "Digital Correspondence",
    lines: ["contact@uipl.com"],
  },
];

export default function ContactInfo() {
  return (
    <div className="h-full bg-white/70 backdrop-blur-xl rounded-2xl p-10 border border-slate-200/40 shadow-[0_20px_40px_rgba(0,28,55,0.06)] relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#8d4f00]/10 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative space-y-10">
        <div>
          <p className="text-xs  text-[#fe9824] tracking-widest uppercase mb-3">
            Corporate Presence
          </p>
          <h2 className=" text-[#00263f]">
            Let's build something extraordinary
          </h2>
        </div>

        <div className="space-y-8">
          {details.map(({ icon: DetailIcon, title, lines }) => {
            const iconLabel = DetailIcon.displayName || DetailIcon.name || title

            return (
              <div key={title} className="flex items-start gap-5">
                <div
                  className="w-12 h-12 bg-[#0b3c5d]/10 flex items-center justify-center rounded-xl shrink-0"
                  aria-label={iconLabel}
                >
                  <DetailIcon size={20} className="text-[#0b3c5d]" />
                </div>
                <div>
                  <h4 className=" text-[#00263f]">{title}</h4>
                  {lines.map((line, i) => (
                    <p
                      key={i}
                      className={`mt-0.5 ${i === 0 ? "text-slate-600" : "text-slate-400 text-sm"}`}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
