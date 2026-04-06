import HeroSection from './components/HeroSection'
import EcosystemFlow from './components/EcosystemFlow'
import WhyChooseUs from './components/WhyChooseUs'
import SectorHighlights from './components/SectorHighlights'
import ProjectShowcase from './components/ProjectShowcase'
import InvestmentOpportunities from './components/InvestmentOpportunities'
import LatestNews from './components/LatestNews'
import PartnersInvestors from './components/PartnersInvestors'
import AmenitiesSection from './components/AmenitiesSection'
import Testimonials from './components/Testimonials'
import SustainabilityGreen from './components/SustainabilityGreen'
import AwardsRecognition from './components/AwardsRecognition'
import FAQSection from './components/FAQSection'
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
      <InvestmentOpportunities />
      <LatestNews />
      <PartnersInvestors />
      <AmenitiesSection />
      <Testimonials />
      <SustainabilityGreen />
      <AwardsRecognition />
      <FAQSection />
      <LocationSection />
      <CTABanner />
    </>
  )
}