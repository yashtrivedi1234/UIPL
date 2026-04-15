const facilityZones = [
  'Emergency & Trauma Bay',
  'Advanced Diagnostics Hub',
  'Modular Operation Theatres',
  'Critical Care & ICU Towers',
  'Mother & Child Wellness Center',
  'Rehabilitation and Recovery Suites',
]

export default function HealthcareFacilities() {
  return (
    <section className="py-8 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div className="group relative">
          <div className="absolute -inset-4 rounded-4xl bg-[#0b3c5d]/10 blur-2xl group-hover:bg-[#0b3c5d]/20 duration-500" />
          <div className="relative overflow-hidden rounded-3xl shadow-2xl h-120">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSU5mpG6ELTgNFTaXkx_OvJPBuuxNr0binITaxkYm6dy4yLubW5n2eGEoGSsqYblwWMgxlCtWVn-OlWegjMQVvXOl4h9Vz8u7KkDn7qt1WZo_Q6Z3fFawdjIMKRVcLWyXoN5NbSEgLXEI2vvblJlGcuCpBbjm702hkWHf6ce6Z3dvCau7Ldvlq3Y6HVELKvhiPCR4THuTTIPjd5HNWcLDkTNFVqIIBg16qOn-AzOH7M7ekjHbp_FFBe9w5L8qgXTOVA8VjlTgd9bA"
              alt="State-of-the-art hospital corridor"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#00263f]/70 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-white text-xl">Integrated Care Campus</p>
              <p className="text-sm opacity-80">Operationally Optimized Infrastructure</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-[#00263f] leading-tight mb-5">
            Complete Healthcare Programming Under One Roof
          </h3>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            UIPL plans each block to support doctors, caregivers, and patients with seamless transitions,
            high reliability utilities, and infection-control ready spatial systems.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {facilityZones.map((zone) => (
              <div key={zone} className="bg-[#f2f8ff] border border-[#d7e8fb] rounded-xl px-4 py-3 text-[#00263f] font-semibold">
                {zone}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
