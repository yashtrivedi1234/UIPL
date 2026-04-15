import { useNavigate } from "react-router-dom";

export default function ProjectsCTA() {
  const navigate = useNavigate();

  return (
    <section className="py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-[#00263f] overflow-hidden rounded-[2.5rem]  md:p-24 text-center">
          {/* Background glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#8d4f00] opacity-10 blur-[100px] -mr-48 -mt-48 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#002a05] opacity-10 blur-[80px] -ml-32 -mb-32 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-white mb-6">
              Join Our Journey
            </h2>
            <p className="text-[#a3cbf2] text-lg mb-10 leading-relaxed">
              Ready to invest in Lucknow's growth? Partner with UIPL and be part
              of the architectural revolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/contact")}
                className="bg-[#fe9824] text-[#00263f] px-8 py-4 rounded-xl font-black text-base hover:scale-105 duration-300 shadow-lg"
              >
                Contact Us Today
              </button>
              <button
                onClick={() => navigate("/projects")}
                className="bg-white/10 backdrop-blur text-white border border-white/20 px-8 py-4 rounded-xl font-black text-base hover:bg-white hover:text-[#00263f] duration-300"
              >
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
