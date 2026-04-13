
import { FeatureCarousel } from "../../../components/ui/feature-carousel";
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
import greenBuildingImg from "../../../assets/green-initiatives/ChatGPT Image Apr 13, 2026, 11_33_44 AM.png";
import waterConservationImg from "../../../assets/green-initiatives/ChatGPT Image Apr 13, 2026, 11_35_05 AM.png";
import renewableEnergyImg from "../../../assets/green-initiatives/Gemini_Generated_Image_d5e2cpd5e2cpd5e2.png";
import energyEfficiencyImg from "../../../assets/green-initiatives/Gemini_Generated_Image_hh90cdhh90cdhh90.png";
import urbanForestryImg from "../../../assets/green-initiatives/Gemini_Generated_Image_o58c26o58c26o58c.png";
import airQualityImg from "../../../assets/green-initiatives/Gemini_Generated_Image_w619mw619mw619mw.png";

// UIPL-themed features showcase
const uiplFeatures = [
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

export default function SustainabilityGreen() {
  const handleFeatureChange = (featureId) => {
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
           Environmental Commitment
          </span>
          <h2 className="text-4xl md:text-5xl text-[#00263f] font-bold mb-4">
            Sustainability & Green Initiatives
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
           Building sustainable communities that thrive today and protect our planet for tomorrow.
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
      </div>
    </div>
  );
}
