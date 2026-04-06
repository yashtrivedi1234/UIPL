import CorporateHero        from './components/CorporateHero'
import CorporateEcosystem   from './components/CorporateEcosystem'
import CorporateBento       from './components/CorporateBento'
import CorporateSectors     from './components/CorporateSectors'
import CorporateShowcase    from './components/CorporateShowcase'
import CorporateAmenities   from './components/CorporateAmenities'
import CorporateTestimonials from './components/CorporateTestimonials'
import CorporateLocation    from './components/CorporateLocation'
import CorporateCTA         from './components/CorporateCTA'

export default function CorporatePage() {
  return (
    <>
      <CorporateHero />
      <CorporateEcosystem />
      <CorporateBento />
      <CorporateSectors />
      <CorporateShowcase />
      <CorporateAmenities />
      <CorporateTestimonials />
      <CorporateLocation />
      <CorporateCTA />
    </>
  )
}