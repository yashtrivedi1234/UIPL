import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const integrations = [
  "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=200&q=80", // Google
  "https://images.unsplash.com/photo-1565033521193-a5db86d33d15?w=200&q=80", // LinkedIn
  "https://images.unsplash.com/photo-1580522156550-146e88ab74f7?w=200&q=80", // Slack
  "https://images.unsplash.com/photo-1565033521193-a5db86d33d15?w=200&q=80", // Spotify
  "https://images.unsplash.com/photo-1516534775068-bb57314e0531?w=200&q=80", // Facebook
  "https://images.unsplash.com/photo-1580522156550-146e88ab74f7?w=200&q=80", // Stripe
  "https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=200&q=80", // Instagram
  "https://images.unsplash.com/photo-1555099962-4199f1a408d0?w=200&q=80", // Dropbox
  "https://images.unsplash.com/photo-1571358971343-b08b2c90a167?w=200&q=80", // Jira
  "https://images.unsplash.com/photo-1516534775068-bb57314e0531?w=200&q=80", // Tech
  "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=200&q=80", // Netflix
  "https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=200&q=80", // Square
  "https://images.unsplash.com/photo-1599023449644-cb7e5ca1e550?w=200&q=80", // Shopify
  "https://images.unsplash.com/photo-1502159881517-b62e130a1f2e?w=200&q=80", // Zapier
  "https://images.unsplash.com/photo-1516534775068-bb57314e0531?w=200&q=80", // Google Drive
  "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=200&q=80", // YouTube
  "https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=200&q=80", // Airtable
  "https://images.unsplash.com/photo-1565033521193-a5db86d33d15?w=200&q=80", // Discord
];

export default function IntegrationsSection() {
  return (
    <section className="max-w-7xl mx-auto my-20 px-6 grid md:grid-cols-2 gap-10 items-center border border-gray-200 dark:border-gray-700 p-6 rounded-3xl">
      {/* Left Side */}
      <div>
        <p className="uppercase text-sm font-semibold text-gray-500 dark:text-gray-400">
          Components
        </p>
        <h2 className="text-7xl font-bold mt-2 mb-4">
          Supercharge your workflow
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Build sleek, responsive interfaces in record time with our carefully crafted React and Tailwind CSS components.
        </p>
        <div className="flex gap-4">
          <a
            href="https://ruixen.com/components"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-black text-white px-5 py-2 rounded-lg font-medium hover:bg-gray-800">
              Browse Components
            </Button>
          </a>
          <a
            href="https://ruixen.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="border border-gray-300 dark:border-gray-600 px-5 py-2 rounded-lg font-medium">
              View Documentation →
            </Button>
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="grid grid-cols-6 gap-4">
        {integrations.map((url, idx) => (
          <div
            key={idx}
            className="relative w-16 h-16 p-2 bg-white dark:bg-gray-800 shadow-sm border-2 border-gray-200 dark:border-gray-700 overflow-hidden"
            style={{
              clipPath:
                "polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)",
            }}
          >
            <img
              src={url}
              alt={`integration-${idx}`}
              className="w-full h-full object-contain p-1.5"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
