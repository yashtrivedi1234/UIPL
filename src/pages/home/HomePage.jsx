import { lazy, Suspense } from 'react'
import HeroSection from './components/HeroSection'
import WhyChooseUs from './components/WhyChooseUs'
import SectorHighlights from './components/SectorHighlights'
import EcosystemFlow from './components/EcosystemFlow'
import ProjectShowcase from './components/ProjectShowcase'
import AmenitiesSection from './components/AmenitiesSection'
import InvestmentOpportunities from './components/InvestmentOpportunities'
import SustainabilityGreen from './components/SustainabilityGreen'
import AwardsRecognition from './components/AwardsRecognition'
import TeamShowcaseSection from './components/TeamShowcaseSection'
import Testimonials from './components/Testimonials'
import PartnersInvestors from './components/PartnersInvestors'
import LatestNews from './components/LatestNews'
import LocationSection from './components/LocationSection'
import FAQSection from './components/FAQSection'
import CTABanner from './components/CTABanner'

const ExecutiveImpactCarouselDemo = lazy(() => import('@/components/ui/executive-impact-carousel-demo'))
const BookSliderDemo = lazy(() => import('@/components/ui/book-slider-demo'))

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <SectorHighlights />
      <EcosystemFlow />
      <ProjectShowcase />
      <Suspense fallback={<div className="min-h-64" />}>
        <ExecutiveImpactCarouselDemo />
      </Suspense>
     
      <AmenitiesSection />
      <AwardsRecognition />
      <SustainabilityGreen />
      <InvestmentOpportunities />
      <TeamShowcaseSection />
      <Suspense fallback={<div className="min-h-64" />}>
        <BookSliderDemo />
      </Suspense>
      {/* <Testimonials /> */}
      <PartnersInvestors />
      <LatestNews />
      {/* <LocationSection /> */}
      <FAQSection />
      <CTABanner />
    </>
  )
}