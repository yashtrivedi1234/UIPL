import { useNavigate } from 'react-router-dom'

export default function HealthcareHero() {
  const navigate = useNavigate()

  return (
    <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSU5mpG6ELTgNFTaXkx_OvJPBuuxNr0binITaxkYm6dy4yLubW5n2eGEoGSsqYblwWMgxlCtWVn-OlWegjMQVvXOl4h9Vz8u7KkDn7qt1WZo_Q6Z3fFawdjIMKRVcLWyXoN5NbSEgLXEI2vvblJlGcuCpBbjm702hkWHf6ce6Z3dvCau7Ldvlq3Y6HVELKvhiPCR4THuTTIPjd5HNWcLDkTNFVqIIBg16qOn-AzOH7M7ekjHbp_FFBe9w5L8qgXTOVA8VjlTgd9bA"
          alt="Advanced healthcare campus"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#00263f]/70" />
      </div>

      <div className="absolute -top-20 -right-20 w-100 h-100 bg-cyan-300 rounded-full opacity-10 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 -left-20 w-96 h-96 bg-green-300 rounded-full opacity-10 blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 w-full flex flex-col items-center text-center gap-6">
        <span className="inline-block px-4 py-1.5 bg-cyan-500/20 text-cyan-200 border border-cyan-300/30 rounded-full text-xs font-black tracking-widest uppercase">
          Precision Care Infrastructure
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight">
          Building The Future Of{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(120deg, #9ad9ff 0%, #86efac 45%, #fcd34d 100%)' }}
          >
            Human Care.
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl font-light">
          UIPL Healthcare develops healing ecosystems where patient comfort, clinical safety,
          and technology-led operations come together to deliver world-class outcomes.
        </p>
        <div className="flex flex-row gap-3 sm:gap-4 justify-center">
          <button
            onClick={() => navigate('/projects')}
            className="bg-white text-[#00263f] px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-black text-sm sm:text-base hover:scale-105 transition-all shadow-lg"
          >
            View Healthcare Projects
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="bg-white/10 backdrop-blur text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-black text-sm sm:text-base border border-white/30 hover:bg-white/20 transition-colors"
          >
            Book Consultation
          </button>
        </div>
      </div>
    </header>
  )
}
