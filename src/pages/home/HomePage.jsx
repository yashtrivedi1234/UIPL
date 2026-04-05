import HeroSection from './components/HeroSection'
import EcosystemFlow from './components/EcosystemFlow'
import WhyChooseUs from './components/WhyChooseUs'
import SectorHighlights from './components/SectorHighlights'
import ProjectShowcase from './components/ProjectShowcase'
import AmenitiesSection from './components/AmenitiesSection'
import Testimonials from './components/Testimonials'
import LocationSection from './components/LocationSection'
import CTABanner from './components/CTABanner'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EcosystemFlow />
      <WhyChooseUs />
      <SectorHighlights />
      <ProjectShowcase />
      <AmenitiesSection />
      <Testimonials />
      <LocationSection />
      <CTABanner />
    </>
  )
}