import { FlaskConical, Trophy, HeartPulse } from "lucide-react";

export default function EducationFacilities() {
  return (
    <section className="py-8 bg-[#eff4ff]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-[#00263f]">World-Class Facilities</h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Providing the physical foundation for academic excellence and
            holistic personal development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
          {/* Large Feature — Knowledge Hub */}
          <div className="md:col-span-2 md:row-span-2 bg-white/70 backdrop-blur-xl border border-slate-100 rounded-2xl p-8 flex flex-col justify-end relative overflow-hidden group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZXzY-zCDCVuGYrFpauFf8ZqAe0JavkPF6-mn9y-qzoDK8uvYnWc4xX-Si94EVWHmZwMt55CX9mqXBi0ZxU0URZiDdYnSNJ8_r_dz-uL0m6qkeMNAOzDBr9AOC--EmnHhflO2wuYXbfCrLUXtA34JnV1Moo-h7E5pYXBjOf3O6rI4Tx-WKOAVzSbbggbDeYs-eSSbJSKvg6yC7kHwzmU_A4J7ZxnWcB6Sra5bmFa3kPCnFp9UhsNFjaF2zaRQ8aA71tjPkM51HIAc"
              alt="Futuristic library"
              className="absolute inset-0 w-full h-full object-cover duration-700 group-hover:scale-110 opacity-20"
            />
            <div className="relative z-10">
              <h3 className="text-[#00263f] mb-4">The Knowledge Hub</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Digital and physical archives spanning millions of volumes,
                equipped with high-speed research terminals.
              </p>
            </div>
          </div>

          {/* Advanced Labs */}
          <div className="md:col-span-2 bg-white/70 backdrop-blur-xl border border-slate-100 rounded-2xl p-8 flex items-center gap-6 group">
            <div className="p-4 rounded-xl bg-[#0b3c5d]/10 group-hover:bg-[#0b3c5d] duration-300 flex-shrink-0">
              <FlaskConical
                size={28}
                className="text-[#0b3c5d] group-hover:text-white duration-300"
              />
            </div>
            <div>
              <h3 className="text-[#00263f] mb-1">Advanced Labs</h3>
              <p className="text-sm text-slate-500">
                Specialized research centers for STEM and creative arts.
              </p>
            </div>
          </div>

          {/* Sports Arena */}
          <div className="md:col-span-1 bg-white/70 backdrop-blur-xl border border-slate-100 rounded-2xl p-8 flex flex-col justify-between group">
            <Trophy size={36} className="text-[#8d4f00]" />
            <h3 className="text-[#00263f]">Sports Arena</h3>
          </div>

          {/* Wellness Center */}
          <div className="md:col-span-1 bg-white/70 backdrop-blur-xl border border-slate-100 rounded-2xl p-8 flex flex-col justify-between group">
            <HeartPulse size={36} className="text-[#002a05]" />
            <h3 className="text-[#00263f]">Wellness Center</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
