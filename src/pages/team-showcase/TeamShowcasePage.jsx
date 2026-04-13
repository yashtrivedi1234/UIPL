import TeamShowcaseDemo from "@/components/ui/team-showcase-demo";

export default function TeamShowcasePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-20">
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">
              Team Showcase Component
            </h1>
            <p className="text-muted-foreground text-lg">
              Interactive team member display with hover effects and social
              links
            </p>
          </div>

          <div className="flex justify-center">
            <TeamShowcaseDemo />
          </div>
        </div>
      </div>
    </div>
  );
}
