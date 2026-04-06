export default function ContactHero() {
  return (
    <section className="relative h-[614px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy2FsxEYfO5ZwUOPX2mm8ITfvl9FROMviZR3av35QYpNCHmukKc10zfDL15XeeoK-R0IoxoUvOtMPEUHWMxBqUTHkKt3yBPAt9w-SdPBgsHRWkaTGCX6tKQj0OE0UE-KpAt9D3Kg4QDTRMH8zgM9hZW8wLFxGr6xqJM21MzQOaG0ip8iSGXoWnpJhGxh252Kx7RtBncGpu2NZKE9uDuI-dSCgdXZbf9e5QEKvrf3mfRUUO2AsPx2pQVqoOOlp0lddBmkqV0yredfs"
          alt="Modern glass skyscraper at dusk"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#00263f]/60 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <h1 className="text-white font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-4xl tracking-tight leading-[1.1]">
          Contact Us:{' '}
          <span className="text-[#fe9824]">Shaping the Future Together</span>
        </h1>
        <p className="text-slate-200 mt-6 text-xl max-w-2xl leading-relaxed">
          UIPL leads global infrastructure development through visionary architecture and
          sustainable engineering. Connect with our experts.
        </p>
      </div>
    </section>
  )
}