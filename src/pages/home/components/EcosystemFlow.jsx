import { Building2, GraduationCap, HeartPulse } from "lucide-react";

export default function EcosystemFlow() {
  const sectors = [
    {
      icon: Building2,
      label: "Real Estate",
      desc: "Premium residential & commercial hubs designed for modern life.",
      bgClass: "bg-[#0b3c5d]",
      textClass: "text-[#0b3c5d]",
    },
    {
      icon: HeartPulse,
      label: "Healthcare",
      desc: "Integrated medical facilities prioritizing wellness and access.",
      bgClass: "bg-[#002a05]",
      textClass: "text-[#002a05]",
    },
    {
      icon: GraduationCap,
      label: "Education",
      desc: "World-class institutions fostering the leaders of tomorrow.",
      bgClass: "bg-[#8d4f00]",
      textClass: "text-[#8d4f00]",
    },
  ];

  return (
    <section id="sectors" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#00263f] mb-4">
          The UIPL Synthesis
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
          Our holistic approach ensures every project contributes to a balanced,
          sustainable, and high-quality lifestyle for residents and partners.
        </p>
      </div>

      {/* ── Desktop: orbital layout ── */}
      <div className="relative justify-center items-center hidden md:flex -mt-30 h-[520px]">
        {/* Static orbit ring */}
        <div
          className="absolute rounded-full border-2 border-dashed border-slate-200 w-[260px] h-[260px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />

        {/* Revolving dot */}
        <div
          className="absolute w-[260px] h-[260px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [animation:orbitSpin_6s_linear_infinite]"
        >
          <div
            className="absolute w-[12px] h-[12px] bg-[#0b3c5d] rounded-full -top-[6px] left-1/2 -ml-[6px] shadow-[0_0_6px_2px_rgba(11,60,93,0.3)]"
          />
        </div>

        {/* Center Core */}
        <div
          className="absolute z-10 bg-white rounded-full flex items-center justify-center border-[6px] border-[#e8eef8] w-[110px] h-[110px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <span className="text-xl font-black text-[#00263f]">UIPL</span>
        </div>

        {/* Real Estate — top left */}
        <div
          className="absolute bg-white border border-slate-100 rounded-2xl p-5 text-center w-60 hover:scale-105 transition-transform duration-300 z-10 shadow-sm left-[calc(50%_-_320px)] top-[calc(50%_-_110px)]"
        >
          <div className="w-11 h-11 bg-[#0b3c5d] rounded-full flex items-center justify-center mx-auto mb-3">
            <Building2 size={20} className="text-white" />
          </div>
          <h3 className="font-black text-sm text-[#0b3c5d] mb-1">
            Real Estate
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Premium residential &amp; commercial hubs designed for modern life.
          </p>
        </div>

        {/* Healthcare — top right */}
        <div
          className="absolute bg-white border border-slate-100 rounded-2xl p-5 text-center w-60 hover:scale-105 transition-transform duration-300 z-10 shadow-sm left-[calc(50%_+_130px)] top-[calc(50%_-_110px)]"
        >
          <div className="w-11 h-11 bg-[#002a05] rounded-full flex items-center justify-center mx-auto mb-3">
            <HeartPulse size={20} className="text-white" />
          </div>
          <h3 className="font-black text-sm text-[#002a05] mb-1">Healthcare</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Integrated medical facilities prioritizing wellness and access.
          </p>
        </div>

        {/* Education — bottom center */}
        <div
          className="absolute bg-white border border-slate-100 rounded-2xl p-5 text-center w-60 hover:scale-105 transition-transform duration-300 z-10 shadow-sm left-[calc(50%_-_120px)] top-[calc(50%_+_110px)]"
        >
          <div className="w-11 h-11 bg-[#8d4f00] rounded-full flex items-center justify-center mx-auto mb-3">
            <GraduationCap size={20} className="text-white" />
          </div>
          <h3 className="font-black text-sm text-[#8d4f00] mb-1">Education</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            World-class institutions fostering the leaders of tomorrow.
          </p>
        </div>
      </div>

      {/* ── Mobile: vertical stack with connecting line ── */}
      <div className="flex flex-col items-center gap-0 md:hidden px-6">
        {/* UIPL core badge */}
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-[6px] border-[#e8eef8] shadow-md z-10">
          <span className="text-base font-black text-[#00263f]">UIPL</span>
        </div>

        {/* Connector */}
        <div className="w-px h-6 bg-slate-200" />

        {/* Sector cards stacked */}
        {sectors.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={s.label}
              className="flex flex-col items-center w-full max-w-xs"
            >
              <div className="w-full bg-white border border-slate-100 rounded-2xl p-5 flex items-start gap-4 shadow-sm active:scale-95 transition-transform duration-200">
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${s.bgClass}`}
                >
                  <Icon size={20} className="text-white" />
                </div>
                <div className="text-left">
                  <h3 className={`font-black text-sm mb-1 ${s.textClass}`}>
                    {s.label}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
              {/* connector between cards, but not after last */}
              {i < sectors.length - 1 && (
                <div className="w-px h-6 bg-slate-200" />
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
}
