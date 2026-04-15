import { Trees, Droplets, SunMedium, Wind } from "lucide-react";

const wellnessPoints = [
  {
    icon: Trees,
    title: "Healing Landscapes",
    text: "Green breathing pockets and low-noise courtyards reduce stress and improve patient experience.",
  },
  {
    icon: Droplets,
    title: "Safe Water Systems",
    text: "Hospital-grade water treatment with robust monitoring ensures safety and continuity.",
  },
  {
    icon: SunMedium,
    title: "Daylight Optimized Design",
    text: "Natural light strategies improve mood, reduce fatigue, and support healthier indoor environments.",
  },
  {
    icon: Wind,
    title: "Air Quality Control",
    text: "Filtered circulation and pressure-zoned ventilation for sterile and high-risk environments.",
  },
];

export default function WellnessEcosystem() {
  return (
    <section className="py-8 px-6 bg-[#f8fbff]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h3 className="text-4xl md:text-5xl text-[#00263f] leading-tight">
            A Wellness-Driven Healthcare Ecosystem
          </h3>
          <p className="text-slate-600 text-lg leading-relaxed">
            Our master planning integrates sustainability and human comfort to
            create medical campuses that support better outcomes for patients,
            staff, and surrounding communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {wellnessPoints.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm"
            >
              <div className="w-11 h-11 rounded-xl bg-[#e8f3ff] text-[#0b3c5d] flex items-center justify-center mb-4">
                <Icon size={20} />
              </div>
              <h4 className="text-[#00263f] mb-2">{title}</h4>
              <p className="text-slate-600 leading-relaxed text-sm">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
