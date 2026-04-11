export default function SectorsHero() {
  return (
    <header
      className="relative pt-36 pb-24 px-6 overflow-hidden min-h-screen flex items-center"
      style={{
        backgroundImage:
          'url(https://lh3.googleusercontent.com/aida-public/AB6AXuCps-69B2oCfRfGL1eJNN5zr3q5dgel8ZuF8h-uhnKDVEOajkTxLCaQwl-cpuvNTacmRI9q0SSeuDU6dRacbf8oaeVM5n2C61iZJRnzvOpL58Bq9g8VR-pe0WCKRXto4wwUKle_iZjegdNlkauqRQJoo1gP7VTiKcPozZCovG8R0ioIaB42E0ueoeSV-F6UUREUKQ8TNLg6kMt5nUTrm2RgCOloTDjy_hEmm5KUgd_AzQt4OAhwFsQOMU8GJpXxk7sqsciLK5dx8h8)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#00263f]/65 z-0" />

      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-orange-400 rounded-full opacity-10 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 -left-20 w-[350px] h-[350px] bg-sky-300 rounded-full opacity-10 blur-3xl pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center gap-6 w-full">
        <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-300 border border-orange-400/30 font-black text-xs uppercase tracking-widest">
          World Class Standards
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
          Our Sectors of{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(120deg, #90c8f8 0%, #67e8c0 50%, #F7931E 100%)' }}
          >
            Excellence
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
          UIPL stands at the intersection of vision and utility, shaping the fundamental
          pillars of society through precision engineering and sustainable development.
        </p>
      </div>
    </header>
  )
}