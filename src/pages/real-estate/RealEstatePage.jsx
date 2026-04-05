import RealEstateHero    from './components/RealEstateHero'
import RealEstateOverview from './components/RealEstateOverview'
import IconicLandmarks   from './components/IconicLandmarks'
import LifestyleAmenities from './components/LifestyleAmenities'
import InvestmentFrontier from './components/InvestmentFrontier'
import RealEstateCTA      from './components/RealEstateCTA'

export default function RealEstatePage() {
  return (
    <>
      <RealEstateHero />
      <RealEstateOverview />
      <IconicLandmarks />
      <LifestyleAmenities />
      <InvestmentFrontier />
      <RealEstateCTA />
    </>
  )
}