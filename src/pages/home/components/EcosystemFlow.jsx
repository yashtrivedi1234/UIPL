// import { Building2, GraduationCap, HeartPulse } from 'lucide-react'

// const nodes = [
//   {
//     icon: Building2,
//     title: 'Real Estate',
//     desc: 'Premium residential and commercial hubs designed for modern life.',
//     color: 'bg-[#0b3c5d]',
//     textColor: 'text-[#0b3c5d]',
//     badge: 'Urban Infrastructure',
//   },
//   {
//     icon: GraduationCap,
//     title: 'Education',
//     desc: 'World-class institutions fostering the leaders of tomorrow.',
//     color: 'bg-[#8d4f00]',
//     textColor: 'text-[#8d4f00]',
//     badge: 'Future Talent',
//   },
//   {
//     icon: HeartPulse,
//     title: 'Healthcare',
//     desc: 'Integrated medical facilities prioritizing wellness and access.',
//     color: 'bg-[#002a05]',
//     textColor: 'text-[#002a05]',
//     badge: 'Wellness Access',
//   },
// ]

// export default function EcosystemFlow() {
//   return (
//     <section id="sectors" className=" pb-12 sm:pt-10 sm:pb-16 lg:pb-20 bg-[#f4f8ff] overflow-hidden relative">
//       <style>{`
//         @keyframes pulse-glow {
//           0%, 100% { opacity: 0.25; transform: scale(1); }
//           50% { opacity: 0.45; transform: scale(1.06); }
//         }
//         @keyframes fade-up {
//           from {
//             opacity: 0;
//             transform: translateY(18px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .hub-pulse {
//           animation: pulse-glow 3.2s ease-in-out infinite;
//         }
//         .node-card {
//           opacity: 0;
//           animation: fade-up 0.7s ease-out forwards;
//         }
//       `}</style>

//       <div className="absolute -top-20 -right-20 w-72 h-72 bg-orange-200/40 rounded-full blur-3xl" />
//       <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-sky-200/40 rounded-full blur-3xl" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="text-center mb-8 sm:mb-10 lg:mb-12">
//           <span className="inline-block px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[10px] sm:text-xs uppercase tracking-widest font-black text-[#0b3c5d] mb-4">
//             Integrated Ecosystem Blueprint
//           </span>
//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#00263f] mb-4 tracking-tight">
//             Three Pillars. One Unified Outcome.
//           </h2>
//           <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base lg:text-lg">
//             UIPL connects real estate, education, and healthcare into one synchronized model
//             that improves quality of life and long-term value.
//           </p>
//         </div>

//         {/* MOBILE: stacked cards with outcome card */}
//         <div className="lg:hidden space-y-4 mb-8">
//           {nodes.map(({ icon, title, desc, color, textColor, badge }, index) => {
//             const NodeIcon = icon

//             return (
//               <article
//                 key={title}
//                 className="node-card bg-white rounded-2xl border border-slate-200 shadow-md p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
//                 style={{ animationDelay: `${index * 0.12}s` }}
//               >
//                 <div className="flex items-start gap-4">
//                   <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center shrink-0`}>
//                     <NodeIcon size={22} className="text-white" />
//                   </div>
//                   <div>
//                     <div className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1">
//                       {badge}
//                     </div>
//                     <h3 className={`font-black text-lg ${textColor} mb-1`}>{title}</h3>
//                     <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
//                   </div>
//                 </div>
//               </article>
//             )
//           })}

//           <div className="rounded-2xl bg-[#00263f] text-white p-6 text-center shadow-lg">
//             <div className="text-xs uppercase tracking-[0.18em] text-orange-300 font-bold mb-2">Outcome</div>
//             <div className="text-2xl font-black">UIPL Synthesis</div>
//             <p className="text-slate-200 text-sm mt-2">A balanced ecosystem for living, learning, and healing.</p>
//           </div>
//         </div>

//         {/* DESKTOP: convergence board */}
//         <div className="hidden lg:block">
//           <div className="relative rounded-[28px] border border-slate-200 bg-white/90 backdrop-blur p-8 xl:p-10 shadow-[0_20px_60px_rgba(2,29,60,0.08)]">
//             <div className="absolute inset-0 pointer-events-none">
//               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-sky-100/60 hub-pulse" />
//               <div className="absolute left-[22%] top-[26%] w-[28%] h-px bg-linear-to-r from-slate-200 to-slate-300 rotate-16" />
//               <div className="absolute left-[22%] bottom-[26%] w-[28%] h-px bg-linear-to-r from-slate-200 to-slate-300 -rotate-16" />
//               <div className="absolute right-[22%] top-1/2 w-[22%] h-px bg-linear-to-l from-slate-200 to-slate-300" />
//             </div>

//             <div className="grid grid-cols-12 gap-6 items-center min-h-105">
//               <div className="col-span-4 space-y-6">
//                 {[nodes[0], nodes[1]].map(({ icon, title, desc, color, textColor, badge }, index) => {
//                   const NodeIcon = icon

//                   return (
//                     <article
//                       key={title}
//                       className="node-card rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
//                       style={{ animationDelay: `${index * 0.14}s` }}
//                     >
//                       <div className="flex items-start gap-4">
//                         <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center shrink-0`}>
//                           <NodeIcon size={22} className="text-white" />
//                         </div>
//                         <div>
//                           <div className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1">
//                             {badge}
//                           </div>
//                           <h3 className={`text-lg font-black ${textColor} mb-1`}>{title}</h3>
//                           <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
//                         </div>
//                       </div>
//                     </article>
//                   )
//                 })}
//               </div>

//               <div className="col-span-4 flex justify-center">
//                 <div className="node-card w-56 h-56 rounded-full bg-[#00263f] border-10 border-white shadow-2xl flex flex-col items-center justify-center text-center"
//                   style={{ animationDelay: '0.22s' }}
//                 >
//                   <span className="text-[11px] uppercase tracking-[0.2em] text-orange-300 font-bold">Core</span>
//                   <span className="text-4xl font-black text-white mt-1">UIPL</span>
//                   <span className="text-xs text-slate-200 mt-2 px-8 leading-relaxed">One ecosystem, multiple life outcomes</span>
//                 </div>
//               </div>

//               <div className="col-span-4">
//                 <article className="node-card rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
//                   style={{ animationDelay: '0.28s' }}
//                 >
//                   <div className="flex items-start gap-4">
//                     <div className={`w-12 h-12 ${nodes[2].color} rounded-xl flex items-center justify-center shrink-0`}>
//                       <HeartPulse size={22} className="text-white" />
//                     </div>
//                     <div>
//                       <div className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1">
//                         {nodes[2].badge}
//                       </div>
//                       <h3 className={`text-lg font-black ${nodes[2].textColor} mb-1`}>{nodes[2].title}</h3>
//                       <p className="text-sm text-slate-600 leading-relaxed">{nodes[2].desc}</p>
//                     </div>
//                   </div>
//                 </article>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

import { Building2, GraduationCap, HeartPulse } from 'lucide-react'

export default function EcosystemFlow() {
  return (
    <section id="sectors" className="py-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-0">
        <h2 className="text-4xl font-black text-[#00263f] mb-4">The UIPL Synthesis</h2>
        <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Our holistic approach ensures every project contributes to a balanced, sustainable,
          and high-quality lifestyle for residents and partners.
        </p>
      </div>

      <div className="relative flex justify-center items-center -mt-30" style={{ height: '560px' }}>

        {/* Static orbit ring */}
        <div
          className="absolute rounded-full border-2 border-dashed border-slate-200"
          style={{
            width: '260px',
            height: '260px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Revolving dot */}
        <div
          className="absolute"
          style={{
            width: '260px',
            height: '260px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            animation: 'orbitSpin 6s linear infinite',
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: '12px',
              height: '12px',
              background: '#0b3c5d',
              borderRadius: '50%',
              top: '-6px',
              left: '50%',
              marginLeft: '-6px',
              boxShadow: '0 0 6px 2px rgba(11,60,93,0.3)',
            }}
          />
        </div>

        {/* Center Core */}
        <div
          className="absolute z-10 bg-white rounded-full flex items-center justify-center border-[6px] border-[#e8eef8]"
          style={{
            width: '110px',
            height: '110px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <span className="text-xl font-black text-[#00263f]">UIPL</span>
        </div>

        {/* Real Estate — top left */}
        <div
          className="absolute bg-white border border-slate-100 rounded-2xl p-5 text-center w-44 hover:scale-105 transition-transform duration-300 z-10"
          style={{ left: 'calc(50% - 280px)', top: 'calc(50% - 110px)' }}
        >
          <div className="w-11 h-11 bg-[#0b3c5d] rounded-full flex items-center justify-center mx-auto mb-3">
            <Building2 size={20} className="text-white" />
          </div>
          <h3 className="font-black text-sm text-[#0b3c5d] mb-1">Real Estate</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Premium residential &amp; commercial hubs designed for modern life.
          </p>
        </div>

        {/* Healthcare — top right */}
        <div
          className="absolute bg-white border border-slate-100 rounded-2xl p-5 text-center w-44 hover:scale-105 transition-transform duration-300 z-10"
          style={{ left: 'calc(50% + 106px)', top: 'calc(50% - 110px)' }}
        >
          <div className="w-11 h-11 bg-[#002a05] rounded-full flex items-center justify-center mx-auto mb-3">
            <HeartPulse size={20} className="text-white" />
          </div>
          <h3 className="font-black text-sm text-[#002a05] mb-1">Healthcare</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Integrated medical facilities prioritizing wellness and access.
          </p>
        </div>

        {/* Education — bottom center */}
        <div
          className="absolute bg-white border border-slate-100 rounded-2xl p-5 text-center w-44 hover:scale-105 transition-transform duration-300 z-10"
          style={{ left: 'calc(50% - 86px)', top: 'calc(50% + 110px)' }}
        >
          <div className="w-11 h-11 bg-[#8d4f00] rounded-full flex items-center justify-center mx-auto mb-3">
            <GraduationCap size={20} className="text-white" />
          </div>
          <h3 className="font-black text-sm text-[#8d4f00] mb-1">Education</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            World-class institutions fostering the leaders of tomorrow.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes orbitSpin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </section>
  )
}