import IntegrationsSection from "@/components/ui/integrations-section";

export default function IntegrationsDemoPage() {
  return (
    <div className="w-full bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-4">Integrations Demo</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Showcase of available integrations and partners
          </p>
        </div>
        <IntegrationsSection />
      </div>
    </div>
  );
}
