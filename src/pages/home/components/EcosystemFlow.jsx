import { Building2, GraduationCap, HeartPulse } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

export default function EcosystemFlow() {
  const timelineData = [
    {
      id: 1,
      title: "Real Estate Development",
      date: "Phase 1",
      content:
        "Premium residential and commercial hubs designed for modern life with sustainable infrastructure and smart living.",
      category: "Real Estate",
      icon: Building2,
      status: "completed",
    },
    {
      id: 2,
      title: "Healthcare Integration",
      date: "Phase 2",
      content:
        "Advanced healthcare facilities ensuring wellness, accessibility, and integrated medical support for residents.",
      category: "Healthcare",
      icon: HeartPulse,
      status: "in-progress",
    },
    {
      id: 3,
      title: "Educational Ecosystem",
      date: "Phase 3",
      content:
        "World-class educational institutions designed to nurture innovation, leadership, and future-ready skills.",
      category: "Education",
      icon: GraduationCap,
      status: "pending",
    },
  ];

  return (
    <section id="sectors" className="py-8 sm:py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-8 sm:mb-10">
        <h2 className="text-[#00263f] mb-4">
          The UIPL Synthesis
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Our holistic approach ensures every project contributes to a balanced, sustainable,
          and high-quality lifestyle for residents and partners.
        </p>
      </div>

      <RadialOrbitalTimeline timelineData={timelineData} />
    </section>
  );
}