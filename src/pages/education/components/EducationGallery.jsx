const galleryImages = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDCLyGeLyAu1nj2LXz6e0ulyre7mmqBH8Y3xJJkcZYLsqK08I-OOUR761MG3_1ovUo-u1re89ycQBe7AP16Hc1Eu7d2zhaGgw-g3JLSQLu9YubD4ncEyavW5NHWTyzQCL4Clvbni6IeLLDanrf-g7TQUWlSQIXVDy7x1yOMgYRQtrzW_lj1Ri6nIwZOKve33XXMBd-pphuvzdd2iOcLrgLtqCUIogPYm_9GSQm4dLdE9_BzVaGJo_Y_naNMCbyLijizKG80Cjxvyg',
    alt: 'Professor teaching in modern classroom',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_ZYujuOHzFkb2r_CeZw-CXZxjlpmmU_isuNSHm7OLDZWP9rRNal-mM_apIPPUGAGVGbf8EGLQGHiiqz56HGHgm3MYpKaTwErpYMTM1K3GlBn-2PqtNBpfLJJPGAHdKkJPN8kbYlgDwBMphwnF3azpxujnYoymP6ByWucoI_lgazH7BGw3HnyTEWY50iHOlDP-RNX7uDaoS74NhksqbfQmryf8l4yh1wf9gGxUZn--MGuB0oeUoW8pJ4QBfLIveHrd9M4ZGKJrB5k',
    alt: 'Students celebrating in chemistry lab',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjn54klHG_sy3XGQKNN024C7ShJnUJaFBF-K4qsiA-zCk19MO2q6PD0SUwmXghf90AKSeN1AB2CzQ-b6OMtXV3j861IGuaEh9ol0ei3V9dbSRPdofhXAumcDJ6NISNdVB-JOlnttucvOIg-BxXfO32V-zskcTGPfd8u-atdn1EV64KzEAE-0KPaf9ic_4UdhTMODxGLaqDNuvg4ZiBzHVuaosPQGlyJE1uoEPGpSzX2b3h1nW02PQ4OEegmIzFUHFog560zZUHp-A',
    alt: 'Hands working on architectural model',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUrZqtMB1OktzMDqEmROlbFs_meQTYctY4jpvGCzWrfkESGcfbzQ6bFlkIq2ImzJrU15lX-BHMx-SE0qJQulEf7f4oann937VRjMtDnyjnlhxETgeWlweTJk5zkV3ndcpKnXknIXjq01qgFOq1KWZBnJbpE0dhoO6Pu7CT40XGZF1NoW9RyLLHwfBYfUFstEpjdNniEqrhHrKLyKfHFfML92TJ_QYs03B1myUP595efEmxdt7YmYh2AQfpjmwyo20Y83SZ8zNVoNs',
    alt: 'Graduation ceremony aerial view',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD48nPH37PjL1mkaoH5r7r3Rdo7U2ScK_2dqWw4TPXr0P46GQpjMl5MH21PPcPVMEUaQhEz2GBoF6hRoNGP-tTY_GuMLjWFvcJLYczA_ia0fyS-XUDVVkJp7N0EDmIoDGRbJi3lNr_FArn-E8kCMMCiZj_eyoe_hjIe_IOKMELzlj8KDEsud_g9V--vIYgevbkFVopYKZvRnaERBpniYo-HQzRDUrELXM0gUMjqlEaoUrumkRQO78FABlgvQ2C_93Xe3519Oa-mGQM',
    alt: 'Students relaxing on campus lawn',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8STRwcHMwqHGVj9nvQFokukzbK_U3QaUapui4Fu0s3dUp63W8c6CP6wsN0CNLxSnztB4ouPcJxKsguETJ66UZTiDkpR8umq11D4KETPnyLVCPV7tTXsKUL3gwlUae8FTg0xYAuQ1HCHcrt51-zrE6Ha9p8lMI_6MtsKx-HlrUuFIbdyKCs-0crF32Dem318QuC-DIbpgOAVHjyej6GD9WL2u2ziOuoQZ-WolEKnre8mVqI1W3GCILR2Zs_DRFA4JCBxX0Ff-LQFE',
    alt: 'Students performing in auditorium',
  },
]

export default function EducationGallery() {
  return (
    <section className="py-8 bg-[#eff4ff]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">
          <h2 className="text-[#00263f] ">Campus Life</h2>
          <p className="text-slate-500">Moments of discovery, friendship, and achievement within our walls.</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map(({ src, alt }) => (
            <div key={alt} className="rounded-2xl overflow-hidden shadow-lg group break-inside-avoid">
              <img
                src={src}
                alt={alt}
                className="w-full hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}