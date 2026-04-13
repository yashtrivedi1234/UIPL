import TeamShowcase from "@/components/ui/team-showcase";

// UIPL Leadership & Team Data
const uiplTeamData = [
  {
    id: "1",
    name: "Rajesh Verma",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    social: {
      linkedin: "https://linkedin.com/in/rajeshverma",
      twitter: "https://twitter.com/rajeshverma",
    },
  },
  {
    id: "2",
    name: "Priya Sharma",
    role: "Chief Product Officer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    social: {
      linkedin: "https://linkedin.com/in/priyasharma",
    },
  },
  {
    id: "3",
    name: "Amit Patel",
    role: "VP Development",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    social: {
      linkedin: "https://linkedin.com/in/amitpatel",
    },
  },
  {
    id: "4",
    name: "Sarah Chen",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    social: {
      behance: "https://behance.net/sarahchen",
      linkedin: "https://linkedin.com/in/sarahchen",
      instagram: "https://instagram.com/sarahchen",
    },
  },
  {
    id: "5",
    name: "James Rivera",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    social: {
      linkedin: "https://linkedin.com/in/jamesrivera",
      twitter: "https://twitter.com/jamesrivera",
    },
  },
  {
    id: "6",
    name: "Lisa Anderson",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    social: {
      linkedin: "https://linkedin.com/in/lisaanderson",
    },
  },
];

export default function TeamShowcaseSection() {
  return (
    <section className="py-8 sm:py-20 lg:py-24 bg-slate-900 dark:bg-slate-950">
      <style>{`
        .team-showcase-section [class*="text-foreground"] {
          color: #ffffff !important;
        }
        .team-showcase-section [class*="text-muted-foreground"] {
          color: #cbd5e1 !important;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 team-showcase-section">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center ">
          <p className="uppercase text-xs sm:text-sm font-bold text-orange-500 dark:text-orange-400 tracking-wider">
            Meet Our Team
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Visionary Leaders & Experts
          </h2>
          <p className="text-lg sm:text-xl text-slate-300">
            Our experienced team is dedicated to delivering excellence and innovation across all sectors. With decades of combined expertise, we're committed to building exceptional communities.
          </p>
        </div>

        {/* Team Showcase Component */}
        <div className="flex justify-center">
          <TeamShowcase members={uiplTeamData} />
        </div>

       
      </div>
    </section>
  );
}
