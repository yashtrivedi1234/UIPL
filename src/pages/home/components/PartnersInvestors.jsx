import { Button } from "@/components/ui/button";
import sbi from "@/assets/partners/sbi.png";
import unnamed1 from "@/assets/project/unnamed.png";
import unnamed2 from "@/assets/project/unnamed (1).png";
import unnamed3 from "@/assets/project/unnamed (2).png";
import unnamed4 from "@/assets/project/unnamed (3).png";
import unnamed5 from "@/assets/project/unnamed (4).png";
import unnamed6 from "@/assets/project/unnamed (5).png";
import unnamed7 from "@/assets/project/unnamed (6).png";
import ccLogo from "@/assets/logo/cc-logo.png";
import logoJpeg from "@/assets/logo/Logo.jpeg";
import hero from "@/assets/hero.webp";
import home from "@/assets/home.webp";
import hospital from "@/assets/hospital.webp";

const partners = [
  sbi,
  unnamed1,
  unnamed2,
  unnamed3,
  unnamed4,
  unnamed5,
  unnamed6,
  unnamed7,
  ccLogo,
  logoJpeg,
  hero,
  home,
  hospital,
  sbi,
  unnamed1,
  unnamed2,
  unnamed3,
  unnamed4,
];

export default function PartnersInvestors() {
  const handleImageError = (e) => {
    e.target.style.display = "none";
  };

  return (
    <section className="bg-white dark:bg-slate-900 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-6">
            <div>
              <p className="uppercase text-xs sm:text-sm font-bold text-orange-600 dark:text-orange-400 tracking-wider mb-3">
                Our Network
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Strategic Brand Collaborations
              </h2>
            </div>
            
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              We partner with leading brands and institutions to create world-class communities. Our collaborations ensure excellence in every aspect of development.
            </p>
            
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
              <a href="/contact">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-colors">
                  Get in Touch
                </Button>
              </a>
              <a href="/about">
                <Button variant="outline" className="border-2 border-orange-400 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-950 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-colors">
                  Learn More
                </Button>
              </a>
            </div>
          </div>

          {/* Right Side - Partners Grid */}
          <div className="w-full">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 sm:gap-4">
              {partners.map((partner, idx) => (
                <div
                  key={idx}
                  className="aspect-square bg-white dark:bg-slate-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 p-3 sm:p-4 flex items-center justify-center overflow-hidden hover:border-orange-400 dark:hover:border-orange-500 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <img
                    src={partner}
                    alt={`partner-${idx}`}
                    onError={handleImageError}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
