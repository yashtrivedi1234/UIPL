import { MapPin } from 'lucide-react'

export default function ContactMap() {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-28">
      <div className="rounded-2xl overflow-hidden h-[500px] relative border border-slate-200/40 shadow-[0_20px_40px_rgba(0,28,55,0.06)]">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ4_l4QPwHdDfNdQkYCYHe3fYLy69HqoK7jHa4cFDtiY-JPwUnRF5Hwwa848JfWTEv7UgOo1RlI-lsB9GTkI74V83nVVARZsoHr7-WBh66_VHuqSpbusKms1OOlkpO8qBrWDy53XbfBFX7JSO8xik10pzMGaxlg_k1lHFZYoBjFe_Np9Ixs5e9AM-Bfn6yN1tsGnjisRkrPFnSLaPO84cKxs6UEX5DuGPXNH3B2E28qEHE-TfH8I17DDIzvX0of9yuqoOPxWAw_cs"
          alt="Satellite map of Lucknow"
          className="w-full h-full object-cover"
        />

        {/* Pin overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur-md px-8 py-6 rounded-2xl shadow-2xl border border-[#8d4f00]/20 flex flex-col items-center">
            <div className="w-12 h-12 bg-[#8d4f00] rounded-full flex items-center justify-center text-white mb-3">
              <MapPin size={22} className="fill-white text-white" />
            </div>
            <span className="font-black text-[#00263f]">UIPL Corporate Headquarters</span>
            <span className="text-slate-500 text-sm mt-1">Lucknow, Uttar Pradesh</span>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-[#8d4f00] font-black text-sm hover:underline"
            >
              Get Directions →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}