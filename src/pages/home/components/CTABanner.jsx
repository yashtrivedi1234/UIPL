// import { useNavigate } from 'react-router-dom'

// export default function CTABanner() {
//   const navigate = useNavigate()

//   return (
//     <section
//       className="py-12 sm:py-16 lg:py-20 relative overflow-hidden"
//       style={{ background: 'linear-gradient(135deg, #00263f 0%, #0b3c5d 100%)' }}
//     >
//       {/* Atmospheric layers */}
//       <div className="absolute -left-20 -bottom-20 w-72 h-72 sm:w-105 sm:h-105 border border-white/10 rounded-full" />
//       <div className="absolute right-8 top-8 w-28 h-28 sm:w-52 sm:h-52 bg-white/10 rounded-full blur-3xl" />
//       <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-130 h-130 bg-sky-300/10 rounded-full blur-3xl" />
//       <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-orange-300/15 rounded-full blur-3xl" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md p-6 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
//           <div className="grid lg:grid-cols-[1.3fr_0.9fr] gap-8 lg:gap-10 items-center">
//             <div className="text-center lg:text-left">
//               <span className="inline-block text-[10px] sm:text-xs font-black uppercase text-orange-300 tracking-widest mb-4 sm:mb-5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20">
//                 Your Future Starts Here
//               </span>

//               <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-5 sm:mb-6 leading-[1.08] tracking-tight">
//                 Build Your Next
//                 <span className="block text-orange-300">Landmark With UIPL</span>
//               </h2>

//               <p className="text-slate-200 text-sm sm:text-base lg:text-lg max-w-2xl mb-7 sm:mb-8 leading-relaxed mx-auto lg:mx-0">
//                 From future-ready homes to high-growth investments, UIPL helps you move forward
//                 with confidence, quality, and long-term value.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
//                 <button
//                   onClick={() => navigate('/contact')}
//                   className="bg-[#fe9824] text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-black text-sm sm:text-base hover:scale-105 transition-transform shadow-lg w-full sm:w-auto"
//                 >
//                   Inquire Now
//                 </button>
//                 <button
//                   onClick={() => navigate('/projects')}
//                   className="border-2 border-white/40 text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold hover:bg-white/10 transition-colors text-sm sm:text-base w-full sm:w-auto"
//                 >
//                   Explore Projects
//                 </button>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-3 sm:gap-4">
//               {[
//                 { value: '25+', label: 'Years Legacy' },
//                 { value: '50+', label: 'Projects Live' },
//                 { value: '10k+', label: 'Families Served' },
//                 { value: '100%', label: 'Trusted Process' },
//               ].map((item) => (
//                 <div
//                   key={item.label}
//                   className="rounded-2xl bg-white/10 border border-white/20 p-4 sm:p-5 text-center"
//                 >
//                   <div className="text-xl sm:text-2xl lg:text-3xl font-black text-orange-300 leading-none">
//                     {item.value}
//                   </div>
//                   <div className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-slate-200 mt-2">
//                     {item.label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

export default function CTABanner() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #00263f 0%, #0b3c5d 100%)' }}>
      {/* Decorative rings */}
      <div className="absolute -left-20 -bottom-20 w-80 h-80 border-4 border-white/5 rounded-full" />
      <div className="absolute right-10 top-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
      <div className="absolute right-40 bottom-0 w-60 h-60 bg-orange-400/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <span className="text-xs font-black uppercase text-orange-400 tracking-widest block mb-4">
          Your Future Starts Here
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-black text-white mb-7 leading-tight">
          Join the Future with UIPL
        </h2>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you are looking for a home, an investment, or a partnership in nation-building,
          UIPL is your trusted partner.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-[#fe9824] text-white px-10 py-5 rounded-xl font-black text-base hover:scale-105 transition-transform shadow-lg">
            Inquire Now
          </button>
          <button className="border-2 border-white/30 text-white px-10 py-5 rounded-xl font-bold hover:bg-white/10 transition-colors">
            Download App
          </button>
        </div>
      </div>
    </section>
  )
}