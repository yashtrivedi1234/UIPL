
import { FeatureCarousel, type Feature } from "./feature-carousel";
import {
  TreePine,
  Shield,
  Waves,
  Dumbbell,
  Globe,
  Award,
  Building2,
  Users,
  Droplets,
  Sun,
  Zap,
  Wind,
} from "lucide-react";
import greenBuildingImg from "../../assets/green-initiatives/ChatGPT Image Apr 13, 2026, 11_33_44 AM.png";
import waterConservationImg from "../../assets/green-initiatives/ChatGPT Image Apr 13, 2026, 11_35_05 AM.png";
import renewableEnergyImg from "../../assets/green-initiatives/Gemini_Generated_Image_d5e2cpd5e2cpd5e2.png";
import energyEfficiencyImg from "../../assets/green-initiatives/Gemini_Generated_Image_hh90cdhh90cdhh90.png";
import urbanForestryImg from "../../assets/green-initiatives/Gemini_Generated_Image_o58c26o58c26o58c.png";
import airQualityImg from "../../assets/green-initiatives/Gemini_Generated_Image_w619mw619mw619mw.png";

// UIPL-themed features showcase
const uiplFeatures: Feature[] = [
  {
    id: "green-building",
    label: "Green Building",
    icon: Building2,
    image: greenBuildingImg,
    description:
      "LEED-certified construction with sustainable materials, energy-efficient systems, and eco-friendly practices.",
  },
  {
    id: "water-conservation",
    label: "Water Conservation",
    icon: Droplets,
    image: waterConservationImg,
    description:
      "Advanced rainwater harvesting, wastewater recycling, and smart irrigation systems to reduce water consumption by 40%.",
  },
  {
    id: "renewable-energy",
    label: "Renewable Energy",
    icon: Sun,
    image: renewableEnergyImg,
    description:
      "Solar panel installations, solar water heaters, and renewable energy integration across all projects.",
  },
  {
    id: "energy-efficiency",
    label: "Energy Efficiency",
    icon: Zap,
    image: energyEfficiencyImg,
    description:
      "LED lighting, smart building automation, and efficient HVAC systems reducing energy consumption significantly.",
  },
  {
    id: "urban-forestry",
    label: "Urban Forestry",
    icon: TreePine,
    image: urbanForestryImg,
    description:
      "50,000+ trees planted across UIPL communities creating green spaces and improving air quality.",
  },
  {
    id: "air-quality",
    label: "Air Quality",
    icon: Wind,
    image: airQualityImg,
    description:
      "Air purification systems, pollution monitoring, and green buffer zones for healthier living environments.",
  },
];

export default function FeatureCarouselDemo() {
  const handleFeatureChange = (featureId: string) => {
    console.log("Current feature:", featureId);
  };

  return (
    <div className="w-full min-h-screen bg-white py-8 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 px-4">
          <span
            className="text-xs uppercase text-[#8d4f00] tracking-widest block mb-3"
            style={{ fontFamily: "'Noto Sans', sans-serif", fontWeight: 900 }}
          >
            Interactive Showcase
          </span>
          <h1 className="text-4xl md:text-5xl text-[#00263f] font-bold mb-4">
            Explore UIPL's Ecosystem
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Experience the integrated ecosystem of sustainable living,
            healthcare, education, and premium real estate.
          </p>
        </div>

        {/* Feature Carousel - Website Theme */}
        <FeatureCarousel
          features={uiplFeatures}
          primaryColor="#00263f"
          autoPlayInterval={4000}
          statusText="Ecosystem Live"
          onFeatureChange={handleFeatureChange}
        />

        {/* Features Info Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <div className="p-6 rounded-2xl bg-[#eff4ff] border border-slate-100">
            <h3 className="text-[#00263f] font-bold mb-2">Interactive Design</h3>
            <p className="text-slate-500 text-sm">
              Click on any feature chip to explore. Hover to pause auto-rotation.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-[#eff4ff] border border-slate-100">
            <h3 className="text-[#00263f] font-bold mb-2">Customizable</h3>
            <p className="text-slate-500 text-sm">
              Easily adapt colors, timing, and data to match your brand.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-[#eff4ff] border border-slate-100">
            <h3 className="text-[#00263f] font-bold mb-2">Responsive</h3>
            <p className="text-slate-500 text-sm">
              Seamlessly adapts across mobile, tablet, and desktop devices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
