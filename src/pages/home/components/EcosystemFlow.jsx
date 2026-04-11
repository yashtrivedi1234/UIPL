import { Building2, GraduationCap, HeartPulse, Calendar, Code, FileText, User, Clock } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

export default function EcosystemFlow() {
const timelineData = [
  {
    id: 1,
    title: "Real Estate Development",
    date: "Phase 1",
    content:
      "Premium residential & commercial hubs designed for modern life with sustainable infrastructure and smart living.",
    category: "Real Estate",
    icon: Building2,
    relatedIds: [2],
    status: "completed",
    energy: 95,
  },
  {
    id: 2,
    title: "Healthcare Integration",
    date: "Phase 2",
    content:
      "Advanced healthcare facilities ensuring wellness, accessibility, and integrated medical support for residents.",
    category: "Healthcare",
    icon: HeartPulse,
    relatedIds: [1, 3],
    status: "in-progress",
    energy: 80,
  },
  {
    id: 3,
    title: "Educational Ecosystem",
    date: "Phase 3",
    content:
      "World-class educational institutions designed to nurture innovation, leadership, and future-ready skills.",
    category: "Education",
    icon: GraduationCap,
    relatedIds: [2],
    status: "pending",
    energy: 60,
  },
];

  return (
    <section id="sectors" className="py-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#00263f] mb-4">
          The UIPL Synthesis
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
          Our holistic approach ensures every project contributes to a balanced,
          sustainable, and high-quality lifestyle for residents and partners.
        </p>
      </div>

      {/* Timeline Section */}
      
        <RadialOrbitalTimeline timelineData={timelineData} />
      

    </section>
  );
}
