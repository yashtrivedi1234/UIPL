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
import ExecutiveImpactCarouselDemo from '@/components/ui/executive-impact-carousel-demo'
import BookSliderDemo from '@/components/ui/book-slider-demo'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <SectorHighlights />
      <EcosystemFlow />
      <ProjectShowcase />
      <ExecutiveImpactCarouselDemo />
     
      <AmenitiesSection />
      <AwardsRecognition />
      <SustainabilityGreen />
      <InvestmentOpportunities />
      <TeamShowcaseSection />
       <BookSliderDemo />
      {/* <Testimonials /> */}
      <PartnersInvestors />
      <LatestNews />
      {/* <LocationSection /> */}
      <FAQSection />
      <CTABanner />
    </>
  )
}