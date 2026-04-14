import { HeartPulse, Zap, FlaskConical, Trees, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const tags = [
  { icon: Zap, label: "Level 1 Trauma Units" },
  { icon: FlaskConical, label: "Sterile Labs" },
  { icon: Trees, label: "Healing Gardens" },
];

export default function HealthcareSector() {
  const navigate = useNavigate();

  return (
    <section className="py-8 px-6 bg-[#f8f9ff] overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image */}
          <div className="w-full lg:w-1/2 group relative">
            <div className="absolute -inset-4 bg-[#0b3c5d]/10 rounded-4xl blur-2xl group-hover:bg-[#0b3c5d]/20 transition-all duration-500" />
            <div className="relative overflow-hidden rounded-2xl shadow-2xl h-120">
              <img
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
                alt="Medical hospital"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#00263f]/60 to-transparent" />
              <div className="absolute bottom-7 left-7 text-white">
                <p className="font-black text-xl">UIPL Health Nexus</p>
                <p className="text-sm opacity-75">
                  Advanced Medical Infrastructure · 2024
                </p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-start gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#0b3c5d] flex items-center justify-center shrink-0 mt-1">
                <HeartPulse size={22} className="text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#00263f] leading-tight sm:whitespace-nowrap">
                Healthcare{" "}
                <span className="text-[#0b3c5d]">
                  Advanced Trust &amp; Care
                </span>
              </h2>
            </div>
            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              In healthcare, structure meets soul. UIPL designs medical
              facilities that prioritize patient healing and clinical
              efficiency. Our hospitals are equipped with world-class HVAC,
              advanced sanitation engineering, and seamless workflows to ensure
              that life-saving care is delivered in a dignified, high-tech
              environment.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {tags.map((tag) => {
                const TagIcon = tag.icon;

                return (
                  <span
                    key={tag.label}
                    className="bg-white/70 backdrop-blur border border-slate-200/40 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 text-[#00263f]"
                  >
                    <TagIcon size={15} className="text-[#0b3c5d]" /> {tag.label}
                  </span>
                );
              })}
            </div>

            <button
              onClick={() => navigate("/healthcare")}
              className="group flex items-center gap-3 bg-[#00263f] text-white px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg font-black"
            >
              View Healthcare Centers
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
